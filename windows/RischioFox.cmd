@echo off
setlocal
set "RF=%~f0"
more +8 "%~f0" > "%TEMP%\RischioFox.ps1"
powershell -NoProfile -ExecutionPolicy Bypass -File "%TEMP%\RischioFox.ps1" "%RF%" %*
endlocal
exit /b
REM --- CODICE POWERSHELL INCORPORATO ---
$ErrorActionPreference = 'Stop'

$Version = '1.1'
$Base = 'https://raw.githubusercontent.com/RischioCinico/rischio-fox/main'
$RemoteScript = 'windows/RischioFox.cmd'
$TaskName = 'RischioFox-Update'
$Tmp = Join-Path $env:TEMP 'RischioFox'

$ScriptPath = if ($args.Count -gt 0) { $args[0] } else { '' }
$Mode = if ($args.Count -gt 1) { [string]$args[1] } else { '' }
$Mode = $Mode.ToUpperInvariant()

function Write-RFLog {
    param([string]$Message)
    try {
        if (-not (Test-Path $Tmp)) { New-Item -ItemType Directory -Path $Tmp -Force | Out-Null }
        $line = (Get-Date).ToString('yyyy-MM-dd HH:mm:ss') + ' ' + $Message
        Add-Content -LiteralPath (Join-Path $Tmp 'update.log') -Value $line -Encoding UTF8
    } catch {}
}

