
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

/* scorciatoie newtab */
lockPref("browser.newtabpage.pinned", "[{\"url\":\"https://github.com/RischioCinico/rischio-fox\",\"label\":\"127.4\"},{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://www.subito.it/\",\"label\":\"Subito\"},{\"url\":\"https://www.diretta.it/\",\"label\":\"Diretta\"}]");
lockPref("browser.newtabpage.activity-stream.topSitesRows", 1);
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
/* ripristina searchbox in newtab */
clearPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar");
defaultPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
/* disabilita popup traduttore */
clearPref("browser.translations.automaticallyPopup");
defaultPref("browser.translations.automaticallyPopup", false);
/* disabilita il blocco popup integrato */
clearPref("dom.disable_open_during_load");
lockPref("dom.disable_open_during_load", false);
/* disabilita accessibilità */
clearPref("accessibility.force_disabled");
defaultPref("accessibility.force_disabled", 1);
/* disabilita indicatori WebRTC (sono buggati) */
clearPref("privacy.webrtc.hideGlobalIndicator");
defaultPref("privacy.webrtc.hideGlobalIndicator", true);
/* nascondi barra del titolo */
defaultPref("browser.tabs.inTitlebar", 2);
/* abilita scorrimento automatico */
defaultPref("general.autoScroll", true);

/* has-used */
pref("browser.engagement.ctrlTab.has-used", true);
pref("browser.engagement.downloads-button.has-used", true);
pref("browser.engagement.fxa-toolbar-menu-button.has-used", true);
pref("browser.engagement.home-button.has-used", true);
pref("browser.engagement.library-button.has-used", true);
pref("browser.engagement.sidebar-button.has-used", true);
pref("media.videocontrols.picture-in-picture.video-toggle.has-used", true);

/*** Betterfox v126 ***/

/* ░█▀▀░█▀█░█▀▀░▀█▀░█▀▀░█▀█░█░█ */
/* ░█▀▀░█▀█░▀▀█░░█░░█▀▀░█░█░▄▀▄ */
/* ░▀░░░▀░▀░▀▀▀░░▀░░▀░░░▀▀▀░▀░▀ */

/** GENERAL **/
clearPref("content.notify.interval");
defaultPref("content.notify.interval", 100000);

/** GFX **/
clearPref("gfx.canvas.accelerated.cache-items");
clearPref("gfx.canvas.accelerated.cache-size");
clearPref("gfx.content.skia-font-cache-size");

defaultPref("gfx.canvas.accelerated.cache-items", 8192);
defaultPref("gfx.canvas.accelerated.cache-size", 1024);
defaultPref("gfx.content.skia-font-cache-size", 20);

/** CACHE **/
clearPref("browser.cache.jsbc_compression_level");
clearPref("media.memory_cache_max_size");
clearPref("media.memory_caches_combined_limit_kb");
clearPref("media.memory_caches_combined_limit_pc_sysmem");
clearPref("media.cache_readahead_limit");
clearPref("media.cache_resume_threshold");
clearPref("image.mem.decode_bytes_at_a_time");

defaultPref("browser.cache.jsbc_compression_level", 3);
defaultPref("media.memory_cache_max_size", 131072);
defaultPref("media.memory_caches_combined_limit_kb", 1048576);
defaultPref("media.memory_caches_combined_limit_pc_sysmem", 10);
defaultPref("media.cache_readahead_limit", 7200);
defaultPref("media.cache_resume_threshold", 3600);
defaultPref("image.mem.decode_bytes_at_a_time", 65536);

/** NETWORK **/
clearPref("network.http.max-connections");
clearPref("network.http.max-persistent-connections-per-server");
clearPref("network.http.max-urgent-start-excessive-connections-per-host");
clearPref("network.http.pacing.requests.enabled");
clearPref("network.dnsCacheEntries");
clearPref("network.dnsCacheExpiration");
clearPref("network.ssl_tokens_cache_capacity");

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

/* ░█▀▀░█▀▀░█▀▀░█░█░█▀▄░█▀▀░█▀▀░█▀█░█░█ */
/* ░▀▀█░█▀▀░█░░░█░█░█▀▄░█▀▀░█▀▀░█░█░▄▀▄ */
/* ░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░░░▀▀▀░▀░▀ */

/** TRACKING PROTECTION **/
clearPref("network.cookie.sameSite.noneRequiresSecure");
clearPref("privacy.globalprivacycontrol.enabled");

