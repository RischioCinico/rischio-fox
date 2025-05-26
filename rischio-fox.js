
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
defaultPref("browser.newtabpage.pinned", "[{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://it.wikipedia.org/wiki/Pagina_principale\",\"label\":\"Wikipedia\"},{\"url\":\"https://github.com/\",\"label\":\"GitHub\"},{\"url\":\"https://www.diretta.it/\",\"label\":\"Diretta\"}]");
/* imposta lo sfondo predefinito */
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.wallpaper", "dark-landscape");

/*** Funzioni ***/
/* abilita scorrimento automatico */
defaultPref("general.autoScroll", true);
/* AI chatbot */
defaultPref("browser.ml.chat.enabled", true);
defaultPref("browser.ml.chat.provider", "https://gemini.google.com");
defaultPref("browser.ml.chat.shortcuts", false);
/* attiva gruppi di schede */
defaultPref("browser.tabs.groups.enabled", true);
/* Fork Server https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html#fork-server */
defaultPref("dom.ipc.forkserver.enable", true); // [LINUX]
/* mostra sidebar */
defaultPref("sidebar.revamp", true);
defaultPref("sidebar.visibility", "always-show");
defaultPref("sidebar.main.tools", "aichat,syncedtabs,history,bookmarks");

/*** Fastidi ***/
/* disabilita popup traduttore */
defaultPref("browser.translations.automaticallyPopup", false);
/* disabilita indicatori WebRTC (sono buggati) */
defaultPref("privacy.webrtc.hideGlobalIndicator", true);
/* mostra sempre controlli picture in picture */
defaultPref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);
/* nascondi barra del titolo */
defaultPref("browser.tabs.inTitlebar", 2);
/* non inviare ping a Mozilla */
lockPref("datareporting.usage.uploadEnabled", false);

/*** Prestazioni ***/
/** GENERAL **/
defaultPref("content.notify.interval", 100000); // default=120000
/** GFX RENDERING TWEAKS **/
defaultPref("gfx.webrender.all", true);
defaultPref("gfx.webrender.precache-shaders", true);
defaultPref("gfx.webrender.compositor", true);
defaultPref("gfx.canvas.accelerated.cache-items", 16384); // default=8192
defaultPref("gfx.canvas.accelerated.cache-size", 512); // default=256
defaultPref("gfx.content.skia-font-cache-size", 20); // default=5
defaultPref("media.ffmpeg.vaapi.enabled", true); // [LINUX]
/** DISK CACHE **/
defaultPref("browser.cache.disk.smart_size.enabled", false);
defaultPref("browser.cache.disk.capacity", 8388608); // default=256000
defaultPref("browser.cache.disk.metadata_memory_limit", 102400); // default=51200
defaultPref("browser.cache.frecency_half_life_hours", 18); // default=6
defaultPref("browser.cache.disk.free_space_soft_limit", 10240); // default=5120
defaultPref("browser.cache.disk.free_space_hard_limit", 2048); // default=1024
defaultPref("browser.cache.jsbc_compression_level", 3); // default=0
/** MEMORY CACHE **/
defaultPref("browser.cache.memory.capacity", 4194304); // default=-1
defaultPref("browser.cache.memory.max_entry_size", 10240); // default=5120
/** MEDIA CACHE **/
defaultPref("media.memory_cache_max_size", 3145728); // default=8192
defaultPref("media.memory_caches_combined_limit_kb", 3145728); // default=524288
defaultPref("media.memory_caches_combined_limit_pc_sysmem", 10); //default=5
defaultPref("media.cache_readahead_limit", 7200); //default=3600
defaultPref("media.cache_resume_threshold", 3600); //default=1800
/** IMAGE CACHE **/
defaultPref("image.cache.size", 10485760); // default=5242880
defaultPref("image.mem.decode_bytes_at_a_time", 65536); // default=16384
defaultPref("image.mem.shared.unmap.min_expiration_ms", 120000); // default=60000
/** NETWORK **/
defaultPref("network.buffer.cache.size", 65535); // default=32768
defaultPref("network.buffer.cache.count", 48); // default=24
defaultPref("network.http.max-connections", 1800); // default=900
defaultPref("network.http.max-persistent-connections-per-server", 10); // default=6
defaultPref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3
defaultPref("network.http.max-persistent-connections-per-proxy", 48); // default=32
defaultPref("network.http.pacing.requests.enabled", false);
defaultPref("network.http.pacing.requests.min-parallelism", 10); // default=6
defaultPref("network.http.pacing.requests.burst", 14); // default=10
defaultPref("network.ssl_tokens_cache_capacity", 32768); // default=2048
/** EXPERIMENTAL **/
defaultPref("layout.css.grid-template-masonry-value.enabled", true);
defaultPref("dom.enable_web_task_scheduling", true);
/** TAB UNLOAD **/
defaultPref("browser.low_commit_space_threshold_mb", 3276); // default=200
defaultPref("browser.low_commit_space_threshold_percent", 20); // default=5
defaultPref("browser.tabs.min_inactive_duration_before_unload", 300000); // default=600000

