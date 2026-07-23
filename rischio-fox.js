
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
   001: DATA COLLECTION
   002: MOZILLA
   003: TRACKING PROTECTION
   004: FINGERPRINTING PROTECTION
   005: DISK AVOIDANCE
   006: DOWNLOADS
   007: HTTP(S)
   008: IMPLICIT CONNECTIONS
   009: SEARCH & URL BAR
   010: DNS
   011: PROXIES
   012: WEBRTC
   013: MEDIA
   014: ATTACK SURFACE
   015: PASSWORDS
   016: EXTENSIONS
   017: AI
   018: GEOLOCATION
   019: PDF
   020: SAFE BROWSING
   022: PRIVACY + SECURITY
   023: PRIVACY
   024: SECURITY
   025: MISC
   026: DEBUGGING
   027: CONTROL
   028: UI
   029: UX
   030: PERFORMANCE
   032: HOME
   033: SUGGESTIONS
*/

/* -----------------------------------------------------------------------------------
   001: DATA COLLECTION
   ----------------------------------------------------------------------------------- */

// Disable automatic upload of profiler data (from `about:logging`) to Mozilla
defaultPref("toolkit.aboutLogging.uploadProfileToCloud", false);
defaultPref("toolkit.aboutLogging.uploadProfileUrl", "");

// Disable Browser Search/Usage Telemetry metrics
defaultPref("browser.engagement.ctrlTab.has-used", true);
defaultPref("browser.engagement.downloads-button.has-used", true);
defaultPref("browser.engagement.fxa-toolbar-menu-button.has-used", true);
defaultPref("browser.engagement.home-button.has-used", true);
defaultPref("browser.engagement.library-button.has-used", true);
defaultPref("browser.engagement.sidebar-button.has-used", true);
defaultPref("browser.engagement.total_uri_count.pbm", false);
defaultPref("browser.engagement.search_counts.pbm", false);
defaultPref("browser.search.totalSearches", 100);

// Disable Coverage
defaultPref("toolkit.coverage.enabled", false);
defaultPref("toolkit.coverage.endpoint.base", "");
defaultPref("toolkit.coverage.log-level", 70);
defaultPref("toolkit.coverage.opt-out", true);

// Disable crash reporting
defaultPref("breakpad.reportURL", "");
defaultPref("browser.crashReports.onDemand", false);
defaultPref("browser.crashReports.requestedNeverShowAgain", true);
defaultPref("dom.ipc.tabs.createKillHardCrashReports", false);
defaultPref("toolkit.crashreporter.include_context_heap", false);
defaultPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
defaultPref("browser.crashReports.unsubmittedCheck.enabled", false);
defaultPref("browser.crashReports.cleanupCheck.enabled", false);
defaultPref("browser.tabs.crashReporting.includeURL", false);
defaultPref("browser.tabs.crashReporting.sendReport", false);

