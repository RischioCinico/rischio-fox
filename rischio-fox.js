
/*  ██▀███  ██▓ ██████ ▄████▄  ██░ ██ ██▓▒█████       █████▒█████ ▒██   ██▒ */
/* ▓██ ▒ ██▓██▒██    ▒▒██▀ ▀█ ▓██░ ██▓██▒██▒  ██▒   ▓██   ▒██▒  ██▒▒ █ █ ▒░ */
/* ▓██ ░▄█ ▒██░ ▓██▄  ▒▓█    ▄▒██▀▀██▒██▒██░  ██▒   ▒████ ▒██░  ██░░  █   ░ */
/* ▒██▀▀█▄ ░██░ ▒   ██▒▓▓▄ ▄██░▓█ ░██░██▒██   ██░   ░▓█▒  ▒██   ██░░ █ █ ▒  */
/* ░██▓ ▒██░██▒██████▒▒ ▓███▀ ░▓█▒░██░██░ ████▓▒░   ░▒█░  ░ ████▓▒▒██▒ ▒██▒ */
/* ░ ▒▓ ░▒▓░▓ ▒ ▒▓▒ ▒ ░ ░▒ ▒  ░▒ ░░▒░░▓ ░ ▒░▒░▒░     ▒ ░  ░ ▒░▒░▒░▒▒ ░ ░▓ ░ */
/*   ░▒ ░ ▒░▒ ░ ░▒  ░ ░ ░  ▒   ▒ ░▒░ ░▒ ░ ░ ▒ ▒░     ░      ░ ▒ ▒░░░   ░▒ ░ */
/*   ░░   ░ ▒ ░  ░  ░ ░        ░  ░░ ░▒ ░ ░ ░ ▒      ░ ░  ░ ░ ░ ▒  ░    ░   */
/*    ░     ░       ░ ░ ░      ░  ░  ░░     ░ ░               ░ ░  ░    ░   */
/*                    ░                                                     */

/***
INDICE:

- AVVIO: configura l'avvio e l'homepage di Firefox.
- GEOLOCALIZZAZIONE: gestisce l'accesso alla tua posizione.
- RACCOLTA DATI: blocca la raccolta di vari tipi di informazioni.
- SAFE BROWSING: preferenze per il servizio Google Safe Browsing
- CONNESSIONI IMPLICITE: disabilita le connessioni non richieste.
- DNS / DoH / PROXY / SOCKS
- BARRE DI RICERCA: configura la barra degli indirizzi e di ricerca.

- TRACCE SU DISCO: gestisce la cache, la cronologia e i dati salvati localmente.
- FILE SCARICATI: controlla il comportamento di download.
- TRACKING PROTECTION: attiva le misure anti-tracciamento di Firefox.
- FINGERPRINTING: protegge dall'identificazione tramite l'impronta digitale del browser.
- PROXY: gestisce il comportamento del proxy.
- CONNESSIONI SICURE: imposta le regole per HTTPS e la validazione dei certificati.
- GESTIONE CREDENZIALI: controlla password e compilazione automatica.
- PDF: gestisce la sicurezza del lettore PDF.
- ESTENSIONI: imposta le regole per le estensioni.
- SICUREZZA AVANZATA: include preferenze di sicurezza varie.
- ELEMENTI FASTIDIOSI: rimuove i pop-up e le notifiche indesiderate.
- INTERFACCIA: impostazioni che modificano l'aspetto del browser.
- ORTOGRAFIA E DIZIONARI: traduttore e correttore automatico.
- GESTIONE SCHEDE: gestisce il comportamento delle schede
- PRESTAZIONI
- INTELLIGENZA ARTIFICIALE

***/

// [0000] Disabilita gli avvisi quando si accede ad `about:config`
lockPref("browser.aboutConfig.showWarning", false);

/* -----------------------------------------------------------------------------------
   [0100] AVVIO
   ----------------------------------------------------------------------------------- */

// [0102] Ripristina sessione precedente
defaultPref("browser.startup.page", 3);

// [0105] Disabilita contenuti sponsorizzati nella home page di Firefox
lockPref("browser.newtabpage.activity-stream.showSponsored", false);
lockPref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
lockPref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

// [0106] clear default topsites
lockPref("browser.newtabpage.activity-stream.default.sites", "");

// [PF] Impedisce il passaggio dei dati di ricerca alla barra degli indirizzi
defaultPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// [PF] Nasconde il logo di Firefox dalla pagina iniziale
defaultPref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);

