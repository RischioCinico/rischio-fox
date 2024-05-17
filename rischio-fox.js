
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

/* modifiche newtab ***/
lockPref("browser.newtabpage.pinned", "[{\"url\":\"https://github.com/RischioCinico/rischio-fox\",\"label\":\"125.15\"},{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://www.subito.it/\",\"label\":\"Subito\"},{\"url\":\"https://www.diretta.it/\",\"label\":\"Diretta\"}]");
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "");
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
lockPref("browser.newtabpage.activity-stream.impressionId", "");
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
/* ripristina searchbox ***/
pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
/* disabilita popup traduttore ***/
pref("browser.translations.automaticallyPopup", false);
/* disabilita il blocco popup integrato ***/
pref("dom.disable_open_during_load", false);
/* disabilita accessibilità ***/
pref("accessibility.force_disabled", 1);
/* abilita scorrimento automatico ***/
defaultPref("general.autoScroll", true);
/* disabilita indicatori WebRTC (sono buggati) ***/
pref("privacy.webrtc.hideGlobalIndicator", true);
pref("privacy.webrtc.legacyGlobalIndicator", false);
/* mostra segnalibri Mobile ***/
pref("browser.bookmarks.showMobileBookmarks", true);
/* nascondi barra del titolo ***/
defaultPref("browser.tabs.inTitlebar", 2);
/* non nascondere il puntatore durante digitazione (Peskyfox) ***/
pref("widget.gtk.hide-pointer-while-typing.enabled", false);
/* Disabilita cache DNS di Firefox ***/
pref("network.dnsCacheEntries", 0);
/* Media memory cache ***/
pref("media.memory_caches_combined_limit_kb", 1048576);
pref("media.memory_caches_combined_limit_pc_sysmem", 10);

/*** Betterfox v122.1 ***/

/* ░█▀▀░█▀█░█▀▀░▀█▀░█▀▀░█▀█░█░█ */
/* ░█▀▀░█▀█░▀▀█░░█░░█▀▀░█░█░▄▀▄ */
/* ░▀░░░▀░▀░▀▀▀░░▀░░▀░░░▀▀▀░▀░▀ */

/** GENERAL ***/
pref("content.notify.interval", 100000);

/** GFX ***/
pref("gfx.canvas.accelerated.cache-items", 4096);
pref("gfx.canvas.accelerated.cache-size", 512);
pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
pref("browser.cache.jsbc_compression_level", 3);

/** MEDIA CACHE ***/
pref("media.memory_cache_max_size", 65536);
pref("media.cache_readahead_limit", 7200);
pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
pref("network.http.max-connections", 1800);
pref("network.http.max-persistent-connections-per-server", 10);
pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
pref("network.http.pacing.requests.enabled", false);
pref("network.dnsCacheExpiration", 0);
pref("network.dns.max_high_priority_threads", 8);
pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
// pref("network.dns.disablePrefetch", true); doppione di 0602
// pref("network.prefetch-next", false); doppione di 0601
// pref("network.predictor.enabled", false); doppione di 0603

/** EXPERIMENTAL ***/
defaultPref("layout.css.grid-template-masonry-value.enabled", true);
defaultPref("dom.enable_web_task_scheduling", true);
defaultPref("layout.css.has-selector.enabled", true);
defaultPref("dom.security.sanitizer.enabled", true);

/* ░█▀▀░█▀▀░█▀▀░█░█░█▀▄░█▀▀░█▀▀░█▀█░█░█ */
/* ░▀▀█░█▀▀░█░░░█░█░█▀▄░█▀▀░█▀▀░█░█░▄▀▄ */
/* ░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░░░▀▀▀░▀░▀ */

/** TRACKING PROTECTION ***/
// pref("browser.contentblocking.category", "strict"); doppione di 2701
clearPref("urlclassifier.trackingSkipURLs");
clearPref("urlclassifier.features.socialtracking.skipURLs");
pref("network.cookie.sameSite.noneRequiresSecure", true);
// pref("browser.download.start_downloads_in_tmp_dir", true); doppione di 2603
// pref("browser.helperApps.deleteTempFileOnExit", true); doppione di 2603
// pref("browser.uitour.enabled", false); doppione di 2606
pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
// pref("security.OCSP.enabled", 0); [1211]
// pref("security.remote_settings.crlite_filters.enabled", true); doppione di 1224
// pref("security.pki.crlite_mode", 2); doppione di 1224

/** SSL / TLS ***/
// pref("security.ssl.treat_unsafe_negotiation_as_broken", true); doppione di 1270
// pref("browser.xul.error_pages.expert_bad_cert", true); doppione di 1272
// pref("security.tls.enable_0rtt_data", false); doppione di 1206