function Test-Admin {
    $id = [Security.Principal.WindowsIdentity]::GetCurrent()
    $pr = New-Object Security.Principal.WindowsPrincipal($id)
    $pr.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

function Request-Admin {
    $ps = Join-Path $env:SystemRoot 'System32\WindowsPowerShell\v1.0\powershell.exe'
    $line = '-NoProfile -ExecutionPolicy Bypass -File "' + $PSCommandPath + '" "' + $ScriptPath + '" "' + $Mode + '"'
    Start-Process -FilePath $ps -ArgumentList $line -Verb RunAs | Out-Null
}

function Get-RFFile {
    param([string]$Name, [string]$Dest)
    $url = $Base + '/' + $Name
    $curl = Join-Path $env:SystemRoot 'System32\curl.exe'
    if (Test-Path $curl) {
        & $curl -fsSL -o $Dest $url
        if ($LASTEXITCODE -eq 0 -and (Test-Path $Dest)) { return }
    }
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $Dest
}

function Get-FileHashLite {
    param([string]$Path)
    (Get-FileHash -LiteralPath $Path -Algorithm SHA256).Hash
}

function Test-Same {
    param([string]$A, [string]$B)
    if (-not (Test-Path $B)) { return $false }
    (Get-FileHashLite $A) -eq (Get-FileHashLite $B)
}

function Get-FirefoxDir {
    $bases = @()
    $p1 = Join-Path $env:ProgramFiles 'Mozilla Firefox'
    if ($p1) { $bases += $p1 }
    if (${env:ProgramFiles(x86)}) { $bases += (Join-Path ${env:ProgramFiles(x86)} 'Mozilla Firefox') }

    foreach ($b in $bases) {
        if ($b -and (Test-Path (Join-Path $b 'firefox.exe'))) { return $b }
    }

    $keys = @(
        'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*',
        'HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*'
    )
    foreach ($key in $keys) {
        $items = Get-ItemProperty -Path $key -ErrorAction SilentlyContinue |
            Where-Object { $_.DisplayName -like 'Mozilla Firefox*' -and $_.InstallLocation }
        foreach ($item in $items) {
            if (Test-Path (Join-Path $item.InstallLocation 'firefox.exe')) { return $item.InstallLocation }
        }
    }
    return $null
}

function Remove-LinuxLines {
    param([string]$Src, [string]$Dest)
    $lines = [IO.File]::ReadAllLines($Src)
    $out = New-Object 'System.Collections.Generic.List[string]'
    foreach ($line in $lines) {
        if ($line -match '\[Linux\]|\[LINUX\]') { continue }
        $out.Add($line)
    }
    $enc = New-Object Text.UTF8Encoding($false)
    [IO.File]::WriteAllText($Dest, (($out -join "`n") + "`n"), $enc)
}

function Install-Config {
    $ff = Get-FirefoxDir
    if (-not $ff) {
        Write-Host 'Firefox non trovato. Installa Firefox desktop per tutti gli utenti e riprova.' -ForegroundColor Red
        Write-RFLog 'Firefox non trovato'
        return $false
    }

    $work = Join-Path $Tmp 'download'
    New-Item -ItemType Directory -Path $work -Force | Out-Null

    $files = @(
        @{ Remote = 'impostazioni.js'; Local = 'defaults\pref\impostazioni.js'; Filter = $true },
        @{ Remote = 'rischio-fox.js';  Local = 'rischio-fox.js';                Filter = $true },
        @{ Remote = 'policies.json';   Local = 'distribution\policies.json';    Filter = $false }
    )

    foreach ($f in $files) {
        $down = Join-Path $work $f.Remote
        Get-RFFile $f.Remote $down
        $prepared = $down
        if ($f.Filter) {
            $prepared = Join-Path $work ('filtered-' + $f.Remote)
            Remove-LinuxLines $down $prepared
        }
        $target = Join-Path $ff $f.Local
        $dir = Split-Path $target -Parent
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        if (-not (Test-Same $prepared $target)) {
            Copy-Item -LiteralPath $prepared -Destination $target -Force
            Write-RFLog ('Aggiornato ' + $f.Remote + ' -> ' + $target)
        }
        Write-Host ('  ' + $f.Remote + ': ok')
    }

    Write-Host ''
    Write-Host 'Configurazione aggiornata. Riavvia Firefox per applicarla.' -ForegroundColor Green
    return $true
}

function Remove-Config {
    $bases = @()
    $ff = Get-FirefoxDir
    if ($ff) { $bases += $ff }
    $p1 = Join-Path $env:ProgramFiles 'Mozilla Firefox'
    if ($p1) { $bases += $p1 }
    if (${env:ProgramFiles(x86)}) { $bases += (Join-Path ${env:ProgramFiles(x86)} 'Mozilla Firefox') }

    $targets = @()
    foreach ($b in ($bases | Select-Object -Unique)) {
        $targets += (Join-Path $b 'defaults\pref\impostazioni.js')
        $targets += (Join-Path $b 'rischio-fox.js')
        $targets += (Join-Path $b 'distribution\policies.json')
    }
    foreach ($t in ($targets | Select-Object -Unique)) {
        Remove-Item -LiteralPath $t -Force -ErrorAction SilentlyContinue
    }
    foreach ($b in ($bases | Select-Object -Unique)) {
        $d = Join-Path $b 'distribution'
        if ((Test-Path $d) -and -not (Get-ChildItem -LiteralPath $d -Force -ErrorAction SilentlyContinue)) {
            Remove-Item -LiteralPath $d -Force -ErrorAction SilentlyContinue
        }
    }
    Remove-Task | Out-Null
    Write-Host 'Configurazione rimossa.' -ForegroundColor Green
    Write-RFLog 'Configurazione rimossa'
}

function Install-Task {
    if (-not $ScriptPath) {
        Write-Host 'Percorso dello script non disponibile.' -ForegroundColor Red
        return
    }
    $tr = '"' + $ScriptPath + '" /AUTO'
    & schtasks.exe /Create /TN $TaskName /TR $tr /SC DAILY /ST 03:00 /RU SYSTEM /RL HIGHEST /F | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host 'Task giornaliero creato: RischioFox-Update (ogni giorno alle 03:00).' -ForegroundColor Green
        Write-RFLog 'Task creato'
    } else {
        Write-Host 'Errore durante la creazione del task.' -ForegroundColor Red
    }
}

function Remove-Task {
    & schtasks.exe /Delete /TN $TaskName /F 2>$null | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host 'Task rimosso.' -ForegroundColor Green
        Write-RFLog 'Task rimosso'
    } else {
        Write-Host 'Task non presente o impossibile da rimuovere.'
    }
}

function Get-VersionFromText {
    param([string]$Text)
    $m = [regex]::Match($Text, '(?m)^\s*\$Version\s*=\s*''([^'']+)''')
    if ($m.Success) { return $m.Groups[1].Value }
    return $null
}

