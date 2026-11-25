
/*  ██▀███  ██▓ ██████ ▄████▄  ██░ ██ ██▓▒█████       █████▒█████ ▒██   ██▒ */
/* ▓██ ▒ ██▓██▒██    ▒▒██▀ ▀█ ▓██░ ██▓██▒██▒  ██▒   ▓██   ▒██▒  ██▒▒ █ █ ▒░ */
/* ▓██ ░▄█ ▒██░ ▓██▄  ▒▓█    ▄▒██▀▀██▒██▒██░  ██▒   ▒████ ▒██░  ██░░  █   ░ */
/* ▒██▀▀█▄ ░██░ ▒   ██▒▓▓▄ ▄██░▓█ ░██░██▒██   ██░   ░▓█▒  ▒██   ██░░ █ █ ▒  */
/* ░██▓ ▒██░██▒██████▒▒ ▓███▀ ░▓█▒░██░██░ ████▓▒░   ░▒█░  ░ ████▓▒▒██▒ ▒██▒ */
/* ░ ▒▓ ░▒▓░▓ ▒ ▒▓▒ ▒ ░ ░▒ ▒  ░▒ ░░▒░░▓ ░ ▒░▒░▒░     ▒ ░  ░ ▒░▒░▒░▒▒ ░ ░▓ ░ */
/*   ░▒ ░ ▒░▒ ░ ░▒  ░ ░ ░  ▒   ▒ ░▒░ ░▒ ░ ░ ▒ ▒░     ░      ░ ▒ ▒░░░   ░▒ ░ */
/*   ░░   ░ ▒ ░  ░  ░ ░        ░  ░░ ░▒ ░ ░ ░ ▒      ░ ░  ░ ░ ░ ▒  ░    ░   */
/*    ░     ░       ░ ░ ░      ░  ░  ░░     ░ ░               ░ ░  ░    ░   */

/*
INDICE:
   001: UX
   002: AVVIO
   003: RICERCA
   004: I/O
   005: DOWNLOADS
   006: INTERFACCIA
   007: SCHEDE
   008: CREDENZIALI
   009: CONNESSIONI
   010: MULTIMEDIA
   011: PDF
   012: ESTENSIONI
   013: SICUREZZA
   014: PRIVACY
*/

/* -----------------------------------------------------------------------------------
   001: UX
   ----------------------------------------------------------------------------------- */

// Telemetria e rollout: già in policies.json. Niente crash report o esperimenti remoti
lockPref("breakpad.reportURL", "");
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
lockPref("browser.crashReports.onDemand", false);
lockPref("browser.tabs.crashReporting.sendReport", false);
lockPref("app.normandy.enabled", false);

// Disabilita avviso in `about:config`
lockPref("browser.aboutConfig.showWarning", false);

// Previene le pagine "What's New"
lockPref("browser.startup.homepage_override.mstone", "ignore");

// Disabilita estensioni suggerite
lockPref("browser.discovery.enabled", false);

// Nasconde la voce "Recommendations" nel menu Add-ons
lockPref("extensions.getAddons.showPane", false);

// Nasconde le estensioni consigliate
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disattiva richieste di feedback
lockPref("messaging-system.askForFeedback", false);

// Disabilita promozioni
lockPref("browser.promo.pin.enabled", false);
lockPref("browser.vpn_promo.enabled", false);
lockPref("browser.promo.relay.enabled", false);
lockPref("browser.contentblocking.report.show_mobile_app", false);
lockPref("browser.ipProtection.blockIPProtectionCallouts", true);

// Disabilita UITour
lockPref("browser.uitour.enabled", false);

// Ignora i Termini d'Uso
lockPref("termsofuse.bypassNotification", true);

/* -----------------------------------------------------------------------------------
   002: AVVIO
   ----------------------------------------------------------------------------------- */

// INDECISO: bloccare il passaggio della ricerca alla barra degli indirizzi?
// lockPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// Nasconde il logo
lockPref("browser.newtabpage.activity-stream.hideLogo", true);

// Widgets
defaultPref("browser.newtabpage.activity-stream.widgets.system.enabled", true);

// Rimuove scorciatoie predefinite
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
lockPref("browser.topsites.useRemoteSetting", false);

/* -----------------------------------------------------------------------------------
   003: RICERCA
   ----------------------------------------------------------------------------------- */