// Disable data reporting and telemetry
clearPref("app.update.lastUpdateTime.glean-addons-daily");
defaultPref("browser.safebrowsing.features.emailtracking.datacollection.update", false);
defaultPref("captchadetection.actor.enabled", false);
defaultPref("captchadetection.hasUnsubmittedData", false);
defaultPref("captchadetection.loglevel", "Off");
defaultPref("datareporting.dau.cachedUsageProfileID", "beefbeef-beef-beef-beef-beeefbeefbee");
defaultPref("datareporting.dau.cachedUsageProfileGroupID", "b0bacafe-b0ba-cafe-b0ba-cafeb0bacafe");
defaultPref("datareporting.healthreport.uploadEnabled", false);
defaultPref("datareporting.policy.dataSubmissionEnabled", false);
defaultPref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
defaultPref("datareporting.policy.firstRunURL", "");
defaultPref("datareporting.usage.uploadEnabled", false);
defaultPref("dom.security.unexpected_system_load_telemetry_enabled", false);
defaultPref("extensions.dataCollectionPermissions.enabled", false);
defaultPref("extensions.gleanPingAddons.daily.interval", 2147483647);
defaultPref("extensions.gleanPingAddons.updated.delay", 2147483647);
defaultPref("extensions.gleanPingAddons.updated.idleTimeout", 2147483647);
defaultPref("extensions.gleanPingAddons.updated.testing", false);
defaultPref("extensions.telemetry.EnvironmentAddonBuilder", false);
defaultPref("network.jar.record_failure_reason", false);
defaultPref("network.traffic_analyzer.enabled", false);
defaultPref("nimbus.telemetry.targetingContextEnabled", false);
defaultPref("privacy.trackingprotection.emailtracking.data_collection.enabled", false);
defaultPref("telemetry.fog.artifact_build", false);
defaultPref("telemetry.fog.test.activity_limit", -1);
defaultPref("telemetry.fog.test.inactivity_limit", -1);
defaultPref("telemetry.fog.init_on_shutdown", false);
defaultPref("telemetry.fog.test.localhost_port", 70000);
defaultPref("telemetry.glean.internal.finalInactive", false);
defaultPref("telemetry.glean.internal.maxPingsPerMinute", 0);
defaultPref("telemetry.number_of_site_origin.min_interval", 2147483647);
defaultPref("toolkit.content-background-hang-monitor.disabled", true);
defaultPref("toolkit.profiles.newProfileSubmitted", true);
defaultPref("toolkit.telemetry.archive.enabled", false);
defaultPref("toolkit.telemetry.bhrPing.enabled", false);
defaultPref("toolkit.telemetry.cachedClientID", "c0ffeec0-ffee-c0ff-eec0-ffeec0ffeec0");
defaultPref("toolkit.telemetry.cachedProfileGroupID", "decafdec-afde-cafd-ecaf-decafdecafde");
defaultPref("toolkit.telemetry.collectInterval", 2147483647);
defaultPref("toolkit.telemetry.dap.helper.hpke", "");
defaultPref("toolkit.telemetry.dap.helper.url", "");
defaultPref("toolkit.telemetry.dap.leader.hpke", "");
defaultPref("toolkit.telemetry.dap.leader.url", "");
defaultPref("toolkit.telemetry.dap.logLevel", "Off");
defaultPref("toolkit.telemetry.dap_enabled", false);
defaultPref("toolkit.telemetry.dap_task1_enabled", false);
defaultPref("toolkit.telemetry.dap_task1_taskid", "");
defaultPref("toolkit.telemetry.dap_visit_counting_enabled", false);
defaultPref("toolkit.telemetry.dap_visit_counting_experiment_list", "[]");
defaultPref("toolkit.telemetry.debugSlowSql", false);
defaultPref("toolkit.telemetry.enabled", false);
defaultPref("toolkit.telemetry.eventping.maximumFrequency", 2147483647);
defaultPref("toolkit.telemetry.eventping.minimumFrequency", 2147483647);
defaultPref("toolkit.telemetry.firstShutdownPing.enabled", false);
defaultPref("toolkit.telemetry.healthping.enabled", false);
defaultPref("toolkit.telemetry.initDelay", 2147483647);
defaultPref("toolkit.telemetry.log.dump", false);
defaultPref("toolkit.telemetry.log.level", "Fatal");
defaultPref("toolkit.telemetry.minSubsessionLength", 2147483647);
defaultPref("toolkit.telemetry.newProfilePing.delay", 2147483647);
defaultPref("toolkit.telemetry.newProfilePing.enabled", false);
defaultPref("toolkit.telemetry.overrideUpdateChannel", "release");
defaultPref("toolkit.telemetry.previousBuildID", "");
defaultPref("toolkit.telemetry.reportingpolicy.firstRun", false);
defaultPref("toolkit.telemetry.scheduler.idleTickInterval", 2147483647);
defaultPref("toolkit.telemetry.scheduler.tickInterval", 2147483647);
defaultPref("toolkit.telemetry.send.overrideOfficialCheck", false);
defaultPref("toolkit.telemetry.server", "data;");
defaultPref("toolkit.telemetry.server_owner", "");
defaultPref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false);
defaultPref("toolkit.telemetry.shutdownPingSender.enabled", false);
defaultPref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
defaultPref("toolkit.telemetry.testing.disableFuzzingDelay", false);
defaultPref("toolkit.telemetry.testing.overridePreRelease", false);
defaultPref("toolkit.telemetry.testing.overrideProductsCheck", false);
defaultPref("toolkit.telemetry.testing.suppressPingsender", true);
defaultPref("toolkit.telemetry.translations.logLevel", "Off");
defaultPref("toolkit.telemetry.unified", false);
defaultPref("toolkit.telemetry.untrustedModulesPing.frequency", 2147483647);
defaultPref("toolkit.telemetry.updatePing.enabled", false);
defaultPref("toolkit.telemetry.user_characteristics_ping.current_version", 0);
defaultPref("toolkit.telemetry.user_characteristics_ping.last_version_sent", 0);
defaultPref("toolkit.telemetry.user_characteristics_ping.logLevel", "Off");
defaultPref("toolkit.telemetry.user_characteristics_ping.opt-out", true);
defaultPref("toolkit.telemetry.user_characteristics_ping.send-once", false);
defaultPref("toolkit.telemetry.user_characteristics_ping.uuid", "");
defaultPref("urlclassifier.features.emailtracking.datacollection.allowlistTables", "");
defaultPref("urlclassifier.features.emailtracking.datacollection.blocklistTables", "");
defaultPref("telemetry.fog.aboutGlean.debugTag", "");
defaultPref("browser.aboutwelcome.entrypoint", "");

// Disable experimentation and A/B testing
defaultPref("app.normandy.run_interval_seconds", 0);
defaultPref("app.shield.optoutstudies.enabled", false);
defaultPref("extensions.formautofill.addresses.experiments.enabled", false);
defaultPref("messaging-system.rsexperimentloader.collection_id", "");
defaultPref("nimbus.appId", "");
defaultPref("nimbus.firstUpdateComplete", true);
defaultPref("nimbus.profileId", "");
defaultPref("nimbus.profilesdatastoreservice.enabled", false);
defaultPref("nimbus.profilesdatastoreservice.read.enabled", false);
defaultPref("nimbus.profilesdatastoreservice.sync.enabled", false);
defaultPref("nimbus.rollouts.enabled", false);
defaultPref("app.normandy.api_url", "");
defaultPref("app.normandy.enabled", false);
defaultPref("app.normandy.experiments.lazy_classify", true);
defaultPref("app.normandy.first_run", false);
defaultPref("app.normandy.last_seen_buildid", "");
defaultPref("app.normandy.logging.level", 70);
defaultPref("app.normandy.user_id", "");
defaultPref("browser.aboutwelcome.experimentsGate.enabled", false);
defaultPref("browser.aboutwelcome.experimentsGate.skipSplashIfLoaded", true);

// Disable notification permission telemetry
defaultPref("permissions.desktop-notification.telemetry.siteCategories", "{}");

// Disable Origin Trials
defaultPref("dom.origin-trials.enabled", false);

// Remove partner attribution
defaultPref("app.distributor", "");
defaultPref("app.distributor.channel", "");
defaultPref("mozilla.partner.id", "");

/* -----------------------------------------------------------------------------------
   002: MOZILLA
   ----------------------------------------------------------------------------------- */

// Clear unnecessary/undesired Mozilla URLs
defaultPref("extensions.recommendations.privacyPolicyUrl", "");
defaultPref("app.feedback.baseURL", "");
defaultPref("datareporting.healthreport.infoURL", "");
defaultPref("toolkit.datacollection.infoURL", "");
defaultPref("app.normandy.shieldLearnMoreUrl", "");
defaultPref("browser.newtabpage.activity-stream.privacyInfo.url", "");

