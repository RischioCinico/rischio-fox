
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

- PAGINA INIZIALE: configura l'homepage di Firefox
- TRACCE SU DISCO: gestisce la cache, la cronologia e i dati salvati localmente.
- FILE SCARICATI: controlla il comportamento di download.
- TRACKING PROTECTION: attiva le misure anti-tracciamento di Firefox.
- FINGERPRINTING: protegge dall'identificazione tramite l'impronta digitale del browser.
- DNS: configura il DNS over HTTPS per connessioni sicure.
- PROXY: gestisce il comportamento del proxy.
- CONNESSIONI SICURE: imposta le regole per HTTPS e la validazione dei certificati.
- CONNESSIONI IMPLICITE: disabilita le connessioni non richieste.
- GESTIONE CREDENZIALI: controlla password e compilazione automatica.
- GEOLOCALIZZAZIONE: gestisce l'accesso alla tua posizione.
- CONTENUTI MULTIMEDIALI: gestisce la riproduzione automatica e i plugin.
- WEBRTC: previene le fughe di indirizzi IP.
- PDF: gestisce la sicurezza del lettore PDF.
- ESTENSIONI: imposta le regole per le estensioni.
- SICUREZZA AVANZATA: include preferenze di sicurezza varie.
- BARRE DI RICERCA: configura la barra degli indirizzi e di ricerca.
- ELEMENTI FASTIDIOSI: rimuove i pop-up e le notifiche indesiderate.
- INTERFACCIA: impostazioni che modificano l'aspetto del browser.
- ORTOGRAFIA E DIZIONARI: traduttore e correttore automatico.
- GESTIONE SCHEDE: gestisce il comportamento delle schede
- PRESTAZIONI
- INTELLIGENZA ARTIFICIALE

***/

/* -----------------------------------------------------------------------------------
   PAGINA INIZIALE
   ----------------------------------------------------------------------------------- */

// Imposta i siti preferiti nella pagina iniziale
defaultPref("browser.newtabpage.pinned", "[{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://it.wikipedia.org/wiki/Pagina_principale\",\"label\":\"Wikipedia\"},{\"url\":\"https://github.com/\",\"label\":\"GitHub\"},{\"url\":\"https://www.diretta.it/\",\"label\":\"Diretta\"}]");

// Imposta sfondo
defaultPref("browser.newtabpage.activity-stream.feeds.wallpaperfeed", true);
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.wallpaper", "dark-landscape");

// Blocca la telemetria legata alla homepage
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);

// Disabilita completamente Discovery Stream (include Fakespot, Pocket, e annunci)
lockPref("browser.newtabpage.activity-stream.discoverystream.enabled", false);

// Disabilita la sezione Highlights (include tutti i contenuti)
lockPref("browser.newtabpage.activity-stream.section.highlights.enabled", false);

// Disabilita completamente il sistema di annunci
lockPref("browser.newtabpage.activity-stream.unifiedAds.enabled", false);
lockPref("browser.topsites.contile.enabled", false);

// Disabilita le promozioni per il download mobile
lockPref("browser.newtabpage.activity-stream.mobileDownloadModal.enabled", false);

// Disabilita il sistema di messaggistica interna di Firefox
lockPref("browser.newtabpage.activity-stream.asrouter.enabled", false);

// Disabilita il download di impostazioni remote per i "Siti più visitati"
lockPref("browser.topsites.useRemoteSetting", false);

// Disabilita le ricerche di tendenza
defaultPref("browser.newtabpage.activity-stream.trendingSearch.enabled", false);

// Blocca l'highlight dei nuovi sfondi
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.highlightDismissed", true);

// Nasconde il logo di Firefox dalla pagina iniziale
defaultPref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);

// Impedisce il passaggio dei dati di ricerca alla barra degli indirizzi
defaultPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// Rimuove i collegamenti predefiniti e le scorciatoie di ricerca
lockPref("browser.newtabpage.activity-stream.default.sites", "");
lockPref("browser.newtabpage.activity-stream.improvesearch.noDefaultSearchTile", true);
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "");
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");

/* -----------------------------------------------------------------------------------
   TRACCE SU DISCO
   ----------------------------------------------------------------------------------- */

// Abilita la cancellazione dei dati alla chiusura di Firefox
lockPref("privacy.sanitize.sanitizeOnShutdown", true);