// [RF] Imposta i siti preferiti nella pagina iniziale
defaultPref("browser.newtabpage.pinned", "[{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://it.wikipedia.org/wiki/Pagina_principale\",\"label\":\"Wikipedia\"},{\"url\":\"https://github.com/\",\"label\":\"GitHub\"},{\"url\":\"https://www.diretta.it/\",\"label\":\"Diretta\"}]");

// [RF] Imposta sfondo
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.wallpaper", "dark-landscape");

// [RF] Abilita Widgets
defaultPref("browser.newtabpage.activity-stream.widgets.system.enabled", true);

// [RF] Task list
defaultPref("browser.newtabpage.activity-stream.widgets.system.lists.enabled", true);

// [RF] Timer
defaultPref("browser.newtabpage.activity-stream.widgets.system.focusTimer.enabled", true);
defaultPref("browser.newtabpage.activity-stream.widgets.focusTimer.showSystemNotifications", true);

// [RF] Meteo
defaultPref("browser.newtabpage.activity-stream.system.showWeather", true);
defaultPref("browser.newtabpage.activity-stream.weather.display", "detailed");

/* -----------------------------------------------------------------------------------
   [0200] GEOLOCALIZZAZIONE
   ----------------------------------------------------------------------------------- */

// [0202] Disabilita servizio di geolocalizzazione del sistema
defaultPref("geo.provider.use_geoclue", false); // [LINUX]

// [SF] Imposta BeaconDB come provider di geolocalizzazione di rete predefinito
defaultPref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");

/* -----------------------------------------------------------------------------------
   [0300] RACCOLTA DATI
   ----------------------------------------------------------------------------------- */

// [0320] Disabilita pannello raccomandazioni in about:addons
lockPref("extensions.getAddons.showPane", false); // [Nascosta]

// [0321] Disabilita raccomandazioni di temi ed estensioni
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false);

// [0322] Disabilita suggerimenti personalizzati per le estensioni
lockPref("browser.discovery.enabled", false);

// [0335] Blocca telemetria nella home page di Firefox
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);

// [0340] Disabilita Studies
lockPref("app.shield.optoutstudies.enabled", false);

// [0341] Disabilita Normandy/Shield
lockPref("app.normandy.enabled", false);
lockPref("app.normandy.api_url", "");

// [0350] Disabilita Crash Reports
lockPref("breakpad.reportURL", "");
lockPref("browser.tabs.crashReporting.sendReport", false);
lockPref("browser.crashReports.unsubmittedCheck.enabled", false);

// [0351] Blocca invio di Crash Reports arretrati
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// [0360] Disabilita Captive Portal
defaultPref("captivedetect.canonicalURL", "");
defaultPref("network.captive-portal-service.enabled", false);

// [0361] Disabilita controlli connettività
defaultPref("network.connectivity-service.enabled", false);

/* -----------------------------------------------------------------------------------
   [0400] SAFE BROWSING
   ----------------------------------------------------------------------------------- */

// [0401] Safe Browsing
lockPref("browser.safebrowsing.malware.enabled", true);
lockPref("browser.safebrowsing.phishing.enabled", true);

// [0402] Blocca download pericolosi
lockPref("browser.safebrowsing.downloads.enabled", true);

// [0403] Disabilita controlli remoti
lockPref("browser.safebrowsing.downloads.remote.enabled", false);
lockPref("browser.safebrowsing.downloads.remote.url", "");

// [0404] Blocca download di software potenzialmente indesiderato
lockPref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", true);
lockPref("browser.safebrowsing.downloads.remote.block_uncommon", true);

/* -----------------------------------------------------------------------------------
   [0600] CONNESSIONI IMPLICITE
   ----------------------------------------------------------------------------------- */

// [0601] Disabilita link prefetching
lockPref("network.prefetch-next", false);

// [0602] Disabilita DNS prefetching
lockPref("network.dns.disablePrefetch", true);
lockPref("network.dns.disablePrefetchFromHTTPS", true);

// [0603] Disabilita predictor
lockPref("network.predictor.enabled", false);
lockPref("network.predictor.enable-prefetch", false);

// [0604] Blocca connessioni speculative al passaggio del mouse sui link
lockPref("network.http.speculative-parallel-limit", 0);

// [0605] Blocca connessioni speculative nei segnalibri e nella cronologia
lockPref("browser.places.speculativeConnect.enabled", false);

// [0610] Blocca "Hyperlink Auditing" (click tracking)
lockPref("browser.send_pings", false);

// Disabilita Preconnect (potrebbe bypassare la protezione di uBlock!)
// https://github.com/uBlockOrigin/uBlock-issues/issues/2913
lockPref("network.preconnect", false);

