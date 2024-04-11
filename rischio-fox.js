/*** [0000] Rischio-Fox ***/
/* 0001: Modifiche newtab ***/
lockPref("browser.newtabpage.pinned", "[{\"url\":\"https://github.com/RischioCinico/rischio-fox\",\"label\":\"124.1\"},{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://www.subito.it/\",\"label\":\"Subito\"},{\"url\":\"https://www.flashscore.it/\",\"label\":\"Flashscore\"}]");
pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false); // Ripristina searchbox
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "");
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
lockPref("browser.newtabpage.activity-stream.impressionId", "");
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
/* 0002: Mostra segnalibri Mobile ***/
pref("browser.bookmarks.showMobileBookmarks", true);
/* 0003: Disabilita popup traduttore ***/
pref("browser.translations.automaticallyPopup", false);
/* 0004: Disabilita il blocco popup integrato ***/
pref("dom.disable_open_during_load", false);
/* 0005: Disabilita accessibilità ***/
pref("accessibility.force_disabled", 1);
/* 0006: Abilita scorrimento automatico ***/
pref("general.autoScroll", true);
/* 0007: Disabilita indicatori WebRTC (sono buggati) ***/
pref("privacy.webrtc.hideGlobalIndicator", true);
pref("privacy.webrtc.legacyGlobalIndicator", false);

/*** [0097] FastFox v122 ***/
// https://github.com/yokoffing/Betterfox/blob/main/Fastfox.js

/** GENERAL ***/
pref("content.notify.interval", 100000);
/** RENDERING ***/
pref("gfx.webrender.all", true);
pref("gfx.webrender.precache-shaders", true);
pref("gfx.webrender.compositor", true);
pref("gfx.webrender.compositor.force-enabled", true);
pref("gfx.webrender.software.opengl", true);
pref("gfx.canvas.accelerated", true); // WARNING: not compatible with WINDOWS integrated GPUs
pref("gfx.canvas.accelerated.cache-items", 8192);
pref("gfx.canvas.accelerated.cache-size", 1024);
pref("gfx.content.skia-font-cache-size", 20);
pref("media.hardware-video-decoding.force-enabled", true);
pref("media.ffmpeg.vaapi.enabled", true);
/** CACHE ***/
pref("browser.cache.jsbc_compression_level", 3);
pref("media.memory_cache_max_size", 131072);
pref("media.memory_caches_combined_limit_kb", 1048576);
pref("media.memory_caches_combined_limit_pc_sysmem", 10);
pref("media.cache_readahead_limit", 7200);
pref("media.cache_resume_threshold", 3600);
pref("image.mem.decode_bytes_at_a_time", 65536);
pref("image.mem.shared.unmap.min_expiration_ms", 65536);
/** NETWORK ***/
pref("network.buffer.cache.size", 262144); // WARNING: Cannot open HTML files bigger than 4MB if changed
pref("network.buffer.cache.count", 128);
pref("network.http.max-connections", 1800);
pref("network.http.max-persistent-connections-per-server", 10);
pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
pref("network.http.max-persistent-connections-per-proxy", 48);
pref("network.http.pacing.requests.enabled", false);
pref("network.http.pacing.requests.min-parallelism", 10)
pref("network.http.pacing.requests.burst", 14);
pref("network.dnsCacheEntries", 1000);
pref("network.dns.max_high_priority_threads", 8);
pref("network.ssl_tokens_cache_capacity", 10240);
/** EXPERIMENTAL ***/
defaultPref("layout.css.grid-template-masonry-value.enabled", true);
defaultPref("dom.enable_web_task_scheduling", true);
defaultPref("layout.css.has-selector.enabled", true);
defaultPref("dom.security.sanitizer.enabled", true);

/*** [0098] PeskyFox v122 ***/
// https://github.com/yokoffing/Betterfox/blob/main/Peskyfox.js