// Disable `about:welcome`/onboarding
defaultPref("browser.preonboarding.enabled", false);
defaultPref("browser.aboutwelcome.enabled", false);
defaultPref("browser.aboutwelcome.log", "off");
defaultPref("browser.rights.3.shown", true);
defaultPref("browser.startup.firstrunSkipsHomepage", false);
defaultPref("browser.startup.homepage_override.buildID", "20100101");
defaultPref("browser.startup.homepage_override.mstone", "ignore");
defaultPref("browser.startup.upgradeDialog.enabled", false);
defaultPref("browser.suppress_first_window_animation", true);
defaultPref("startup.homepage_override_nimbus_disable_wnp", true);
defaultPref("startup.homepage_override_url", "");
defaultPref("startup.homepage_override_url_nimbus", "");
defaultPref("startup.homepage_welcome_url", "");
defaultPref("startup.homepage_welcome_url.additional", "");

// Disable add-on/feature recommendations
defaultPref("browser.discovery.enabled", false);
defaultPref("browser.translations.mostRecentTargetLanguages", "en-US");
defaultPref("browser.translations.panelShown", true);
defaultPref("extensions.getAddons.browseAddons", "");
defaultPref("extensions.getAddons.discovery.api_url", "data;");
defaultPref("extensions.getAddons.showPane", false);
defaultPref("extensions.htmlaboutaddons.recommendations.enabled", false);
defaultPref("extensions.recommendations.hideNotice", true);
defaultPref("extensions.recommendations.themeRecommendationUrl", "");
defaultPref("extensions.ui.lastCategory", "addons://list/extension");
defaultPref("extensions.webservice.discoverURL", "");
defaultPref("browser.dataFeatureRecommendations.enabled", false);
defaultPref("browser.discovery.sites", "");
defaultPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
defaultPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Disable DoH Rollout/heuristics/steering
defaultPref("doh-rollout._testing", false);
defaultPref("doh-rollout.disable-heuristics", true);
defaultPref("doh-rollout.doneFirstRun", true);
defaultPref("doh-rollout.enabled", false);
defaultPref("doh-rollout.provider-steering.enabled", false);
defaultPref("doh-rollout.provider-steering.provider-list", "");
defaultPref("doh-rollout.self-enabled", false);
defaultPref("doh-rollout.skipHeuristicsCheck", true);
defaultPref("doh-rollout.trr-selection.enabled", false);
defaultPref("doh-rollout.trr-selection.provider-list", "");

// Disable DoH performance measurements
defaultPref("doh-rollout.trrRace.canonicalDomain", "");
defaultPref("doh-rollout.trrRace.complete", true);
defaultPref("doh-rollout.trrRace.enabled", false);
defaultPref("doh-rollout.trrRace.popularDomains", "");
defaultPref("doh-rollout.trrRace.randomSubdomainCount", 0);

// Disable "Feature Tours"
defaultPref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");
defaultPref("browser.newtab.feature-tour", "{\"screen\":\"\",\"complete\":true}");
defaultPref("browser.pdfjs.feature-tour", "{\"screen\":\"\",\"complete\":true}");

// Disable fetching Firefox Relay's "allowlist" and "denylist"
defaultPref("signon.firefoxRelay.allowListRemoteSettingsCollection", "");
defaultPref("signon.firefoxRelay.denyListRemoteSettingsCollection", "");

// Disable fetching Password Manager rules remotely
defaultPref("signon.recipes.remoteRecipes.enabled", false);

// Disable Firefox Bridge
defaultPref("browser.firefoxbridge.enabled", false);

// Disable (no-op) the Firefox/Gecko Profiler
defaultPref("devtools.performance.popup.feature-flag", false);
defaultPref("devtools.performance.recording.ui-base-url", "http://localhost:3");
defaultPref("logging.config.output_type", "file");
defaultPref("toolkit.aboutProcesses.showProfilerIcons", false);
defaultPref("devtools.performance.enabled", false);

// Disable the Firefox Messaging System
defaultPref("app.update.background.messaging.targeting.snapshot.intervalSec", -1);
defaultPref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "null");
defaultPref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "null");
defaultPref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "null");
defaultPref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "null");
defaultPref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "null");
defaultPref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "null");
defaultPref("browser.newtabpage.activity-stream.feeds.newtabmessaging", false);
defaultPref("messaging-system.askForFeedback", false);
defaultPref("messaging-system.log", "off");
defaultPref("messaging-system.profile.messagingProfileId", -1);
defaultPref("messaging-system.profile.singleProfileMessaging.disable", false);

// Disable import of Mozilla's default bookmarks
defaultPref("browser.bookmarks.restore_default_bookmarks", false);
defaultPref("browser.bookmarks.testing.skipDefaultBookmarksImport", true);
defaultPref("browser.places.importBookmarksHTML", true);

// Disable import of Mozilla's default protocol handlers
defaultPref("gecko.handlerService.defaultHandlersVersion", 2147483647);

// Disable "Interest-based Content Relevance Ranking and Personalization"
defaultPref("toolkit.contentRelevancy.enabled", false);
defaultPref("toolkit.contentRelevancy.ingestEnabled", false);
defaultPref("toolkit.contentRelevancy.log", false);

