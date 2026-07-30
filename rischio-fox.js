
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
   001: TELEMETRIA
   002: UX
   003: AVVIO
   004: RICERCA
   005: I/O

   006: FINGERPRINTING PROTECTION
   007: DOWNLOADS
   008: HTTP(S)
   009: IMPLICIT CONNECTIONS
   011: DNS
   012: PROXIES
   013: WEBRTC
   014: MEDIA
   015: ATTACK SURFACE
   016: PASSWORDS
   017: EXTENSIONS
   018: AI
   019: GEOLOCATION
   020: PDF
   021: SAFE BROWSING
   022: PRIVACY + SECURITY
   023: PRIVACY
   024: SECURITY
   025: MISC
   026: DEBUGGING
   027: CONTROL
   028: UI
   030: PERFORMANCE
*/

/* -----------------------------------------------------------------------------------
   001: TELEMETRIA
   ----------------------------------------------------------------------------------- */

// Blocca "Allow Firefox to improve features, performance, and stability between updates"
lockPref("nimbus.rollouts.enabled", false);

// Blocca "Automatically send crash reports"
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", true);

// Disabilita crash report
lockPref("browser.crashReports.onDemand", false);
lockPref("browser.crashReports.requestedNeverShowAgain", true);
lockPref("browser.tabs.crashReporting.sendReport", false);

// Disattiva il rilevatore interno di CAPTCHA
lockPref("captchadetection.actor.enabled", false);

// Disabilita Normandy
lockPref("app.normandy.enabled", false);

// Disabilita Origin Trials
lockPref("dom.origin-trials.enabled", false);

// Disattiva la raccolta dati per la protezione dal tracciamento email
lockPref("privacy.trackingprotection.emailtracking.data_collection.enabled", false);

/* -----------------------------------------------------------------------------------
   002: UX
   ----------------------------------------------------------------------------------- */

lockPref("browser.engagement.ctrlTab.has-used", true);
lockPref("browser.engagement.downloads-button.has-used", true);
lockPref("browser.engagement.fxa-toolbar-menu-button.has-used", true);
lockPref("browser.engagement.home-button.has-used", true);
lockPref("browser.engagement.library-button.has-used", true);
lockPref("browser.engagement.sidebar-button.has-used", true);
lockPref("browser.engagement.total_uri_count.pbm", false);
lockPref("browser.engagement.search_counts.pbm", false);
lockPref("browser.search.totalSearches", 100);
lockPref("browser.rights.3.shown", true);
lockPref("privacy.trackingprotection.allow_list.hasUserInteractedWithETPSettings", true);
lockPref("browser.ipProtection.locationButtonBadgeDismissed", true);
lockPref("sidebar.verticalTabs.dragToPinPromo.dismissed", true);
lockPref("browser.protections_panel.infoMessage.seen", true);
lockPref("identity.fxaccounts.toolbar.accessed", true);
lockPref("browser.ipProtection.openedPanelWithLocation", true);
lockPref("browser.ipProtection.upgradeNotAvailable", true);
lockPref("sidebar.new-sidebar.has-used", true);

// Nascondi badge "New"
lockPref("pdfjs.enableNewBadge", false);
lockPref("browser.tabs.notes.newBadge.enabled", false);
lockPref("browser.tabs.splitview.hasUsed", true);
lockPref("browser.ml.chat.page.footerBadge", false);
lockPref("browser.ml.chat.page.menuBadge", false);

// Disabilita avviso in `about:config`
lockPref("browser.aboutConfig.showWarning", false);

// Disabilita avviso schermo intero
lockPref("full-screen-api.warning.timeout", 0);

// Previene l'apertura delle pagine "What's New" dopo gli aggiornamenti
lockPref("browser.startup.homepage_override.buildID", "20100101");
lockPref("browser.startup.homepage_override.mstone", "ignore");
lockPref("startup.homepage_override_nimbus_disable_wnp", true);

// Disabilita estensioni suggerite
lockPref("browser.discovery.enabled", false);

// Nasconde la voce "Recommendations" nel menu Add-ons
lockPref("extensions.getAddons.showPane", false);

// Nasconde "Recommended Extensions" in fondo alla pagina delle estensioni installate
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disattiva le richieste interne di feedback sull'uso di Firefox
lockPref("messaging-system.askForFeedback", false);

// Disabilita promozioni
lockPref("browser.promo.focus.enabled", false);
lockPref("browser.promo.pin.enabled", false);
lockPref("browser.vpn_promo.enabled", false);
lockPref("browser.contentblocking.report.hide_vpn_banner", true);
lockPref("browser.contentblocking.report.lockwise.enabled", false);
lockPref("browser.contentblocking.report.show_mobile_app", false);
lockPref("browser.ipProtection.blockIPProtectionCallouts", true);

// Disabilita UITour
lockPref("browser.uitour.enabled", false);

// Disabilita "Privacy-Preserving Attribution"
lockPref("dom.private-attribution.submission.enabled", false);

// Ignora`Privacy Notice` e `Terms of Use` di Mozilla
lockPref("termsofuse.bypassNotification", true);

/* -----------------------------------------------------------------------------------
   003: AVVIO
   ----------------------------------------------------------------------------------- */

// Blocca il passaggio automatico dalla barra di ricerca a quella degli indirizzi
defaultPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// Sfondo
lockPref("browser.newtabpage.activity-stream.newtabWallpapers.highlightDismissed", true);

// Nasconde logo
lockPref("browser.newtabpage.activity-stream.hideLogo", true);
lockPref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);

// Abilita Widgets
defaultPref("browser.newtabpage.activity-stream.widgets.system.enabled", true);
// Clock
defaultPref("bbrowser.newtabpage.activity-stream.widgets.system.clocks.enabled", true);
// Timer
defaultPref("browser.newtabpage.activity-stream.widgets.system.focusTimer.enabled", true);
defaultPref("browser.newtabpage.activity-stream.widgets.focusTimer.showSystemNotifications", true);
lockPref("browser.newtabpage.activity-stream.widgets.focusTimer.interaction", true);
// Lists
defaultPref("browser.newtabpage.activity-stream.widgets.system.lists.enabled", true);
lockPref("browser.newtabpage.activity-stream.widgets.lists.interaction", true);
// Sports
defaultPref("browser.newtabpage.activity-stream.widgets.system.sportsWidget.enabled", true);
defaultPref("browser.newtabpage.activity-stream.widgets.sportsWidget.celebrations.enabled", true);
defaultPref("browser.newtabpage.activity-stream.widgets.sportsWidget.live.enabled", true);
lockPref("browser.newtabpage.activity-stream.widgets.sportsWidget.interaction", true);
// Meteo
defaultPref("browser.newtabpage.activity-stream.widgets.system.weatherForecast.enabled", true);
lockPref("browser.newtabpage.activity-stream.widgets.weatherForecast.interaction", true);