defaultPref("network.cookie.sameSite.noneRequiresSecure", true);
defaultPref("privacy.globalprivacycontrol.enabled", true);

/** DISK AVOIDANCE **/
clearPref("browser.sessionstore.interval");
defaultPref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING **/
clearPref("privacy.history.custom");
defaultPref("privacy.history.custom", true);

/** SEARCH / URL BAR **/
clearPref("browser.urlbar.update2.engineAliasRefresh");
clearPref("security.insecure_connection_text.enabled");
clearPref("security.insecure_connection_text.pbmode.enabled");

defaultPref("browser.urlbar.update2.engineAliasRefresh", true);
defaultPref("security.insecure_connection_text.enabled", true);
defaultPref("security.insecure_connection_text.pbmode.enabled", true);

/** HTTPS-FIRST POLICY **/
clearPref("dom.security.https_first");
clearPref("dom.security.https_first_schemeless");

defaultPref("dom.security.https_first", true);
defaultPref("dom.security.https_first_schemeless", true);

/** PASSWORDS **/
clearPref("signon.privateBrowsingCapture.enabled");
clearPref("editor.truncate_user_pastes");

defaultPref("signon.privateBrowsingCapture.enabled", false);
defaultPref("editor.truncate_user_pastes", false);

/** MIXED CONTENT + CROSS-SITE **/
clearPref("security.mixed_content.upgrade_display_content");
clearPref("security.mixed_content.upgrade_display_content.image");

defaultPref("security.mixed_content.upgrade_display_content", true);
defaultPref("security.mixed_content.upgrade_display_content.image", true);

/* ░█▀█░█▀▀░█▀▀░█░█░█░█░█▀▀░█▀█░█░█ */
/* ░█▀▀░█▀▀░▀▀█░█▀▄░░█░░█▀▀░█░█░▄▀▄ */
/* ░▀░░░▀▀▀░▀▀▀░▀░▀░░▀░░▀░░░▀▀▀░▀░▀ */

/** MOZILLA UI **/
clearPref("browser.privatebrowsing.vpnpromourl");
clearPref("browser.shell.checkDefaultBrowser");
clearPref("browser.clearPreferences.moreFromMozilla");
clearPref("browser.tabs.tabmanager.enabled");
clearPref("browser.aboutConfig.showWarning");
clearPref("browser.aboutwelcome.enabled");

defaultPref("browser.privatebrowsing.vpnpromourl", "");
defaultPref("browser.vpn_promo.enabled", false)
defaultPref("browser.shell.checkDefaultBrowser", false);
defaultPref("browser.defaultPreferences.moreFromMozilla", false);
defaultPref("browser.tabs.tabmanager.enabled", false);
defaultPref("browser.aboutConfig.showWarning", false);
defaultPref("browser.aboutwelcome.enabled", false);

/** THEME ADJUSTMENTS **/
clearPref("toolkit.legacyUserProfileCustomizations.stylesheets");
clearPref("browser.compactmode.show");
clearPref("browser.display.focus_ring_on_anything");
clearPref("browser.display.focus_ring_style");
clearPref("browser.display.focus_ring_width");
clearPref("layout.css.clearPrefers-color-scheme.content-override");

defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
defaultPref("browser.compactmode.show", true);
defaultPref("browser.display.focus_ring_on_anything", true);
defaultPref("browser.display.focus_ring_style", 0); // 0=Solid, 1=Dotted
defaultPref("browser.display.focus_ring_width", 1);
defaultPref("layout.css.defaultPrefers-color-scheme.content-override", 3); // (0=Scuro, 1=Chiaro, 2=Sistema, 3=Browser)

/** COOKIE BANNER HANDLING **/
clearPref("cookiebanners.service.mode");
clearPref("cookiebanners.service.mode.privateBrowsing");

defaultPref("cookiebanners.service.mode", 1);
defaultPref("cookiebanners.service.mode.privateBrowsing", 1);

/** FULLSCREEN NOTICE **/
clearPref("full-screen-api.transition-duration.enter");
clearPref("full-screen-api.transition-duration.leave");
clearPref("full-screen-api.warning.delay");
clearPref("full-screen-api.warning.timeout");

defaultPref("full-screen-api.transition-duration.enter", "0 0");
defaultPref("full-screen-api.transition-duration.leave", "0 0");
defaultPref("full-screen-api.warning.delay", -1);
defaultPref("full-screen-api.warning.timeout", 0);