// Disable Mozilla nags/promotions
defaultPref("browser.promo.cookiebanners.enabled", false);
defaultPref("browser.promo.focus.disallowed_regions", "xx");
defaultPref("browser.promo.focus.enabled", false);
defaultPref("browser.promo.pin.enabled", false);
defaultPref("browser.send_to_device_locales", "");
defaultPref("browser.vpn_promo.disallowed_regions", "xx");
defaultPref("browser.vpn_promo.enabled", false);
defaultPref("pdfjs.enableNewBadge", false);
defaultPref("privacy.trackingprotection.allow_list.hasUserInteractedWithETPSettings", true);
defaultPref("browser.contentblocking.report.hide_vpn_banner", true);
defaultPref("browser.contentblocking.report.lockwise.enabled", false);
defaultPref("browser.contentblocking.report.mobile-android.url", "");
defaultPref("browser.contentblocking.report.mobile-ios.url", "");
defaultPref("browser.contentblocking.report.monitor.enabled", false);
defaultPref("browser.contentblocking.report.show_mobile_app", false);
defaultPref("browser.contentblocking.report.vpn.url", "");
defaultPref("browser.contentblocking.report.vpn-android.url", "");
defaultPref("browser.contentblocking.report.vpn-ios.url", "");
defaultPref("browser.contentblocking.report.vpn-promo.url", "");
defaultPref("browser.ipProtection.blockIPProtectionCallouts", true);
defaultPref("browser.ipProtection.locationButtonBadgeDismissed", true);
defaultPref("browser.ipProtection.openedPanelWithLocation", true);
defaultPref("browser.ipProtection.productVpn.endpoint", "");
defaultPref("browser.ipProtection.upgradeNotAvailable", true);
defaultPref("browser.protections_panel.infoMessage.seen", true);
defaultPref("browser.settings-redesign.promo.dismissed", true);
defaultPref("browser.tabs.notes.newBadge.enabled", false);
defaultPref("browser.tabs.splitview.hasUsed", true);
defaultPref("cookiebanners.ui.desktop.showCallout", false);
defaultPref("identity.fxaccounts.toolbar.accessed", true);
defaultPref("sidebar.verticalTabs.dragToPinPromo.dismissed", true);
defaultPref("trailhead.firstrun.didHandleCampaignAction", true);

// Disable Mozilla.UITour
defaultPref("browser.uitour.enabled", false);
defaultPref("browser.uitour.loglevel", "Off");
defaultPref("browser.uitour.requireSecure", true);
defaultPref("browser.uitour.surveyDuration", 0);
defaultPref("browser.uitour.testingOrigins", "");
defaultPref("browser.uitour.url", "");

// Disable "Privacy-Preserving Attribution"
defaultPref("dom.origin-trials.private-attribution.state", 2);
defaultPref("dom.private-attribution.submission.enabled", false);
defaultPref("toolkit.shopping.ohttpConfigURL", "");
defaultPref("toolkit.shopping.ohttpRelayURL", "");

// Disable Remote Permissions
defaultPref("permissions.manager.remote.enabled", false);

// Disable Remote Settings 'Preview' Buckets
defaultPref("services.settings.preview_enabled", false);

// Disable search attribution
defaultPref("browser.search.param.search_rich_suggestions", "");

// Disable the Web Compatibility Reporter
defaultPref("extensions.webcompat-reporter.enabled", false);
defaultPref("extensions.webcompat-reporter.newIssueEndpoint", "https://phoenix.celenity.dev/issues");
defaultPref("media.decoder-doctor.new-issue-endpoint", "https://phoenix.celenity.dev/issues");
defaultPref("ui.new-webcompat-reporter.enabled", false);
defaultPref("ui.new-webcompat-reporter.new-report-endpoint", "https://phoenix.celenity.dev/issues");

// Hide the "More from Mozilla" settings tab (`about:preferences#moreFromMozilla`)
defaultPref("browser.preferences.moreFromMozilla", false);

// Opt out of add-on metadata updates (This prevents themes from displaying previews in `about:addons`)
defaultPref("extensions.getAddons.cache.enabled", false);

// Prevent checking if Firefox is the default browser
defaultPref("browser.shell.checkDefaultBrowser", false);
defaultPref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true);

// Prevent checking if Firefox is the default `mailto:` handler
defaultPref("browser.mailto.dualPrompt", false);

// Prevent checking if Firefox is the default PDF viewer
defaultPref("browser.shell.checkDefaultPDF", false);
defaultPref("browser.shell.checkDefaultPDF.silencedByUser", true);
defaultPref("browser.shell.setDefaultPDFHandler.onlyReplaceBrowsers", false);

// Skip Mozilla's `Privacy Notice` and `Terms of Use`
defaultPref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 999);
defaultPref("datareporting.policy.dataSubmissionPolicyNotifiedTime", "32503679999000");
defaultPref("termsofuse.acceptedDate", "32503679999000");
defaultPref("termsofuse.acceptedVersion", 999);
defaultPref("termsofuse.bypassNotification", true);

/* -----------------------------------------------------------------------------------
   003: TRACKING PROTECTION
   ----------------------------------------------------------------------------------- */

// Abilita eccezioni per evitare problemi minori
defaultPref("privacy.trackingprotection.allow_list.convenience.enabled", true);

// Enable ETP Strict
defaultPref("browser.contentblocking.category", "strict"); 

// Block harmful add-on URLs
defaultPref("privacy.trackingprotection.harmfuladdon.enabled", true); // [DEFAULT - Desktop Firefox] https://searchfox.org/firefox-main/rev/93aad2a6615f670b1279c229dd37f7397236131a/browser/app/profile/firefox.js#2434

// Block known consent managers (CMPs)
defaultPref("privacy.trackingprotection.consentmanager.annotate_channels", true); // [DEFAULT]
defaultPref("privacy.trackingprotection.consentmanager.skip.enabled", false); // [DEFAULT]
defaultPref("privacy.trackingprotection.consentmanager.skip.pbmode.enabled", false);

// Block known cryptominers
defaultPref("privacy.trackingprotection.cryptomining.enabled", true); 

// Block known email trackers
defaultPref("privacy.trackingprotection.emailtracking.enabled", true);
defaultPref("privacy.trackingprotection.emailtracking.pbmode.enabled", true);

// Block known fingerprinters
defaultPref("privacy.trackingprotection.antifraud.annotate_channels", true);
defaultPref("privacy.trackingprotection.antifraud.skip.enabled", false);
defaultPref("privacy.trackingprotection.antifraud.skip.pbmode.enabled", false);
defaultPref("privacy.trackingprotection.fingerprinting.enabled", true);

// Block known social trackers
defaultPref("privacy.trackingprotection.socialtracking.enabled", true);

