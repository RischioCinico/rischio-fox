
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

/* [9001] disable welcome notices ***/
lockPref("browser.startup.homepage_override.mstone", "ignore"); // [Nascosta]
/* [9002] disable General>Browsing>Recommend extensions/features as you browse [FF67+] ***/
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

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

// [RF] Disabilita Preconnect (potrebbe bypassare la protezione di uBlock!)
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
   [0800] BARRE DI RICERCA
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
   [0900] GESTIONE CREDENZIALI
   ----------------------------------------------------------------------------------- */

// [0903] Disabilita Autofill per maggiore sicurezza
lockPref("signon.autofillForms", false);

// [0904] Disabilita la cattura credenziali al di fuori dei form di login
lockPref("signon.formlessCapture.enabled", false);

// [0905] Impedisci che le risorse interne aprano dialoghi di autenticazione HTTP
lockPref("network.auth.subresource-http-auth-allow", 1);

/* -----------------------------------------------------------------------------------
   [1000] TRACCE SU DISCO
   ----------------------------------------------------------------------------------- */

// [1001] Disabilita cache su disco
lockPref("browser.cache.disk.enable", false);

// [1002] Impedisce la scrittura della cache multimediale su disco nelle finestre private
lockPref("browser.privatebrowsing.forceMediaMemoryCache", true);

// [1003] Disabilita scrittura dati di sessione
lockPref("browser.sessionstore.privacy_level", 2);

// [SF] Aumenta l'intervallo di salvataggio automatico della sessione per ridurre le scritture su disco
defaultPref("browser.sessionstore.interval", 1800000); // default=15000

/* -----------------------------------------------------------------------------------
   [1200] CONNESSIONI SICURE
   ----------------------------------------------------------------------------------- */

// [1201] Richiedi negoziazione sicura SSL
lockPref("security.ssl.require_safe_negotiation", true);

// [1206] Disabilita TLS 1.3 0-RTT
lockPref("security.tls.enable_0rtt_data", false);

// [1211] Disabilita OCSP
lockPref("security.OCSP.enabled", 0);

// [1212] Non richiedere OCSP
lockPref("security.OCSP.require", false);

// [1223] Fornisce una protezione extra bloccando completamente le connessioni in caso di mancata corrispondenza del certificato
lockPref("security.cert_pinning.enforcement_level", 2);

// [1224] Abilita CRLite
lockPref("security.remote_settings.crlite_filters.enabled", true);
lockPref("security.pki.crlite_mode", 2);

// [1244] Abilita HTTPS-Only
lockPref("dom.security.https_only_mode", true);
lockPref("dom.security.https_only_mode_pbm", true);

// [1246] Disabilita l'invio di richieste HTTP in background
lockPref("dom.security.https_only_mode_send_http_background_request", false);

// [1270] Mostra avviso connessione insicure
lockPref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// [1272] Mostra informazioni dettagliate sulle pagine di errore
lockPref("browser.xul.error_pages.expert_bad_cert", true);

/* -----------------------------------------------------------------------------------
   [1600] REFERERS
   ----------------------------------------------------------------------------------- */

// [1602] Rimuovi i percorsi e le query dai referrer tra siti diversi
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2);

/* -----------------------------------------------------------------------------------
   [1700] CONTAINERS
   ----------------------------------------------------------------------------------- */

// [1701] Abilita Container
lockPref("privacy.userContext.enabled", true);
lockPref("privacy.userContext.ui.enabled", true);

/* -----------------------------------------------------------------------------------
   [2000] MEDIA
   ----------------------------------------------------------------------------------- */

// [2002] Previene i WebRTC IP leaks forzando l'uso del proxy
defaultPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// [2003] Mitiga il WebRTC IP Leak
defaultPref("media.peerconnection.ice.default_address_only", true);

/* -----------------------------------------------------------------------------------
   [2400] DOM (DOCUMENT OBJECT MODEL)
   ----------------------------------------------------------------------------------- */

// [2402] Impedisci agli script di spostare e ridimensionare le finestre
defaultPref("dom.disable_window_move_resize", true);

/* -----------------------------------------------------------------------------------
   [2600] MISCELLANEA
   ----------------------------------------------------------------------------------- */

// [2603] Gestisce i file temporanei per evitare tracce
lockPref("browser.download.start_downloads_in_tmp_dir", true);
lockPref("browser.helperApps.deleteTempFileOnExit", true);