/** URL BAR **/
clearPref("browser.urlbar.suggest.calculator");
clearPref("browser.urlbar.unitConversion.enabled");

defaultPref("browser.urlbar.suggest.calculator", true);
defaultPref("browser.urlbar.unitConversion.enabled", true);

/** NEW TAB PAGE **/
clearPref("browser.newtabpage.activity-stream.feeds.topsites");
clearPref("browser.newtabpage.activity-stream.feeds.section.topstories");

defaultPref("browser.newtabpage.activity-stream.feeds.topsites", true);
defaultPref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/** POCKET **/
clearPref("extensions.pocket.enabled");
defaultPref("extensions.pocket.enabled", false);

/** PDF **/
clearPref("browser.download.open_pdf_attachments_inline");
defaultPref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR **/
clearPref("browser.bookmarks.openInTabClosesMenu");
clearPref("browser.menu.showViewImageInfo");
clearPref("findbar.highlightAll");
clearPref("layout.word_select.eat_space_to_next_word");
clearPref("widget.gtk.hide-pointer-while-typing.enabled");

defaultPref("browser.bookmarks.openInTabClosesMenu", false);
defaultPref("browser.menu.showViewImageInfo", true);
defaultPref("findbar.highlightAll", true);
defaultPref("layout.word_select.eat_space_to_next_word", false);
defaultPref("widget.gtk.hide-pointer-while-typing.enabled", false);

/* ░█▀█░█▀▄░█░█░█▀▀░█▀█░█▀▀░█▀█░█░█ */
/* ░█▀█░█▀▄░█▀▄░█▀▀░█░█░█▀▀░█░█░▄▀▄ */
/* ░▀░▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░░░▀▀▀░▀░▀ */
/*** Arkenfox v126 ***/

/*** [0100] AVVIO ***/
clearPref("browser.startup.page");
clearPref("browser.newtabpage.activity-stream.default.sites");

/* 0102 ripristina sessione */
defaultPref("browser.startup.page", 3);
/* 0105 disabilita contenuti sponsorizzati */
lockPref("browser.newtabpage.activity-stream.showSponsored", false);
lockPref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
/* 0106 elimina topsites */
defaultPref("browser.newtabpage.activity-stream.default.sites", "");

/*** [0200] GEOLOCALIZZAZIONE ***/
clearPref("geo.provider.network.url");
clearPref("geo.provider.use_gpsd");
clearPref("geo.provider.use_geoclue");
/* 0201 usa servizio di geolocalizzazione di Mozilla */
defaultPref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
/* 0202 disabilita utilizzo del servizio di geolocalizzazione del sistema locale */
defaultPref("geo.provider.use_gpsd", false);
defaultPref("geo.provider.use_geoclue", false);

/*** [0300] RACCOLTA DATI ***/
clearPref("extensions.getAddons.showPane");
clearPref("extensions.htmlaboutaddons.recommendations.enabled");
clearPref("browser.discovery.enabled");
clearPref("browser.shopping.experience2023.enabled");
clearPref("toolkit.telemetry.coverage.opt-out");
clearPref("toolkit.coverage.opt-out");
clearPref("toolkit.coverage.endpoint.base");
clearPref("browser.newtabpage.activity-stream.feeds.telemetry");
clearPref("browser.newtabpage.activity-stream.telemetry");
clearPref("app.shield.optoutstudies.enabled");
clearPref("app.normandy.enabled");
clearPref("app.normandy.api_url");
clearPref("breakpad.reportURL");
clearPref("browser.tabs.crashReporting.sendReport");
clearPref("browser.crashReports.unsubmittedCheck.enabled");
clearPref("browser.crashReports.unsubmittedCheck.autoSubmit2");
clearPref("captivedetect.canonicalURL");
clearPref("network.captive-portal-service.enabled");
clearPref("network.connectivity-service.enabled");

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
defaultPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
/* 0360 disabilita Captive Portal */
defaultPref("captivedetect.canonicalURL", "");
defaultPref("network.captive-portal-service.enabled", false);
/* 0361 disabilita controllo connettività */
defaultPref("network.connectivity-service.enabled", false);

/*** [0600] CONNESSIONI NON RICHIESTE ***/
clearPref("network.prefetch-next");
clearPref("network.dns.disablePrefetch");
clearPref("network.dns.disablePrefetchFromHTTPS");
clearPref("network.predictor.enabled");
clearPref("network.predictor.enable-prefetch");
clearPref("network.http.speculative-parallel-limit");
clearPref("browser.places.speculativeConnect.enabled");
clearPref("browser.send_pings");