// Motore di ricerca separato in privato
defaultPref("browser.search.separatePrivateDefault.featureGate", true);
defaultPref("browser.search.separatePrivateDefault.enabled", true);

// Nessuna ricerca recente o sito frequente nel dropdown della urlbar
defaultPref("browser.urlbar.suggest.recentsearches", false); // default=true
defaultPref("browser.urlbar.suggest.topsites", false); // default=true

// Urlbar: 5 risultati invece di 10
defaultPref("browser.urlbar.maxRichResults", 5); // default=10

// Forza Punycode per i domini IDN
defaultPref("network.IDN_show_punycode", true);

/* -----------------------------------------------------------------------------------
   004: I/O
   ----------------------------------------------------------------------------------- */

// Imposta limite cache su disco a 128 MB fissi
lockPref("browser.cache.disk.smart_size.enabled", false);
defaultPref("browser.cache.disk.capacity", 131072);

// Read-ahead cache su disco: 2 MB invece di 1 [RAM: 8 GB+]
defaultPref("browser.cache.disk.preload_chunk_count", 8); // default=4

// Indice della cache su RAM: meno seek su disco, nessun nuovo dato persistente [RAM: 8 GB+]
defaultPref("browser.cache.disk.metadata_memory_limit", 4096); // default=1024 KB

// Cache RAM: FF160 limita l'auto-sizing a 32 MB anche con 31 GB [RAM: 8 GB+]
defaultPref("browser.cache.memory.capacity", 131072); // default=-1
defaultPref("browser.cache.memory.max_entry_size", 32768); // default=5120 [RAM: 16 GB+]

// Sessione: salvataggio ogni 30 min, nessun dato sensibile scritto su disco, limita il numero di schede chiuse in memoria.
defaultPref("browser.sessionstore.interval", 1800000); // default=15000
defaultPref("browser.sessionstore.privacy_level", 2); // default=0
defaultPref("browser.sessionstore.max_tabs_undo", 5); // default=25

// Ripristino schede differito: avvio più leggero
defaultPref("browser.sessionstore.restore_on_demand", true);

// Niente miniature delle pagine
lockPref("browser.pagethumbnails.capturing_disabled", true);

// Niente database dei traccianti
lockPref("browser.contentblocking.database.enabled", false);

/* -----------------------------------------------------------------------------------
   005: DOWNLOADS
   ----------------------------------------------------------------------------------- */

// Chiede l'app per i tipi di file non associati
lockPref("browser.download.always_ask_before_handling_new_types", true);

// Blocca i download automatici ripetuti senza click
lockPref("browser.download.enable_spam_prevention", true);

// Nel dialog dei tipi sconosciuti resta solo "Salva"
defaultPref("browser.download.forbid_open_with", true);

// Niente download nei file recenti del sistema
lockPref("browser.download.manager.addToRecentDocs", false);

// Niente verifica remota dei download: restano le liste locali
defaultPref("browser.safebrowsing.downloads.remote.enabled", false);

/* -----------------------------------------------------------------------------------
   006: INTERFACCIA
   ----------------------------------------------------------------------------------- */

// Carica stili CSS personalizzati (se presenti) nel profilo utente
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Cache di rendering
// Font su RAM: utile su pagine ricche di testo [RAM: 16 GB+]
defaultPref("gfx.content.skia-font-cache-size", 128); // default=5 MB
// Canvas su GPU/RAM: se il testo si vede garbled, torna a 512 [RAM: 16 GB+]
defaultPref("gfx.canvas.accelerated.cache-size", 1024); // default=256
// Più oggetti canvas in cache [RAM: 16 GB+]
defaultPref("gfx.canvas.accelerated.cache-items", 16384); // default=8192
// Non decodificare immagini fuori schermo [FF161] [RAM: 4 GB+]
defaultPref("image.decode.defer_if_not_visible", true);
// Non scaricare i frame di immagini inattive: tab switch più veloci [RAM: 16 GB+]
defaultPref("image.mem.discardable", false);
defaultPref("image.mem.animated.discardable", false);
// Surface cache delle immagini fino a 4 GB invece di ~2 GB [RAM: 16 GB+]
defaultPref("image.mem.surfacecache.max_size_kb", 4194304); // default=2024*1024

// Nasconde barra del titolo
defaultPref("browser.tabs.inTitlebar", 1);

// Strumenti nella nuova Sidebar
defaultPref("sidebar.main.tools", "bookmarks,aichat,syncedtabs,passwords,history");

