@echo off
setlocal

REM Configura le variabili
set "github_url=https://raw.githubusercontent.com/RischioCinico/rischio-fox/main"
set "impostazioni_file=impostazioni.js"
set "rischiofox_file=rischio-fox.js"
set "policiesjson_file=policies.json"
set "firefox_profile_dir=%APPDATA%\Mozilla\Firefox\Profiles"
set "firefox_install_dir=%ProgramFiles%\Mozilla Firefox"

REM Scarica i file da GitHub
echo Scaricamento di %impostazioni_file%...
curl -s -o "%TEMP%\%impostazioni_file%" "%github_url%/%impostazioni_file%"
if errorlevel 1 (
  echo Errore durante il download di %impostazioni_file%.
  pause
  exit /b 1
)
echo %impostazioni_file% scaricato con successo.

echo Scaricamento di %rischiofox_file%...
curl -s -o "%TEMP%\%rischiofox_file%" "%github_url%/%rischiofox_file%"
if errorlevel 1 (
  echo Errore durante il download di %rischiofox_file%.
  pause
  exit /b 1
)
echo %rischiofox_file% scaricato con successo.

echo Scaricamento di %policiesjson_file%...
curl -s -o "%TEMP%\%policiesjson_file%" "%github_url%/%policiesjson_file%"
if errorlevel 1 (
  echo Errore durante il download di %policiesjson_file%.
  pause
  exit /b 1
)
echo %policiesjson_file% scaricato con successo.

REM Rimuovi le righe con [LINUX] da rischio-fox.js
echo Rimozione righe con [LINUX] da %rischiofox_file%...
(
  for /f "tokens=*" %%a in ('findstr /v /c:"[LINUX]" "%TEMP%\%rischiofox_file%"') do (
    echo %%a
  )
) > "%TEMP%\%rischiofox_file%.new"
move /y "%TEMP%\%rischiofox_file%.new" "%TEMP%\%rischiofox_file%"
echo Righe con [LINUX] rimosse da %rischiofox_file%.

REM Trova la cartella del profilo Firefox
for /d %%i in ("%firefox_profile_dir%\*.default-release") do (
  set "profile_dir=%%i"
)

if not defined profile_dir (
  echo Cartella del profilo Firefox non trovata.
  pause
  exit /b 1
)

REM Verifica l'esistenza della cartella di installazione di Firefox
if not exist "%firefox_install_dir%" (
  echo Cartella di installazione di Firefox non trovata.
  pause
  exit /b 1
)

REM Copia i file nelle cartelle di Firefox
echo Copia di %impostazioni_file% in %firefox_install_dir%\...
copy /y "%TEMP%\%impostazioni_file%" "%firefox_install_dir%\defaults\pref\impostazioni.js"
echo %impostazioni_file% copiato.

echo Copia di %rischiofox_file% in %firefox_install_dir%\...
copy /y "%TEMP%\%rischiofox_file%" "%firefox_install_dir%\rischio-fox.js"
echo %rischiofox_file% copiato.

echo Copia di %policiesjson_file% in %firefox_install_dir%\distribution\...
if not exist "%firefox_install_dir%\distribution" mkdir "%firefox_install_dir%\distribution"
copy /y "%TEMP%\%policiesjson_file%" "%firefox_install_dir%\distribution\policies.json"
echo %policiesjson_file% copiato.

echo Operazione completata.
pause
exit /b 0