function Download-Script {
    New-Item -ItemType Directory -Path $Tmp -Force | Out-Null
    $new = Join-Path $Tmp 'RischioFox.cmd.new'
    Get-RFFile $RemoteScript $new
    $raw = [IO.File]::ReadAllText($new)
    [IO.File]::WriteAllText($new, ($raw -replace "`r?`n", "`r`n"), (New-Object Text.ASCIIEncoding))
    return $new
}

function Apply-ScriptUpdate {
    param([string]$NewPath, [string]$RestartMode)
    if (-not $ScriptPath) {
        Write-Host 'Percorso dello script non disponibile.' -ForegroundColor Red
        return $false
    }

    $updater = Join-Path $Tmp 'updater.ps1'
    @'
param($Old, $New, $RestartMode)
Start-Sleep -Seconds 2
Copy-Item -LiteralPath $New -Destination $Old -Force -ErrorAction Stop
Remove-Item -LiteralPath $New -Force -ErrorAction SilentlyContinue
if ($RestartMode -and $RestartMode.Trim() -ne '') {
    Start-Process -FilePath $Old -ArgumentList $RestartMode
} else {
    Start-Process -FilePath $Old
}
'@ | Set-Content -LiteralPath $updater -Encoding ASCII

    $ps = Join-Path $env:SystemRoot 'System32\WindowsPowerShell\v1.0\powershell.exe'
    $line = '-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "' + $updater + '" "' + $ScriptPath + '" "' + $NewPath + '" "' + $RestartMode + '"'
    Start-Process -FilePath $ps -ArgumentList $line -WindowStyle Hidden | Out-Null
    Write-Host 'Aggiornamento avviato: lo script si riavra tra pochi secondi.' -ForegroundColor Green
    Write-RFLog ('Aggiornamento script avviato; riavvio con: ' + $RestartMode)
    return $true
}

function Update-Script {
    param([string]$RestartMode = '')
    $new = Download-Script
    $remote = Get-VersionFromText ([IO.File]::ReadAllText($new))
    if (-not $remote) {
        Write-Host 'Impossibile leggere la versione remota.' -ForegroundColor Red
        return $false
    }
    if ($remote -eq $Version) {
        Write-Host ('Script gia aggiornato (versione ' + $Version + ').')
        return $false
    }
    Write-Host ('Aggiornamento script: ' + $Version + ' -> ' + $remote)
    return Apply-ScriptUpdate $new $RestartMode
}

function Ensure-ScriptCurrent {
    $new = Download-Script
    $remote = Get-VersionFromText ([IO.File]::ReadAllText($new))
    if (-not $remote -or $remote -eq $Version) { return $false }
    Write-Host ('Script locale ' + $Version + ', remoto ' + $remote + '. Aggiornamento prima di continuare...')
    Write-RFLog ('Versione remota ' + $remote + ' diversa da ' + $Version)
    return Apply-ScriptUpdate $new $Mode
}

if (-not (Test-Admin)) {
    Request-Admin
    exit
}

New-Item -ItemType Directory -Path $Tmp -Force | Out-Null

try {
    if (Ensure-ScriptCurrent) { exit }
} catch {
    Write-RFLog ('Controllo versione non riuscito: ' + $_.Exception.Message)
}

if ($Mode -eq '/AUTO') {
    Install-Config | Out-Null
    exit
}
if ($Mode -eq '/UPDATE') {
    Install-Config
    exit
}

do {
    Write-Host ''
    Write-Host '=== Rischio Fox ===' -ForegroundColor Cyan
    Write-Host '1) Installa o aggiorna la configurazione'
    Write-Host '2) Rimuovi la configurazione'
    Write-Host '3) Crea il task di aggiornamento automatico'
    Write-Host '4) Rimuovi il task di aggiornamento automatico'
    Write-Host '5) Aggiorna lo script da GitHub'
    Write-Host '0) Esci'
    $choice = Read-Host 'Scelta'
    switch ($choice) {
        '1' { Install-Config }
        '2' { Remove-Config }
        '3' { Install-Task }
        '4' { Remove-Task }
        '5' { Update-Script }
        '0' { }
        default { Write-Host 'Scelta non valida.' -ForegroundColor Yellow }
    }
} while ($choice -ne '0')