// Abilita Vertical Tabs
defaultPref("sidebar.verticalTabs", true);
defaultPref("sidebar.visibility", "expand-on-hover");

// Disabilita l'avviso quando un video passa a schermo intero
lockPref("full-screen-api.warning.timeout", 0);

// Mostra "More settings" sulle anteprime di stampa
defaultPref("print.more-settings.open", true);

// Mostra "Compact`in "Customize Toolbar"
defaultPref("browser.compactmode.show", true);

// Mostra "View Image Info" nel menu contestuale
defaultPref("browser.menu.showViewImageInfo", true);

// Previene chiusura automatica dei menu quando si apre un segnalibro
defaultPref("browser.bookmarks.openInTabClosesMenu", false);

// Mostra "Always ask" per permessi di camera e microfono
defaultPref("permissions.media.show_always_ask.enabled", true);

// Disabilita fastidioso avviso Web Speech API error
defaultPref("media.webspeech.synth.dont_notify_on_error", true);

// Disabilita fastidioso avviso del traduttore
defaultPref("browser.translations.automaticallyPopup", false);

// Mostra caratteri nascosti
defaultPref("layout.css.control-characters.visible", true);

// Mostra icona per svuotare search boxes
defaultPref("layout.forms.input-type-search.enabled", true);

// Mostra animazione cursore durante caricamenti
defaultPref("browser.spin_cursor_while_busy", true);

// Nasconde logo nei QR code generati con Firefox
defaultPref("browser.shareqrcode.embed_logo", false);

// Mostra maggiori informazioni sulle pagine bloccate da Safe Browsing
defaultPref("browser.xul.error_pages.show_safe_browsing_details_on_load", true);

// Più dettagli in about:processes e nelle impostazioni
defaultPref("toolkit.aboutProcesses.showAllSubframes", true);
defaultPref("toolkit.aboutProcesses.showThreads", true);
defaultPref("browser.preferences.defaultPerformanceSettings.enabled", false);

// [PF] Impedisce al puntatore del mouse di nascondersi mentre si digita
defaultPref("widget.gtk.hide-pointer-while-typing.enabled", false); // [Linux]

// Permette zoom utente ignorando i blocchi imposti dai siti web
defaultPref("browser.ui.zoom.force-user-scalable", true);

// Consente all'utente di rimpicciolire la pagina oltre i limiti
defaultPref("apz.allow_zooming_out", true);

// Abilita di default le funzioni di modifica avanzata (tabelle, posizionamento e ridimensionamento) nell'editor integrato
defaultPref("editor.inline_table_editing.enabled_by_default", true);
defaultPref("editor.positioning.enabled_by_default", true);
defaultPref("editor.resizing.enabled_by_default", true);

/* -----------------------------------------------------------------------------------
   007: SCHEDE
   ----------------------------------------------------------------------------------- */

// Non chiudere finestra del browser quando si chiude l'ultima scheda
defaultPref("browser.tabs.closeWindowWithLastTab", false);

// Più processi contenuto in parallelo [RAM: 16 GB+]
defaultPref("dom.ipc.processCount", 12); // default=8
defaultPref("dom.ipc.processCount.webIsolated", 8); // default=4

// Cronologia avanti/indietro: 20 voci invece di 50
defaultPref("browser.sessionhistory.max_entries", 20); // default=50

// Forza apertura pop-ups in nuove schede
defaultPref("browser.link.open_newwindow.restriction", 0);

// Forza l'apertura dei link esterni nel Container predefinito
defaultPref("browser.link.force_default_user_context_id_for_external_opens", true);

// Apre segnalibri in una nuova scheda
defaultPref("browser.tabs.loadBookmarksInTabs", true);

// Abilita dissolvenza delle Unloaded Tabs
defaultPref("browser.tabs.fadeOutUnloadedTabs", true);

// Abilita note per le schede
defaultPref("browser.tabs.notes.enabled", true);

// Blocca ricerca degli appunti quando si apre una nuova scheda cliccando con il tasto centrale del mouse
defaultPref("browser.tabs.searchclipboardfor.middleclick", false);

// [PF] Apri le nuove schede in background
defaultPref("browser.tabs.loadDivertedInBackground", true);

// [PF] Apri i segnalibri in background
defaultPref("browser.tabs.loadBookmarksInBackground", true);