/* -----------------------------------------------------------------------------------
   [0700] DNS / DoH / PROXY / SOCKS
   ----------------------------------------------------------------------------------- */

// [0702] Usa il proxy per la risoluzione DNS remota
lockPref("network.proxy.socks_remote_dns", true);

// [0703] Disabilita i percorsi UNC di Windows per prevenire il rischio di perdite di dati
lockPref("network.file.disable_unc_paths", true);

// [0704] Disabilita GIO (Gnome Input/Output)
lockPref("network.gio.supported-protocols", "");

// [0705] Impedisci il failover automatico a connessioni dirette
lockPref("network.proxy.failover_direct", false);

// [0710] Abilita DNS-over-HTTPS (DoH) con protezione massima
lockPref("network.trr.mode", 3);

// [0712] Imposta Quad9 come DoH provider
lockPref("network.trr.uri", "https://dns.quad9.net/dns-query");

/* -----------------------------------------------------------------------------------
   BARRE DI RICERCA
   ----------------------------------------------------------------------------------- */

// [0801] Disabilita connessioni speculative nella barra degli indirizzi
lockPref("browser.urlbar.speculativeConnect.enabled", false);

// [0802] Disabilita suggerimenti sponsorizzati
lockPref("browser.urlbar.quicksuggest.enabled", false);
lockPref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
lockPref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// [0805] Disabilita suggerimenti ricerche di tendenza
defaultPref("browser.urlbar.trending.featureGate", false);

// [0806] Disabilita determinate categorie di suggerimenti
defaultPref("browser.urlbar.addons.featureGate", false); // Estensioni
lockPref("browser.urlbar.amp.featureGate", false); // adMarketplace
lockPref("browser.urlbar.fakespot.featureGate", false); // Deprecato
lockPref("browser.urlbar.mdn.featureGate", false); // Strumento per sviluppatori
lockPref("browser.urlbar.weather.featureGate", false); // Meteo
lockPref("browser.urlbar.wikipedia.featureGate", false);

// [0807] Disabilita suggerimenti dagli appunti
lockPref("browser.urlbar.clipboard.featureGate", false);

// [0808] Disabilita ricerche recenti
lockPref("browser.urlbar.recentsearches.featureGate", false);

// [0810] Disabilita la cronologia di ricerca e dei moduli
defaultPref("browser.formfill.enable", false);

// [0820] Disabilita colorazione link visitati per prevenire "history sniffing"
defaultPref("layout.css.visited_links_enabled", false);

// [0830] Abilita la possibilità di usare un motore di ricerca diverso in finestre normali e private
defaultPref("browser.search.separatePrivateDefault", true);
lockPref("browser.search.separatePrivateDefault.ui.enabled", true);

/* -----------------------------------------------------------------------------------
   DA CONTROLLARE
   ----------------------------------------------------------------------------------- */

// Disabilita l'autocompletamento degli URL
lockPref("browser.urlbar.autoFill", false);


// Mostra l'interfaccia per cambiare motore di ricerca per singole ricerche
lockPref("browser.urlbar.scotchBonnet.disableOneOffs", false);

// Visualizza URL completi invece di termini di ricerca
defaultPref("browser.urlbar.restyleSearches", false);
lockPref("browser.urlbar.trimURLs", false);

// Abilita "Cerca in finestra privata"
lockPref("browser.search.separatePrivateDefault.urlbarResult.enabled", true);

// Visualizza la barra di ricerca nella barra degli strumenti personalizzabile
defaultPref("browser.search.widget.inNavBar", true);

// Apre risultati di ricerca in una nuova scheda
defaultPref("browser.search.openintab", true);
defaultPref("browser.urlbar.openintab", true);

// Previene i WebRTC IP leaks forzando l'uso del proxy
lockPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// Prevent leaking single word searches to DNS provider
lockPref("browser.fixup.dns_first_for_single_words", false);
lockPref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);

// Impedisci che il clic con il tasto centrale del mouse su una nuova scheda apra URL
lockPref("browser.tabs.searchclipboardfor.middleclick", false);
lockPref("middlemouse.contentLoadURL", false);

/* -----------------------------------------------------------------------------------
   TRACCE SU DISCO
   ----------------------------------------------------------------------------------- */

// Disabilita cache su disco
lockPref("browser.cache.disk.enable", false);

// Diminuisce il numero di salvataggi delle schede chiuse
lockPref("browser.sessionstore.max_tabs_undo", 5);

// Disabilita la cache Indietro/Avanti (bfcache)
lockPref("browser.sessionhistory.max_total_viewers", 0);