// Imposta scorciatorie predefinite
lockPref("browser.newtabpage.activity-stream.feeds.smartshortcutsfeed", false);
lockPref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
lockPref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
lockPref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
lockPref("browser.topsites.useRemoteSetting", false);
lockPref("browser.newtabpage.activity-stream.default.sites", "");
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
defaultPref("browser.newtabpage.pinned", "[{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://it.wikipedia.org/wiki/Pagina_principale\",\"label\":\"Wikipedia\"},{\"url\":\"https://github.com/\",\"label\":\"GitHub\"},{\"url\":\"https://www.diretta.it/\",\"label\":\"Diretta\"}]");

// Disabilita sponsorizzazioni
lockPref("browser.newtabpage.activity-stream.discoverystream.promoCard.visible", false);
lockPref("browser.newtabpage.activity-stream.system.showSponsored", false);
lockPref("browser.topsites.contile.enabled", false);
lockPref("browser.newtabpage.activity-stream.feeds.adsfeed", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.reportAds.enabled", false);
lockPref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled", false);
lockPref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", false);
lockPref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.spocs.enabled", false);
lockPref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.tiles.enabled", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.topicSelection.onboarding.maybeDisplay", false);
lockPref("browser.newtabpage.activity-stream.feeds.newtabmessaging", false);
lockPref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "");

