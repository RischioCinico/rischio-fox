
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
lockPref("browser.newtabpage.pinned", "[{\"url\":\"https://github.com/RischioCinico/rischio-fox\",\"label\":\"127.15\"},{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://it.wikipedia.org/wiki/Pagina_principale\",\"label\":\"Wikipedia\"},{\"url\":\"https://www.diretta.it/\",\"label\":\"Diretta\"}]");
lockPref("browser.newtabpage.activity-stream.topSitesRows", 1);
lockPref("browser.newtabpage.activity-stream.default.sites", "");
/* non spostare il focus dal searchbox alla barra degli indirizzi */
defaultPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

/*** Fastidi ***/
/* disabilita popup traduttore */
defaultPref("browser.translations.automaticallyPopup", false);
/* disabilita indicatori WebRTC (sono buggati) */
defaultPref("privacy.webrtc.hideGlobalIndicator", true);
/* has-used */
pref("browser.rights.3.shown", true);
pref("browser.download.panel.shown", true);
pref("browser.engagement.ctrlTab.has-used", true);
pref("browser.engagement.downloads-button.has-used", true);
pref("browser.engagement.fxa-toolbar-menu-button.has-used", true);
pref("browser.engagement.home-button.has-used", true);
pref("browser.engagement.library-button.has-used", true);
pref("browser.engagement.sidebar-button.has-used", true);
pref("media.videocontrols.picture-in-picture.video-toggle.has-used", true);
/* mostra sempre controlli picture in picture */
defaultPref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);
/* nascondi barra del titolo */
defaultPref("browser.tabs.inTitlebar", 2);

/*** Funzioni ***/
/* abilita scorrimento automatico */
defaultPref("general.autoScroll", true);

/* ░█▀▄░█▀▀░▀█▀░▀█▀░█▀▀░█▀▄░█▀▀░█▀█░█░█ */
/* ░█▀▄░█▀▀░░█░░░█░░█▀▀░█▀▄░█▀▀░█░█░▄▀▄ */
/* ░▀▀░░▀▀▀░░▀░░░▀░░▀▀▀░▀░▀░▀░░░▀▀▀░▀░▀ */
/*** Betterfox v126 ***/

/*** Fastfox ***/
/** GENERAL **/
defaultPref("content.notify.interval", 100000);
/** GFX **/
defaultPref("gfx.canvas.accelerated.cache-items", 8192);
defaultPref("gfx.canvas.accelerated.cache-size", 1024);
defaultPref("gfx.content.skia-font-cache-size", 20);
/** CACHE **/
defaultPref("browser.cache.jsbc_compression_level", 3);
defaultPref("media.memory_cache_max_size", 131072);
defaultPref("media.memory_caches_combined_limit_kb", 1048576);
defaultPref("media.memory_caches_combined_limit_pc_sysmem", 10);
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
defaultPref("layout.css.grid-template-masonry-value.enabled", true);
defaultPref("dom.enable_web_task_scheduling", true);
defaultPref("dom.security.sanitizer.enabled", true);

/*** SecureFox ***/
/** TRACKING PROTECTION **/
defaultPref("network.cookie.sameSite.noneRequiresSecure", true);
defaultPref("privacy.globalprivacycontrol.enabled", true);
/** DISK AVOIDANCE **/
defaultPref("browser.sessionstore.interval", 60000);
/** SHUTDOWN & SANITIZING **/
defaultPref("privacy.history.custom", true);
/** SEARCH / URL BAR **/
defaultPref("browser.urlbar.update2.engineAliasRefresh", true);
defaultPref("security.insecure_connection_text.enabled", true);
defaultPref("security.insecure_connection_text.pbmode.enabled", true);
/** HTTPS-FIRST POLICY **/
defaultPref("dom.security.https_first", true);
defaultPref("dom.security.https_first_schemeless", true);
/** PASSWORDS **/
defaultPref("signon.privateBrowsingCapture.enabled", false);
defaultPref("editor.truncate_user_pastes", false);
/** MIXED CONTENT + CROSS-SITE **/
defaultPref("security.mixed_content.upgrade_display_content", true);
defaultPref("security.mixed_content.upgrade_display_content.image", true);
/** Mozilla **/
defaultPref("accessibility.force_disabled", 1);

