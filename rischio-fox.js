
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

/*** Pagina Iniziale ***/
/* scorciatoie newtab */
clearPref("browser.newtabpage.pinned");
defaultPref("browser.newtabpage.pinned", "[{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://it.wikipedia.org/wiki/Pagina_principale\",\"label\":\"Wikipedia\"},{\"url\":\"https://github.com/\",\"label\":\"GitHub\"},{\"url\":\"https://www.diretta.it/\",\"label\":\"Diretta\"}]");
/* non spostare il focus dal searchbox alla barra degli indirizzi */
defaultPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
/* imposta lo sfondo predefinito */
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.wallpaper", "dark-landscape");
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.wallpaper-dark", "dark-landscape");
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.wallpaper-light", "dark-landscape");

/*** Funzioni ***/
/* abilita scorrimento automatico */
defaultPref("general.autoScroll", true);
/* AI chatbot */
defaultPref("browser.ml.chat.enabled", true);
defaultPref("browser.ml.chat.provider", "https://gemini.google.com");
defaultPref("browser.ml.chat.shortcuts", false);
/* mostra Picture-in-Picture cambiando scheda */
defaultPref("media.videocontrols.picture-in-picture.enable-when-switching-tabs.enabled", false);
/* usa tasti nativi nella barra del titolo */
defaultPref("widget.gtk.non-native-titlebar-buttons.enabled", true);
/* apre segnalibri in una nuova scheda */
defaultPref("browser.tabs.loadBookmarksInTabs", true);
/* apre segnalibri in background */
defaultPref("browser.tabs.loadBookmarksInBackground", true);
/* non nascondere il cursore del mouse mentre si digita */
defaultPref("widget.gtk.hide-pointer-while-typing.enabled", false);
/* attiva gruppi di schede */
defaultPref("browser.tabs.groups.enabled", true);

/*** Fastidi ***/
// https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates
defaultPref("extensions.getAddons.cache.enabled", false);
clearPref("extensions.getAddons.cache.lastUpdate");
clearPref("extensions.getAddons.databaseSchema");
/* disabilita popup traduttore */
defaultPref("browser.translations.automaticallyPopup", false);
/* disabilita indicatori WebRTC (sono buggati) */
defaultPref("privacy.webrtc.hideGlobalIndicator", true);
/* mostra sempre controlli picture in picture */
defaultPref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);
/* nascondi barra del titolo */
defaultPref("browser.tabs.inTitlebar", 2);

/* ░█▀▄░█▀▀░▀█▀░▀█▀░█▀▀░█▀▄░█▀▀░█▀█░█░█ */
/* ░█▀▄░█▀▀░░█░░░█░░█▀▀░█▀▄░█▀▀░█░█░▄▀▄ */
/* ░▀▀░░▀▀▀░░▀░░░▀░░▀▀▀░▀░▀░▀░░░▀▀▀░▀░▀ */
// Betterfox v135

/*** Fastfox  ***/
defaultPref("content.notify.interval", 100000); // riduce il tempo di attesa prima che le pagine vengano ridisegnate

/** GFX **/
defaultPref("gfx.canvas.accelerated.cache-size", 512);
defaultPref("gfx.content.skia-font-cache-size", 20);

/** CACHE **/
defaultPref("browser.cache.jsbc_compression_level", 3); // livello compressione per JavaScript bytecode
defaultPref("media.memory_cache_max_size", 131072);
defaultPref("media.cache_readahead_limit", 7200);
defaultPref("media.cache_resume_threshold", 3600);
defaultPref("image.mem.decode_bytes_at_a_time", 65536);

/** NETWORK **/
defaultPref("network.http.max-connections", 1800);
defaultPref("network.http.max-persistent-connections-per-server", 10);
defaultPref("network.http.max-urgent-start-excessive-connections-per-host", 5);
defaultPref("network.http.pacing.requests.enabled", false);
defaultPref("network.dnsCacheEntries", 0);
defaultPref("network.dnsCacheExpiration", 0);
defaultPref("network.ssl_tokens_cache_capacity", 10240);

/** EXPERIMENTAL **/
defaultPref("layout.css.grid-template-masonry-value.enabled", true); // CSS Masonry Layout

/*** SecureFox ***/
/** TRACKING PROTECTION **/
/* Sandbox */
lockPref("fission.autostart", true);
/* Network Partitioning */
lockPref("privacy.partition.network_state", true);
lockPref("privacy.partition.serviceWorkers", true);
lockPref("privacy.partition.network_state.ocsp_cache", true);
lockPref("privacy.partition.bloburl_per_partition_key", true);
lockPref("privacy.partition.always_partition_third_party_non_cookie_storage", true);
lockPref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false);