// Disabilita telemetria
lockPref("browser.newtabpage.activity-stream.feeds.newtabattributionfeed", false);
lockPref("dap.ohttp.hpke", "");
lockPref("dap.ohttp.relayURL", "");
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry.privatePing.enabled", false);
lockPref("browser.places.interactions.enabled", false);
lockPref("browser.search.serpEventTelemetryCategorization.enabled", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.merino-provider.ohttp.enabled", true);

/* -----------------------------------------------------------------------------------
   004: RICERCA
   ----------------------------------------------------------------------------------- */

// Abilita la possibilità di usare un motore di ricerca diverso in finestre normali e private
defaultPref("browser.search.separatePrivateDefault", true);
defaultPref("browser.search.separatePrivateDefault.ui.enabled", true);

// Disattiva il completamento automatico degli URL nella barra degli indirizzi
defaultPref("browser.urlbar.autoFill", false);

// Mostra URL completi disabilitando "Trimming" e "Search Terms"
defaultPref("browser.urlbar.trimURLs", false);
defaultPref("browser.urlbar.showSearchTerms.enabled", false);

// Forza la visualizzazione in Punycode dei domini
defaultPref("network.IDN_show_punycode", true);

// Disabilita suggerimenti inutili
lockPref("browser.urlbar.quicksuggest.enabled", false);
defaultPref("browser.urlbar.suggest.addons", false);
defaultPref("browser.urlbar.suggest.amp", false);
defaultPref("browser.urlbar.suggest.bookmark", false);
defaultPref("browser.urlbar.suggest.clipboard", false);
defaultPref("browser.urlbar.suggest.history", false);
defaultPref("browser.urlbar.suggest.importantDates", false);
defaultPref("browser.urlbar.suggest.mdn", false);
defaultPref("browser.urlbar.suggest.quickactions", false);
defaultPref("browser.urlbar.suggest.realtimeOptIn", false);
defaultPref("browser.urlbar.suggest.recentsearches", false);
defaultPref("browser.urlbar.suggest.searches", false);
defaultPref("browser.urlbar.suggest.sports", false);
defaultPref("browser.urlbar.suggest.topsites", false);
defaultPref("browser.urlbar.suggest.trending", false);
defaultPref("browser.urlbar.suggest.weather", false);
defaultPref("browser.urlbar.suggest.wikipedia", false);
defaultPref("browser.urlbar.suggest.yelp", false);
defaultPref("browser.urlbar.suggest.yelpRealtime", false);

// FeatureGate
defaultPref("browser.search.visualSearch.featureGate", false);
defaultPref("browser.urlbar.clipboard.featureGate", false);
defaultPref("browser.urlbar.importantDates.featureGate", false);
defaultPref("browser.urlbar.recentsearches.featureGate", false);
defaultPref("browser.urlbar.richSuggestions.featureGate", false);
defaultPref("browser.urlbar.secondaryActions.featureGate", false);
defaultPref("browser.urlbar.trending.featureGate", false);
defaultPref("browser.urlbar.trustPanel.breachAlerts.featureGate", false);

/* -----------------------------------------------------------------------------------
   005: I/O
   ----------------------------------------------------------------------------------- */

// Decrease the number of tabs saved in Session Store
defaultPref("browser.sessionstore.max_tabs_undo", 7);

// Disable back/forward cache (bfcache)
defaultPref("browser.sessionhistory.max_total_viewers", 0);
defaultPref("fission.bfcacheInParent", false);

// Disable collection/generation of background thumbnails
defaultPref("browser.pagethumbnails.capturing_disabled", true);

// Disable coloring visited links
defaultPref("layout.css.visited_links_enabled", false);

// Disable disk cache
defaultPref("browser.cache.disk.enable", false);
defaultPref("browser.cache.disk_cache_ssl", true);

// Disable favicons in shortcuts
defaultPref("browser.shell.shortcutFavicons", false);

// Disable logging blocked domains to `about:protections`
defaultPref("browser.contentblocking.database.enabled", false);
defaultPref("browser.contentblocking.cfr-milestone.enabled", false);
defaultPref("browser.contentblocking.cfr-milestone.milestone-shown-time", "999999999");
defaultPref("browser.contentblocking.cfr-milestone.update-interval", 0);
defaultPref("browser.contentblocking.report.privacy_metrics.enabled", false);

// Disable search and form history
defaultPref("browser.formfill.enable", false);

// Disable WebRTC history
defaultPref("media.aboutwebrtc.hist.enabled", false);

// Disable window state restoration
defaultPref("browser.restoreWindowState.disabled", true);

// Increase the interval between between Session Store save operations
defaultPref("browser.sessionstore.interval", 1800000);

// Prevent storing unnecessary extra session data
defaultPref("browser.sessionstore.privacy_level", 2);

// Prevent writing media cache (ex. for video streaming) to disk in private windows
defaultPref("browser.privatebrowsing.forceMediaMemoryCache", true);

// Remove cached files from browser windows opened with external applications
defaultPref("browser.download.start_downloads_in_tmp_dir", true);
defaultPref("browser.helperApps.deleteTempFileOnExit", true);

/* -----------------------------------------------------------------------------------
   006: FINGERPRINTING PROTECTION
   ----------------------------------------------------------------------------------- */

// Always load fonts bundled with Firefox
defaultPref("gfx.bundled-fonts.activate", 1);

// Disable the ability to switch locales without requiring a restart
defaultPref("intl.multilingual.liveReload", false);

// Disable VP9 Benchmark
defaultPref("media.benchmark.vp9.threshold", 0);

// Limit font visibility to base system fonts + fonts from optional language packs
defaultPref("layout.css.font-visibility", 2);

// Prevent exposing WebGL Renderer Info
defaultPref("webgl.enable-renderer-query", false);
defaultPref("webgl.override-unmasked-renderer", "Mozilla");
defaultPref("webgl.override-unmasked-vendor", "Mozilla");
defaultPref("webgl.sanitize-unmasked-renderer", false);

// Prevent pre-allocating content processes
defaultPref("dom.ipc.processPrelaunch.enabled", false);
defaultPref("dom.ipc.processPrelaunch.fission.number", 0);

// Prevent using system accent colors
defaultPref("widget.non-native-theme.use-theme-accent", false);

// Prevent using system colors
defaultPref("ui.use_standins_for_native_colors", true);

// Set a fixed temporary storage limit
defaultPref("dom.quotaManager.temporaryStorage.fixedLimit", 52428800);

/* -----------------------------------------------------------------------------------
   007: DOWNLOADS
   ----------------------------------------------------------------------------------- */

// Block insecure downloads
defaultPref("dom.block_download_insecure", true);

// Notify when downloading files
defaultPref("browser.download.alwaysOpenPanel", true);

// Prevent adding downloads to "recent documents"...
defaultPref("browser.download.manager.addToRecentDocs", false);

// Prompt before downloading files
lockPref("browser.download.always_ask_before_handling_new_types", true);
lockPref("browser.download.useDownloadDir", false);

/* -----------------------------------------------------------------------------------
   008: HTTP(S)
   ----------------------------------------------------------------------------------- */

// Always attempt to resolve HTTPS resource records, regardless of connectivity checks/other factors
defaultPref("network.dns.force_use_https_rr", true);

// Always warn on insecure webpages
defaultPref("security.insecure_connection_text.enabled", true);
defaultPref("security.insecure_connection_text.pbmode.enabled", true);
defaultPref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Always warn when submitting a form from HTTP to HTTPS, even on local IP addresses
defaultPref("security.insecure_field_warning.ignore_local_ip_address", false);

// Disable the automatic import of OS client authentication certificates
defaultPref("security.osclientcerts.autoload", false);

// Disable OCSP revocation checks
lockPref("security.OCSP.enabled", 0);
lockPref("security.OCSP.require", false);

// Disable sending background HTTP requests to websites that do not respond quickly to check if they support HTTPS
defaultPref("dom.security.https_only_mode_send_http_background_request", false);

// Disable third-party/OS-level root certificates
defaultPref("security.certerrors.mitm.auto_enable_enterprise_roots", false);
defaultPref("security.enterprise_roots.enabled", false);

// Ensure HTTP/3 isn't disabled when/if third-party/OS-level root certificates are found
defaultPref("network.http.http3.disable_when_third_party_roots_found", false);

// Disable TLS 1.3 0-RTT
defaultPref("network.http.http3.enable_0rtt", false);
defaultPref("security.tls.enable_0rtt_data", false);

// Enable CRLite revocation checks (and prioritize over OCSP)
defaultPref("security.pki.crlite_mode", 2);

// Enable HTTPS-First
defaultPref("dom.security.https_first_add_exception_on_failure", false);
defaultPref("dom.security.https_first_for_custom_ports", true);
defaultPref("dom.security.https_first_for_local_addresses", true);
defaultPref("dom.security.https_first_for_unknown_suffixes", true);

// Enable HTTPS-Only Mode
defaultPref("dom.security.https_only_mode", true);
defaultPref("dom.security.https_only_mode.upgrade_local", true);
defaultPref("dom.security.https_only_mode_pbm", true);
defaultPref("dom.security.https_only_mode_error_page_user_suggestions", true);
lockPref("dom.security.https_only_mode", true);
lockPref("dom.security.https_only_mode_pbm", true);

// Enable MITM Detection
defaultPref("security.certerrors.mitm.priming.enabled", true);
defaultPref("security.certerrors.mitm.priming.endpoint", "https://mitmdetection.services.mozilla.com/");

// Enable prompts for unsafe HTTP redirects
defaultPref("network.http.prompt-temp-redirect", true);

// Enforce Strict Certificate Pinning
defaultPref("security.cert_pinning.enforcement_level", 3);

// Only allow certificate error exceptions per-session
defaultPref("security.certerrors.permanentOverride", false);

// Require safe renegotiations
defaultPref("security.ssl.require_safe_negotiation", true);

/* -----------------------------------------------------------------------------------
   009: IMPLICIT CONNECTIONS
   ----------------------------------------------------------------------------------- */

// Disable Early Hints
defaultPref("network.early-hints.enabled", false);
defaultPref("network.early-hints.over-http-v1-1.enabled", false);
defaultPref("network.early-hints.preconnect.enabled", false);
defaultPref("network.early-hints.preconnect.max_connections", 0);

// Disable network prefetching
defaultPref("dom.prefetch_dns_for_anchor_http_document", false);
defaultPref("dom.prefetch_dns_for_anchor_https_document", false);
defaultPref("network.dns.disablePrefetch", true);
defaultPref("network.dns.disablePrefetchFromHTTPS", true);
defaultPref("network.http.speculative-parallel-limit", 0); // [DEFAULT - Thunderbird]
defaultPref("network.prefetch-next", false);

// Disable preconnect
defaultPref("network.preconnect", false);

// Disable speculative pre-connections
defaultPref("browser.places.speculativeConnect.enabled", false);
defaultPref("browser.urlbar.speculativeConnect.enabled", false);

// Prevent middle mouse clicks from pasting clipboard contents
defaultPref("middlemouse.paste", false);

// Prevent middle mouse clicks on new tab button opening URLs or searches from clipboard
defaultPref("browser.tabs.searchclipboardfor.middleclick", false);

/* -----------------------------------------------------------------------------------
   011: DNS
   ----------------------------------------------------------------------------------- */

// Imposta Quad9 come DoH provider
defaultPref("network.trr.uri", "https://dns.quad9.net/dns-query");

// Disable DoH Connectivity Checks
defaultPref("network.connectivity-service.DNS_HTTPS.domain", "");
defaultPref("network.trr.attempt-when-retrying-confirmation", true);
defaultPref("network.trr.confirmationNS", "skip");
defaultPref("network.trr.skip-check-for-blocked-host", true);

// Disable DoH GET
defaultPref("network.trr.useGET", false);

// Disable nsNotifyAddrListener
defaultPref("network.notify.changed", false);
defaultPref("network.notify.checkForNRPT", false);
defaultPref("network.notify.checkForProxies", false);
defaultPref("network.notify.dnsSuffixList", false);
defaultPref("network.notify.initial_call", false);
defaultPref("network.notify.IPv6", false);
defaultPref("network.notify.resolvers", false);

// Enable DoH without fallback 
defaultPref("network.trr.mode", 3);

// Fix IPv6 connectivity when DoH is enabled
defaultPref("network.dns.preferIPv6", true);

// Prevent bypassing DoH for /etc/HOSTS entries 
defaultPref("network.trr.exclude-etc-hosts", false);

// Prioritize HTTP/3
defaultPref("network.trr.allow_default_http3_first", true);
defaultPref("network.trr.force_http3_first", true);

// Disable DoH Rollout/heuristics/steering
defaultPref("doh-rollout._testing", false);
lockPref("doh-rollout.disable-heuristics", true);
lockPref("doh-rollout.doneFirstRun", true);
lockPref("doh-rollout.enabled", false);
lockPref("doh-rollout.provider-steering.enabled", false);
lockPref("doh-rollout.provider-steering.provider-list", "");
lockPref("doh-rollout.self-enabled", false);
lockPref("doh-rollout.skipHeuristicsCheck", true);
lockPref("doh-rollout.trr-selection.enabled", false);
lockPref("doh-rollout.trr-selection.provider-list", "");

// Disable DoH performance measurements
defaultPref("doh-rollout.trrRace.canonicalDomain", "");
defaultPref("doh-rollout.trrRace.complete", true);
defaultPref("doh-rollout.trrRace.enabled", false);
defaultPref("doh-rollout.trrRace.popularDomains", "");
defaultPref("doh-rollout.trrRace.randomSubdomainCount", 0);

/* -----------------------------------------------------------------------------------
   012: PROXIES
   ----------------------------------------------------------------------------------- */

// Prevent Firefox from automatically using the system's proxy configuration 
defaultPref("network.proxy.type", 0);

// Always start proxy extensions (if installed) as soon as possible, instead of waiting for the first browser window to open
defaultPref("extensions.webextensions.early_background_wakeup_on_request", true);

// Disable automatic failover from the proxy (if configured) to direct connections when certain system requests fail
defaultPref("network.proxy.failover_direct", false);

// Disable file:///net
defaultPref("network.file.path_blacklist", "/net");

// Disable GIO
defaultPref("network.gio.supported-protocols", "");

// Disable Uniform Naming Convention (UNC) file paths
defaultPref("network.file.disable_unc_paths", true);

// Prevent bypassing the proxy (if configured) for system connections that include the `bypassProxy` flag
defaultPref("network.proxy.allow_bypass", false);

// Use the proxy (if configured) for remote DNS lookups
defaultPref("network.proxy.socks_remote_dns", true);

/* -----------------------------------------------------------------------------------
   013: WEBRTC
   ----------------------------------------------------------------------------------- */

// Allow user to silence notifications when screen sharing
defaultPref("privacy.webrtc.hideGlobalIndicator", true);

// Disable RTP Control Protocol (RTCP) reception
defaultPref("media.webrtc.net.force_disable_rtcp_reception", true);

// Enable global toggles for muting the camera/microphone
defaultPref("privacy.webrtc.globalMuteToggles", true);

// Prevent WebRTC from bypassing the proxy (if configured)
defaultPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// Warn users when attempting to switch tabs in a window being shared over WebRTC
defaultPref("privacy.webrtc.sharedTabWarning", true);

/* -----------------------------------------------------------------------------------
   014: MEDIA
   ----------------------------------------------------------------------------------- */

// Block media autoplay
defaultPref("media.autoplay.default", 5);
defaultPref("media.geckoview.autoplay.request.testing", 2);

// Configure the media autoplay blocking policy
defaultPref("media.autoplay.blocking_policy", 1);

// Disable OpenH264 (in favor of hardware decoding)
defaultPref("media.ffmpeg.allow-openh264", false);
defaultPref("media.gmp-gmpopenh264.enabled", false);
defaultPref("media.gmp-gmpopenh264.visible", false);
defaultPref("media.webrtc.encoder_creation_strategy", 1);
defaultPref("media.webrtc.hw.h264.enabled", true);

// Enable click to play UI for certain CSS skins
defaultPref("userContent.player.click_to_play", true);

// Enable multi-threaded media encoding/decoding
defaultPref("media.gmp.decoder.multithreaded", true);
defaultPref("media.gmp.encoder.multithreaded", true);

// Sandbox GMP
defaultPref("media.gmp.insecure.allow", false); // [LINUX]

/* -----------------------------------------------------------------------------------
   015: ATTACK SURFACE
   ----------------------------------------------------------------------------------- */

// Disable Graphite & SVG OpenType fonts
defaultPref("gfx.font_rendering.graphite.enabled", false);
defaultPref("gfx.font_rendering.opentype_svg.enabled", false);

// Disable JavaScript Just-in-time Compilation (JIT)
defaultPref("javascript.options.baselinejit", false);
defaultPref("javascript.options.ion", false);
defaultPref("javascript.options.jithints", false);
defaultPref("javascript.options.native_regexp", false);
defaultPref("javascript.options.wasm_optimizingjit", false);

// Disable MathML
defaultPref("mathml.disabled", true);

// Disable shared memory allocation from the parent process to content processes
defaultPref("javascript.options.self_hosted.use_shared_memory", false);

// Disable SharedArrayBuffer using window.postMessage
defaultPref("dom.postMessage.sharedArrayBuffer.withCOOP_COEP", false);

// Disable WebVR/WebXR
defaultPref("permissions.default.xr", 2);

// Disable XSLT
defaultPref("dom.xslt.enabled", false);

/* -----------------------------------------------------------------------------------
   016: PASSWORDS
   ----------------------------------------------------------------------------------- */

// Always display a `reveal password` button in `password` `<input>` types
defaultPref("layout.forms.reveal-password-button.enabled", true);

// Disable autofill
lockPref("signon.autofillForms", false);

// Disable Basic authentication over HTTP
defaultPref("network.http.basic_http_auth.enabled", false);

// Disable formless capture of log-in credentials
defaultPref("signon.privateBrowsingCapture.enabled", false);
defaultPref("signon.formlessCapture.enabled", false);

// Disable Microsoft SSO
defaultPref("network.http.microsoft-entra-sso.container-enabled.0", false);
defaultPref("network.http.windows-sso.container-enabled.0", false);
defaultPref("network.microsoft-sso-authority-list", "");

// Disable password truncation
defaultPref("editor.truncate_user_pastes", false);

// Enable alerts for breached and vulnerable passwords
lockPref("signon.management.page.breach-alerts.enabled", true);

// Enable strong password generation
lockPref("signon.generation.enabled", true);

// Prevent cross-origin sub-resources from opening HTTP authentication dialogs
defaultPref("network.auth.subresource-http-auth-allow", 1);

/* -----------------------------------------------------------------------------------
   017: EXTENSIONS
   ----------------------------------------------------------------------------------- */

// Allow enabling/disabling extensions per-container
defaultPref("extensions.userContextIsolation.enabled", true);

// Always display "hidden" add-ons at `about:debugging`
lockPref("devtools.aboutdebugging.showHiddenAddons", true);

// Disable add-on sideloading
defaultPref("extensions.autoDisableScopes", 15);
defaultPref("extensions.enabledScopes", 5);
defaultPref("extensions.installDistroAddons", false);
defaultPref("extensions.sideloadScopes", 0);

// Disable the AMO Abuse Report API
defaultPref("extensions.addonAbuseReport.url", "");

// Disable mozAddonManager
defaultPref("privacy.resistFingerprinting.block_mozAddonManager", true);

// Enable Add-on Distribution Control (Install Origins)
defaultPref("extensions.install_origins.enabled", true);

// Harden CSP policy
defaultPref("extensions.webextensions.base-content-security-policy", "script-src 'self' 'unsafe-inline'; upgrade-insecure-requests;");
defaultPref("extensions.webextensions.base-content-security-policy.v3", "script-src 'self'; upgrade-insecure-requests;");
defaultPref("extensions.webextensions.base-content-security-policy.v3-with-localhost", "script-src 'self'; upgrade-insecure-requests;");
defaultPref("extensions.webextensions.default-content-security-policy", "script-src 'self'; upgrade-insecure-requests;");

// Never allow installing extensions without first prompting the user
lockPref("extensions.postDownloadThirdPartyPrompt", false);
defaultPref("xpinstall.whitelist.directRequest", false);
defaultPref("xpinstall.whitelist.fileRequest", false);
lockPref("xpinstall.whitelist.required", true);

// Only allow installation and updates of extensions using Firefox's built-in certificates
defaultPref("extensions.install.requireBuiltInCerts", true);
defaultPref("extensions.update.requireBuiltInCerts", true);

// Prevent automatically granting MV3 extensions optional host permissions
defaultPref("extensions.originControls.grantByDefault", false);

// Prevent extensions from opening pop-ups to remote websites
defaultPref("extensions.manifestV2.actionsPopupURLRestricted", true); 

// Prevent extensions from opening pop-ups without user interaction
defaultPref("extensions.openPopupWithoutUserGesture.enabled", false);

// Prevent extensions from using the Gecko Profiler
defaultPref("extensions.geckoProfiler.acceptedExtensionIds", "");

// Prevent recommending search extensions
defaultPref("browser.search.searchEnginesURL", "");

// Require resources loaded by MV2 extensions to be specified under web_accessible_resources in the extension's manifest
defaultPref("extensions.content_web_accessible.enabled", true);

// Require secure origins to install add-ons
defaultPref("extensions.install.requireSecureOrigin", true);

/* -----------------------------------------------------------------------------------
   018: AI
   ----------------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------------
   019: GEOLOCATION
   ----------------------------------------------------------------------------------- */

// Block websites from prompting to access geolocation
defaultPref("permissions.default.geo", 2);

// Disable Mozilla's GeoIP/Region Service
defaultPref("browser.region.network.url", "");
defaultPref("browser.region.update.enabled", false);
defaultPref("browser.search.region", "XX");
defaultPref("doh-rollout.home-region", "XX");

// Enable Geoclue for GNU/Linux
defaultPref("geo.provider.use_geoclue", false); // [LINUX]

// Prevent unconditionally providing high location accuracy
defaultPref("geo.provider.geoclue.always_high_accuracy", false); // [LINUX]

// Set BeaconDB as the default network geolocation provider
defaultPref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");

/* -----------------------------------------------------------------------------------
   020: PDF
   ----------------------------------------------------------------------------------- */

// Disable automatic hyperlinks
defaultPref("pdfjs.enableAutoLinking", false);

// Disable JavaScript
defaultPref("pdfjs.enableScripting", false);

// Disable WebGPU
defaultPref("pdfjs.enableWebGPU", false);

// Disable XFA
defaultPref("pdfjs.enableXfa", false);

// Enforce using the internal font renderer
defaultPref("pdfjs.disableFontFace", true);

// Force PDFs to be downloaded/viewed locally, and prompt before opening the PDF Viewer
defaultPref("pdfjs.disableRange", true);
defaultPref("pdfjs.disableStream", true);

// Open external links in new tabs/windows
defaultPref("pdfjs.externalLinkTarget", 2);

// Prevent attempting to load/convert unknown binary files
defaultPref("pdfjs.handleOctetStream", false);

// Show sidebar when viewing PDFs
defaultPref("pdfjs.sidebarViewOnLoad", 2);

// Update URL when changing pages
defaultPref("pdfjs.historyUpdateUrl", true);

/* -----------------------------------------------------------------------------------
   021: SAFE BROWSING
   ----------------------------------------------------------------------------------- */

// Disable the legacy (v2.2) Safe Browsing API
defaultPref("browser.safebrowsing.provider.google.advisoryName", "Google Safe Browsing (Legacy)");
defaultPref("browser.safebrowsing.provider.google.lists", "disabled");
defaultPref("browser.safebrowsing.provider.google.lists.default", "goog-badbinurl-shavar,goog-downloadwhite-digest256,goog-phish-shavar,googpub-phish-shavar,goog-malware-shavar,goog-unwanted-shavar");

// Enable the Potentially Harmful Application list (when Safe Browsing is enabled)
defaultPref("urlclassifier.malwareTable", "goog-malware-proto,goog-unwanted-proto,moztest-harmful-simple,moztest-malware-simple,moztest-unwanted-simple,goog-harmful-proto");

// Enable Safe Browsing by default
lockPref("browser.safebrowsing.downloads.enabled", true);
lockPref("browser.safebrowsing.malware.enabled", true);
lockPref("browser.safebrowsing.phishing.enabled", true);

// Prevent sending metadata of downloaded files to Safe Browsing providers
defaultPref("browser.safebrowsing.downloads.remote.enabled", false);

// Show advanced details on pages blocked by Safe Browsing
defaultPref("browser.xul.error_pages.show_safe_browsing_details_on_load", true);

/* -----------------------------------------------------------------------------------
   022: PRIVACY + SECURITY
   ----------------------------------------------------------------------------------- */

// Block background/hidden extension pages from opening file pickers
defaultPref("browser.disable_pickers_in_hidden_extension_pages", true);

// Disable Accessibility Services
defaultPref("accessibility.force_disabled", 1);
defaultPref("devtools.accessibility.enabled", false);

// Disable automatic updates for OpenSearch engines
defaultPref("browser.search.update", false);

// Disable Battery API
defaultPref("dom.battery.enabled", false);

// Disable Beacon API (Navigator.sendBeacon)
defaultPref("beacon.enabled", false);

// Disable Native Messaging
defaultPref("webextensions.native-messaging.max-input-message-bytes", 0);
defaultPref("webextensions.native-messaging.max-output-message-bytes", 0);
defaultPref("webextensions.native-messaging.max-input-message-bytes.default", 1048576);
defaultPref("webextensions.native-messaging.max-output-message-bytes.default", 2147483647);
defaultPref("widget.use-xdg-desktop-portal.native-messaging", 0); // [LINUX]

// Disable Reporting API
defaultPref("dom.reporting.enabled", false);
defaultPref("dom.reporting.header.enabled", false);

// Disable tab hover previews
defaultPref("browser.tabs.hoverPreview.enabled", false);
defaultPref("browser.tabs.hoverPreview.showThumbnails", false);

// Disable WebMIDI
defaultPref("dom.sitepermsaddon-provider.enabled", false);
defaultPref("permissions.default.midi", 2);
defaultPref("permissions.default.midi-sysex", 2);

// Enable Local Network Access Restrictions
defaultPref("network.lna.allow_top_level_navigation", false);
defaultPref("network.lna.benchmarking-is-local", true);
defaultPref("network.lna.block_trackers", true);
defaultPref("network.lna.defer_https_check", false);
defaultPref("network.lna.etp.enabled", false);
defaultPref("network.lna.local-network-to-localhost.skip-checks", false);
defaultPref("network.lna.skip-domains", "secure-login.attwifi.com");
defaultPref("network.lna.websocket.enabled", true);
defaultPref("permissions.default.local-network", 2);
defaultPref("permissions.default.loopback-network", 0);

// Enable Messaging Layer Security (MLS)
defaultPref("dom.origin-trials.mls.state", 1);

// Enable unused permission expiration
defaultPref("permissions.expireUnused.enabled", true);

// Prevent exposing XPCOM Components.interfaces to websites
defaultPref("dom.use_components_shim", false);

/* -----------------------------------------------------------------------------------
   023: PRIVACY
   ----------------------------------------------------------------------------------- */

// Block ports currently known to be abused by Android apps for tracking/fingerprinting
defaultPref("network.security.ports.banned", "29009, 29010, 30102, 30103, 12387, 12388, 12580, 12581, 12582, 12583, 12584, 12585, 12586, 12587, 12588, 12589, 12590, 12591");

// Disable CSP reporting
defaultPref("security.csp.reporting.enabled", false);

// Disable Hyperlink Auditing (Click Tracking)
defaultPref("browser.send_pings.require_same_host", true);

// Disable online speech recognition
defaultPref("media.webspeech.service.endpoint", "data;");

// Disable storage access heuristics
defaultPref("dom.storage_access.auto_grants", false);
defaultPref("privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction", false);
defaultPref("privacy.restrict3rdpartystorage.heuristic.recently_visited_time", 0);

// Disable TLS session identifiers
defaultPref("security.ssl.disable_session_identifiers", true);

// Enable containers
defaultPref("privacy.userContext.enabled", true);

// Enable cookie banner reduction
defaultPref("cookiebanners.service.mode", 1);
defaultPref("cookiebanners.service.mode.privateBrowsing", 1);

// Enable Do Not Track
defaultPref("privacy.donottrackheader.enabled", true);

// Enable Global Privacy Control
lockPref("privacy.globalprivacycontrol.enabled", true);

// Enable support for Mozilla IP Protection
defaultPref("browser.ipProtection.enabled", true);
defaultPref("browser.ipProtection.added", true);
defaultPref("browser.ipProtection.features.siteExceptions", true);

// Isolate permissions per container
defaultPref("permissions.isolateBy.userContext", true);

// Isolate resources (ex. referrers and cookies) injected by extensions
defaultPref("privacy.antitracking.isolateContentScriptResources", true);

// Limit maximum cookie lifetime to 6 months/180 days
defaultPref("network.cookie.maxageCap", 15552000);

// Prevent Firefox from automatically guessing which container to open an external link in
defaultPref("browser.link.force_default_user_context_id_for_external_opens", true);

// Prevent third parties from setting cookies unless the third party already has cookies as a first party
defaultPref("privacy.dynamic_firstparty.limitForeign", true);

// Strip tracking parameters from URLs when shared
defaultPref("privacy.query_stripping.strip_on_share.enabled", true);

// Trim cross-origin referers
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2);