// [2606] Disabilita UITour
lockPref("browser.uitour.enabled", false);
lockPref("browser.uitour.url", "");

// [2616] Rimuove permessi speciali per domini Mozilla
lockPref("permissions.manager.defaultsUrl", "");

// [2619] Mostra sempre il Punycode
lockPref("network.IDN_show_punycode", true);

// [2620] Disabilita l'esecuzione di JavaScript all'interno dei PDF
lockPref("pdfjs.disabled", false);
lockPref("pdfjs.enableScripting", false);

// [2624] Non aprire URL negli appunti cliccando con il tasto centrale sul tasto per aprire schede
lockPref("browser.tabs.searchclipboardfor.middleclick", false);

// [2630] Disabilita content analysis
lockPref("browser.contentanalysis.enabled", false);
lockPref("browser.contentanalysis.default_result", 0);

// [2635] Isola le risorse iniettate dalle estensioni
defaultPref("privacy.antitracking.isolateContentScriptResources", true);

// [2640] Disabilita Content Security Policy
lockPref("security.csp.reporting.enabled", false);

// [2651] Chiedi sempre dove salvare i download
lockPref("browser.download.useDownloadDir", false);

// [2652] Impedisci apertura automatica finestra download
lockPref("browser.download.alwaysOpenPanel", false);

// [2653] Non aggiungere i file scaricati ai documenti recenti di sistema
lockPref("browser.download.manager.addToRecentDocs", false);

// [2654] Chiedi sempre come aprire nuovi tipi di file
lockPref("browser.download.always_ask_before_handling_new_types", true);

// [2660] Limita cartelle consentite per le estensioni
lockPref("extensions.enabledScopes", 5); // [Nascosta]
lockPref("extensions.autoDisableScopes", 15);

// [2661] Mostra sempre prompt di installazione
lockPref("extensions.postDownloadThirdPartyPrompt", false);

/* -----------------------------------------------------------------------------------
   [2700] ENHANCED TRACKING PROTECTION
   ----------------------------------------------------------------------------------- */

// [2701] Abilita ETP in modalità restrittiva
lockPref("browser.contentblocking.category", "strict"); 

// [SF] Risolvi problemi (sia gravi che minori) causati da ETP Strict
lockPref("privacy.trackingprotection.allow_list.baseline.enabled", true);
lockPref("privacy.trackingprotection.allow_list.convenience.enabled", true);

/* -----------------------------------------------------------------------------------
   [4000] FINGERPRINTING
   ----------------------------------------------------------------------------------- */

// [4502] Arrotonda le dimensioni della finestra per prevenire il tracciamento
defaultPref("privacy.window.maxInnerHeight", 900);
defaultPref("privacy.window.maxInnerWidth", 1600);

// [4503] Disabilita mozAddonManager Web API
lockPref("privacy.resistFingerprinting.block_mozAddonManager", true);

// [4503] Non usare colori di sistema
lockPref("widget.non-native-theme.use-theme-accent", false);

// [4512] Forza apertura link in una nuova scheda
lockPref("browser.link.open_newwindow", 3);

// [4513] Imponi sempre apertura in una nuova scheda
lockPref("browser.link.open_newwindow.restriction", 0)

/* -----------------------------------------------------------------------------------
   [5000] SICUREZZA
   ----------------------------------------------------------------------------------- */

// [5012] Disabilita l'autocompletamento degli URL
defaultPref("browser.urlbar.autoFill", false);

// [5017] Disabilita Form Autofill
lockPref("extensions.formautofill.addresses.enabled", false);
lockPref("extensions.formautofill.creditCards.enabled", false);

// [5018] Limita gli eventi che possono causare pop-up
defaultPref("dom.popup_allowed_events", "click dblclick");

// [5019] Disabilita la generazione di miniature delle pagine
lockPref("browser.pagethumbnails.capturing_disabled", true); // [Nascosta]

// [SF] Disabilita i servizi di accessibilità
defaultPref("accessibility.force_disabled", 1);
defaultPref("devtools.accessibility.enabled", false);

/* -----------------------------------------------------------------------------------
   [8500] TELEMETRIA
   ----------------------------------------------------------------------------------- */