/*** DISK AVOIDANCE ***/
/* intervallo di salvataggio delle sessioni */
defaultPref("browser.sessionstore.interval", 1800000); // default=15000 (15s); 1800000=30 min

/* attiva pulizia icone di sessione in modalità anonima */
defaultPref("browser.privatebrowsing.resetPBM.enabled", true);

/** SEARCH / URL BAR **/
/* nasconde https e www dall'indirizzo */
defaultPref("browser.urlbar.trimHttps", true);
/* mostra HTTPS nell'URL con doppio click */
defaultPref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
/* mostra "non sicuro" sulle pagine HTTP */
defaultPref("security.insecure_connection_text.enabled", true);
defaultPref("security.insecure_connection_text.pbmode.enabled", true);
/* permetti aggiunta di motori di ricerca personalizzati */
defaultPref("browser.urlbar.update2.engineAliasRefresh", true);

/* disabilita apertura link presi dagli appunti (Linux) */
defaultPref("browser.tabs.searchclipboardfor.middleclick", false);

/** PASSWORDS **/
/* non salvare password durante navigazione anonima */
defaultPref("signon.privateBrowsingCapture.enabled", false);
/* previene troncamento password durante l'invio del form */
defaultPref("editor.truncate_user_pastes", false);

/*** PeskyFox ***/
/** MOZILLA UI **/
defaultPref("browser.privatebrowsing.vpnpromourl", "");
defaultPref("browser.vpn_promo.enabled", false)
defaultPref("browser.defaultPreferences.moreFromMozilla", false);
defaultPref("browser.aboutConfig.showWarning", false);
defaultPref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS **/
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // abilita css e stili personalizzati
defaultPref("browser.compactmode.show", true); // aggiunge modalità compatta alle opzioni
defaultPref("layout.css.defaultPrefers-color-scheme.content-override", 3); // schema di colori preferito per le pagine (0=Scuro, 1=Chiaro, 2=Sistema, 3=Browser)

/** COOKIE BANNER HANDLING **/
defaultPref("cookiebanners.service.mode", 2);
defaultPref("cookiebanners.service.mode.privateBrowsing", 2);

/* FULLSCREEN NOTICE */
defaultPref("full-screen-api.transition-duration.enter", "0 0");
defaultPref("full-screen-api.transition-duration.leave", "0 0");
defaultPref("full-screen-api.warning.timeout", 0);

/** URL BAR **/
defaultPref("browser.urlbar.suggest.calculator", true); // abilita calcolatrice nella barra degli indirizzi
defaultPref("browser.urlbar.unitConversion.enabled", true); // abilita conversione unità nella barra degli indirizzi

/** PDF **/
defaultPref("browser.download.open_pdf_attachments_inline", true); // apre PDF inline

/** TAB BEHAVIOR **/
defaultPref("browser.bookmarks.openInTabClosesMenu", false); // lascia il menu segnalibri aperto dopo aver aperto un segnalibro
defaultPref("browser.menu.showViewImageInfo", true); // mostra informazioni immagini nel menu contestuale
defaultPref("findbar.highlightAll", true); // mostra tutti i risultati nella barra di ricerca
defaultPref("layout.word_select.eat_space_to_next_word", false); // non selezionare lo spazio dopo una parola

/** Mozilla **/
/* disabilita accessibilità per impedire che impatti sulle prestazioni */
pref("accessibility.force_disabled", 1);
pref("devtools.accessibility.enabled", false);

/* ░█▀█░█▀▄░█░█░█▀▀░█▀█░█▀▀░█▀█░█░█ */
/* ░█▀█░█▀▄░█▀▄░█▀▀░█░█░█▀▀░█░█░▄▀▄ */
/* ░▀░▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░░░▀▀▀░▀░▀ */
// Arkenfox v133

/*** [0200] GEOLOCALIZZAZIONE ***/
/* 0202 disabilita utilizzo del servizio di geolocalizzazione del sistema locale */
defaultPref("geo.provider.use_geoclue", false);