// Elimina la cache e previene l'eliminazione accidentale di altri dati
lockPref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", false);
lockPref("privacy.clearOnShutdown_v2.cache", true);
lockPref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);
lockPref("privacy.clearOnShutdown_v2.formdata", false);
lockPref("privacy.clearOnShutdown_v2.siteSettings", false);

// Disabilita cache su disco
lockPref("browser.cache.disk.enable", false);
lockPref("browser.cache.disk_cache_ssl", false);

// Diminuisce il numero di salvataggi delle schede chiuse
lockPref("browser.sessionstore.max_tabs_undo", 5);

// Disabilita la cache Indietro/Avanti (bfcache)
lockPref("browser.sessionhistory.max_total_viewers", 0);
lockPref("fission.bfcacheInParent", false);

// Disabilita la generazione di miniature delle pagine
lockPref("browser.pagethumbnails.capturing_disabled", true); // [Nascosta]

// Disabilita la cronologia di ricerca e dei moduli
defaultPref("browser.formfill.enable", false);

// Limita lo storage temporaneo (es. IndexedDB)
lockPref("dom.quotaManager.temporaryStorage.fixedLimit", 52428800);

// Aumenta l'intervallo di salvataggio automatico della sessione per ridurre le scritture su disco
defaultPref("browser.sessionstore.interval", 300000); // 5 minuti

// Impedisce il salvataggio di dati extra e non necessari nella sessione
lockPref("browser.sessionstore.privacy_level", 2);

// Impedisce la scrittura della cache multimediale su disco nelle finestre private
lockPref("browser.privatebrowsing.forceMediaMemoryCache", true);

// Limita la durata massima dei cookie a 6 mesi
defaultPref("network.cookie.maxageCap", 15552000);

// Impedisce la creazione di registri dei domini bloccati
lockPref("browser.contentblocking.cfr-milestone.enabled", false);
lockPref("browser.contentblocking.cfr-milestone.milestone-shown-time", "999999999"); // [Nascosta]
lockPref("browser.contentblocking.cfr-milestone.update-interval", 0); // [Nascosta]
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

// Previene l'aggiunta di tracce al sistema e alla cronologia del browser
lockPref("browser.download.manager.addToRecentDocs", false);
lockPref("browser.download.clearHistoryOnDelete", 2);

// Impedisci apertura automatica finestra download
lockPref("browser.download.alwaysOpenPanel", false);

/* -----------------------------------------------------------------------------------
   TRACKING PROTECTION
   ----------------------------------------------------------------------------------- */

// Abilita Enhanced Tracking Protection
lockPref("browser.contentblocking.category", "strict");

// Applica eccezioni per evitare malfunzionamenti delle pagine
defaultPref("privacy.trackingprotection.allow_list.baseline.enabled", true);
defaultPref("privacy.trackingprotection.allow_list.convenience.enabled", true);

// Abilita i Container
lockPref("privacy.userContext.enabled", true);
lockPref("privacy.userContext.ui.enabled", true);
defaultPref("permissions.isolateBy.userContext", true);
defaultPref("browser.link.force_default_user_context_id_for_external_opens", true);

// Isola le risorse iniettate dalle estensioni
defaultPref("privacy.antitracking.isolateContentScriptResources", true);

// Abilita Do Not Track & Global Privacy Control
lockPref("privacy.donottrackheader.enabled", true);
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

// Disabilita i selettori CSS per i link visitati per prevenire il "history sniffing"
lockPref("layout.css.visited_links_enabled", false);

// Disabilita l'API della batteria per prevenire il fingerprinting
defaultPref("dom.battery.enabled", false);

// Rimuove stringhe di identificazione
lockPref("app.distributor", "");
lockPref("app.distributor.channel", "");
lockPref("mozilla.partner.id", "");

/* -----------------------------------------------------------------------------------
   DNS
   ----------------------------------------------------------------------------------- */

// Abilita protezione massima per DoH
lockPref("network.trr.mode", 3);

// Disabilita completamente il prefetch DNS non richiesto
lockPref("network.dns.disablePrefetch", true);
lockPref("network.dns.disablePrefetchFromHTTPS", true);

// Disabilita il caching delle risposte DNS
lockPref("network.dnsCacheEntries", 0);

// Disabilita i controlli di connettività DoH di Firefox
lockPref("network.connectivity-service.DNS_HTTPS.domain", "");
lockPref("network.trr.confirmationNS", "skip");
lockPref("network.trr.skip-check-for-blocked-host", true);