// Disabilita la generazione di miniature delle pagine
lockPref("browser.pagethumbnails.capturing_disabled", true); // [Nascosta]

// Aumenta l'intervallo di salvataggio automatico della sessione per ridurre le scritture su disco
defaultPref("browser.sessionstore.interval", 300000); // 5 minuti

// Impedisce la scrittura della cache multimediale su disco nelle finestre private
lockPref("browser.privatebrowsing.forceMediaMemoryCache", true);

// Limita la durata massima dei cookie a 6 mesi
defaultPref("network.cookie.maxageCap", 15552000);

// Impedisce la creazione di registri dei domini bloccati
lockPref("browser.contentblocking.database.enabled", false);

/* -----------------------------------------------------------------------------------
   FILE SCARICATI
   ----------------------------------------------------------------------------------- */

// Massimizza il controllo dell'utente sui download
lockPref("browser.download.useDownloadDir", false);
lockPref("browser.download.always_ask_before_handling_new_types", true);

// Gestisce i file temporanei per evitare tracce
lockPref("browser.download.start_downloads_in_tmp_dir", true);
lockPref("browser.helperApps.deleteTempFileOnExit", true);

// Impedisci apertura automatica finestra download
lockPref("browser.download.alwaysOpenPanel", false);

// Riproduci video MKV nel browser
defaultPref("media.mkv.enabled", true);

/* -----------------------------------------------------------------------------------
   TRACKING PROTECTION
   ----------------------------------------------------------------------------------- */

// Isola le risorse iniettate dalle estensioni
defaultPref("privacy.antitracking.isolateContentScriptResources", true);

// Abilita Global Privacy Control
lockPref("privacy.globalprivacycontrol.enabled", true);

// Salta automaticamente i banner di consenso dei cookie
defaultPref("privacy.trackingprotection.consentmanager.skip.enabled", true);
defaultPref("privacy.trackingprotection.consentmanager.skip.pbmode.enabled", true);

// Impedisci ai terzi di impostare cookie se non sono già stati un sito principale (first party)
defaultPref("privacy.dynamic_firstparty.limitForeign", true);

// Limita i referrer che tracciano
defaultPref("network.http.referer.defaultPolicy.trackers", 1);
defaultPref("network.http.referer.defaultPolicy.trackers.pbmode", 1);

// Rimuovi i percorsi e le query dai referrer tra siti diversi
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2);

// Abilita Bounce Tracking Protection
lockPref("privacy.bounceTrackingProtection.requireStatefulBounces", false);

// Abbassa la priorità di rete per i tracker, velocizzando il caricamento della pagina
lockPref("privacy.trackingprotection.lower_network_priority", true);

// Avvisa l'utente quando cambia scheda durante la condivisione dello schermo
lockPref("privacy.webrtc.sharedTabWarning", true);

/* -----------------------------------------------------------------------------------
   FINGERPRINTING
   ----------------------------------------------------------------------------------- */

// Disabilita l'uso delle proprietà di contesto SVG per prevenire il fingerprinting
lockPref("svg.context-properties.content.allowed-domains", "");

// Impedisce l'esposizione delle informazioni del renderer WebGL
lockPref("webgl.enable-renderer-query", false);
lockPref("webgl.override-unmasked-vendor", "Mozilla");
lockPref("webgl.sanitize-unmasked-renderer", true);

// Non usare colori di sistema
lockPref("widget.non-native-theme.use-theme-accent", false);
lockPref("browser.display.use_system_colors", false);
lockPref("ui.use_standins_for_native_colors", true);

// Reimposta ogni giorno la chiave di randomizzazione dell'impronta digitale (in aggiunta al reset per sessione e al riavvio del browser)
lockPref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
lockPref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);

// Arrotonda le dimensioni della finestra per prevenire il tracciamento
lockPref("privacy.window.maxInnerHeight", 900);
lockPref("privacy.window.maxInnerWidth", 1600);

// Disabilita l'API della batteria per prevenire il fingerprinting
defaultPref("dom.battery.enabled", false);

// Rimuove stringhe di identificazione
lockPref("app.distributor", "");
lockPref("app.distributor.channel", "");
lockPref("mozilla.partner.id", "");

/* -----------------------------------------------------------------------------------
   CONNESSIONI SICURE
   ----------------------------------------------------------------------------------- */

// Avvisa sempre sulle connessioni non sicure (HTTP)
lockPref("security.insecure_connection_text.enabled", true);
lockPref("security.insecure_connection_text.pbmode.enabled", true);