/*** [0300] RACCOLTA DATI ***/
/* 0320 disable recommendation pane in about:addons (uses Google Analytics) */
defaultPref("extensions.getAddons.showPane", false); // [Nascosta]
/* 0321 disable recommendations in about:addons' Extensions and Themes panes */
defaultPref("extensions.htmlaboutaddons.recommendations.enabled", false);
/* 0322 disable personalized Extension Recommendations in about:addons and AMO */
defaultPref("browser.discovery.enabled", false);
/* 0323 disable shopping experience */
defaultPref("browser.shopping.experience2023.enabled", false);
/* 0335 disable Firefox Home (Activity Stream) telemetry */
defaultPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
defaultPref("browser.newtabpage.activity-stream.telemetry", false);
/* 0341 disable Normandy/Shield */
defaultPref("app.normandy.enabled", false);
defaultPref("app.normandy.api_url", "");
/* 0350 disable Crash Reports */
defaultPref("breakpad.reportURL", "");
defaultPref("browser.tabs.crashReporting.sendReport", false);
defaultPref("browser.crashReports.unsubmittedCheck.enabled", false);
/* 0351 enforce no submission of backlogged Crash Reports */
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
/* 0360 disabilita Captive Portal */
defaultPref("captivedetect.canonicalURL", "");
defaultPref("network.captive-portal-service.enabled", false);
/* 0361 disabilita controllo connettività */
defaultPref("network.connectivity-service.enabled", false);

/*** [0600] CONNESSIONI NON RICHIESTE ***/
/* 0601 disabilita link prefetching */
defaultPref("network.prefetch-next", false);
/* 0603 disabilita predictor / prefetching */
defaultPref("network.predictor.enabled", false);
defaultPref("network.predictor.enable-prefetch", false);
/* 0604 disabilita connessione al passaggio del mouse */
defaultPref("network.http.speculative-parallel-limit", 0);
/* 0605 disabilita connessioni speculative in segnalibri e cronologia */
defaultPref("browser.places.speculativeConnect.enabled", false);
/* 0610 impedisci "Hyperlink Auditing" (click tracking) */
defaultPref("browser.send_pings", false);

/*** [0700] DNS / PROXY ***/
/* 0702 usa DNS remoti con proxy SOCKS */
defaultPref("network.proxy.socks_remote_dns", true);
/* 0703 disabilita UNC (Uniform Naming Convention) */
defaultPref("network.file.disable_unc_paths", true); // [Nascosta]
/* 0704 disabilita GIO */
defaultPref("network.gio.supported-protocols", ""); // [Nascosta]
/* 0710 abilita DNS-over-HTTPS (DoH) */
defaultPref("network.trr.mode", 3);
/* 0712 imposta DNS Quad9 */
defaultPref("network.trr.uri", "https://dns.quad9.net/dns-query");
defaultPref("network.trr.custom_uri", "https://dns.quad9.net/dns-query");

/*** [0800] BARRE DI RICERCA / FORMS ***/
/* 0801 disabilita connessioni speculative nella barra degli indirizzi */
defaultPref("browser.urlbar.speculativeConnect.enabled", false);
/* 0802 disabilita suggerimenti sponsorizzati nella barra degli indirizzi */
defaultPref("browser.urlbar.quicksuggest.enabled", false);
defaultPref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
defaultPref("browser.urlbar.suggest.quicksuggest.sponsored", false);
/* 0805 disabilita suggerimenti ricerche di tendenza nella barra degli indirizzi */
defaultPref("browser.urlbar.trending.featureGate", false);
/* 0806 disabilita suggerimenti nella barra degli indirizzi */
defaultPref("browser.urlbar.addons.featureGate", false);
defaultPref("browser.urlbar.mdn.featureGate", false); // [Nascosta]
defaultPref("browser.urlbar.pocket.featureGate", false);
defaultPref("browser.urlbar.weather.featureGate", false);
defaultPref("browser.urlbar.yelp.featureGate", false);
/* 0807 disabilita suggerimenti dagli appunti nella barra di ricerca */
defaultPref("browser.urlbar.clipboard.featureGate", false);
/* 0808 disabilita ricerche recenti */
defaultPref("browser.urlbar.recentsearches.featureGate", false);
/* 0810 disabilita formfill */
defaultPref("browser.formfill.enable", false);
/* 0830 abilita motore di ricerca diverso per le finestre anonime */
defaultPref("browser.search.separatePrivateDefault", true);
defaultPref("browser.search.separatePrivateDefault.ui.enabled", true);