// [8500] Disabilita data submission
lockPref("datareporting.policy.dataSubmissionEnabled", false);
// [8501] Disabilita Health Reports
lockPref("datareporting.healthreport.uploadEnabled", false);
// [0802] Disabilita telemetria
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.enabled", false);
lockPref("toolkit.telemetry.server", "data:,");
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.newProfilePing.enabled", false);
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false);
lockPref("toolkit.telemetry.updatePing.enabled", false);
lockPref("toolkit.telemetry.bhrPing.enabled", false);
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false);
// [8503] Disabilita Telemetry Coverage
lockPref("toolkit.telemetry.coverage.opt-out", true);
lockPref("toolkit.coverage.opt-out", true);
lockPref("toolkit.coverage.endpoint.base", "");

/* -----------------------------------------------------------------------------------
   INTERFACCIA
   ----------------------------------------------------------------------------------- */

// [PF] Disabilita transizione schermo intero
lockPref("full-screen-api.transition-duration.enter", "0 0");
lockPref("full-screen-api.transition-duration.leave", "0 0");

// [PF] Disabilita avviso schermo intero
lockPref("full-screen-api.warning.delay", -1);
lockPref("full-screen-api.warning.timeout", 0);

// [PF] Abilita la personalizzazione dell'interfaccia utente tramite CSS
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// [PF] Aggiunge la voce "Visualizza informazioni immagine" al menu contestuale
defaultPref("browser.menu.showViewImageInfo", true);

// [PF] Abilita la Modalità Compatta nel menu di personalizzazione
defaultPref("browser.compactmode.show", true);

// [PF] Abilita alcune funzionalità per la gestione dei profili
defaultPref("browser.profiles.enabled", true);

// [PF] Impedisce al puntatore del mouse di nascondersi mentre si digita
defaultPref("widget.gtk.hide-pointer-while-typing.enabled", false); // [LINUX]

// [RF] Blocca il pop-up automatico del traduttore
defaultPref("browser.translations.automaticallyPopup", false);

// [RF] Blocca gli errori fastidiosi dell'API di sintesi vocale
defaultPref("media.webspeech.synth.dont_notify_on_error", true); // [Nascosta]

// [RF] Disabilita l'indicatore globale WebRTC
lockPref("privacy.webrtc.hideGlobalIndicator", true);

// [RF] Nascondi la barra del titolo
defaultPref("browser.tabs.inTitlebar", 1);

// [RF] Rende visibile l'interfaccia per il backup delle preferenze
defaultPref("browser.backup.preferences.ui.enabled", true);

// [RF] Abilita il pulsante Picture-in-Picture su tutti i video
defaultPref("media.videocontrols.picture-in-picture.respect-disablePictureInPicture", false);
defaultPref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);

// [RF] Abilita il nuovo design della barra laterale
defaultPref("sidebar.revamp", true);
defaultPref("sidebar.main.tools", "aichat,syncedtabs,history,bookmarks,passwords");

// [RF] Abilita autoscrolling
defaultPref("general.autoScroll", true);

// [RF] Mostra maggiori informazioni `about:processes`
defaultPref("toolkit.aboutProcesses.showAllSubframes", true);
defaultPref("toolkit.aboutProcesses.showThreads", true);

// [RF] Mostra opzioni stampa avanzate
defaultPref("print.more-settings.open", true);
defaultPref("print.show_page_setup_menu", true);

/* -----------------------------------------------------------------------------------
   GESTIONE SCHEDE
   ----------------------------------------------------------------------------------- */

// [PF] Apri i segnalibri in una nuova scheda
defaultPref("browser.tabs.loadBookmarksInTabs", true);

// [PF] Forza i link esterni ad aprirsi in una nuova scheda
defaultPref("browser.link.open_newwindow.override.external", 3);

// [PF] Apri le nuove schede in background
defaultPref("browser.tabs.loadDivertedInBackground", true);

// [PF] Apri i segnalibri in background
defaultPref("browser.tabs.loadBookmarksInBackground", true);

// [PF] Impedisce la chiusura automatica del menu dei segnalibri
defaultPref("browser.bookmarks.openInTabClosesMenu", false);

// [PF] Apri le nuove schede subito dopo quella attuale
defaultPref("browser.tabs.insertAfterCurrent", true);

// [PF] Lascia il browser aperto alla chiusura dell'ultima scheda
defaultPref("browser.tabs.closeWindowWithLastTab", false);

// Abilita Slit View
defaultPref("browser.tabs.splitView.enabled", true);

/* -----------------------------------------------------------------------------------
   FINE
   ----------------------------------------------------------------------------------- */

lockPref("rischio.fox", "146.5");