/*** PeskyFox ***/
/** MOZILLA UI **/
defaultPref("browser.privatebrowsing.vpnpromourl", "");
defaultPref("browser.vpn_promo.enabled", false)
defaultPref("browser.defaultPreferences.moreFromMozilla", false);
defaultPref("browser.aboutConfig.showWarning", false);
defaultPref("browser.tabs.tabmanager.enabled", false);
/** THEME ADJUSTMENTS **/
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
defaultPref("browser.compactmode.show", true);
defaultPref("browser.display.focus_ring_on_anything", true);
defaultPref("browser.display.focus_ring_style", 0); // 0=Solid, 1=Dotted
defaultPref("browser.display.focus_ring_width", 1);
defaultPref("layout.css.defaultPrefers-color-scheme.content-override", 3); // (0=Scuro, 1=Chiaro, 2=Sistema, 3=Browser)
/** COOKIE BANNER HANDLING **/
defaultPref("cookiebanners.service.mode", 2);
defaultPref("cookiebanners.service.mode.privateBrowsing", 2);
/* avviso schermo interno */
defaultPref("full-screen-api.transition-duration.enter", "0 0");
defaultPref("full-screen-api.transition-duration.leave", "0 0");
defaultPref("full-screen-api.warning.delay", -1);
defaultPref("full-screen-api.warning.timeout", 0);
/** URL BAR **/
defaultPref("browser.urlbar.suggest.calculator", true);
defaultPref("browser.urlbar.unitConversion.enabled", true);
/** PDF **/
defaultPref("browser.download.open_pdf_attachments_inline", true);
/** TAB BEHAVIOR **/
defaultPref("browser.tabs.loadBookmarksInTabs", true);
defaultPref("browser.tabs.loadBookmarksInBackground", true);
defaultPref("browser.bookmarks.openInTabClosesMenu", false);
defaultPref("browser.menu.showViewImageInfo", true);
defaultPref("findbar.highlightAll", true);
defaultPref("layout.word_select.eat_space_to_next_word", false);
defaultPref("widget.gtk.hide-pointer-while-typing.enabled", false);

/* ░█▀█░█▀▄░█░█░█▀▀░█▀█░█▀▀░█▀█░█░█ */
/* ░█▀█░█▀▄░█▀▄░█▀▀░█░█░█▀▀░█░█░▄▀▄ */
/* ░▀░▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░░░▀▀▀░▀░▀ */
/*** Arkenfox v126 ***/