// Block known trackers
defaultPref("privacy.trackingprotection.annotate_channels", true);
defaultPref("privacy.trackingprotection.enabled", true);
defaultPref("privacy.trackingprotection.pbmode.enabled", true);

// Block known trackers using the `strict` (Level 2) list
defaultPref("privacy.annotate_channels.strict_list.enabled", true);
defaultPref("privacy.annotate_channels.strict_list.pbmode.enabled", true);

// Block known tracking cookies
defaultPref("network.cookie.cookieBehavior.trackerCookieBlocking", true);
defaultPref("privacy.socialtracking.block_cookies.enabled", true);

// Enable Bounce Tracking Protection
defaultPref("privacy.bounceTrackingProtection.mode", 1);

// Enable Query Parameter Stripping
defaultPref("privacy.query_stripping.enabled", true);
defaultPref("privacy.query_stripping.enabled.pbmode", true);
defaultPref("privacy.query_stripping.redirect", true);

// Enable SmartBlock and Web Compatibility interventions
defaultPref("extensions.webcompat.enable_interventions", true);
defaultPref("extensions.webcompat.enable_shims", true);
defaultPref("extensions.webcompat.perform_injections", true);
defaultPref("extensions.webcompat.perform_ua_overrides", true);
defaultPref("extensions.webcompat.smartblockEmbeds.enabled", true);
defaultPref("extensions.pictureinpicture.enable_picture_in_picture_overrides", true);

// State Partitioning (Total Cookie Protection / Isolamento Risorse)
defaultPref("network.fetch.cache_partition_cross_origin", true);
defaultPref("privacy.partition.bloburl_per_partition_key", true);
defaultPref("privacy.partition.serviceWorkers", true);

// Enable Suspected Fingerprinters Protection (FPP)
defaultPref("privacy.fingerprintingProtection", true);
defaultPref("privacy.fingerprintingProtection.pbmode", true);
defaultPref("privacy.reduceTimerPrecision", true);
defaultPref("privacy.resistFingerprinting", false);
defaultPref("privacy.resistFingerprinting.pbmode", false);

// Enable TCP/dFPI
defaultPref("network.cookie.cookieBehavior", 5);
defaultPref("network.cookie.cookieBehavior.pbmode", 5);
defaultPref("network.cookie.cookieBehavior.optInPartitioning", true);
defaultPref("network.cookie.cookieBehavior.optInPartitioning.pbmode", true);

// Ignore less restricted referer policies (than the default)
defaultPref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
defaultPref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode", true);
defaultPref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode.top_navigation", true);
defaultPref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true);

// Enable exceptions required to avoid major breakage
defaultPref("privacy.trackingprotection.allow_list.baseline.enabled", true);
defaultPref("privacy.trackingprotection.allow_list.hasMigratedCategoryPrefs", true);

// Lower the network priority of known trackers (if not blocked for whatever reason...)
defaultPref("privacy.trackingprotection.lower_network_priority", true);

// Purge first-party tracking cookies
defaultPref("privacy.purge_trackers.enabled", true);

/* -----------------------------------------------------------------------------------
   004: FINGERPRINTING PROTECTION
   ----------------------------------------------------------------------------------- */

// Unnecessarily fingerprintable
clearPref("dom.webmidi.enabled");
clearPref("geo.enabled");

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
   005: DISK AVOIDANCE
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
   006: DOWNLOADS
   ----------------------------------------------------------------------------------- */

// Block insecure downloads
defaultPref("dom.block_download_insecure", true);

// Notify when downloading files
defaultPref("browser.download.alwaysOpenPanel", true);

// Prevent adding downloads to "recent documents"...
defaultPref("browser.download.manager.addToRecentDocs", false);

// Prompt before downloading files
defaultPref("browser.download.always_ask_before_handling_new_types", true);
defaultPref("browser.download.useDownloadDir", false);

/* -----------------------------------------------------------------------------------
   007: HTTP(S)
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
defaultPref("security.OCSP.enabled", 0);
defaultPref("security.OCSP.require", false);

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
defaultPref("dom.security.https_only_mode", true);
defaultPref("dom.security.https_only_mode_pbm", true);

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
   008: IMPLICIT CONNECTIONS
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
   009: SEARCH & URL BAR
   ----------------------------------------------------------------------------------- */

// Abilita la possibilità di usare un motore di ricerca diverso in finestre normali e private
defaultPref("browser.search.separatePrivateDefault", true);
defaultPref("browser.search.separatePrivateDefault.ui.enabled", true);

// Always show Punycode
defaultPref("network.IDN_show_punycode", true);

// Disable autofill/autocompletion of URLs
defaultPref("browser.urlbar.autoFill", false);

// Disable clipboard suggestions
defaultPref("browser.urlbar.clipboard.featureGate", true);
defaultPref("browser.urlbar.suggest.clipboard", false);

// Disable Firefox's new 'Unified Trust Panel'
defaultPref("browser.urlbar.trustPanel.featureGate", false);

// Disable quick actions
defaultPref("browser.urlbar.quickactions.showPrefs", true);
defaultPref("browser.urlbar.secondaryActions.featureGate", true);
defaultPref("browser.urlbar.shortcuts.actions", false);
defaultPref("browser.urlbar.suggest.quickactions", false);

// Disable the quick actions onboarding
defaultPref("browser.urlbar.quickactions.timesToShowOnboardingLabel", 0);

// Disable search engine suggestions (Tab to search)
defaultPref("browser.urlbar.suggest.engines", false);

// Disable search engine suggestion (Tab to search) onboarding results
defaultPref("browser.urlbar.tabToSearch.onboard.interactionsLeft", 0);

// Disable search suggestions
defaultPref("browser.urlbar.showSearchSuggestionsFirst", false);
defaultPref("browser.urlbar.suggest.searches", false);

// Disable search tips
defaultPref("browser.urlbar.tipShownCount.searchTip_onboard", 999);
defaultPref("browser.urlbar.tipShownCount.searchTip_redirect", 999);