/** DISK AVOIDANCE ***/
// pref("browser.privatebrowsing.forceMediaMemoryCache", true); doppione di 1002
pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
// pref("browser.search.separatePrivateDefault.ui.enabled", true); doppione di 0830
pref("browser.urlbar.update2.engineAliasRefresh", true);
// pref("browser.search.suggest.enabled", false);
// pref("browser.urlbar.suggest.quicksuggest.sponsored", false); doppione di 0802
// pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); doppione di 0802
// pref("browser.formfill.enable", false); doppione di 0810
pref("security.insecure_connection_text.enabled", true);
pref("security.insecure_connection_text.pbmode.enabled", true);
// pref("network.IDN_show_punycode", true); doppione di 2619

/** HTTPS-FIRST POLICY ***/
pref("dom.security.https_first", true);
pref("dom.security.https_first_schemeless", true);

/** PASSWORDS ***/
// pref("signon.formlessCapture.enabled", false); doppione di 0904
pref("signon.privateBrowsingCapture.enabled", false);
// pref("network.auth.subresource-http-auth-allow", 1); doppione di 0905
pref("editor.truncate_user_pastes", false);

/** MIXED CONTENT + CROSS-SITE ***/
// pref("security.mixed_content.block_display_content", true); doppione di 1241
pref("security.mixed_content.upgrade_display_content", true);
pref("security.mixed_content.upgrade_display_content.image", true);
// pref("pdfjs.enableScripting", false); doppione di 2620
// pref("extensions.postDownloadThirdPartyPrompt", false); doppione di 2661

/** HEADERS / REFERERS ***/
// pref("network.http.referer.XOriginTrimmingPolicy", 2); doppione di 1602

/** CONTAINERS ***/
// pref("privacy.userContext.ui.enabled", true); doppione di 1701

/** WEBRTC ***/
// pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); doppione di 2002
// pref("media.peerconnection.ice.default_address_only", true); doppione di 2003

/** SAFE BROWSING ***/
// pref("browser.safebrowsing.downloads.remote.enabled", false); doppione di 0403

/** MOZILLA ***/
// pref("permissions.default.desktop-notification", 2); doppione di 7002
// pref("permissions.default.geo", 2); doppione di 7002
// pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"); doppione di 0201
// pref("permissions.manager.defaultsUrl", ""); doppione di 2616
// pref("webchannel.allowObject.urlWhitelist", ""); doppione di 2617

/** TELEMETRY ***/
// pref("datareporting.policy.dataSubmissionEnabled", false);
// pref("datareporting.healthreport.uploadEnabled", false);
// pref("toolkit.telemetry.unified", false);
// pref("toolkit.telemetry.enabled", false);
// pref("toolkit.telemetry.server", "data:,");
// pref("toolkit.telemetry.archive.enabled", false);
// pref("toolkit.telemetry.newProfilePing.enabled", false);
// pref("toolkit.telemetry.shutdownPingSender.enabled", false);
// pref("toolkit.telemetry.updatePing.enabled", false);
// pref("toolkit.telemetry.bhrPing.enabled", false);
// pref("toolkit.telemetry.firstShutdownPing.enabled", false);
// pref("toolkit.telemetry.coverage.opt-out", true);
// pref("toolkit.coverage.opt-out", true);
// pref("toolkit.coverage.endpoint.base", "");
// pref("browser.ping-centre.telemetry", false);
// pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
// pref("browser.newtabpage.activity-stream.telemetry", false);

/** EXPERIMENTS ***/
// pref("app.shield.optoutstudies.enabled", false); doppione di 0340
// pref("app.normandy.enabled", false); doppione di 0341
// pref("app.normandy.api_url", ""); doppione di 0341

/** CRASH REPORTS ***/
// pref("breakpad.reportURL", ""); doppione di 0350
// pref("browser.tabs.crashReporting.sendReport", false); doppione di 0350
// pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); doppione di 0351

/** DETECTION ***/
// pref("captivedetect.canonicalURL", ""); doppione di 0360
// pref("network.captive-portal-service.enabled", false); doppione di 0360
// pref("network.connectivity-service.enabled", false); doppione di 0361

/* ░█▀█░█▀▀░█▀▀░█░█░█░█░█▀▀░█▀█░█░█ */
/* ░█▀▀░█▀▀░▀▀█░█▀▄░░█░░█▀▀░█░█░▄▀▄ */
/* ░▀░░░▀▀▀░▀▀▀░▀░▀░░▀░░▀░░░▀▀▀░▀░▀ */

/** MOZILLA UI ***/
pref("browser.privatebrowsing.vpnpromourl", "");
// pref("extensions.getAddons.showPane", false); doppione di 0320
// pref("extensions.htmlaboutaddons.recommendations.enabled", false); doppione di 0321
// pref("browser.discovery.enabled", false); doppione di 0322
pref("browser.shell.checkDefaultBrowser", false);
// pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); doppione di 9002
// pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); doppione di 9002
pref("browser.preferences.moreFromMozilla", false);
pref("browser.tabs.tabmanager.enabled", false);
pref("browser.aboutConfig.showWarning", false);
pref("browser.aboutwelcome.enabled", false);