/* ░█▀█░█▀▀░█▀▀░█░█░█░█░█▀▀░█▀█░█░█ */
/* ░█▀▀░█▀▀░▀▀█░█▀▄░░█░░█▀▀░█░█░▄▀▄ */
/* ░▀░░░▀▀▀░▀▀▀░▀░▀░░▀░░▀░░░▀▀▀░▀░▀ */
// PeskyFox v137

/** MOZILLA UI **/
/* nascondi sponsorizzazioni Mozilla VPN */
defaultPref("browser.privatebrowsing.vpnpromourl", "");
defaultPref("browser.vpn_promo.enabled", false)
/* nascondi "altro da mozilla" nelle impostazioni "*/
defaultPref("browser.defaultPreferences.moreFromMozilla", false);
/* nascondi avviso about:config */
defaultPref("browser.aboutConfig.showWarning", false);
/* mostra profili */
defaultPref("browser.profiles.enabled", true);
/* usa tasti nativi nella barra del titolo */
defaultPref("widget.gtk.non-native-titlebar-buttons.enabled", true); // [LINUX]

/** THEME ADJUSTMENTS **/
/* abilita css e stili personalizzati */
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
/* mostra modalità compatta nelle opzioni */
defaultPref("browser.compactmode.show", true);

/** FULLSCREEN NOTICE **/
/* rimuove ritardo schermo intero */
defaultPref("full-screen-api.transition-duration.enter", "0 0");
defaultPref("full-screen-api.transition-duration.leave", "0 0");
/* disabilita avviso schermo intero */
defaultPref("full-screen-api.warning.delay", -1);
defaultPref("full-screen-api.warning.timeout", 0);

/** URL BAR **/
/* abilita conversione unità nella barra degli indirizzi */
defaultPref("browser.urlbar.unitConversion.enabled", true);
/* https://web.dev/articles/text-fragments */
defaultPref("dom.text_fragments.create_text_fragment.enabled", true);

/** NEW TAB PAGE **/
/* non spostare il focus dal searchbox alla barra degli indirizzi */
defaultPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
/* nascondi logo Firefox */
defaultPref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);