// [PF] Apri le nuove schede subito dopo quella attuale
defaultPref("browser.tabs.insertAfterCurrent", true);

// Disabilita l'anteprima delle schede al passaggio del mouse
defaultPref("browser.tabs.hoverPreview.enabled", false);
defaultPref("browser.tabs.hoverPreview.showThumbnails", false);

/* -----------------------------------------------------------------------------------
   008: CREDENZIALI
   ----------------------------------------------------------------------------------- */

// Disabilita l'autocompilazione automatica di username e password
lockPref("signon.autofillForms", false);

// Mostra tasto per rivelare password
defaultPref("layout.forms.reveal-password-button.enabled", true);

// Cattura limitata ai moduli HTML standard
defaultPref("signon.privateBrowsingCapture.enabled", false);
defaultPref("signon.formlessCapture.enabled", false);
defaultPref("signon.capture.inputChanges.enabled", false);
defaultPref("signon.formRemovalCapture.enabled", false);

// Solo ricette di login locali, niente Remote Settings
defaultPref("signon.recipes.remoteRecipes.enabled", false);

// Disable password truncation
defaultPref("editor.truncate_user_pastes", false);

// Consente l'autenticazione HTTP per le risorse secondarie solo se sono dello stesso dominio
defaultPref("network.auth.subresource-http-auth-allow", 1);

// Estende i controlli di monitoraggio delle credenziali compromesse all'architettura Fission per i campi di login ad alto valore
defaultPref("fission.highValue.login.monitor", true);

/* -----------------------------------------------------------------------------------
   009: CONNESSIONI
   ----------------------------------------------------------------------------------- */

// Impedisce a Firefox di passare automaticamente alla modalità offline
defaultPref("network.manage-offline-status", false);

// DNS cache più capiente e TTL più lungo: meno query DoH verso Quad9
defaultPref("network.dnsCacheEntries", 8192); // default=3200
defaultPref("network.dnsCacheExpiration", 300); // default=60
defaultPref("network.dnsNegativeCacheExpiration", 300); // default=60 su Release

// Buffer di rete più grandi [RAM: 8 GB+]
defaultPref("network.buffer.cache.count", 48); // default=24
defaultPref("network.buffer.cache.size", 65536); // default=32768

// HTTP/1.1: 10 connessioni per server invece di 6 (con proxy conta il limite per-proxy, già 32)
defaultPref("network.http.max-persistent-connections-per-server", 10); // default=6

// Mostra subito i dettagli tecnici e il tasto di avanzamento negli errori HTTPS
defaultPref("browser.xul.error_pages.expert_bad_cert", true);

// Disabilita OCSP: Firefox usa CRLite, le revoche Jacob non arrivano in tempo
lockPref("security.OCSP.enabled", 0);

// Disabilita l'invio di una richiesta HTTP in background per verificare la disponibilità del sito
defaultPref("dom.security.https_only_mode_send_http_background_request", false);

// Disabilita l'invio di Early Data nelle riconnessioni TLS 1.3
defaultPref("network.http.http3.enable_0rtt", false);
defaultPref("security.tls.enable_0rtt_data", false);

// Nessuna connessione o prefetch speculativo: possono bypassare uBlock
defaultPref("network.preconnect", false);
defaultPref("network.prefetch-next", false);
defaultPref("browser.urlbar.speculativeConnect.enabled", false);
defaultPref("network.http.speculative-parallel-limit", 0);
defaultPref("browser.places.speculativeConnect.enabled", false);
defaultPref("network.early-hints.preconnect.enabled", false);

// Niente Compression Dictionary Transport (dizionari condivisi e header Available-Dictionary: nuova superficie di tracking/compatibilità) [FF161]
defaultPref("network.http.dictionaries.enable", false);

// Nessuna riattivazione automatica di CA radice su errori TLS
lockPref("security.certerrors.mitm.auto_enable_enterprise_roots", false);

// Nessuna richiesta canary a mitmdetection.services.mozilla.com su errori TLS
defaultPref("security.certerrors.mitm.priming.enabled", false);

// Nessun Referer meno restrittivo richiesto dai siti nelle navigazioni
defaultPref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true);

// Nessun report CSP: leakano URL e referrer della navigazione
defaultPref("security.csp.reporting.enabled", false);

// Pinning strict e rifiuto server senza rinegoziazione sicura (RFC 5746)
defaultPref("security.cert_pinning.enforcement_level", 2);
defaultPref("security.ssl.require_safe_negotiation", true);