// Disable trending searches
defaultPref("browser.urlbar.suggest.trending", false);

// Disable URL trimming
defaultPref("browser.urlbar.trimURLs", false);

// Enable the "Search in Private Window" result
defaultPref("browser.search.separatePrivateDefault.urlbarResult.enabled", true);

// Ensure UI reflects that the default search engine is set to DuckDuckGo
defaultPref("browser.urlbar.placeholderName", "DuckDuckGo");
defaultPref("browser.urlbar.placeholderName.private", "DuckDuckGo");

// Expose the UI to switch search engines for individual searches
defaultPref("browser.urlbar.scotchBonnet.disableOneOffs", false);

// If URL trimming is enabled, untrim on user interaction
defaultPref("browser.urlbar.untrimOnUserInteraction.featureGate", true);

// Show full URLs instead of search terms
defaultPref("browser.urlbar.showSearchTerms.enabled", false);

/* -----------------------------------------------------------------------------------
   010: DNS
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

/* -----------------------------------------------------------------------------------
   011: PROXIES
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
   012: WEBRTC
   ----------------------------------------------------------------------------------- */

// Disable RTP Control Protocol (RTCP) reception
defaultPref("media.webrtc.net.force_disable_rtcp_reception", true);

// Enable global toggles for muting the camera/microphone
defaultPref("privacy.webrtc.globalMuteToggles", true);

// Prevent WebRTC from bypassing the proxy (if configured)
defaultPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// Warn users when attempting to switch tabs in a window being shared over WebRTC
defaultPref("privacy.webrtc.sharedTabWarning", true);

/* -----------------------------------------------------------------------------------
   013: MEDIA
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
   014: ATTACK SURFACE
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
   015: PASSWORDS
   ----------------------------------------------------------------------------------- */

// Always display a `reveal password` button in `password` `<input>` types
defaultPref("layout.forms.reveal-password-button.enabled", true);

// Disable autofill
defaultPref("signon.autofillForms", false);

// Disable Basic authentication over HTTP
defaultPref("network.http.basic_http_auth.enabled", false);

// Disable formless capture of log-in credentials
defaultPref("signon.privateBrowsingCapture.enabled", false);
defaultPref("signon.formlessCapture.enabled", false);

// Disable Microsoft SSO
defaultPref("network.http.microsoft-entra-sso.container-enabled.0", false);
defaultPref("network.http.windows-sso.container-enabled.0", false);
defaultPref("network.microsoft-sso-authority-list", "");

// Disable Password Manager
defaultPref("extensions.formautofill.addresses.enabled", false);
defaultPref("extensions.formautofill.addresses.supported", "on");
defaultPref("extensions.formautofill.creditCards.enabled", false);
defaultPref("extensions.formautofill.creditCards.supported", "on");

// Disable password truncation
defaultPref("editor.truncate_user_pastes", false);

// Prevent cross-origin sub-resources from opening HTTP authentication dialogs
defaultPref("network.auth.subresource-http-auth-allow", 1);

/* -----------------------------------------------------------------------------------
   016: EXTENSIONS
   ----------------------------------------------------------------------------------- */

// Allow enabling/disabling extensions per-container
defaultPref("extensions.userContextIsolation.enabled", true);

// Always display "hidden" add-ons at `about:debugging`
defaultPref("devtools.aboutdebugging.showHiddenAddons", true);

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
defaultPref("extensions.postDownloadThirdPartyPrompt", false);
defaultPref("xpinstall.whitelist.directRequest", false);
defaultPref("xpinstall.whitelist.fileRequest", false);
defaultPref("xpinstall.whitelist.required", true);

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
   017: AI
   ----------------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------------
   018: GEOLOCATION
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
   019: PDF
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
   020: SAFE BROWSING
   ----------------------------------------------------------------------------------- */

// Disable the legacy (v2.2) Safe Browsing API
defaultPref("browser.safebrowsing.provider.google.advisoryName", "Google Safe Browsing (Legacy)");
defaultPref("browser.safebrowsing.provider.google.lists", "disabled");
defaultPref("browser.safebrowsing.provider.google.lists.default", "goog-badbinurl-shavar,goog-downloadwhite-digest256,goog-phish-shavar,googpub-phish-shavar,goog-malware-shavar,goog-unwanted-shavar");

// Enable the Potentially Harmful Application list (when Safe Browsing is enabled)
defaultPref("urlclassifier.malwareTable", "goog-malware-proto,goog-unwanted-proto,moztest-harmful-simple,moztest-malware-simple,moztest-unwanted-simple,goog-harmful-proto");

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

// Disable Content Analysis SDK
defaultPref("browser.contentanalysis.default_result", 0);
defaultPref("browser.contentanalysis.enabled", false);
defaultPref("browser.contentanalysis.interception_point.clipboard.enabled", false);
defaultPref("browser.contentanalysis.interception_point.drag_and_drop.enabled", false);
defaultPref("browser.contentanalysis.interception_point.file_upload.enabled", false);
defaultPref("browser.contentanalysis.interception_point.print.enabled", false);
defaultPref("browser.contentanalysis.max_connections", 0);
defaultPref("browser.contentanalysis.show_blocked_result", true);
defaultPref("browser.contentanalysis.silent_notifications", false);

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
defaultPref("privacy.globalprivacycontrol.enabled", true);

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

// Disable captive portal detection and connectivity checks
defaultPref("network.captive-portal-service.enabled", false);
defaultPref("network.connectivity-service.DNSv4.domain", "");
defaultPref("network.connectivity-service.DNSv6.domain", "");
defaultPref("network.connectivity-service.enabled", false);

// Disable Firefox's "Reset/Refresh Profile" prompt
defaultPref("browser.disableResetPrompt", true);

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

// Disable warning when attempting to access `about:config`
defaultPref("browser.aboutConfig.showWarning", false);

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