/*** [0200] GEOLOCALIZZAZIONE ***/
/* 0201 usa servizio di geolocalizzazione di Mozilla */
defaultPref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
/* 0202 disabilita utilizzo del servizio di geolocalizzazione del sistema locale */
defaultPref("geo.provider.use_gpsd", false);
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
/* 0333 disable Telemetry Coverage */
defaultPref("toolkit.telemetry.coverage.opt-out", true); // [Nascosta]
defaultPref("toolkit.coverage.opt-out", true); // [Nascosta]
defaultPref("toolkit.coverage.endpoint.base", "");
/* 0335 disable Firefox Home (Activity Stream) telemetry */
defaultPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
defaultPref("browser.newtabpage.activity-stream.telemetry", false);
/* 0340 disable Studies */
defaultPref("app.shield.optoutstudies.enabled", false);
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
/* 1201 richiedere una negoziazione SSL sicura */
defaultPref("security.ssl.require_safe_negotiation", true);
/* 1206 disabilita TLS1.3 0-RTT (round-trip time) */
defaultPref("security.tls.enable_0rtt_data", false);
/* 1211 abilita OCSP (Online Certificate Status Protocol) */
defaultPref("security.OCSP.enabled", 1);
/* 1212 richiedi OCSP */
defaultPref("security.OCSP.require", true);
/* 1223 Abilita PKP (Public Key Pinning) */
defaultPref("security.cert_pinning.enforcement_level", 2);
/* 1224 abilita CRLite */
defaultPref("security.remote_settings.crlite_filters.enabled", true);
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
/* 1602 controlla le informazioni cross-origin da inviare */
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2);
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
/* 2617 rimuove webchannel whitelist */
defaultPref("webchannel.allowObject.urlWhitelist", "");
/* 2619 usa Punycode */
defaultPref("network.IDN_show_punycode", true);
/* 2620 disabilita PDFJS */
defaultPref("pdfjs.disabled", false);
defaultPref("pdfjs.enableScripting", false);
/* 2624 disabilita ricerca contenuto appunti al click tasto centrale */
defaultPref("browser.tabs.searchclipboardfor.middleclick", false);
/* 2630 disable content analysis by DLP (Data Loss Prevention) agents */
defaultPref("browser.contentanalysis.default_allow", false);
/* 2651 chiedi dove salvare i file */
defaultPref("browser.download.useDownloadDir", false);
/* 2652 disabilita apertura automatica del pannello download */
defaultPref("browser.download.alwaysOpenPanel", false);
/* 2653 non aggiungere i download ai documenti recenti di sistema */
defaultPref("browser.download.manager.addToRecentDocs", false);
/* 2654 chiedi cosa fare con i nuovi tipi di file */
defaultPref("browser.download.always_ask_before_handling_new_types", true);
/* 2660 permetti solo le estensioni in determinate cartelle */
defaultPref("extensions.enabledScopes", 5); // [Nascosta]
/* 2661 disabilita prompt di installazione esterni */
defaultPref("extensions.postDownloadThirdPartyPrompt", false);
/* 2701 protezione antitracciamento ***/
defaultPref("browser.contentblocking.category", "standard"); // [HIDDEN PREF]
/* 2810 previene pulizia dati automatica alla chiusura di Firefox */
pref("privacy.sanitize.sanitizeOnShutdown", false);

/*** [4500] RFP (ResistFingerPrinting) ***/
/* 4501 abilita RFP (solo in modalità anonima) */
defaultPref("privacy.resistFingerprinting.pbmode", true);
/* 4502 arrotondamento dimensioni finestre */
defaultPref("privacy.window.maxInnerWidth", 1600);
defaultPref("privacy.window.maxInnerHeight", 900);
/* 4503 disabilita mozAddonManager Web API */
defaultPref("privacy.resistFingerprinting.block_mozAddonManager", true);
/* 4510 usa colori di sistema */
defaultPref("browser.display.use_system_colors", false);
/* 4511 usa tema widget non-nativo */
defaultPref("widget.non-native-theme.enabled", true);
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
lockPref("extensions.blocklist.enabled", true); // [DEFAULT: true]
/* 6002 enforce no referer spoofing */
lockPref("network.http.referer.spoofSource", false); // [DEFAULT: false]
/* 6004 enforce a security delay on some confirmation dialogs */
lockPref("security.dialog_enable_delay", 1000); // [DEFAULT: 1000]
/* 6008 enforce no First Party Isolation */
lockPref("privacy.firstparty.isolate", false); // [DEFAULT: false]
/* 6009 enforce SmartBlock shims (about:compat) */
lockPref("extensions.webcompat.enable_shims", true); // [HIDDEN PREF] [DEFAULT: true]
/* 6010 enforce no TLS 1.0/1.1 downgrades */
lockPref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]
/* 6011 enforce disabling of Web Compatibility Reporter */
lockPref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]
/* 6012 enforce Quarantined Domains */
lockPref("extensions.quarantinedDomains.enabled", true); // [DEFAULT: true]
/* 7017 i service workers servono per il corretto funzionamento di Firefox Sync e diversi siti */
lockPref("dom.serviceWorkers.enabled", true); // [DEFAULT: true]

/*** [9999] DEPRECATE ***/
// FF126
clearPref("browser.messaging-system.whatsNewPanel.enabled");

// [FINE]
lockPref("rischio.fox", "Parrebbe funzionare...");