// Disabilita i "listener" di rete che aggiornano le impostazioni dal sistema operativo
lockPref("network.notify.changed", false);
lockPref("network.notify.checkForNRPT", false);
lockPref("network.notify.checkForProxies", false);
lockPref("network.notify.dnsSuffixList", false);
lockPref("network.notify.initial_call", false);
lockPref("network.notify.IPv6", false);
lockPref("network.notify.resolvers", false);

// Risolvi i problemi di connettività IPv6 quando il DoH è abilitato
lockPref("network.dns.preferIPv6", true);

// Impedisci il bypass del DoH per le voci del file hosts
lockPref("network.trr.exclude-etc-hosts", false);

/* -----------------------------------------------------------------------------------
   PROXY
   ----------------------------------------------------------------------------------- */

// Impedisci il failover automatico a connessioni dirette (non-proxy)
lockPref("network.proxy.failover_direct", false);

// Impedisci di bypassare il proxy anche quando il sistema lo richiede
lockPref("network.proxy.allow_bypass", false);

// Usa il proxy per la risoluzione DNS remota (previene i DNS leaks)
lockPref("network.proxy.socks_remote_dns", true);

// Disabilita la gestione dei percorsi di sistema (es. file:///net)
lockPref("network.file.path_blacklist", "/net");

// Disabilita i percorsi UNC di Windows per prevenire il rischio di perdite di dati
lockPref("network.file.disable_unc_paths", true);

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

// Disabilita i cifrari obsoleti e non sicuri basati su SHA-1
defaultPref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
defaultPref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);

// Disabilita l'invio di richieste HTTP in background nella modalità Solo HTTPS
defaultPref("dom.security.https_only_mode_send_http_background_request", false);

// Disabilita i certificati root di terze parti a livello di sistema operativo per prevenire gli attacchi MITM
lockPref("security.certerrors.mitm.auto_enable_enterprise_roots", false);
lockPref("security.enterprise_roots.enabled", false);

// Assicura che HTTP/3 non venga disabilitato in presenza di certificati root di terze parti
defaultPref("network.http.http3.disable_when_third_party_roots_found", false);

// Disabilita TLS 1.3 0-RTT per prevenire attacchi
defaultPref("network.http.http3.enable_0rtt", false);
defaultPref("security.tls.enable_0rtt_data", false);

// Abilita i controlli di revoca CRLite e dà loro la priorità su OCSP
defaultPref("security.pki.crlite_mode", 2);
defaultPref("security.remote_settings.crlite_filters.enabled", true);

// Disabilita completamente i controlli di revoca OCSP (obsoleto)
lockPref("security.ocsp.enabled", 0);
lockPref("security.OCSP.require", false);

// Fornisce una protezione extra bloccando completamente le connessioni in caso di mancata corrispondenza del certificato
defaultPref("security.cert_pinning.enforcement_level", 2);

// Impone l'uso di HTTPS il più possibile, anche per indirizzi locali
defaultPref("dom.security.https_first_for_local_addresses", true);
defaultPref("dom.security.https_first_for_unknown_suffixes", true);
defaultPref("dom.security.https_only_mode.upgrade_local", true);

// Impedisci che i domini vengano esclusi automaticamente dalla modalità Solo HTTPS
defaultPref("dom.security.https_first_add_exception_on_failure", false);

// Consenti solo override temporanei per gli errori del certificato (per sessione)
defaultPref("security.certerrors.permanentOverride", false);

// Richiede negoziazioni sicure della connessione
defaultPref("security.ssl.require_safe_negotiation", true);

// Mostra informazioni tecniche dettagliate sulle pagine di errore
defaultPref("browser.xul.error_pages.expert_bad_cert", true);

// Disabilita i report delle violazioni CSP
lockPref("security.csp.reporting.enabled", false);

/* -----------------------------------------------------------------------------------
   CONNESSIONI IMPLICITE
   ----------------------------------------------------------------------------------- */

// Disabilita Early Hints (come in Cromite)
lockPref("network.early-hints.enabled", false);
lockPref("network.early-hints.over-http-v1-1.enabled", false);
lockPref("network.early-hints.preconnect.enabled", false);
lockPref("network.early-hints.preconnect.max_connections", 0);