// Blocca le negoziazioni di connessione insicure per prevenire gli attacchi di "downgrade"
lockPref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Avvisa sempre quando si invia un modulo da HTTP a HTTPS, anche su IP locali
lockPref("security.insecure_field_warning.ignore_local_ip_address", false);

// Disabilita l'importazione automatica dei certificati del sistema operativo
defaultPref("security.osclientcerts.autoload", false);

// Disabilita l'invio di richieste HTTP in background nella modalità Solo HTTPS
defaultPref("dom.security.https_only_mode_send_http_background_request", false);

// Disabilita i certificati root di terze parti a livello di sistema operativo per prevenire gli attacchi MITM
lockPref("security.certerrors.mitm.auto_enable_enterprise_roots", false);
lockPref("security.enterprise_roots.enabled", false);

// Assicura che HTTP/3 non venga disabilitato in presenza di certificati root di terze parti
defaultPref("network.http.http3.disable_when_third_party_roots_found", false);

// Disabilita TLS 1.3 0-RTT per prevenire attacchi
defaultPref("security.tls.enable_0rtt_data", false);

// Abilita i controlli di revoca CRLite e dà loro la priorità su OCSP
lockPref("security.OCSP.enabled", 0);
lockPref("security.ssl.enable_ocsp_stapling", false);
lockPref("security.pki.crlite_mode", 2);
lockPref("security.csp.reporting.enabled", false);
defaultPref("security.remote_settings.crlite_filters.enabled", true);

// Fornisce una protezione extra bloccando completamente le connessioni in caso di mancata corrispondenza del certificato
defaultPref("security.cert_pinning.enforcement_level", 2);

// Consenti solo override temporanei per gli errori del certificato (per sessione)
defaultPref("security.certerrors.permanentOverride", false);

// Mostra informazioni tecniche dettagliate sulle pagine di errore
defaultPref("browser.xul.error_pages.expert_bad_cert", true);

// Disabilita TLS sessione identifiers
defaultPref("security.ssl.disable_session_identifiers", true);

/* -----------------------------------------------------------------------------------
   GESTIONE CREDENZIALI
   ----------------------------------------------------------------------------------- */

// Mostra sempre il pulsante "Mostra Password"
defaultPref("layout.forms.reveal-password-button.enabled", true);

// Disabilita Autofill per maggiore sicurezza
lockPref("signon.autofillForms", false);

// Disabilita l'autenticazione Basic su HTTP
lockPref("network.http.basic_http_auth.enabled", false);

// Disabilita la cattura credenziali al di fuori dei form di login
lockPref("signon.formlessCapture.enabled", false);

// Disabilita NTLM
lockPref("network.automatic-ntlm-auth.allow-proxies", false);

// Impedisci la troncatura di testo incollato
defaultPref("editor.truncate_user_pastes", false);

// Disabilita SPNEGO
lockPref("network.negotiate-auth.allow-proxies", false);

// Abilita i prompt di conferma per l'autenticazione
lockPref("network.auth.confirmAuth.enabled", true);

// Impedisci che le risorse interne aprano dialoghi di autenticazione HTTP
lockPref("network.auth.subresource-http-auth-allow", 1);

// Disable Microsoft SSO
defaultPref("network.http.microsoft-entra-sso.container-enabled.0", false);
defaultPref("network.microsoft-sso-authority-list", "");

/* -----------------------------------------------------------------------------------
   PDF
   ----------------------------------------------------------------------------------- */

// Disabilita l'esecuzione di JavaScript all'interno dei PDF
lockPref("pdfjs.enableScripting", false);

// Disabilita il download automatico di un modello per il testo alternativo
lockPref("pdfjs.enableAltTextModelDownload", false);

// Disabilita i collegamenti ipertestuali automatici
lockPref("pdfjs.enableAutoLinking", false);

// Disabilita XFA, una fonte comune di vulnerabilità nei PDF
lockPref("pdfjs.enableXfa", false);

// Forzare l'uso del renderer di font interno
lockPref("pdfjs.disableFontFace", true);

// Forzare il download/la visualizzazione locale dei PDF e chiedere prima di aprire il visualizzatore PDF
lockPref("pdfjs.disableRange", true);
lockPref("pdfjs.disableStream", true);

// Apri i link esterni in nuove schede/finestre
lockPref("pdfjs.externalLinkTarget", 2);

// Impedisci il tentativo di caricare/convertire file binari sconosciuti
lockPref("pdfjs.handleOctetStream", false);

// Abilita la possibilità di aggiungere firme
defaultPref("pdfjs.enableSignatureEditor", true);

// Abilita il testo alternativo
defaultPref("pdfjs.enableAltText", true);