/*** [0900] PASSWORDS ***/
/* 0903 disabilita compilazione automatica username & password */
defaultPref("signon.autofillForms", false);
/* 0904 disabilita formless login capture per il Password Manager */
defaultPref("signon.formlessCapture.enabled", false);
/* 0905 limita (o disabilita) autenticazione HTTP */
defaultPref("network.auth.subresource-http-auth-allow", 1);

/*** [1000] LIMITARE SCRITTURA SUL DISCO ***/
/* 1002 disabilita scrittura cache su disco dei media in modalità anonima */
defaultPref("browser.privatebrowsing.forceMediaMemoryCache", true);
defaultPref("media.memory_cache_max_size", 65536);
/* 1003 disabilita la memorizzazione di dati di sessione aggiuntivi */
defaultPref("browser.sessionstore.privacy_level", 2);

/*** [1200] HTTPS (SSL/TLS / OCSP / CERTS / HPKP) ***/
/** SSL (Secure Sockets Layer) / TLS (Transport Layer Security) **/
/* 1201 richiedere una negoziazione SSL sicura */
defaultPref("security.ssl.require_safe_negotiation", true);
/* 1206 disabilita TLS1.3 0-RTT (round-trip time) */
defaultPref("security.tls.enable_0rtt_data", false);

/** OCSP (Online Certificate Status Protocol) **/
/* 1211 abilita OCSP (Online Certificate Status Protocol) */
defaultPref("security.OCSP.enabled", 1);
/* 1212 richiedi OCSP */
defaultPref("security.OCSP.require", true);

/** CERTS / HPKP (HTTP Public Key Pinning) **/
/* 1223 Abilita PKP (Public Key Pinning) */
defaultPref("security.cert_pinning.enforcement_level", 2);
/* 1224 abilita CRLite */
defaultPref("security.remote_settings.crlite_filters.enabled", true);
defaultPref("security.pki.crlite_mode", 2);

/** MIXED CONTENT **/
/* 1241 disabilita contenuti passivi non sicuri (ad esempio immagini) su pagine HTTPS */
defaultPref("security.mixed_content.block_display_content", true);
/* 1244 abilita modalità HTTPS-Only */
defaultPref("dom.security.https_only_mode", true);
/* 1246 disabilita richieste HTTP in background */
defaultPref("dom.security.https_only_mode_send_http_background_request", false);

/** UI (User Interface) **/
/* 1270 mostra avvisi errori SSL */
defaultPref("security.ssl.treat_unsafe_negotiation_as_broken", true);
/* 1272 mostra informazioni sulle connessioni non sicure */
defaultPref("browser.xul.error_pages.expert_bad_cert", true);

/*** [1600] REFERERS ***/
/* 1602 controlla le informazioni cross-origin da inviare */
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2);

/*** [1700] CONTAINERS ***/
/* 1701 abilita Container di Firefox */
defaultPref("privacy.userContext.enabled", true);
lockPref("privacy.userContext.ui.enabled", false);
/* 1703 scegli in quale container aprire i collegamenti esterni */
defaultPref("browser.link.force_default_user_context_id_for_external_opens", true);

/*** [2000] PLUGINS / MEDIA / WEBRTC ***/
/* 2002 forza WebRTC dietro proxy */
defaultPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
/* 2003 utilizza una singola interfaccia di rete per ICE */
defaultPref("media.peerconnection.ice.default_address_only", true);

/*** [2400] DOM (DOCUMENT OBJECT MODEL) ***/
/* 2402 impedisci agli scripts di spostare e ridimensionare finestre */
defaultPref("dom.disable_window_move_resize", true);

/*** [2600] MISTO ***/
/* 2603 download in cartella temporanea */
defaultPref("browser.download.start_downloads_in_tmp_dir", true);
defaultPref("browser.helperApps.deleteTempFileOnExit", true);
/* 2606 disabilita UITour */
defaultPref("browser.uitour.enabled", false);
/* 2608 resetta debugging remoto */
clearPref("devtools.debugger.remote-enabled", false);
/* 2616 rimuove permessi speciali per domini Mozilla */
defaultPref("permissions.manager.defaultsUrl", "");
/* 2619 usa Punycode */
defaultPref("network.IDN_show_punycode", true);
/* 2620 disabilita PDFJS */
defaultPref("pdfjs.disabled", false);
defaultPref("pdfjs.enableScripting", false);
/* 2624 disabilita ricerca contenuto appunti al click tasto centrale */
defaultPref("browser.tabs.searchclipboardfor.middleclick", false);