// Impedisci che il clic con il tasto centrale del mouse su una nuova scheda apra URL
lockPref("browser.tabs.searchclipboardfor.middleclick", false);

// Disabilita il monitoraggio dello stato della connessione di rete
defaultPref("network.manage-offline-status", false);
defaultPref("offline.autoDetect", false); // [LINUX] RedHat/Fedora-specific
defaultPref("toolkit.networkmanager.disable", true); // [LINUX] RedHat/Fedora-specific

// Disabilita l'API Beacon (Navigator.sendBeacon)
defaultPref("beacon.enabled", false);

// Blocca Crash Reports
lockPref("breakpad.reportURL", "");
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
lockPref("browser.crashReports.unsubmittedCheck.enabled", false);

/* -----------------------------------------------------------------------------------
   GESTIONE CREDENZIALI
   ----------------------------------------------------------------------------------- */

// Mostra sempre il pulsante "Mostra Password"
defaultPref("layout.forms.reveal-password-button.enabled", true);

// Disabilita Autofill per maggiore sicurezza
lockPref("signon.autofillForms", false);

// Disabilita il Password Manager per il riempimento di indirizzi e carte di credito
lockPref("extensions.formautofill.addresses.enabled", false);
lockPref("extensions.formautofill.creditCards.enabled", false);

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
   GEOLOCALIZZAZIONE
   ----------------------------------------------------------------------------------- */

// Blocca i prompt dei siti web per l'accesso alla geolocalizzazione
defaultPref("permissions.default.geo", 2);

// Abilita Geoclue per le distribuzioni GNU/Linux (più privato rispetto al servizio di rete)
defaultPref("geo.provider.use_geoclue", true); // [LINUX]

// Impedisci di fornire incondizionatamente un'alta precisione della posizione
defaultPref("geo.provider.geoclue.always_high_accuracy", false); // [LINUX]

// Imposta BeaconDB come provider di geolocalizzazione di rete predefinito
defaultPref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");

/* -----------------------------------------------------------------------------------
   CONTENUTI MULTIMEDIALI
   ----------------------------------------------------------------------------------- */

// Blocca la riproduzione automatica dei contenuti multimediali
lockPref("media.autoplay.default", 5);

// Abilita il pulsante Picture-in-Picture su tutti i video
defaultPref("media.videocontrols.picture-in-picture.respect-disablePictureInPicture", false);
pref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);

// Disabilita i plugin multimediali obsoleti (es. OpenH264)
lockPref("media.gmp-gmpopenh264.enabled", false);
lockPref("media.gmp.insecure.allow", false);
defaultPref("media.gmp-gmpopenh264.provider.enabled", false); // [LINUX] (per Fedora)

// Disabilita la registrazione dei log per i plugin multimediali
defaultPref("media.gmp.log.level", 70);

// Abilita la decodifica hardware per i video H.264
defaultPref("media.webrtc.hw.h264.enabled", true);

// Abilita i DRM
defaultPref("media.eme.enabled", true);
defaultPref("media.eme.require-app-approval", true);

// Disabilita il riconoscimento vocale online
defaultPref("media.webspeech.service.endpoint", "data:,"); // [Nascosta]

/* -----------------------------------------------------------------------------------
   WEBRTC
   ----------------------------------------------------------------------------------- */

// Previene i WebRTC IP leaks forzando l'uso del proxy
lockPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// Avvisa l'utente quando cambia scheda durante la condivisione dello schermo
lockPref("privacy.webrtc.sharedTabWarning", true);

// Disabilita l'indicatore globale WebRTC
lockPref("privacy.webrtc.hideGlobalIndicator", true);

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
defaultPref("pdfjs.enableAltTextForEnglish", true);

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
lockPref("extensions.install_origins.enabled", true);
lockPref("extensions.install.requireSecureOrigin", true); // [Nascosta]

// Disabilita l'assegnazione automatica di permessi pericolosi
lockPref("extensions.originControls.grantByDefault", false);
lockPref("extensions.manifestV2.actionsPopupURLRestricted", true);
lockPref("extensions.geckoProfiler.acceptedExtensionIds", "");
lockPref("extensions.content_web_accessible.enabled", true);

// Riduci la durata dei processi delle estensioni
defaultPref("dom.ipc.keepProcessesAlive.extension", 0); // [Nascosta]