/* -----------------------------------------------------------------------------------
   024: SECURITY
   ----------------------------------------------------------------------------------- */

// Block privileged `about:` pages from loading remote scripts
defaultPref("security.disallow_privilegedabout_remote_script_loads", true);

// Decrease the lifetime of privileged processes for `about:` pages
defaultPref("dom.ipc.keepProcessesAlive.privilegedabout", 0);

// Disable the Document Picture-in-Picture API
defaultPref("dom.documentpip.enabled", false);

// Disable GNOME Integration
defaultPref("browser.gnome-search-provider.enabled", false); // [LINUX]
   
// Enable the Cross-Origin-Embedder Policy Header
defaultPref("dom.origin-trials.coep-credentialless.state", 1);

// Enable GPU Sandboxing
defaultPref("security.sandbox.gpu.level", 2);

// Enable the Integrity-Policy header
defaultPref("security.integrity_policy.stylesheet.enabled", true);

// Enable Origin-keyed agent clustering
defaultPref("dom.origin_agent_cluster.default", true);

// Enforce Per-site Process Isolation + isolate all websites
defaultPref("fission.highValue.login.monitor", true);
defaultPref("gfx.webrender.all", true);

// Enable Spectre mitigations for isolated content
defaultPref("javascript.options.spectre.disable_for_isolated_content", false);