/** DOWNLOADS **/
/* 2651 chiedi dove salvare i file */
defaultPref("browser.download.useDownloadDir", false);
/* 2652 disabilita apertura automatica del pannello download */
defaultPref("browser.download.alwaysOpenPanel", false);
/* 2653 non aggiungere i download ai documenti recenti di sistema */
defaultPref("browser.download.manager.addToRecentDocs", false);
/* 2654 chiedi cosa fare con i nuovi tipi di file */
defaultPref("browser.download.always_ask_before_handling_new_types", true);

/** EXTENSIONS **/
/* 2660 permetti solo le estensioni in determinate cartelle */
defaultPref("extensions.enabledScopes", 5); // [Nascosta]
/* 2661 disabilita prompt di installazione esterni */
defaultPref("extensions.postDownloadThirdPartyPrompt", false);

/*** [2700] ETP (ENHANCED TRACKING PROTECTION) ***/
/* 2701 protezione antitracciamento ***/
defaultPref("browser.contentblocking.category", "strict"); // [Nascosta]

/*** [2800] SHUTDOWN & SANITIZING ***/
/* 2810 previene pulizia dati automatica alla chiusura di Firefox */
pref("privacy.sanitize.sanitizeOnShutdown", false);

/*** [4500] RFP (ResistFingerPrinting) ***/
/* 4502 arrotondamento dimensioni finestre */
defaultPref("privacy.window.maxInnerWidth", 1600);
defaultPref("privacy.window.maxInnerHeight", 900);
/* 4503 disabilita mozAddonManager Web API */
defaultPref("privacy.resistFingerprinting.block_mozAddonManager", true);
/* 4510 usa colori di sistema */
defaultPref("browser.display.use_system_colors", false);
/* 4511: disable using system accent colors ***/
defaultPref("widget.non-native-theme.use-theme-accent", false);
/* 4512 forza apertura dei link in nuove schede */
defaultPref("browser.link.open_newwindow", 3);
/* 4513 obbliga a rispettare "browser.link.open_newwindow" (4512) */
defaultPref("browser.link.open_newwindow.restriction", 0);

/*** [5000] OPSEC ***/
/* 5009 disabilita "apri con" per i download */
defaultPref("browser.download.forbid_open_with", true);
/* 5012 disabilita completamento autmatico nella barra degli indirizzi */
defaultPref("browser.urlbar.autoFill", false);
/* 5016 scarica file in download */
defaultPref("browser.download.folderList", 1);
/* 5017 disabilita compilazione automatica form */
defaultPref("extensions.formautofill.addresses.enabled", false);
defaultPref("extensions.formautofill.creditCards.enabled", false);
/* 5018 limita eventi che possono aprire popup */
defaultPref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
/* 5019 disabilita salvataggio miniature delle pagine visitate */
defaultPref("browser.pagethumbnails.capturing_disabled", true); // [Nascosta]
/* 5508 DRM (EME: Encryption Media Extension) */
defaultPref("media.eme.enabled", true);
defaultPref("browser.eme.ui.enabled", false);
/* 5509 disabilita IPv6 */
defaultPref("network.dns.disableIPv6", true);

/*** [6000] NON TOCCARE ***/
/* 6001 enforce Firefox blocklist */
clearPref("extensions.blocklist.enabled"); // [DEFAULT: true]
/* 6002 enforce no referer spoofing */
clearPref("network.http.referer.spoofSource"); // [DEFAULT: false]
/* 6004 enforce a security delay on some confirmation dialogs */
clearPref("security.dialog_enable_delay"); // [DEFAULT: 1000]
/* 6008 enforce no First Party Isolation */
clearPref("privacy.firstparty.isolate"); // [DEFAULT: false]
/* 6009 enforce SmartBlock shims (about:compat) */
lockPref("extensions.webcompat.enable_shims", true); // [Nascosta] [DEFAULT: true]
/* 6010 enforce no TLS 1.0/1.1 downgrades */
clearPref("security.tls.version.enable-deprecated"); // [DEFAULT: false]
/* 6011 enforce disabling of Web Compatibility Reporter */
clearPref("extensions.webcompat-reporter.enabled"); // [DEFAULT: false]
/* 6012 enforce Quarantined Domains */
clearPref("extensions.quarantinedDomains.enabled"); // [DEFAULT: true]
/* 7017 i service workers servono per il corretto funzionamento di Firefox Sync e diversi siti */
clearPref("dom.serviceWorkers.enabled"); // [DEFAULT: true]

/*** [9999] DEPRECATE ***/

// [FINE]
lockPref("rischio.fox", "135.3");