/** THEME ADJUSTMENTS ***/
pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
pref("browser.compactmode.show", true);
pref("browser.display.focus_ring_on_anything", true);
pref("browser.display.focus_ring_style", 0); // 0=Solid, 1=Dotted
pref("browser.display.focus_ring_width", 1);
pref("layout.css.prefers-color-scheme.content-override", 3); // (0=Scuro, 1=Chiaro, 2=Sistema, 3=Browser)
// pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** COOKIE BANNER HANDLING ***/
pref("cookiebanners.service.mode", 1);
pref("cookiebanners.service.mode.privateBrowsing", 1);

/** FULLSCREEN NOTICE ***/
pref("full-screen-api.transition-duration.enter", "0 0");
pref("full-screen-api.transition-duration.leave", "0 0");
pref("full-screen-api.warning.delay", -1);
pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
pref("browser.urlbar.suggest.calculator", true);
pref("browser.urlbar.unitConversion.enabled", true);
// pref("browser.urlbar.trending.featureGate", false); doppione di 0805

/** NEW TAB PAGE ***/
pref("browser.newtabpage.activity-stream.feeds.topsites", true);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/** POCKET ***/
pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
// pref("browser.download.always_ask_before_handling_new_types", true); doppione di 2654
// pref("browser.download.manager.addToRecentDocs", false); doppione di 2653

/** PDF ***/
pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
pref("browser.bookmarks.openInTabClosesMenu", false);
pref("browser.menu.showViewImageInfo", true);
pref("findbar.highlightAll", true);
pref("layout.word_select.eat_space_to_next_word", false);

/* ░█▀█░█▀▄░█░█░█▀▀░█▀█░█▀▀░█▀█░█░█ */
/* ░█▀█░█▀▄░█▀▄░█▀▀░█░█░█▀▀░█░█░▄▀▄ */
/* ░▀░▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░░░▀▀▀░▀░▀ */
/*** Arkenfox v122 ***/

/*** [0100] AVVIO ***/
/* 0102: ripristina sessione ***/
pref("browser.startup.page", 3);
/* 0103: resetta la home page di Firefox ***/
clearPref("browser.startup.homepage");
/* 0104: resetta NEWTAB ***/
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
/* 7018: disable Web Notifications ***/
pref("dom.webnotifications.enabled", false);
/* 7019: disable Push Notifications [FF44+] ***/
pref("dom.push.enabled", false);

/*** [9000]: NON-PROJECT RELATED ***/
/* 9001: disable welcome notices ***/
pref("browser.startup.homepage_override.mstone", "ignore"); // [HIDDEN PREF]
/* 9002: disable General>Browsing>Recommend extensions/features as you browse [FF67+] ***/
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
/* 9003: disable What's New toolbar icon ***/
pref("browser.messaging-system.whatsNewPanel.enabled", false);
/* 9004: disable search terms ***/
pref("browser.urlbar.showSearchTerms.enabled", false);

/*** [9999] DEPRECATE ***/

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

// Resettate
clearPref("gfx.canvas.accelerated"); // default=true (Linux)
clearPref("cookiebanners.service.enableGlobalRules"); // default=true
clearPref("cookiebanners.service.enableGlobalRules.subFrames"); // default=true
clearPref("privacy.globalprivacycontrol.functionality.enabled"); // default=true
clearPref("privacy.globalprivacycontrol.pbmode.enabled"); // default=true
clearPref("image.mem.shared.unmap.min_expiration_ms"); // This is only used on 32-bit builds of Firefox where there is meaningful
clearPref("network.buffer.cache.size"); // WARNING: Cannot open HTML files bigger than 4MB if changed
clearPref("network.buffer.cache.count"); // WARNING: Cannot open HTML files bigger than 4MB if changed
clearPref("network.http.pacing.requests.min-parallelism")
clearPref("network.http.pacing.requests.burst");
clearPref("network.http.max-persistent-connections-per-proxy");

// DA CONTROLLARE
clearPref("gfx.webrender.program-binary-disk");
clearPref("gfx.webrender.enabled");
clearPref("gfx.webrender.all");
clearPref("gfx.webrender.precache-shaders");
clearPref("gfx.webrender.compositor");
clearPref("gfx.webrender.compositor.force-enabled");
clearPref("gfx.webrender.software.opengl");
clearPref("media.hardware-video-decoding.force-enabled");
clearPref("media.ffmpeg.vaapi.enabled");

// [FINE]
lockPref("rischio.fox", "Parrebbe funzionare...");