// Enable WebAssembly Memory Control
defaultPref("javascript.options.wasm_memory_control", true);

// Prefer to create new content processes, instead of re-using existing ones
defaultPref("browser.tabs.remote.subframesPreferUsed", false);

// Prevent marking JIT code pages as both writable and executable, only one or the other...
defaultPref("general.config.sandbox_enabled", true);

// Prevent remoteTypes from triggering process switches they shouldn't be able to...
defaultPref("browser.tabs.remote.enforceRemoteTypeRestrictions", true);

// Protect against CSRF Attacks
defaultPref("network.cookie.sameSite.laxByDefault", true);
defaultPref("network.cookie.sameSite.laxByDefaultWarningsForBeta", true);
defaultPref("network.cookie.sameSite.schemeful", true);

// Protect against MIME Exploits
defaultPref("security.block_fileuri_script_with_wrong_mime", true);

/* -----------------------------------------------------------------------------------
   025: MISC
   ----------------------------------------------------------------------------------- */

// Block websites from prompting to display notifications
defaultPref("permissions.default.desktop-notification", 2);

// Disable Firefox's "Reset/Refresh Profile" prompt
lockPref("browser.disableResetPrompt", true);

// Disable keyboard locking
defaultPref("dom.fullscreen.keyboard_lock.enabled", false); 