// Disabilita l'uso degli identificatori di sessione SSL/TLS (Session IDs)
defaultPref("security.ssl.disable_session_identifiers", true);

// DNS remoto lato proxy anche con SOCKS4 (in SOCKS5 è già il default)
defaultPref("network.proxy.socks_remote_dns", true);

// Nessun probe periodico IPv4/IPv6 verso firefox-portal-detection.com
defaultPref("network.connectivity-service.enabled", false);

// WebRTC: dentro il proxy se presente, e una sola interfaccia per i candidati ICE
defaultPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
defaultPref("media.peerconnection.ice.default_address_only", true);

/* -----------------------------------------------------------------------------------
   010: MULTIMEDIA
   ----------------------------------------------------------------------------------- */

// Ogni video idoneo al PiP, anche i corti (barra degli indirizzi e scorciatoie)
defaultPref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);

// Non permettere ai siti di bloccare Picture-in-Picture
defaultPref("media.videocontrols.picture-in-picture.respect-disablePictureInPicture", false);

// Nasconde fastidioso tasto Picture-in-Picture sui video
defaultPref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

// Blocca riproduzione automatica dei media che non sono stati cliccati direttamente
defaultPref("media.autoplay.blocking_policy", 2);

// Media fino a 128 MB in RAM invece che su disco [RAM: 16 GB+] (limiti: 512 MB e 5% RAM)
defaultPref("media.memory_cache_max_size", 131072);

// Forza i media ad usare la cache in RAM durante navigazione anonima
lockPref("browser.privatebrowsing.forceMediaMemoryCache", true);

/* -----------------------------------------------------------------------------------
   011: PDF
   ----------------------------------------------------------------------------------- */

// Disabilita JavaScript nei PDF
defaultPref("pdfjs.enableScripting", false);

// Disabilita XFA
defaultPref("pdfjs.enableXfa", false);

// Apre i link in una nuova scheda
defaultPref("pdfjs.externalLinkTarget", 2);

// Evita che il browser tenti di aprire file sconosciuti come PDF
defaultPref("pdfjs.handleOctetStream", false);

// Aggiorna URL quando cambia la pagina nel lettore PDF
defaultPref("pdfjs.historyUpdateUrl", true);

// Verifica le firme digitali dei PDF (default desktop: false)
defaultPref("pdfjs.enableSignatureVerification", true);

/* -----------------------------------------------------------------------------------
   012: ESTENSIONI
   ----------------------------------------------------------------------------------- */

// Limita l'esecuzione delle estensioni solo a quelle nel profilo o integrate
defaultPref("extensions.enabledScopes", 5);

// Nessuna cache dei metadati AMO (consigli e pannello già bloccati in 002)
defaultPref("extensions.getAddons.cache.enabled", false);

// Disabilita mozAddonManager
defaultPref("privacy.resistFingerprinting.block_mozAddonManager", true);

// Disabilita il provider di componenti aggiuntivi per i permessi dei siti
defaultPref("dom.sitepermsaddon-provider.enabled", false);

// Permette l'installazione delle estensioni unicamente ai domini e alle origini autorizzate
defaultPref("extensions.install_origins.enabled", true);

// Non concedere automaticamente l'accesso a tutti i siti web alle estensioni
defaultPref("extensions.originControls.grantByDefault", false);

// Limita caricamenti di URL non sicuri all'interno dei popup per le estensioni Manifest V2
defaultPref("extensions.manifestV2.actionsPopupURLRestricted", true);

// Impedisce alle estensioni di aprire popup o pannelli senza un'interazione diretta dell'utente
defaultPref("extensions.openPopupWithoutUserGesture.enabled", false);

// Rimuove qualsiasi estensione dalla lista di quelle autorizzate ad accedere alle API del Gecko Profiler
lockPref("extensions.geckoProfiler.acceptedExtensionIds", "");

// Blocca aggiornamenti per le definizioni dei motori di ricerca
defaultPref("browser.search.searchEnginesURL", "");

/* -----------------------------------------------------------------------------------
   013: SICUREZZA
   ----------------------------------------------------------------------------------- */

// Impedisce alle pagine in background di richiamare selettori di file nativi del sistema
defaultPref("browser.disable_pickers_in_hidden_extension_pages", true);

// Disabilita il supporto di compatibilità per i vecchi componenti interni di Firefox
defaultPref("dom.use_components_shim", false);