/* -----------------------------------------------------------------------------------
   029: UX
   ----------------------------------------------------------------------------------- */

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
   032: HOME
   ----------------------------------------------------------------------------------- */

// Widgets
defaultPref("browser.newtabpage.activity-stream.widgets.enabled", true);
defaultPref("browser.newtabpage.activity-stream.widgets.system.focusTimer.enabled", true); // abilita Timer
defaultPref("browser.newtabpage.activity-stream.widgets.focusTimer.showSystemNotifications", true); // abilita notifiche Timer
defaultPref("browser.newtabpage.activity-stream.widgets.system.lists.enabled", true); // abilita Task list
defaultPref("browser.newtabpage.activity-stream.widgets.system.enabled", true); // abilita i widgets
defaultPref("browser.newtabpage.activity-stream.widgets.system.focusTimer.enabled", true);
defaultPref("browser.newtabpage.activity-stream.widgets.system.lists.enabled", true);

// Disable AccuWeather
defaultPref("browser.newtabpage.activity-stream.showWeather", false);
defaultPref("browser.newtabpage.activity-stream.system.showWeather", true);
defaultPref("browser.newtabpage.activity-stream.widgets.system.weather.enabled", true);
defaultPref("browser.newtabpage.activity-stream.widgets.system.weatherForecast.enabled", true);
defaultPref("browser.newtabpage.activity-stream.widgets.weather.enabled", false);
defaultPref("browser.newtabpage.activity-stream.widgets.weatherForecast.enabled", false);

// Disable Contile (Sponsored tiles)
defaultPref("browser.newtabpage.activity-stream.sov.name", "");
defaultPref("browser.topsites.contile.enabled", false);
defaultPref("browser.topsites.contile.endpoint", "");
defaultPref("browser.topsites.contile.sov.enabled", false);

// Disable Fakespot
defaultPref("browser.newtabpage.activity-stream.discoverystream.contextualContent.feeds", "need_to_know");

// Disable fetching favicons remotely from Mozila's remote Tippy Top service
defaultPref("browser.newtabpage.activity-stream.feeds.favicon", false);

// Disable fetching the layout remotely
defaultPref("browser.newtabpage.activity-stream.feeds.sectionslayoutfeed", false);

// Disable fetching locale/fluent files remotely
defaultPref("browser.newtabpage.activity-stream.asrouter.useRemoteL10n", false);

// Disable fetching top sites remotely
defaultPref("browser.topsites.useRemoteSetting", false);

// Disable Firefox Sync first run/promotion and metrics
defaultPref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");

// Disable MARS (Mozilla Ad Routing Service)
defaultPref("browser.newtabpage.activity-stream.discoverystream.reportAds.enabled", false);
defaultPref("browser.newtabpage.activity-stream.discoverystream.sections.contextualAds.locale-config", "");
defaultPref("browser.newtabpage.activity-stream.discoverystream.sections.contextualAds.region-config", "");
defaultPref("browser.newtabpage.activity-stream.feeds.adsfeed", false);
defaultPref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.spocs.enabled", false);
defaultPref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.tiles.enabled", false);
defaultPref("browser.newtabpage.activity-stream.unifiedAds.enabled", false);
defaultPref("browser.newtabpage.activity-stream.unifiedAds.endpoint", "");
defaultPref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled", false);
defaultPref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", false);

// Disable new tab attribution
defaultPref("browser.newtabpage.activity-stream.feeds.newtabattributionfeed", false);
defaultPref("dap.ohttp.hpke", "");
defaultPref("dap.ohttp.relayURL", "");

// Disable onboarding
defaultPref("browser.newtabpage.activity-stream.discoverystream.topicSelection.onboarding.maybeDisplay", false);

// Disable Pocket sponsored stories
defaultPref("browser.newtabpage.activity-stream.discoverystream.placements.spocs", "");
defaultPref("browser.newtabpage.activity-stream.discoverystream.placements.spocs.counts", "");
defaultPref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
defaultPref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "");
defaultPref("browser.newtabpage.activity-stream.showSponsored", false);
defaultPref("browser.newtabpage.activity-stream.system.showSponsored", false);

// Disable the promotion card
defaultPref("browser.newtabpage.activity-stream.discoverystream.promoCard.visible", false);

// Disable recent activity
defaultPref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
defaultPref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
defaultPref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);

// Disable "smart" shortcut personalization
defaultPref("browser.newtabpage.activity-stream.feeds.smartshortcutsfeed", false);

// Disable sponsored shortcuts
defaultPref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Disable stories
defaultPref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Disable telemetry
defaultPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
defaultPref("browser.newtabpage.activity-stream.telemetry", false);
defaultPref("browser.newtabpage.activity-stream.telemetry.privatePing.enabled", false);
defaultPref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
defaultPref("browser.newtabpage.ping.enabled", false);
defaultPref("browser.places.interactions.enabled", false);
defaultPref("browser.search.serpEventTelemetryCategorization.enabled", false);

// Disable wallpaper promotions
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.highlightDismissed", true);

// Enable wallpapers, but disable fetching them remotely 
defaultPref("browser.newtabpage.activity-stream.feeds.wallpaperfeed", false);
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.user.enabled", true);
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.wallpaper", "solid-color-picker-#000000");

// Ripristina sessione precedente
defaultPref("browser.startup.page", 3);

// Hide checkboxes to enable sponsored shortcuts and Pocket sponsored stories
defaultPref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

// Hide the Firefox logo
defaultPref("browser.newtabpage.activity-stream.hideLogo", true);
defaultPref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);

// If Merino is enabled, use OHTTP for superior privacy
defaultPref("browser.newtabpage.activity-stream.discoverystream.merino-provider.ohttp.enabled", true);

// If stories are enabled, allow customization and following/unfollowing interests/topics
defaultPref("browser.newtabpage.activity-stream.discoverystream.sections.interestPicker.enabled", true);
defaultPref("browser.newtabpage.activity-stream.discoverystream.topicSelection.enabled", true);