// Disable network connectivity status monitoring
defaultPref("network.manage-offline-status", false);

// Enable GREASE (Generate Random Extensions And Sustain Extensibility)
defaultPref("security.tls.grease_http3_enable", true);

// Prevent Safe Mode from automatically starting
defaultPref("toolkit.startup.max_resumed_crashes", -1);

/* -----------------------------------------------------------------------------------
   026: DEBUGGING
   ----------------------------------------------------------------------------------- */

// Allow inspecting the browser chrome
defaultPref("devtools.chrome.enabled", true);
defaultPref("devtools.selfxss.count", 5);

// Allow inspecting/debugging local tabs from `about:debugging`
defaultPref("devtools.aboutdebugging.local-tab-debugging", true);

// "Beautify" HTML content upon copy to the clipboard
defaultPref("devtools.markup.beautifyOnCopy", true);

// Disable annoying "A simpler highlighter can be enabled in the settings..." banner when using developer tools
defaultPref("devtools.inspector.simple-highlighters.message-dismissed", true);

// Disable annoying "Firefox Profiler is now integrated into Developer Tools" banner when opening the performance panel
defaultPref("devtools.performance.new-panel-onboarding", false);

// Disable automatic bracket/quote closing
defaultPref("devtools.editor.autoclosebrackets", false);