// Mostra la barra laterale per impostazione predefinita durante la visualizzazione dei PDF
defaultPref("pdfjs.sidebarViewOnLoad", 2);

// Aggiorna l'URL quando si cambiano le pagine
defaultPref("pdfjs.historyUpdateUrl", true);

/* -----------------------------------------------------------------------------------
   ESTENSIONI
   ----------------------------------------------------------------------------------- */

// Impedisci l'installazione di estensioni da fonti non ufficiali
lockPref("extensions.autoDisableScopes", 15);
lockPref("extensions.enabledScopes", 5); // [Nascosta]
lockPref("extensions.installDistroAddons", false); // [Nascosta]
lockPref("extensions.sideloadScopes", 0); // [Nascosta]

// Disabilita API potenzialmente rischiose per la privacy
lockPref("extensions.webapi.enabled", false);
lockPref("privacy.resistFingerprinting.block_mozAddonManager", true);

// Richiedi firme e origini sicure per le estensioni
lockPref("extensions.install.requireBuiltInCerts", true); // [Nascosta]
lockPref("extensions.update.requireBuiltInCerts", true); // [Nascosta]
lockPref("extensions.install.requireSecureOrigin", true); // [Nascosta]

// Disabilita l'assegnazione automatica di permessi pericolosi
lockPref("extensions.originControls.grantByDefault", false);
lockPref("extensions.manifestV2.actionsPopupURLRestricted", true);
lockPref("extensions.content_web_accessible.enabled", true);

// Riduci la durata dei processi delle estensioni
defaultPref("dom.ipc.keepProcessesAlive.extension", 0); // [Nascosta]

// Non permettere alle estensioni di raccogliere dati
lockPref("extensions.dataCollectionPermissions.enabled", false);

/* -----------------------------------------------------------------------------------
   SICUREZZA AVANZATA
   ----------------------------------------------------------------------------------- */

// Chiedi sempre permessi per usare camera & microfono
lockPref("permissions.media.show_always_ask.enabled", true);

// Disabilita i servizi di accessibilità
defaultPref("accessibility.force_disabled", 1);
defaultPref("devtools.accessibility.enabled", false);

// Impostazioni per il compilatore JIT
defaultPref("javascript.options.jit_trustedprincipals", false);
defaultPref("javascript.options.content_process_write_protect_code", true);

// Disabilita SharedArrayBuffer con COOP/COEP
defaultPref("dom.postMessage.sharedArrayBuffer.withCOOP_COEP", false);

// Avvisa prima di aprire link esterni con mailto:
defaultPref("network.protocol-handler.warn-external.mailto", true);

// Riduci la durata dei processi privilegiati per le pagine about:
defaultPref("dom.ipc.keepProcessesAlive.privilegedabout", 0);

// Abilita Subresource Integrity
lockPref("security.integrity_policy.enabled", true);
lockPref("security.integrity_policy.stylesheet.enabled", true);

// Abilita l'isolamento dei processi basato sull'origine
defaultPref("dom.origin_agent_cluster.default", true);

// Abilita il Sanificatore HTML per prevenire gli attacchi XSS
defaultPref("dom.security.sanitizer.enabled", true);

// Abilita il sandboxing per il processo di rete
defaultPref("security.sandbox.socket.process.level", 1);

// Abilita le contromisure di sicurezza contro Spectre
defaultPref("javascript.options.spectre.disable_for_isolated_content", false);

// Preferisci nuovi processi per i subframe
defaultPref("browser.tabs.remote.subframesPreferUsed", false);

// Impedisci ai tipi di processi remoti di avviare l'isolamento impropriamente
defaultPref("browser.tabs.remote.enforceRemoteTypeRestrictions", true);

// Proteggi dagli attacchi CSRF con il "SameSite" dei cookie
defaultPref("network.cookie.sameSite.laxByDefault", true);
defaultPref("network.cookie.sameSite.schemeful", true);

// Proteggi dagli attacchi MIME
defaultPref("network.sniff.use_extension", true);
defaultPref("security.block_fileuri_script_with_wrong_mime", true);

// Impedisci le richieste di rete all'indirizzo 0.0.0.0
lockPref("network.socket.ip_addr_any.disabled", true);

// Blocca Origin Trials
lockPref("dom.origin-trials.enabled", false);

// Mostra sempre il Punycode
lockPref("network.IDN_show_punycode", true);

/* -----------------------------------------------------------------------------------
   ELEMENTI FASTIDIOSI
   ----------------------------------------------------------------------------------- */