// If stories are enabled, disable "personalization"
defaultPref("browser.newtabpage.activity-stream.discoverystream.sections.personalization.inferred.locale-config", "");
defaultPref("browser.newtabpage.activity-stream.discoverystream.sections.personalization.inferred.user.enabled", false);
defaultPref("browser.newtabpage.activity-stream.discoverystream.shortcuts.personalization.enabled", false);
defaultPref("browser.newtabpage.activity-stream.feeds.inferredpersonalizationfeed", false);

// If stories are enabled, disable impression tracking
lockPref("browser.newtabpage.activity-stream.impressionId", "{}");
defaultPref("browser.newtabpage.activity-stream.feeds.section.topstories.rec.impressions", "{}"); // [NO-ANDROID] [NO-MAIL] [HIDDEN] https://searchfox.org/mozilla-central/rev/cc4985b7/browser/extensions/newtab/lib/TopStoriesFeed.sys.mjs#33
defaultPref("browser.newtabpage.activity-stream.feeds.section.topstories.spoc.impressions", "{}"); // [NO-ANDROID] [NO-MAIL] [HIDDEN] https://searchfox.org/mozilla-central/rev/cc4985b7/browser/extensions/newtab/lib/TopStoriesFeed.sys.mjs#27

// If stories are enabled, enable the new sections UI 
defaultPref("browser.newtabpage.activity-stream.discoverystream.sections.cards.enabled", false);
defaultPref("browser.newtabpage.activity-stream.discoverystream.sections.enabled", false);

// Blocca il passaggio automatico dalla barra di ricerca a quella degli indirizzi
defaultPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// Remove default shortcuts
defaultPref("browser.newtabpage.activity-stream.default.sites", "");
defaultPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
defaultPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
defaultPref("browser.newtabpage.pinned", "[{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://it.wikipedia.org/wiki/Pagina_principale\",\"label\":\"Wikipedia\"},{\"url\":\"https://github.com/\",\"label\":\"GitHub\"},{\"url\":\"https://www.diretta.it/\",\"label\":\"Diretta\"}]");

/* -----------------------------------------------------------------------------------
   033: SUGGESTIONS
   ----------------------------------------------------------------------------------- */

// Disable AccuWeather suggestions
defaultPref("browser.urlbar.suggest.weather", false);
defaultPref("browser.urlbar.weather.featureGate", true);

// Disable adMarketplace (AMP) suggestions
defaultPref("browser.urlbar.amp.featureGate", false);
defaultPref("browser.urlbar.suggest.amp", false);

// Disable AMO suggestions
defaultPref("browser.urlbar.addons.featureGate", true);
defaultPref("browser.urlbar.suggest.addons", false);

// Disable "Exposure" telemetry
defaultPref("browser.urlbar.exposureResults", "");
defaultPref("browser.urlbar.keywordExposureResults", "");
defaultPref("browser.urlbar.showExposureResults", false);

// Disable Fakespot suggestions
defaultPref("browser.urlbar.fakespot.featureGate", false);
defaultPref("browser.urlbar.suggest.fakespot", false);

// Disable Firefox Suggest
defaultPref("browser.urlbar.quicksuggest.enabled", false);

// Disable FlightAware (flight status) suggestions
defaultPref("browser.urlbar.flightStatus.featureGate", true);
defaultPref("browser.urlbar.suggest.flightStatus", false);

// Disable machine learning
defaultPref("browser.urlbar.quicksuggest.mlEnabled", false);
defaultPref("browser.urlbar.yelp.mlEnabled", false);

// Disable MDN suggestions
defaultPref("browser.urlbar.mdn.featureGate", true);
defaultPref("browser.urlbar.suggest.mdn", false);

// Disable nags to opt-in to "real-time suggestions"
defaultPref("browser.urlbar.suggest.realtimeOptIn", false);

// Disable online suggestions
defaultPref("browser.urlbar.quicksuggest.online.available", false);
defaultPref("browser.urlbar.quicksuggest.online.enabled", false);
defaultPref("browser.urlbar.quicksuggest.settingsUi", 2);
defaultPref("browser.urlbar.suggest.quicksuggest.all", false);
defaultPref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);

// Disable partner links/attribution
defaultPref("browser.partnerlink.attributionURL", "");
defaultPref("browser.partnerlink.campaign.topsites", "");

// Disable Polygon (stock market) suggestions
defaultPref("browser.urlbar.market.featureGate", true);
defaultPref("browser.urlbar.suggest.market", false);

// Disable row labels 
defaultPref("browser.urlbar.groupLabels.enabled", false);

// Disable sponsored suggestions
defaultPref("browser.urlbar.sponsoredTopSites", false);
defaultPref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// Disable sports suggestions
defaultPref("browser.urlbar.sports.featureGate", true);
defaultPref("browser.urlbar.suggest.sports", false);

// Disable telemetry
defaultPref("browser.urlbar.quicksuggest.contextualOptIn", false);

// Disable Wikipedia suggestions , but allow users to enable them if desired
defaultPref("browser.urlbar.suggest.wikipedia", false);
defaultPref("browser.urlbar.wikipedia.featureGate", true);

// Disable Yelp suggestions
defaultPref("browser.urlbar.suggest.yelp", false);
defaultPref("browser.urlbar.suggest.yelpRealtime", false);
defaultPref("browser.urlbar.yelp.featureGate", false);
defaultPref("browser.urlbar.yelpRealtime.featureGate", false);

// Enable important date suggestions 
defaultPref("browser.urlbar.importantDates.featureGate", true);
defaultPref("browser.urlbar.suggest.importantDates", true);

// If Yelp suggestions are enabled, show subject/title for results
defaultPref("browser.urlbar.yelp.serviceResultDistinction", true);

/* -----------------------------------------------------------------------------------
   FINE
   ----------------------------------------------------------------------------------- */

lockPref("rischio.fox", "151.1");
