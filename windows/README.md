# Rischio Fox per Windows

Un solo file: `RischioFox.cmd`.

## Come si usa

1. Scarica `RischioFox.cmd`.
2. Doppio clic.
3. Se richiesto, accetta il controllo account di Windows (UAC): lo script si avvia come amministratore.
4. Dal menu scegli:

```text
1) Installa o aggiorna la configurazione
2) Rimuovi la configurazione
3) Crea il task di aggiornamento automatico
4) Rimuovi il task di aggiornamento automatico
5) Aggiorna lo script da GitHub
0) Esci
```

Non serve compilare nulla e non serve installare Inno Setup o PowerShell a mano: Windows include già PowerShell.

## Cosa fa

- Scarica da GitHub `impostazioni.js`, `rischio-fox.js` e `policies.json`.
- Rimuove le righe con `// [Linux]` dai due file `.js` prima di installarli.
- Cerca Firefox nei percorsi standard e nei dati di disinstallazione di Firefox, poi scrive:
  - `C:\Program Files\Mozilla Firefox\defaults\pref\impostazioni.js`
  - `C:\Program Files\Mozilla Firefox\rischio-fox.js`
  - `C:\Program Files\Mozilla Firefox\distribution\policies.json`
- L’opzione 3 crea un task pianificato `RischioFox-Update`, ogni giorno alle 03:00, come `SYSTEM`. Il task richiama lo stesso file con `/AUTO`, quindi aggiorna i tre file in silenzio.
- L’opzione 2 rimuove i tre file e il task; l’opzione 4 rimuove solo il task.
- L’opzione 5 scarica `windows/RischioFox.cmd` dal branch `main`, lo confronta con quello in uso e, se è cambiato, lo sostituisce e riavvia il programma.

## Aggiornamento di se stesso

All’avvio lo script legge la propria versione (`$Version`, ora `1.1`) e scarica `windows/RischioFox.cmd` da GitHub per leggere la versione remota.

- Se le versioni coincidono, procede normalmente con l’azione richiesta.
- Se la versione remota è diversa, aggiorna prima se stesso, si riavvia con lo stesso parametro (`/AUTO`, `/UPDATE` o menu) e solo dopo esegue l’azione richiesta.
- Il controllo viene ignorato se GitHub non è raggiungibile: in quel caso lo script prosegue e scrive l’errore nel log.

Il file scaricato viene normalizzato con fine riga CRLF. Un piccolo processo separato sostituisce il `.cmd` originale dopo che lo script si è chiuso e lo rilancia. Questo serve perché Windows non permette di sovrascrivere un file `.cmd` mentre è in esecuzione.

Il punto 5 del menu fa la stessa verifica su richiesta.

Quando modifichi `RischioFox.cmd`, ricordati di incrementare `$Version`: è il valore usato per capire che è disponibile una nuova versione.

## Log

Il log è in `%TEMP%\RischioFox\update.log`.

## Nota

Il file è tutto in ASCII: il wrapper iniziale estrae il codice PowerShell che sta sotto la riga `REM` e lo esegue con `ExecutionPolicy Bypass`.