// Disabilita Web Compatibility Reporter
lockPref("extensions.webcompat-reporter.enabled", false);
lockPref("ui.new-webcompat-reporter.enabled", false);

/* -----------------------------------------------------------------------------------
   SICUREZZA AVANZATA
   ----------------------------------------------------------------------------------- */

// Chiedi sempre permessi per usare camera & microfono
lockPref("permissions.media.show_always_ask.enabled", true);

// Disabilita l'API Safe Browsing obsoleta (v3)
lockPref("browser.safebrowsing.provider.google.lists", "disabled");

// Abilita un'ulteriore lista di blocco per i plugin di Mozilla
defaultPref("urlclassifier.blockedTable", "moztest-block-simple,mozplugin-block-digest256");

// Salta i reindirizzamenti Safe Browsing per migliorare le prestazioni
defaultPref("browser.safebrowsing.provider.google.reportURL", "https://transparencyreport.google.com/safe-browsing/search?url=");
defaultPref("browser.safebrowsing.provider.google4.reportURL", "https://transparencyreport.google.com/safe-browsing/search?url=");

// Disabilita i servizi di accessibilità
defaultPref("accessibility.force_disabled", 1);
defaultPref("devtools.accessibility.enabled", false);

// Disabilita Clipboard API per impedire ai siti di leggere il contenuto degli appunti
lockPref("dom.events.asyncClipboard.clipboardItem", false);
lockPref("dom.events.asyncClipboard.readText", false);
lockPref("dom.events.testing.asyncClipboard", false);

// Disabilita Content Analysis SDK
lockPref("browser.contentanalysis.default_result", 0);
lockPref("browser.contentanalysis.enabled", false);
lockPref("browser.contentanalysis.interception_point.clipboard.enabled", false);
lockPref("browser.contentanalysis.interception_point.drag_and_drop.enabled", false);
lockPref("browser.contentanalysis.interception_point.file_upload.enabled", false);
lockPref("browser.contentanalysis.interception_point.print.enabled", false);
lockPref("browser.contentanalysis.max_connections", 0);
lockPref("browser.contentanalysis.show_blocked_result", true);
lockPref("browser.contentanalysis.silent_notifications", false);

// Disabilita i font Graphite & SVG OpenType
defaultPref("gfx.font_rendering.graphite.enabled", false);
defaultPref("gfx.font_rendering.opentype_svg.enabled", false);

// Disabilita MathML
defaultPref("mathml.disabled", true);

// Disabilita WebVR/WebXR
defaultPref("permissions.default.xr", 2);

// Disabilita ASM.JS
defaultPref("javascript.options.asmjs", false);

// Disabilita SharedArrayBuffer con COOP/COEP
defaultPref("dom.postMessage.sharedArrayBuffer.withCOOP_COEP", false);

// Prevent marking JIT code pages as both writable and executable, only one or the other...
defaultPref("javascript.options.content_process_write_protect_code", true);

// Disabilita il JIT per estensioni e contenuti locali
defaultPref("javascript.options.jit_trustedprincipals", false);

// Disabilita il JIT di ottimizzazione per WebAssembly
defaultPref("javascript.options.wasm_optimizingjit", false);

// Impedisci l'esposizione di componenti XPCOM ai siti web
defaultPref("dom.use_components_shim", false);

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

// Blocca l'invio automatico a Mozilla dei dati di profilazione
lockPref("toolkit.aboutLogging.uploadProfileToCloud", false);

// Mostra sempre il Punycode
lockPref("network.IDN_show_punycode", true);

/* -----------------------------------------------------------------------------------
   BARRE DI RICERCA
   ----------------------------------------------------------------------------------- */

// Disabilita l'autocompletamento degli URL
lockPref("browser.urlbar.autoFill", false);

// Impedisci a Firefox di raccomandare estensioni di ricerca
defaultPref("browser.search.searchEnginesURL", "");

// Abilita la possibilità di usare un motore di ricerca diverso in finestre normali e private
defaultPref("browser.search.separatePrivateDefault", true);
lockPref("browser.search.separatePrivateDefault.ui.enabled", true);

// Mostra l'interfaccia per cambiare motore di ricerca per singole ricerche
lockPref("browser.urlbar.scotchBonnet.disableOneOffs", false);

// Visualizza URL completi invece di termini di ricerca
defaultPref("browser.urlbar.restyleSearches", false);
defaultPref("browser.urlbar.showSearchTerms.enabled", false);
lockPref("browser.urlbar.trimURLs", false);