// Disable editor onboarding
defaultPref("devtools.webconsole.input.editorOnboarding", false);

// Disable pausing on debugger statements
defaultPref("devtools.debugger.pause-on-debugger-statement", false);

// Disable the performance panel intro
defaultPref("devtools.performance.popup.intro-displayed", true);

// Disable truncation of DOM attributes in the inspector
defaultPref("devtools.markup.collapseAttributes", false);

// Display content scripts injected by extensions when debugging
defaultPref("devtools.debugger.show-content-scripts", true);

// Display native anonymous content in the inspector
defaultPref("devtools.inspector.showAllAnonymousContent", true);

// Display web console timestamps
defaultPref("devtools.webconsole.timestampMessages", true);

// Display responses in the "raw" format in the network monitor
defaultPref("devtools.netmonitor.ui.default-raw-response", true); 

// Enable DevTools buttons
defaultPref("devtools.command-button-measure.enabled", true);
defaultPref("devtools.command-button-noautohide.enabled", true);
defaultPref("devtools.command-button-rulers.enabled", true);
defaultPref("devtools.command-button-screenshot.enabled", true);

// Enable the Web Console sidebar toggle
defaultPref("devtools.webconsole.sidebarToggle", true);

// Pretty print code when debugging
defaultPref("devtools.debugger.auto-pretty-print", true);

// Prevent automatically clearing log messages after page reloads/navigation
defaultPref("devtools.netmonitor.persistlog", true);
defaultPref("devtools.webconsole.persistlog", true); 

// Prevent logging URLs in Reader errors
defaultPref("reader.errors.includeURLs", false);

// Prevent WebDriver from overriding preferences
defaultPref("remote.prefs.recommended", false);

// Significantly reduce input history
defaultPref("devtools.webconsole.inputHistoryCount", 10);

// Set Browser/Error Console scope to "Multiprocess" instead of "Parent process only"
defaultPref("devtools.browsertoolbox.scope", "everything");

// Show default/browser styles in the Inspector
defaultPref("devtools.inspector.showUserAgentStyles", true);

// Unbreak debugging if `localhost` can't be looked up via DNS
defaultPref("devtools.debugger.chrome-debugging-host", "127.0.0.1"); 

// Wrap lines when debugging
defaultPref("devtools.debugger.ui.editor-wrapping", true);

// Wrap lines when viewing the source of webpages (via `view-source:`)
defaultPref("view_source.wrap_long_lines", true);

/* -----------------------------------------------------------------------------------
   027: CONTROL
   ----------------------------------------------------------------------------------- */

// Allow custom CSS
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Allow Picture-in-Picture on all websites, even if the website tries to block it
defaultPref("media.videocontrols.picture-in-picture.respect-disablePictureInPicture", false);

// Allow zoom on all websites, even if the website tries to block it
defaultPref("browser.ui.zoom.force-user-scalable", true);

// Allow zooming out beyond the initial scale of websites
defaultPref("apz.allow_zooming_out", true);

// Enable developer options for `about:profiling`
defaultPref("devtools.performance.aboutprofiling.has-developer-options", true);

// Enable image/table resizing (for text input)
defaultPref("editor.inline_table_editing.enabled_by_default", true);
defaultPref("editor.positioning.enabled_by_default", true);
defaultPref("editor.resizing.enabled_by_default", true);

// Ensure users can always control Nimbus recipes
defaultPref("nimbus.debug", true);

/* -----------------------------------------------------------------------------------
   028: UI
   ----------------------------------------------------------------------------------- */

// Display "More settings" on print previews
defaultPref("print.more-settings.open", true);

// Display the option to open a new tab upon browser start (at `about:preferences#home`)
defaultPref("browser.sessionstore.newTabOnRestore.showSetting", true);

// Display the option to enable `Compact` mode at `Customize toolbar...`
defaultPref("browser.compactmode.show", true);

// Display supported media codecs/capabilities at `about:support`
defaultPref("media.mediacapabilities.from-database", true);

// Enable the containers UI (ex. at `about:preferences#general` - `about:preferences#containers`)
defaultPref("privacy.userContext.ui.enabled", true);

// Enable the cookie banner reduction UI
defaultPref("cookiebanners.ui.desktop.enabled", true);

// Enable + customize the new Sidebar 
defaultPref("browser.toolbarbuttons.introduced.sidebar-button", false);
defaultPref("sidebar.backupState", '{"command":"","launcherWidth":0,"launcherExpanded":false,"launcherVisible":false}');
defaultPref("sidebar.main.tools", "syncedtabs,history,bookmarks,passwords,aichat");
defaultPref("sidebar.revamp", true);
defaultPref("sidebar.visibility", "hide-sidebar");

// Enable display of in-process subframes at `about:processes` 
defaultPref("toolkit.aboutProcesses.showAllSubframes", true);

// Enable display of thread information at `about:processes` 
defaultPref("toolkit.aboutProcesses.showThreads", true);

// Enable the "Page Setup.." menu (under `File` - ex. on the menu bar)
defaultPref("print.show_page_setup_menu", true);

// Enable the `Share` (URL) context menu item
defaultPref("browser.menu.share_url.allow", true);

// Enable the `View Image Info` context menu item
defaultPref("browser.menu.showViewImageInfo", true);

// Fade out unloaded tabs in the tab bar
defaultPref("browser.tabs.fadeOutUnloadedTabs", true);

// Hide the title bar 
defaultPref("browser.tabs.inTitlebar", 1);

// Show 'Always ask' for camera and microphone in the permissions drop-down
defaultPref("permissions.media.show_always_ask.enabled", true);