/* rimuove link Mozilla VPN ***/
pref("browser.privatebrowsing.vpnpromourl", "");
/* disabilita controllo browser predefinito ***/
pref("browser.shell.checkDefaultBrowser", false);
/* disabilita suggerimenti estensioni ***/
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
/* Nascondi "Altro da Mozilla" ***/
pref("browser.preferences.moreFromMozilla", false);
/* Nasconde lista schede aperte quando non necessario ***/
pref("browser.tabs.tabmanager.enabled", false);
/* disabilita avviso about:config ***/
pref("browser.aboutConfig.showWarning", false);
/* disabilita messaggi di benvenuto ***/
pref("browser.startup.homepage_override.mstone", "ignore");
pref("browser.aboutwelcome.enabled", false);
/* disabilita pulsante "What's New" ***/
pref("browser.messaging-system.whatsNewPanel.enabled", false);
/* Abilita userChrome.css ***/
pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
/* Abilita modalità compatta ***/
pref("browser.compactmode.show", true);
/* imposta tipo di focus ***/
pref("browser.display.focus_ring_on_anything", true);
pref("browser.display.focus_ring_style", 0);
pref("browser.display.focus_ring_width", 1);
/* schema di colori preferito per le pagine ***/
pref("layout.css.prefers-color-scheme.content-override", 0); // tema scuro
/* chiudi automaticamente banner cookie ***/
pref("cookiebanners.service.mode", 2);
pref("cookiebanners.service.mode.privateBrowsing", 2);
pref("cookiebanners.service.enableGlobalRules", true);
pref("cookiebanners.service.enableGlobalRules.subFrames", true);
/* nascondi avviso schermo intero ***/
pref("full-screen-api.transition-duration.enter", "0 0");
pref("full-screen-api.transition-duration.leave", "0 0");
pref("full-screen-api.warning.delay", -1);
pref("full-screen-api.warning.timeout", 0);
/* calcolatrice nella barra degli indirizzi ***/
pref("browser.urlbar.suggest.calculator", true);
pref("browser.urlbar.unitConversion.enabled", true);
/* disabilita Pocket ***/
pref("extensions.pocket.enabled", false);
/* lascia il menu segnalibri aperto ***/
pref("browser.bookmarks.openInTabClosesMenu", false);
/* Mostra "visualizza informazioni immagine" ***/
pref("browser.menu.showViewImageInfo", true);
/* Evidenzia risultati ***/
pref("findbar.highlightAll", true);
/* Non selezionare lo spazio dopo le parole ***/
pref("layout.word_select.eat_space_to_next_word", false);
/* Non nascondere il puntatore durante digitazione ***/
pref("widget.gtk.hide-pointer-while-typing.enabled", false);

/*** [0099] SecureFox v122 ***/
// https://github.com/yokoffing/Betterfox/blob/main/Securefox.js

/* SameSite Cookies ***/
pref("network.cookie.sameSite.noneRequiresSecure", true);
/* GPC ***/
pref("privacy.globalprivacycontrol.enabled", true);
pref("privacy.globalprivacycontrol.functionality.enabled", true);
pref("privacy.globalprivacycontrol.pbmode.enabled", true);
/* Permetti aggiunta di nuovi motori di ricerca ***/
pref("browser.urlbar.update2.engineAliasRefresh", true); // [Nascosta]
/* Impedisci ai siti di troncare le password ***/
pref("editor.truncate_user_pastes", false);

/*** Arkenfox v122 ***/

/*** [0100] AVVIO ***/
/* 0102: ripristina sessione ***/
pref("browser.startup.page", 3);
/* 0103: Resetta la home page di Firefox ***/
clearPref("browser.startup.homepage");
/* 0104: Resetta NEWTAB ***/
clearPref("browser.newtabpage.enabled");
/* 0105: disabilita contenuti sponsorizzati ***/
lockPref("browser.newtabpage.activity-stream.showSponsored", false);
lockPref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
/* 0106: elimina topsites ***/
pref("browser.newtabpage.activity-stream.default.sites", "");

/*** [0200] GEOLOCALIZZAZIONE ***/
/* 0201: usa servizio di geolocalizzazione di Mozilla ***/
pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
/* 0202: disabilita utilizzo del servizio di geolocalizzazione del sistema locale ***/
pref("geo.provider.use_gpsd", false);
pref("geo.provider.use_geoclue", false);