// Abilita "Cerca in finestra privata"
lockPref("browser.search.separatePrivateDefault.urlbarResult.enabled", true);

// Visualizza la barra di ricerca nella barra degli strumenti personalizzabile
defaultPref("browser.search.widget.inNavBar", true);

// Apre risultati di ricerca in una nuova scheda
defaultPref("browser.search.openintab", true);
defaultPref("browser.urlbar.openintab", true);

/* -----------------------------------------------------------------------------------
   ELEMENTI FASTIDIOSI
   ----------------------------------------------------------------------------------- */

// Blocca automaticamente le richieste di notifica dei siti web
defaultPref("permissions.default.desktop-notification", 2);

// Disabilita avviso e transizione quando si passa a schermo intero
lockPref("full-screen-api.warning.delay", -1);
lockPref("full-screen-api.warning.timeout", 0);
lockPref("full-screen-api.transition-duration.enter", "0 0");
lockPref("full-screen-api.transition-duration.leave", "0 0");

// Blocca il pop-up automatico del traduttore
defaultPref("browser.translations.automaticallyPopup", false);

// Blocca gli errori fastidiosi dell'API di sintesi vocale
defaultPref("media.webspeech.synth.dont_notify_on_error", true); // [Nascosta]

// Blocca pop-up presentazione blocco dei banner dei cookie
lockPref("cookiebanners.ui.desktop.showCallout", false);

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

// Impedisce al tasto Alt di attivare la barra dei menu
defaultPref("ui.key.menuAccessKeyFocuses", false);

// Impedisce al titolo della pagina di essere esposto in modalità privata
lockPref("privacy.exposeContentTitleInWindow.pbm", false);

// Abilita alcune funzionalità per la gestione dei profili
defaultPref("browser.profiles.enabled", true);

// Abilita schede nella barra delle applicazioni per le PWA
defaultPref("browser.taskbarTabs.enabled", true);

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

/* -----------------------------------------------------------------------------------
   ORTOGRAFIA E DIZIONARI
   ----------------------------------------------------------------------------------- */

// Abilita il controllo ortografico per testi su una o più righe
defaultPref("layout.spellcheckDefault", 2);

// Impedisce che la selezione di una parola con doppio clic includa lo spazio successivo
defaultPref("layout.word_select.eat_space_to_next_word", false);

// Cancella lo spazio dopo la parola selezionata con doppio clic
defaultPref("editor.word_select.delete_space_after_doubleclick_selection", true);

// Abilita l'interfaccia utente per le traduzioni
defaultPref("browser.translations.newSettingsUI.enable", true);

// Abilita le traduzioni di Firefox
defaultPref("extensions.translations.disabled", false);

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

// Abilita WebRender
defaultPref("gfx.webrender.all", true);
defaultPref("gfx.webrender.compositor", true);

// Aumenta la dimensione delle cache per font, grafica e immagini
defaultPref("gfx.content.skia-font-cache-size", 20); // default=5
defaultPref("gfx.canvas.accelerated.cache-items", 8192); // default=8192
defaultPref("gfx.canvas.accelerated.cache-size", 512); // default=256
defaultPref("image.mem.decode_bytes_at_a_time", 65536); // default=16384
defaultPref("media.memory_cache_max_size", 3145728); // default=8192

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
defaultPref("browser.tabs.hoverPreview.showThumbnails", false);

// Disabilita il reporting degli errori CSS
defaultPref("layout.css.report_errors", false);

// Abilita la decodifica video hardware con VA-API
defaultPref("media.ffmpeg.vaapi.enabled", true); // [LINUX]

// Riduce l'intervallo di notifica per gli aggiornamenti dei contenuti, migliorando la reattività
defaultPref("content.notify.interval", 100000); // default=120000

/* Fork Server https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html#fork-server */
pref("dom.ipc.forkserver.enable", true); // [LINUX]

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

// Abilita il sandboxing per questo file di configurazione
lockPref("general.config.sandbox_enabled", true); // [Nascosta]
// Disabilita gli avvisi quando si accede ad `about:config`
lockPref("browser.aboutConfig.showWarning", false);
// Assicura che le nostre policy non vengano sovrascritte
lockPref("browser.policies.perUserDir", false); // [LINUX]
// Controllo versione
lockPref("rischio.fox", "142.49");