// Show detailed information on insecure certificate/warning pages
defaultPref("browser.xul.error_pages.expert_bad_cert", true);

// Show an error page/details instead of a blank page for HTTP responses with certain error codes
defaultPref("browser.http.blank_page_with_error_response.enabled", false);

// Always load bookmarks in new tabs 
defaultPref("browser.tabs.loadBookmarksInTabs", true);

// Disable annoying Web Speech API error pop-ups, especially relevant on Linux
defaultPref("media.webspeech.synth.dont_notify_on_error", true);

// Disable fullscreen delay
defaultPref("full-screen-api.transition-duration.enter", "0 0");
defaultPref("full-screen-api.transition-duration.leave", "0 0");

// Display hidden/stray "control" characters
defaultPref("layout.css.control-characters.visible", true);

// Display an icon to clear search boxes (for `search` `<input>` types)
defaultPref("layout.forms.input-type-search.enabled", true);

// Display a spinning animation while websites are loading
defaultPref("browser.spin_cursor_while_busy", true);

// Do not close the browser window if all tabs are closed
defaultPref("browser.tabs.closeWindowWithLastTab", false);

// Enable autoscrolling
defaultPref("general.autoScroll", true);

// Enable Firefox Translations (ma disabilita il fastidioso pop-up)
defaultPref("browser.ai.control.translations", "enabled");
defaultPref("browser.translations.automaticallyPopup", false);
defaultPref("extensions.translations.disabled", false);

// Enable QR code creation (from the `Share` (URL) menu) and disable embedding of logo
defaultPref("browser.shareqrcode.embed_logo", false);

// Enable spellcheck for both multi-line and single-line boxes
defaultPref("layout.spellcheckDefault", 2);

// Export bookmarks to a `bookmarks.html` file
defaultPref("browser.bookmarks.autoExportHTML", true);

// Force pop-ups to open in new tabs instead of new windows
defaultPref("browser.link.open_newwindow.restriction", 0);

// Highlight all Findbar (Ctrl + F) results
defaultPref("findbar.highlightAll", true);

// If a connection with HTTP/3 fails, allow retrying it with a different IP address
defaultPref("network.http.http3.retry_different_ip_family", true);

// If a connection fails retry with the one that is still connecting
defaultPref("network.http.retry_with_another_half_open", true); 

// Limit what events can cause pop-ups
defaultPref("dom.popup_allowed_events", "click dblclick");

// Open links from external programs in new tabs
defaultPref("browser.link.open_newwindow.override.external", 3);

// Prevent automatically closing the Bookmarks menu after selecting a bookmark
defaultPref("browser.bookmarks.openInTabClosesMenu", false);

// Prevent websites from automatically refreshing
defaultPref("accessibility.blockautorefresh", true);

// Set default URL to load when navigating to `moz://a`
defaultPref("toolkit.mozprotocol.url", "about:mozilla");

/* -----------------------------------------------------------------------------------
   030: PERFORMANCE
   ----------------------------------------------------------------------------------- */

// Compress cached JavaScript bytecode
defaultPref("browser.cache.jsbc_compression_level", 3);

// Disable async stack tracing 
defaultPref("javascript.options.asyncstack", false);

// Disable CSS error reporting 
defaultPref("layout.css.report_errors", false);

// Disable pacing requests
defaultPref("network.http.pacing.requests.enabled", false);

// Display advanced performance settings at `about:preferences#general`
defaultPref("browser.preferences.defaultPerformanceSettings.enabled", false);

// Enable Canvas2D acceleration
defaultPref("gfx.canvas.accelerated.cache-items", 32768);
defaultPref("gfx.canvas.accelerated.cache-size", 4096);

// Enable CSS Masonry Layout
defaultPref("layout.css.grid-template-masonry-value.enabled", true);

// Enable dynamic reflow roots
defaultPref("layout.dynamic-reflow-roots.enabled", true);

// Enable the WebRender native compositor
defaultPref("gfx.webrender.compositor", true);

// Increase buffering for video playback
defaultPref("media.cache_readahead_limit", 600);
defaultPref("media.cache_readahead_limit.cellular", 600);
defaultPref("media.cache_resume_threshold", 300);
defaultPref("media.cache_resume_threshold.cellular", 300);
defaultPref("media.throttle-cellular-regardless-of-download-rate", false);

// Increase the chunk size for calls to image decoders
defaultPref("image.mem.decode_bytes_at_a_time", 65536);

// Increase DNS caching
defaultPref("network.dnsCacheExpiration", 3600);
defaultPref("network.dnsCacheEntries", 10000);

// Increase the file-backed media cache size for cellular connections
defaultPref("media.cache_size.cellular", 512000);

// Increase the memory-backed media cache size
defaultPref("media.memory_cache_max_size", 262144);
defaultPref("media.memory_caches_combined_limit_kb", 1048576);

// Increase memory cache
defaultPref("browser.cache.memory.capacity", 131072);
defaultPref("browser.cache.memory.max_entry_size", 20480);

// Increase the skia font cache size
defaultPref("gfx.content.skia-font-cache-size", 32);

// Increase the maximum number of HTTP connections
defaultPref("network.http.max-connections", 1800);
defaultPref("network.http.max-persistent-connections-per-proxy", 48);
defaultPref("network.http.max-persistent-connections-per-server", 10);
defaultPref("network.http.max-urgent-start-excessive-connections-per-host", 5);
defaultPref("network.http.request.max-start-delay", 5);

// Set TCP_NOTSENT_LOWAT on TCP sockets
defaultPref("network.tcp.notsent_lowat", 32768);

// Set TCP_USER_TIMEOUT
defaultPref("network.tcp.user_timeout", 30);

// Use higher performance pinch-zoom
defaultPref("gfx.webrender.low-quality-pinch-zoom", true);

/* -----------------------------------------------------------------------------------
   PESKYFOX
   ----------------------------------------------------------------------------------- */

// Impedisce al puntatore del mouse di nascondersi mentre si digita
defaultPref("widget.gtk.hide-pointer-while-typing.enabled", false); // [LINUX]

// Apri le nuove schede in background
defaultPref("browser.tabs.loadDivertedInBackground", true);

// Apri i segnalibri in background
defaultPref("browser.tabs.loadBookmarksInBackground", true);

// Apri le nuove schede subito dopo quella attuale
defaultPref("browser.tabs.insertAfterCurrent", true);

/* -----------------------------------------------------------------------------------
   FINE
   ----------------------------------------------------------------------------------- */

// Abilita note per le schede
defaultPref("browser.tabs.notes.enabled", true);

// Abilita il pulsante Picture-in-Picture su tutti i video
defaultPref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);

lockPref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
lockPref("browser.safebrowsing.downloads.remote.block_uncommon", false);
lockPref("browser.download.deletePrivate.chosen", false);

lockPref("rischio.fox", "151.39");