// Disabilita avviso e transizione quando si passa a schermo intero
lockPref("full-screen-api.warning.delay", -1);
lockPref("full-screen-api.warning.timeout", 0);
lockPref("full-screen-api.transition-duration.enter", "0 0");
lockPref("full-screen-api.transition-duration.leave", "0 0");

// Blocca il pop-up automatico del traduttore
defaultPref("browser.translations.automaticallyPopup", false);

// Blocca gli errori fastidiosi dell'API di sintesi vocale
defaultPref("media.webspeech.synth.dont_notify_on_error", true); // [Nascosta]

// Blocca avviso se Firefox non è il lettore PDF predefinito
lockPref("browser.shell.checkDefaultPDF", false); // [Nascosta]

// Blocca banner dei cookie
defaultPref("cookiebanners.service.mode", 1);
defaultPref("cookiebanners.service.mode.privateBrowsing", 1);

// Limita gli eventi che possono causare pop-up
defaultPref("dom.popup_allowed_events", "click dblclick");

// Impedisci agli script di spostare e ridimensionare le finestre
defaultPref("dom.disable_window_move_resize", true);

// Impedisci alle pagine di ricaricarsi automaticamente
defaultPref("accessibility.blockautorefresh", true);
defaultPref("browser.meta_refresh_when_inactive.disabled", true);

// Disabilita l'indicatore globale WebRTC
lockPref("privacy.webrtc.hideGlobalIndicator", true);

/* -----------------------------------------------------------------------------------
   INTERFACCIA
   ----------------------------------------------------------------------------------- */

// Nascondi la barra del titolo
defaultPref("browser.tabs.inTitlebar", 1);

// Abilita la personalizzazione dell'interfaccia utente tramite CSS
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Riattiva la Modalità Compatta nel menu di personalizzazione
defaultPref("browser.compactmode.show", true);

// Abilita il cursore animato durante il caricamento delle pagine
defaultPref("browser.spin_cursor_while_busy", true);

// Rende visibile l'interfaccia per il backup delle preferenze
defaultPref("browser.backup.preferences.ui.enabled", true);

// Abilita il nuovo design della barra laterale
defaultPref("sidebar.revamp", true);
defaultPref("sidebar.main.tools", "aichat,syncedtabs,history,bookmarks");

// Aggiunge la voce "Visualizza informazioni immagine" al menu contestuale
defaultPref("browser.menu.showViewImageInfo", true);

// Abilita il pulsante Picture-in-Picture su tutti i video
defaultPref("media.videocontrols.picture-in-picture.respect-disablePictureInPicture", false);
defaultPref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);

// Impedisce al tasto Alt di attivare la barra dei menu
defaultPref("ui.key.menuAccessKeyFocuses", false);

// Impedisce al titolo della pagina di essere esposto in modalità privata
lockPref("privacy.exposeContentTitleInWindow.pbm", false);

// Abilita alcune funzionalità per la gestione dei profili
defaultPref("browser.profiles.enabled", true);

// Impedisce di mostrare finestre private come icone separate sulla barra delle applicazioni di Windows
defaultPref("browser.privateWindowSeparation.enabled", false);

// Impedisce al puntatore del mouse di nascondersi mentre si digita
defaultPref("widget.gtk.hide-pointer-while-typing.enabled", false); // [LINUX]

// Abilita lo zoom su tutti i siti
defaultPref("browser.ui.zoom.force-user-scalable", true);

// Abilita lo zoom oltre la scala iniziale
defaultPref("apz.allow_zooming_out", true);

// Abilita autoscrolling
defaultPref("general.autoScroll", true);

// Mostra maggiori informazioni `about:processes`
defaultPref("toolkit.aboutProcesses.showAllSubframes", true);
defaultPref("toolkit.aboutProcesses.showThreads", true);

/* -----------------------------------------------------------------------------------
   ORTOGRAFIA E DIZIONARI
   ----------------------------------------------------------------------------------- */

// Abilita il controllo ortografico per testi su una o più righe
defaultPref("layout.spellcheckDefault", 2);

// Impedisce che la selezione di una parola con doppio clic includa lo spazio successivo
defaultPref("layout.word_select.eat_space_to_next_word", false);

// Cancella lo spazio dopo la parola selezionata con doppio clic
defaultPref("editor.word_select.delete_space_after_doubleclick_selection", true);

/* -----------------------------------------------------------------------------------
   GESTIONE SCHEDE
   ----------------------------------------------------------------------------------- */

// Apri i segnalibri in una nuova scheda
defaultPref("browser.tabs.loadBookmarksInTabs", true);

// Abilita la funzionalità di Gruppi di schede
defaultPref("browser.tabs.groups.enabled", true);