// Vieta il caricamento di script remoti all'interno delle pagine privilegiate di Firefox (pagine "about:")
defaultPref("security.disallow_privilegedabout_remote_script_loads", true);

// Mantiene attive le mitigazioni hardware e software contro gli attacchi Spectre per i contenuti isolati
defaultPref("javascript.options.spectre.disable_for_isolated_content", false);

// Applica la policy W^X anche al codice JIT dei processi contenuto
defaultPref("javascript.options.content_process_write_protect_code", true);

// Vieta le riservazioni di memoria WebAssembly oltre i 2-4 GB
defaultPref("javascript.options.wasm_disable_huge_memory", true);

// Blocca l'esecuzione di script caricati tramite protocollo file:// se hanno un MIME type errato
defaultPref("security.block_fileuri_script_with_wrong_mime", true);

// Nuovi formati clipboard cross-origin restano negati [FF161]
defaultPref("clipboard.readCrossOriginCustomFormats.enabled", false);

// Nessun handling "magic" dei file-backed DOM blob [FF161]
defaultPref("dom.file.allowMagicFiles", false);

// Limita gli eventi che possono aprire una nuova finestra o popup
defaultPref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");

// Forza il raggruppamento predefinito dei documenti in "Origin Agent Clusters" isolati
defaultPref("dom.origin_agent_cluster.default", true);

// Impedisce il riutilizzo dei processi esistenti per i sotto-frame in Fission
defaultPref("browser.tabs.remote.subframesPreferUsed", false);

/* -----------------------------------------------------------------------------------
   014: PRIVACY
   ----------------------------------------------------------------------------------- */

// Limita i font visibili al CSS a font base e language pack (no font installati)
defaultPref("layout.css.font-visibility", 2);

// Non esporre l'accento del tema alle pagine web
defaultPref("widget.non-native-theme.use-theme-accent", false);

// Sostituisce i colori di sistema con valori fissi nei contenuti web
defaultPref("ui.use_standins_for_native_colors", true);

// Abilita Global Privacy Control
lockPref("privacy.globalprivacycontrol.enabled", true);

// Taglia l'URL del Referrer inviato a siti di terze parti mantenendo solo lo schema, l'host e la porta (rimuovendo il percorso e i parametri)
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2);

// Taglia anche il Referer same-origin a schema+host+porta
defaultPref("network.http.referer.trimmingPolicy", 2);

// Limita la memorizzazione dei cookie e dello storage per i contenuti di terze parti integrati nelle pagine
defaultPref("privacy.dynamic_firstparty.limitForeign", true);

// Isola le risorse caricate dagli script delle estensioni per evitare il tracciamento tra siti diversi
defaultPref("privacy.antitracking.isolateContentScriptResources", true);

// Isola lo stato di rete anche quando c'è un proxy configurato
defaultPref("privacy.partition.network_state.connection_with_proxy", true);

// Disabilita le euristiche di concessione storage dopo interazioni e aperture di finestre
defaultPref("privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction", false);
defaultPref("privacy.restrict3rdpartystorage.heuristic.recently_visited_time", 0);

// Disabilita l'assegnazione automatica dei permessi di accesso allo storage per i siti di terze parti
defaultPref("dom.storage_access.auto_grants", false);

// Abilita la scadenza automatica dei permessi concessi ai siti web se non vengono utilizzati per un certo periodo
defaultPref("permissions.expireUnused.enabled", true);

// Isola i permessi dei siti web in base ai Container
defaultPref("permissions.isolateBy.userContext", true);

// Applica l'attributo SameSite=Lax di default ai cookie
defaultPref("network.cookie.sameSite.laxByDefault", true);
defaultPref("network.cookie.sameSite.schemeful", true);

// Usa BeaconDB al posto delle API di Google per la geolocalizzazione
defaultPref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");

// Disabilita Geoclue
defaultPref("geo.provider.use_geoclue", false); // [Linux]

// Disabilita il rilevamento della regione via IP da parte dei server Mozilla
defaultPref("browser.region.network.url", "");
defaultPref("browser.region.update.enabled", false);

// L'assistente AI della sidebar non riceve posizione approssimata [FF161]
defaultPref("browser.smartwindow.location.enabled", false);

/* -----------------------------------------------------------------------------------
   FINE
   ----------------------------------------------------------------------------------- */

lockPref("rischio.fox", "161");