/** PDF **/
/* apre PDF inline */
defaultPref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR **/
/* apri risultati di ricerca in una nuova scheda */
defaultPref("browser.search.openintab", true);
defaultPref("browser.urlbar.openintab", true);
/* apri link esterni in una nuova scheda nella finestra attuale */
defaultPref("browser.link.open_newwindow.override.external", 3);
/* carica in background le schede aperte da programmi esterni */
defaultPref("browser.tabs.loadDivertedInBackground", true);
/* apre segnalibri in una nuova scheda */
defaultPref("browser.tabs.loadBookmarksInTabs", true);
defaultPref("browser.tabs.loadBookmarksInBackground", true);
/* lascia il menu segnalibri aperto dopo aver aperto un segnalibro */
defaultPref("browser.bookmarks.openInTabClosesMenu", false);
/* mostra informazioni immagini nel menu contestuale */
defaultPref("browser.menu.showViewImageInfo", true);
/* evidenzia tutti i risultati di ricerca Ctrl+F */
defaultPref("findbar.highlightAll", true);
/* apri nuove schede subito dopo la scheda attuale */
defaultPref("browser.tabs.insertAfterCurrent", true);
/* lascia il browser aperto alla chiusura dell'ultima scheda */
defaultPref("browser.tabs.closeWindowWithLastTab", false);
/* non selezionare lo spazio dopo una parola */
defaultPref("layout.word_select.eat_space_to_next_word", false);
/* controls if a double-click word selection also deletes one adjacent whitespace */
defaultPref("editor.word_select.delete_space_after_doubleclick_selection", true);
/* non nascondere il cursore del mouse mentre si digita */
defaultPref("widget.gtk.hide-pointer-while-typing.enabled", false); // [Linux]

/** KEYBOARD AND SHORTCUTS **/
/* Ctrl+Tab mostra schede in ordine di utilizzo */
defaultPref("browser.ctrlTab.sortByRecentlyUsed", true);

/** BOOKMARK MANAGEMENT **/
/* limita il numbero di backup dei segnalibri */
defaultPref("browser.bookmarks.max_backups", 5); // default=15

/* ░█▀█░█▀▄░█░█░█▀▀░█▀█░█▀▀░█▀█░█░█ */
/* ░█▀█░█▀▄░█▀▄░█▀▀░█░█░█▀▀░█░█░▄▀▄ */
/* ░▀░▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░░░▀▀▀░▀░▀ */
// ArkenFox v135

/*** [0100] AVVIO ***/
/* 0106 rimuovere topsites predefiniti */
defaultPref("browser.newtabpage.activity-stream.default.sites", "");

/*** [0200] GEOLOCALIZZAZIONE ***/
/* 0202 disabilita utilizzo del servizio di geolocalizzazione del sistema */
defaultPref("geo.provider.use_geoclue", false); // [LINUX]

/*** [0300] RACCOLTA DATI ***/
/* 0320 disable recommendation pane in about:addons (uses Google Analytics) */
lockPref("extensions.getAddons.showPane", false); // [Nascosta]
/* 0321 disable recommendations in about:addons' Extensions and Themes panes */
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false);
/* 0322 disable personalized Extension Recommendations in about:addons and AMO */
lockPref("browser.discovery.enabled", false);
/* 0335 disable Firefox Home (Activity Stream) telemetry */
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);
/* 0340: disable Studies */
lockPref("app.shield.optoutstudies.enabled", false);
/* 0341 disable Normandy/Shield */
lockPref("app.normandy.enabled", false);
lockPref("app.normandy.api_url", "");
/* 0350 disable Crash Reports */
lockPref("breakpad.reportURL", "");
lockPref("browser.tabs.crashReporting.sendReport", false);
/* 0351 enforce no submission of backlogged Crash Reports */
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
/* 0360 disabilita Captive Portal */
defaultPref("captivedetect.canonicalURL", "");
defaultPref("network.captive-portal-service.enabled", false);
/* 0361 disabilita controllo connettività */
defaultPref("network.connectivity-service.enabled", false);

/*** [0400] SAFE BROWSING ***/
/* 0401 Safe Browsing */
lockPref("browser.safebrowsing.malware.enabled", true);
lockPref("browser.safebrowsing.phishing.enabled", true);
/* 0402 SB checks for downloads */
lockPref("browser.safebrowsing.downloads.enabled", true);
/* 0403 disable SB checks for downloads (remote) */
lockPref("browser.safebrowsing.downloads.remote.enabled", true);
/* 0404 disable SB checks for unwanted software */
lockPref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", true);
lockPref("browser.safebrowsing.downloads.remote.block_uncommon", true);