/* 0601 disabilita link prefetching */
defaultPref("network.prefetch-next", false);
/* 0602 disabilita DNS prefetching */
defaultPref("network.dns.disablePrefetch", true);
defaultPref("network.dns.disablePrefetchFromHTTPS", true);
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
clearPref("network.proxy.socks_remote_dns");
clearPref("network.file.disable_unc_paths");
clearPref("network.gio.supported-protocols");
clearPref("network.trr.mode");
clearPref("network.trr.uri");
clearPref("network.trr.custom_uri");

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
clearPref("browser.urlbar.speculativeConnect.enabled");
clearPref("browser.urlbar.quicksuggest.enabled");
clearPref("browser.urlbar.suggest.quicksuggest.nonsponsored");
clearPref("browser.urlbar.suggest.quicksuggest.sponsored");
clearPref("browser.urlbar.trending.featureGate");
clearPref("browser.urlbar.addons.featureGate");
clearPref("browser.urlbar.mdn.featureGate");
clearPref("browser.urlbar.pocket.featureGate");
clearPref("browser.urlbar.weather.featureGate");
clearPref("browser.urlbar.yelp.featureGate");
clearPref("browser.urlbar.clipboard.featureGate");
clearPref("browser.formfill.enable");
clearPref("browser.search.separatePrivateDefault");
clearPref("browser.search.separatePrivateDefault.ui.enabled");

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
clearPref("signon.autofillForms");
clearPref("signon.formlessCapture.enabled");
clearPref("network.auth.subresource-http-auth-allow");

/* 0903 disabilita compilazione automatica username & password */
defaultPref("signon.autofillForms", false);
/* 0904 disabilita formless login capture per il Password Manager */
defaultPref("signon.formlessCapture.enabled", false);
/* 0905 limita (o disabilita) autenticazione HTTP */
defaultPref("network.auth.subresource-http-auth-allow", 1);

/*** [1000] LIMITARE SCRITTURA SUL DISCO ***/
clearPref("browser.privatebrowsing.forceMediaMemoryCache");
clearPref("media.memory_cache_max_size");
clearPref("browser.sessionstore.privacy_level");

/* 1002 disabilita scrittura cache su disco dei media in modalità anonima */
defaultPref("browser.privatebrowsing.forceMediaMemoryCache", true);
defaultPref("media.memory_cache_max_size", 65536);
/* 1003 disabilita la memorizzazione di dati di sessione aggiuntivi */
defaultPref("browser.sessionstore.privacy_level", 2);

/*** [1200] HTTPS (SSL/TLS / OCSP / CERTS / HPKP) ***/
clearPref("security.ssl.require_safe_negotiation");
clearPref("security.tls.enable_0rtt_data");
clearPref("security.OCSP.enabled");
clearPref("security.OCSP.require");
clearPref("security.cert_pinning.enforcement_level");
clearPref("security.remote_settings.crlite_filters.enabled");
clearPref("security.pki.crlite_mode");
clearPref("security.mixed_content.block_display_content");
clearPref("dom.security.https_only_mode");
clearPref("dom.security.https_only_mode_send_http_background_request");
clearPref("security.ssl.treat_unsafe_negotiation_as_broken");
clearPref("browser.xul.error_pages.expert_bad_cert");
clearPref("network.http.referer.XOriginTrimmingPolicy");
clearPref("privacy.userContext.enabled");
clearPref("privacy.userContext.ui.enabled");
clearPref("browser.link.force_default_user_context_id_for_external_opens");

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
defaultPref("privacy.userContext.ui.enabled", true);
/* 1703 scegli in quale container aprire i collegamenti esterni */
defaultPref("browser.link.force_default_user_context_id_for_external_opens", true);

/*** [2000] PLUGINS / MEDIA / WEBRTC ***/
clearPref("media.peerconnection.ice.proxy_only_if_behind_proxy");
clearPref("media.peerconnection.ice.default_address_only");

/* 2002 forza WebRTC dietro proxy */
defaultPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
/* 2003 utilizza una singola interfaccia di rete per ICE */
defaultPref("media.peerconnection.ice.default_address_only", true);