// Aggiunge l'opzione "Scarica scheda" al menu contestuale
defaultPref("browser.tabs.unloadTabInContextMenu", true);

// Forza i link esterni ad aprirsi in una nuova scheda
defaultPref("browser.link.open_newwindow.override.external", 3);

// Apri le nuove schede in background
defaultPref("browser.tabs.loadDivertedInBackground", true);

// Apri i segnalibri in background
defaultPref("browser.tabs.loadBookmarksInBackground", true);

// Impedisce la chiusura automatica del menu dei segnalibri
defaultPref("browser.bookmarks.openInTabClosesMenu", false);

// Apri le nuove schede subito dopo quella attuale
defaultPref("browser.tabs.insertAfterCurrent", true);

// Lascia il browser aperto alla chiusura dell'ultima scheda
defaultPref("browser.tabs.closeWindowWithLastTab", false);

/* -----------------------------------------------------------------------------------
   PRESTAZIONI
   ----------------------------------------------------------------------------------- */

// Cache
defaultPref("gfx.content.skia-font-cache-size", 32);
defaultPref("gfx.canvas.accelerated.cache-items", 32768);
defaultPref("gfx.canvas.accelerated.cache-size", 4096);
defaultPref("webgl.max-size", 16384);
defaultPref("browser.cache.memory.capacity", 131072);
defaultPref("browser.cache.memory.max_entry_size", 20480);
defaultPref("media.memory_cache_max_size", 262144);
defaultPref("media.memory_caches_combined_limit_kb", 1048576);
defaultPref("media.cache_readahead_limit", 600);
defaultPref("media.cache_resume_threshold", 300);
defaultPref("image.cache.size", 10485760);
defaultPref("image.mem.decode_bytes_at_a_time", 65536);

// Network
defaultPref("network.http.max-connections", 1800);
defaultPref("network.http.max-persistent-connections-per-server", 10);
defaultPref("network.http.max-urgent-start-excessive-connections-per-host", 5);
defaultPref("network.http.request.max-start-delay", 5);
defaultPref("network.http.pacing.requests.enabled", false);
defaultPref("network.dnsCacheEntries", 10000);
defaultPref("network.dnsCacheExpiration", 3600);
defaultPref("network.ssl_tokens_cache_capacity", 10240);

// Abilita WebAssembly (WASM) per prestazioni migliori in compiti pesanti
defaultPref("javascript.options.wasm_branch_hinting", true);
defaultPref("javascript.options.wasm_relaxed_simd", true);

// Disabilita le animazioni superflue per migliorare la reattività dell'interfaccia utente
defaultPref("sidebar.animation.enabled", false);
defaultPref("ui.panelAnimations", 0); // [Nascosta]
defaultPref("ui.prefersReducedMotion", 1); // [Nascosta]
defaultPref("ui.swipeAnimationEnabled", 0); // [Nascosta]

// Disabilita l'anteprima delle schede al passaggio del mouse per risparmiare risorse
defaultPref("browser.tabs.hoverPreview.enabled", false);

// Disabilita il reporting degli errori CSS
defaultPref("layout.css.report_errors", false);

// GFX Rendering
defaultPref("gfx.webrender.all", true);
defaultPref("gfx.webrender.precache-shaders", true);
defaultPref("gfx.webrender.compositor", true);

// Abilita la decodifica video hardware
defaultPref("media.ffmpeg.vaapi.enabled", true); // [LINUX]
defaultPref("layers.gpu-process.enabled", true);
defaultPref("media.gpu-process-decoder", true);

/* -----------------------------------------------------------------------------------
   INTELLIGENZA ARTIFICIALE
   ----------------------------------------------------------------------------------- */

// Disabilita fastidioso badge per indicare nuove funzioni
lockPref("browser.ml.chat.page.footerBadge", false);

// Mostra tasto per riassumere pagine
defaultPref("browser.ml.chat.page", true);

// Abilita Link Preview
defaultPref("browser.ml.linkPreview.enabled", true);
defaultPref("browser.ml.linkPreview.optin", true);

// Non censurare Link Preview
defaultPref("browser.ml.linkPreview.blockListEnabled", false);

// Disabilita suggerimenti nomi per gruppi di schede
defaultPref("browser.tabs.groups.smart.enabled", false);
defaultPref("browser.tabs.groups.smart.optin", false);
defaultPref("browser.tabs.groups.smart.userEnabled", false);

/* -----------------------------------------------------------------------------------
   FINE
   ----------------------------------------------------------------------------------- */

// Controllo versione
lockPref("rischio.fox", "144.13");