/*** [0300] RACCOLTA DATI ***/
/* 0320: disable recommendation pane in about:addons (uses Google Analytics) ***/
pref("extensions.getAddons.showPane", false); // [Nascosta]
/* 0321: disable recommendations in about:addons' Extensions and Themes panes ***/
pref("extensions.htmlaboutaddons.recommendations.enabled", false);
/* 0322: disable personalized Extension Recommendations in about:addons and AMO ***/
pref("browser.discovery.enabled", false);
/* 0323: disable shopping experience ***/
pref("browser.shopping.experience2023.enabled", false); // [FF116+]
/* 0330: disable new data submission ***/
pref("datareporting.policy.dataSubmissionEnabled", false);
/* 0331: disable Health Reports ***/
pref("datareporting.healthreport.uploadEnabled", false);
/* 0332: disable telemetry ***/
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.server", "data:,");
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("toolkit.telemetry.shutdownPingSender.enabled", false);
pref("toolkit.telemetry.updatePing.enabled", false);
pref("toolkit.telemetry.bhrPing.enabled", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", false);
/* 0333: disable Telemetry Coverage ***/
pref("toolkit.telemetry.coverage.opt-out", true); // [Nascosta]
pref("toolkit.coverage.opt-out", true); // [Nascosta]
pref("toolkit.coverage.endpoint.base", "");
/* 0334: disable PingCentre telemetry (used in several System Add-ons) ***/
pref("browser.ping-centre.telemetry", false);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
/* 0335: disable Firefox Home (Activity Stream) telemetry ***/
pref("browser.newtabpage.activity-stream.telemetry", false);
/* 0340: disable Studies ***/
pref("app.shield.optoutstudies.enabled", false);
/* 0341: disable Normandy/Shield ***/
pref("app.normandy.enabled", false);
pref("app.normandy.api_url", "");
/* 0350: disable Crash Reports ***/
pref("breakpad.reportURL", "");
pref("browser.tabs.crashReporting.sendReport", false);
pref("browser.crashReports.unsubmittedCheck.enabled", false);
/* 0351: enforce no submission of backlogged Crash Reports ***/
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
/* 0360: disabilita Captive Portal ***/
defaultPref("captivedetect.canonicalURL", "");
defaultPref("network.captive-portal-service.enabled", false);
/* 0361: disabilita controllo connettività ***/
defaultPref("network.connectivity-service.enabled", false);

/*** [0600] CONNESSIONI NON RICHIESTE ***/
/* 0601: disabilita link prefetching ***/
pref("network.prefetch-next", false);
/* 0602: disabilita DNS prefetching ***/
pref("network.dns.disablePrefetch", true);
pref("network.dns.disablePrefetchFromHTTPS", true);
/* 0603: disabilita predictor / prefetching ***/
pref("network.predictor.enabled", false);
pref("network.predictor.enable-prefetch", false);
/* 0604: disabilita connessione al passaggio del mouse ***/
pref("network.http.speculative-parallel-limit", 0);
/* 0605: disabilita connessioni speculative in segnalibri e cronologia ***/
pref("browser.places.speculativeConnect.enabled", false);
/* 0610: impedisci "Hyperlink Auditing" (click tracking) ***/
pref("browser.send_pings", false);

/*** [0700] DNS / PROXY ***/
/* 0702: usa DNS remoti con proxy SOCKS ***/
pref("network.proxy.socks_remote_dns", true);
/* 0703: disabilita UNC (Uniform Naming Convention) ***/
pref("network.file.disable_unc_paths", true); // [Nascosta]
/* 0704: disabilita GIO ***/
pref("network.gio.supported-protocols", ""); // [Nascosta]
/* 0710: abilita DNS-over-HTTPS (DoH) ***/
pref("network.trr.mode", 3);
/* 0712: imposta DNS Quad9 ***/
pref("network.trr.uri", "https://dns.quad9.net/dns-query");
pref("network.trr.custom_uri", "https://dns.quad9.net/dns-query");

/*** [0800] BARRE DI RICERCA / FORMS ***/
/* 0801: disabilita connessioni speculative nella barra degli indirizzi ***/
pref("browser.urlbar.speculativeConnect.enabled", false);
/* 0802: disabilita suggerimenti sponsorizzati nella barra degli indirizzi ***/
pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
/* 0805: disabilita suggerimenti ricerche di tendenza nella barra degli indirizzi ***/
pref("browser.urlbar.trending.featureGate", false); // [FF118+]
/* 0806: disabilita suggerimenti nella barra degli indirizzi ***/
pref("browser.urlbar.addons.featureGate", false); // [FF115+]
pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [Nascosta]
pref("browser.urlbar.pocket.featureGate", false); // [FF116+]
pref("browser.urlbar.weather.featureGate", false);
/* 0807: disabilita suggerimenti dagli appunti nella barra di ricerca ***/
pref("browser.urlbar.clipboard.featureGate", false); // [FF118+]
/* 0810: disabilita formfill ***/
pref("browser.formfill.enable", false);
/* 0830: abilita motore di ricerca diverso per le finestre anonime ***/
pref("browser.search.separatePrivateDefault", true);
pref("browser.search.separatePrivateDefault.ui.enabled", true);

/*** [0900] PASSWORDS ***/
/* 0903: disabilita compilazione automatica username & password ***/
pref("signon.autofillForms", false);
/* 0904: disabilita formless login capture per il Password Manager ***/
pref("signon.formlessCapture.enabled", false);
/* 0905: limita (o disabilita) autenticazione HTTP ***/
pref("network.auth.subresource-http-auth-allow", 1);

/*** [1000] LIMITARE SCRITTURA SUL DISCO ***/
/* 1002: disabilita scrittura cache su disco dei media in modalità anonima ***/
pref("browser.privatebrowsing.forceMediaMemoryCache", true);
pref("media.memory_cache_max_size", 65536);
/* 1003: disabilita la memorizzazione di dati di sessione aggiuntivi ***/
pref("browser.sessionstore.privacy_level", 2);

/*** [1200] HTTPS (SSL/TLS / OCSP / CERTS / HPKP) ***/
/* 1201: richiedere una negoziazione SSL sicura ***/
pref("security.ssl.require_safe_negotiation", true);
/* 1206: disabilita TLS1.3 0-RTT (round-trip time) ***/
pref("security.tls.enable_0rtt_data", false);
/* 1211: abilita OCSP (Online Certificate Status Protocol) ***/
pref("security.OCSP.enabled", 1);
/* 1212: richiedi OCSP ***/
pref("security.OCSP.require", true);
/* 1223: Abilita PKP (Public Key Pinning) ***/
pref("security.cert_pinning.enforcement_level", 2);
/* 1224: abilita CRLite ***/
pref("security.remote_settings.crlite_filters.enabled", true);
pref("security.pki.crlite_mode", 2);
/* 1241: disabilita contenuti passivi non sicuri (ad esempio immagini) su pagine HTTPS ***/
pref("security.mixed_content.block_display_content", true);
/* 1244: abilita modalità HTTPS-Only ***/
pref("dom.security.https_only_mode", true);
/* 1246: disabilita richieste HTTP in background ***/
pref("dom.security.https_only_mode_send_http_background_request", false);
/* 1270: mostra avvisi errori SSL ***/
pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
/* 1272: mostra informazioni sulle connessioni non sicure ***/
pref("browser.xul.error_pages.expert_bad_cert", true);

/*** [1600] REFERERS ***/
/* 1602: controlla le informazioni cross-origin da inviare ***/
pref("network.http.referer.XOriginTrimmingPolicy", 2);

/*** [1700] CONTAINERS ***/
/* 1701: abilita Container di Firefox ***/
pref("privacy.userContext.enabled", true);
pref("privacy.userContext.ui.enabled", true);

/*** [2000] PLUGINS / MEDIA / WEBRTC ***/
/* 2002: forza WebRTC dietro proxy ***/
pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
/* 2003: utilizza una singola interfaccia di rete per ICE ***/
pref("media.peerconnection.ice.default_address_only", true);
/* 2004: forza esclusione IP privati da ICE ***/
clearPref("media.peerconnection.ice.no_host");
/* 2020: abilita GMP (Gecko Media Plugins) ***/
clearPref("media.gmp-provider.enabled");

/*** [2400] DOM (DOCUMENT OBJECT MODEL) ***/
/* 2402: impedisci agli scripts di spostare e ridimensionare finestre ***/
pref("dom.disable_window_move_resize", true);

/*** [2600] MISTO ***/
/* 2603: non scaricare i file nella cartella temporanea ***/
pref("browser.download.start_downloads_in_tmp_dir", true);
pref("browser.helperApps.deleteTempFileOnExit", true);
/* 2606: disabilita UITour ***/
pref("browser.uitour.enabled", false);
/* 2608: resetta debugging remoto ***/
clearPref("devtools.debugger.remote-enabled", false);
/* 2616: rimuove permessi speciali per domini Mozilla ***/
pref("permissions.manager.defaultsUrl", "");
/* 2617: rimuove webchannel whitelist ***/
pref("webchannel.allowObject.urlWhitelist", "");
/* 2619: usa Punycode ***/
pref("network.IDN_show_punycode", true);
/* 2620: disabilita PDFJS ***/
pref("pdfjs.disabled", false);
pref("pdfjs.enableScripting", false);
/* 2624: disabilita ricerca contenuto appunti al click tasto centrale */
pref("browser.tabs.searchclipboardfor.middleclick", false); // [FF115+]
/* 2651: chiedi dove salvare i file ***/
pref("browser.download.useDownloadDir", false);
/* 2652: disabilita apertura automatica del pannello download ***/
pref("browser.download.alwaysOpenPanel", false);
/* 2653: non aggiungere i download ai documenti recenti di sistema ***/
pref("browser.download.manager.addToRecentDocs", false);
/* 2654: chiedi cosa fare con i nuovi tipi di file ***/
pref("browser.download.always_ask_before_handling_new_types", true);
/* 2660: permetti solo le estensioni in determinate cartelle ***/
pref("extensions.enabledScopes", 5); // [Nascosta]
clearPref("extensions.autoDisableScopes", 15);
/* 2661: disabilita prompt di installazione esterni ***/
pref("extensions.postDownloadThirdPartyPrompt", false);

/*** [2700] ETP (ENHANCED TRACKING PROTECTION) ***/
/* 2701: abilita antitracciamento ***/
pref("browser.contentblocking.category", "standard");

/*** [2800] SPEGNIMENTO ***/
/* 2810: impedisci eliminazione dati alla chiusura di Firefox ***/
pref("privacy.sanitize.sanitizeOnShutdown", false);
/* 2811: imposta cosa eliminare alla chiusura di Firefox (se 2810=true) ***/
pref("privacy.clearOnShutdown.cache", false);
pref("privacy.clearOnShutdown.downloads", false);
pref("privacy.clearOnShutdown.formdata", false);
pref("privacy.clearOnShutdown.history", false);
pref("privacy.clearOnShutdown.sessions", false);
pref("privacy.clearOnShutdown.siteSettings", false);
/* 2812: blocca eliminazione dari per ripristino sessione (se 2810=true) ***/
pref("privacy.clearOnShutdown.openWindows", false);
/* 2815: blocca eliminazione "Cookies" e "Site Data" (se 2810=true) ***/
pref("privacy.clearOnShutdown.cookies", false);
pref("privacy.clearOnShutdown.offlineApps", false);

/*** [4500] RFP (ResistFingerPrinting) ***/
/* 4501: abilita RFP (solo in modalità anonima) ***/
clearPref("privacy.resistFingerprinting");
pref("privacy.resistFingerprinting.pbmode", true);
/* 4502: arrotondamento dimensioni finestre ***/
pref("privacy.window.maxInnerWidth", 1600);
pref("privacy.window.maxInnerHeight", 900);
/* 4503: disabilita mozAddonManager Web API ***/
pref("privacy.resistFingerprinting.block_mozAddonManager", true);
/* 4504: RFP letterboxing ***/
clearPref("privacy.resistFingerprinting.letterboxing"); // [Nascosta]
/* 4510: usa colori di sistema ***/
pref("browser.display.use_system_colors", false);
/* 4511: usa tema widget non-nativo ***/
pref("widget.non-native-theme.enabled", true);
/* 4512: forza apertura dei link in nuove schede ***/
pref("browser.link.open_newwindow", 3);
/* 4513: obbliga a rispettare "browser.link.open_newwindow" (4512) ***/
pref("browser.link.open_newwindow.restriction", 0);
/* 4520: WebGL (Web Graphics Library) ***/
clearPref("webgl.disabled");

/*** [5000] OPSEC ***/
/* 5009: disabilita "apri con" per i download ***/
pref("browser.download.forbid_open_with", true);
/* 5012: disabilita completamento autmatico nella barra degli indirizzi ***/
pref("browser.urlbar.autoFill", false);
/* 5016: scarica file in download ***/
pref("browser.download.folderList", 1);
/* 5017: disabilita compilazione automatica form ***/
pref("extensions.formautofill.addresses.enabled", false);
pref("extensions.formautofill.creditCards.enabled", false);
/* 5018: limita eventi che possono aprire popup ***/
pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
/* 5019: disabilita salvataggio miniature delle pagine visitate ***/
pref("browser.pagethumbnails.capturing_disabled", true); // [Nascosta]

/*** [5500] HARDENING ***/
/* 5508: DRM (EME: Encryption Media Extension) ***/
pref("media.eme.enabled", true);
pref("browser.eme.ui.enabled", false);
/* 5509: disabilita IPv6 ***/
defaultPref("network.dns.disableIPv6", true);

/*** [6000]: NON TOCCARE ***/
/* 6001: enforce Firefox blocklist ***/
clearPref("extensions.blocklist.enabled");
/* 6002: enforce no referer spoofing ***/
clearPref("network.http.referer.spoofSource");
/* 6004: enforce a security delay on some confirmation dialogs such as install, open/save ***/
clearPref("security.dialog_enable_delay");
/* 6008: enforce no First Party Isolation ***/
clearPref("privacy.firstparty.isolate");
/* 6009: enforce SmartBlock shims (about:compat) ***/
clearPref("extensions.webcompat.enable_shims");
/* 6010: enforce no TLS 1.0/1.1 downgrades ***/
clearPref("security.tls.version.enable-deprecated");
/* 6011: enforce disabling of Web Compatibility Reporter ***/
clearPref("extensions.webcompat-reporter.enabled");
/* 6012: enforce Quarantined Domains [FF115+] ***/
clearPref("extensions.quarantinedDomains.enabled");

/*** [7000] ***/
/* 7002: blocca richieste permessi ***/
pref("permissions.default.camera", 2);
pref("permissions.default.desktop-notification", 2);
pref("permissions.default.geo", 2);
pref("permissions.default.microphone", 2);
pref("permissions.default.shortcuts", 2);
pref("permissions.default.xr", 2);
/* 7015: abilita DNT (Do Not Track) ***/
pref("privacy.donottrackheader.enabled", true);
/* 7017: resetta service workers (disabilitare i service workers rompe Firefox Sync e diversi siti) ***/
clearPref("dom.serviceWorkers.enabled");

/*** [9999] DEPRECATE ***/
// Resettate
clearPref("network.dnsCacheExpiration");
clearPref("dom.webnotifications.enabled");
clearPref("dom.push.enabled",);
clearPref("gfx.webrender.program-binary-disk");
clearPref("gfx.webrender.enabled");
clearPref("browser.urlbar.showSearchTerms.enabled");
clearPref("urlclassifier.trackingSkipURLs");
clearPref("urlclassifier.features.socialtracking.skipURLs");
clearPref("browser.sessionstore.interval");
clearPref("security.insecure_connection_text.enabled");
clearPref("security.insecure_connection_text.pbmode.enabled");
clearPref("dom.security.https_first");
clearPref("signon.privateBrowsingCapture.enabled");
clearPref("security.mixed_content.upgrade_display_content");
clearPref("security.mixed_content.upgrade_display_content.image");
clearPref("browser.download.open_pdf_attachments_inline");
// FF116
clearPref("layout.css.font-visibility.resistFingerprinting");
// FF117
clearPref("security.family_safety.mode");
clearPref("dom.webnotifications.serviceworker.enabled");
// FF118
clearPref("layout.css.font-visibility.private");
clearPref("layout.css.font-visibility.standard");
clearPref("layout.css.font-visibility.trackingprotection");
clearPref("permissions.delegation.enabled");
// FF119
clearPref("javascript.use_us_english_locale");
clearPref("network.dns.skipTRR-when-parental-control-enabled");

// [FINE]
lockPref("rischio.fox", "Parrebbe funzionare...");