/*** [2400] DOM (DOCUMENT OBJECT MODEL) ***/
/* 2402 impedisci agli scripts di spostare e ridimensionare finestre */
clearPref("dom.disable_window_move_resize");
defaultPref("dom.disable_window_move_resize", true);

/*** [2600] MISTO ***/
clearPref("browser.download.start_downloads_in_tmp_dir");
clearPref("browser.helperApps.deleteTempFileOnExit");
clearPref("browser.uitour.enabled");
clearPref("devtools.debugger.remote-enabled");
clearPref("permissions.manager.defaultsUrl");
clearPref("webchannel.allowObject.urlWhitelist");
clearPref("network.IDN_show_punycode");
clearPref("pdfjs.disabled");
clearPref("pdfjs.enableScripting");
clearPref("browser.tabs.searchclipboardfor.middleclick");
clearPref("browser.contentanalysis.default_allow");
clearPref("browser.download.useDownloadDir");
clearPref("browser.download.alwaysOpenPanel");
clearPref("browser.download.manager.addToRecentDocs");
clearPref("browser.download.always_ask_before_handling_new_types");
clearPref("extensions.enabledScopes");
clearPref("extensions.autoDisableScopes");
clearPref("extensions.postDownloadThirdPartyPrompt");
clearPref("privacy.sanitize.sanitizeOnShutdown");

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
clearPref("extensions.autoDisableScopes", 15);
/* 2661 disabilita prompt di installazione esterni */
defaultPref("extensions.postDownloadThirdPartyPrompt", false);
/* 2810 previene pulizia dati automatica alla chiusura di Firefox */
defaultPref("privacy.sanitize.sanitizeOnShutdown", false);

/*** [4500] RFP (ResistFingerPrinting) ***/
clearPref("privacy.resistFingerprinting.pbmode");
clearPref("privacy.window.maxInnerWidth", 1600);
clearPref("privacy.window.maxInnerHeight", 900);
clearPref("privacy.resistFingerprinting.block_mozAddonManager");
clearPref("browser.display.use_system_colors");
clearPref("widget.non-native-theme.enabled");
clearPref("browser.link.open_newwindow");
clearPref("browser.link.open_newwindow.restriction");

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
clearPref("browser.download.forbid_open_with");
clearPref("browser.urlbar.autoFill");
clearPref("browser.download.folderList");
clearPref("extensions.formautofill.addresses.enabled");
clearPref("extensions.formautofill.creditCards.enabled");
clearPref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
clearPref("browser.pagethumbnails.capturing_disabled");
clearPref("media.eme.enabled");
clearPref("browser.eme.ui.enabled");
clearPref("network.dns.disableIPv6");

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
// FF123
clearPref("browser.ping-centre.telemetry");
// FF126
clearPref("browser.messaging-system.whatsNewPanel.enabled");

// Resettate
clearPref("gfx.canvas.accelerated");
clearPref("network.dns.max_high_priority_threads");
clearPref("cookiebanners.service.enableGlobalRules");
clearPref("cookiebanners.service.enableGlobalRules.subFrames");
clearPref("privacy.globalprivacycontrol.functionality.enabled");
clearPref("privacy.globalprivacycontrol.pbmode.enabled");
clearPref("layout.css.has-selector.enabled");
clearPref("image.mem.shared.unmap.min_expiration_ms"); // This is only used on 32-bit builds of Firefox where there is meaningful
clearPref("network.buffer.cache.size"); // WARNING: Cannot open HTML files bigger than 4MB if changed
clearPref("network.buffer.cache.count"); // WARNING: Cannot open HTML files bigger than 4MB if changed
clearPref("network.http.pacing.requests.min-parallelism")
clearPref("network.http.pacing.requests.burst");
clearPref("network.http.max-persistent-connections-per-proxy");
clearPref("browser.startup.homepage_override.mstone");
clearPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons");
clearPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features");
clearPref("browser.urlbar.showSearchTerms.enabled");
clearPref("permissions.default.camera");
clearPref("permissions.default.desktop-notification");
clearPref("permissions.default.geo");
clearPref("permissions.default.microphone");
clearPref("permissions.default.shortcuts");
clearPref("permissions.default.xr");
clearPref("dom.webnotifications.enabled");
clearPref("dom.push.enabled");
clearPref("privacy.donottrackheader.enabled");
// DA CONTROLLARE
clearPref("browser.bookmarks.showMobileBookmarks");
clearPref("privacy.webrtc.legacyGlobalIndicator");
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