/*** [0600] CONNESSIONI NON RICHIESTE ***/
/* 0601 disabilita link prefetching */
defaultPref("network.prefetch-next", false);
/* 0603 disabilita predictor / prefetching */
defaultPref("network.predictor.enabled", false);
/* 0604 disabilita connessione al passaggio del mouse */
defaultPref("network.http.speculative-parallel-limit", 0);
/* 0605 disabilita connessioni speculative in segnalibri e cronologia */
defaultPref("browser.places.speculativeConnect.enabled", false);

/*** [0700] DNS / PROXY ***/
/* 0702 usa DNS remoti con proxy SOCKS */
defaultPref("network.proxy.socks_remote_dns", true);
/* 0703 disabilita UNC (Uniform Naming Convention) */
defaultPref("network.file.disable_unc_paths", true); // [Nascosta]
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
/* 1003 disabilita la memorizzazione di dati di sessione aggiuntivi */
defaultPref("browser.sessionstore.privacy_level", 2);

/*** [1200] HTTPS (SSL/TLS / OCSP / CERTS / HPKP) ***/
/* 1201 richiedere una negoziazione SSL sicura */
defaultPref("security.ssl.require_safe_negotiation", true);
/* 1206 disabilita TLS1.3 0-RTT (round-trip time) */
defaultPref("security.tls.enable_0rtt_data", false);
/* 1212 richiedi OCSP */
defaultPref("security.OCSP.require", true);
/* 1223 Abilita PKP (Public Key Pinning) */
defaultPref("security.cert_pinning.enforcement_level", 2);
/* 1224 abilita CRLite */
defaultPref("security.pki.crlite_mode", 2);
/* 1241 disabilita contenuti passivi non sicuri (ad esempio immagini) su pagine HTTPS */
defaultPref("security.mixed_content.block_display_content", true);
/* 1244 abilita modalità HTTPS-Only */
defaultPref("dom.security.https_only_mode", true);
/* 1246 disabilita richieste HTTP in background */
defaultPref("dom.security.https_only_mode_send_http_background_request", false);
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
/* 2616 rimuove permessi speciali per domini Mozilla */
defaultPref("permissions.manager.defaultsUrl", "");
/* 2619 usa Punycode */
defaultPref("network.IDN_show_punycode", true);
/* 2620 disabilita PDFJS */
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
pref("browser.contentblocking.category", "strict"); // [Nascosta]

/*** [2800] SHUTDOWN & SANITIZING ***/
/* 2810 previene pulizia dati automatica alla chiusura di Firefox */
pref("privacy.sanitize.sanitizeOnShutdown", false);

/*** [4500] RFP (ResistFingerPrinting) ***/
/* 4502 arrotondamento dimensioni finestre */
defaultPref("privacy.window.maxInnerWidth", 1600);
defaultPref("privacy.window.maxInnerHeight", 900);
/* 4503 disabilita mozAddonManager Web API */
defaultPref("privacy.resistFingerprinting.block_mozAddonManager", true);
/* 4513 obbliga a rispettare "browser.link.open_newwindow" (4512) */
defaultPref("browser.link.open_newwindow.restriction", 0);

/*** [5000] OPSEC ***/
/* 5009 disabilita "apri con" per i download */
defaultPref("browser.download.forbid_open_with", true);
/* 5012 disabilita completamento autmatico nella barra degli indirizzi */
defaultPref("browser.urlbar.autoFill", false);
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

/*** 7002 blocca richieste permessi (è possibile dare manualmente i permessi ai siti visitati) */
defaultPref("permissions.default.geo", 2);
defaultPref("permissions.default.camera", 2);
defaultPref("permissions.default.microphone", 2);
defaultPref("permissions.default.desktop-notification", 2);
defaultPref("permissions.default.xr", 2);

/*** [9000] NON-PROJECT RELATED ***/
/* 9001 disable welcome notices */
lockPref("browser.startup.homepage_override.mstone", "ignore"); // [Nascosta]
/* 9002 disable General>Browsing>Recommend extensions/features as you browse */
defaultPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
defaultPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
/* 9004 disable search terms */
defaultPref("browser.urlbar.showSearchTerms.enabled", false);

/*** [9999] DEPRECATE ***/

// [FINE]
lockPref("rischio.fox", "138");
