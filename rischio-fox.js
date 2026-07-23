
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
   
*/

/* -----------------------------------------------------------------------------------
   001: DATA COLLECTION
   ----------------------------------------------------------------------------------- */

// Disable automatic upload of profiler data (from `about:logging`) to Mozilla
lockPref("toolkit.aboutLogging.uploadProfileToCloud", false);
lockPref("toolkit.aboutLogging.uploadProfileUrl", "");

// Disable Browser Search/Usage Telemetry metrics
lockPref("browser.engagement.ctrlTab.has-used", true);
lockPref("browser.engagement.downloads-button.has-used", true);
lockPref("browser.engagement.fxa-toolbar-menu-button.has-used", true);
lockPref("browser.engagement.home-button.has-used", true);
lockPref("browser.engagement.library-button.has-used", true);
lockPref("browser.engagement.sidebar-button.has-used", true);
lockPref("browser.engagement.total_uri_count.pbm", false);
lockPref("browser.engagement.search_counts.pbm", false);
lockPref("browser.search.totalSearches", 100);

// Disable Coverage
lockPref("toolkit.coverage.enabled", false);
lockPref("toolkit.coverage.endpoint.base", "");
lockPref("toolkit.coverage.log-level", 70);
lockPref("toolkit.coverage.opt-out", true);

// Disable crash reporting
lockPref("breakpad.reportURL", "");
lockPref("browser.crashReports.onDemand", false);
lockPref("browser.crashReports.requestedNeverShowAgain", true);
lockPref("dom.ipc.tabs.createKillHardCrashReports", false);
lockPref("toolkit.crashreporter.include_context_heap", false);
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
lockPref("browser.crashReports.unsubmittedCheck.enabled", false);
lockPref("browser.crashReports.cleanupCheck.enabled", false);
lockPref("browser.tabs.crashReporting.includeURL", false);
lockPref("browser.tabs.crashReporting.sendReport", false);

// Disable data reporting and telemetry
clearPref("app.update.lastUpdateTime.glean-addons-daily");
lockPref("browser.safebrowsing.features.emailtracking.datacollection.update", false);
lockPref("captchadetection.actor.enabled", false);
lockPref("captchadetection.hasUnsubmittedData", false);
lockPref("captchadetection.loglevel", "Off");
lockPref("datareporting.dau.cachedUsageProfileID", "beefbeef-beef-beef-beef-beeefbeefbee");
lockPref("datareporting.dau.cachedUsageProfileGroupID", "b0bacafe-b0ba-cafe-b0ba-cafeb0bacafe");
lockPref("datareporting.healthreport.uploadEnabled", false);
lockPref("datareporting.policy.dataSubmissionEnabled", false);
lockPref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
lockPref("datareporting.policy.firstRunURL", "");
lockPref("datareporting.usage.uploadEnabled", false);
lockPref("dom.security.unexpected_system_load_telemetry_enabled", false);
lockPref("extensions.dataCollectionPermissions.enabled", false);
lockPref("extensions.gleanPingAddons.daily.interval", 2147483647);
lockPref("extensions.gleanPingAddons.updated.delay", 2147483647);
lockPref("extensions.gleanPingAddons.updated.idleTimeout", 2147483647);
lockPref("extensions.gleanPingAddons.updated.testing", false);
lockPref("extensions.telemetry.EnvironmentAddonBuilder", false);
lockPref("network.jar.record_failure_reason", false);
lockPref("network.traffic_analyzer.enabled", false);
lockPref("nimbus.telemetry.targetingContextEnabled", false);
lockPref("privacy.trackingprotection.emailtracking.data_collection.enabled", false);
lockPref("telemetry.fog.artifact_build", false);
lockPref("telemetry.fog.test.activity_limit", -1);
lockPref("telemetry.fog.test.inactivity_limit", -1);
lockPref("telemetry.fog.init_on_shutdown", false);
lockPref("telemetry.fog.test.localhost_port", 70000);
lockPref("telemetry.glean.internal.finalInactive", false);
lockPref("telemetry.glean.internal.maxPingsPerMinute", 0);
lockPref("telemetry.number_of_site_origin.min_interval", 2147483647);
lockPref("toolkit.content-background-hang-monitor.disabled", true);
lockPref("toolkit.profiles.newProfileSubmitted", true);
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.bhrPing.enabled", false);
lockPref("toolkit.telemetry.cachedClientID", "c0ffeec0-ffee-c0ff-eec0-ffeec0ffeec0");
lockPref("toolkit.telemetry.cachedProfileGroupID", "decafdec-afde-cafd-ecaf-decafdecafde");
lockPref("toolkit.telemetry.collectInterval", 2147483647);
lockPref("toolkit.telemetry.dap.helper.hpke", "");
lockPref("toolkit.telemetry.dap.helper.url", "");
lockPref("toolkit.telemetry.dap.leader.hpke", "");
lockPref("toolkit.telemetry.dap.leader.url", "");
lockPref("toolkit.telemetry.dap.logLevel", "Off");
lockPref("toolkit.telemetry.dap_enabled", false);
lockPref("toolkit.telemetry.dap_task1_enabled", false);
lockPref("toolkit.telemetry.dap_task1_taskid", "");
lockPref("toolkit.telemetry.dap_visit_counting_enabled", false);
lockPref("toolkit.telemetry.dap_visit_counting_experiment_list", "[]");
lockPref("toolkit.telemetry.debugSlowSql", false);
lockPref("toolkit.telemetry.enabled", false);
lockPref("toolkit.telemetry.eventping.maximumFrequency", 2147483647);
lockPref("toolkit.telemetry.eventping.minimumFrequency", 2147483647);
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false);
lockPref("toolkit.telemetry.healthping.enabled", false);
lockPref("toolkit.telemetry.initDelay", 2147483647);
lockPref("toolkit.telemetry.log.dump", false);
lockPref("toolkit.telemetry.log.level", "Fatal");
lockPref("toolkit.telemetry.minSubsessionLength", 2147483647);
lockPref("toolkit.telemetry.newProfilePing.delay", 2147483647);
lockPref("toolkit.telemetry.newProfilePing.enabled", false);
lockPref("toolkit.telemetry.overrideUpdateChannel", "release");
lockPref("toolkit.telemetry.previousBuildID", "");
lockPref("toolkit.telemetry.reportingpolicy.firstRun", false);
lockPref("toolkit.telemetry.scheduler.idleTickInterval", 2147483647);
lockPref("toolkit.telemetry.scheduler.tickInterval", 2147483647);
lockPref("toolkit.telemetry.send.overrideOfficialCheck", false);
lockPref("toolkit.telemetry.server", "data;");
lockPref("toolkit.telemetry.server_owner", "");
lockPref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false);
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false);
lockPref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
lockPref("toolkit.telemetry.testing.disableFuzzingDelay", false);
lockPref("toolkit.telemetry.testing.overridePreRelease", false);
lockPref("toolkit.telemetry.testing.overrideProductsCheck", false);
lockPref("toolkit.telemetry.testing.suppressPingsender", true);
lockPref("toolkit.telemetry.translations.logLevel", "Off");
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.untrustedModulesPing.frequency", 2147483647);
lockPref("toolkit.telemetry.updatePing.enabled", false);
lockPref("toolkit.telemetry.user_characteristics_ping.current_version", 0);
lockPref("toolkit.telemetry.user_characteristics_ping.last_version_sent", 0);
lockPref("toolkit.telemetry.user_characteristics_ping.logLevel", "Off");
lockPref("toolkit.telemetry.user_characteristics_ping.opt-out", true);
lockPref("toolkit.telemetry.user_characteristics_ping.send-once", false);
lockPref("toolkit.telemetry.user_characteristics_ping.uuid", "");
lockPref("urlclassifier.features.emailtracking.datacollection.allowlistTables", "");
lockPref("urlclassifier.features.emailtracking.datacollection.blocklistTables", "");
lockPref("telemetry.fog.aboutGlean.debugTag", "");
lockPref("browser.aboutwelcome.entrypoint", "");

// Disable experimentation and A/B testing
lockPref("app.normandy.run_interval_seconds", 0);
lockPref("app.shield.optoutstudies.enabled", false);
lockPref("extensions.formautofill.addresses.experiments.enabled", false);
lockPref("messaging-system.rsexperimentloader.collection_id", "");
lockPref("nimbus.appId", "");
lockPref("nimbus.firstUpdateComplete", true);
pref("nimbus.profileId", "");
lockPref("nimbus.profileId", "");
lockPref("nimbus.profilesdatastoreservice.enabled", false);
lockPref("nimbus.profilesdatastoreservice.read.enabled", false);
lockPref("nimbus.profilesdatastoreservice.sync.enabled", false);
lockPref("nimbus.rollouts.enabled", false);
lockPref("app.normandy.api_url", "");
lockPref("app.normandy.enabled", false);
lockPref("app.normandy.experiments.lazy_classify", true);
lockPref("app.normandy.first_run", false);
lockPref("app.normandy.last_seen_buildid", "");
lockPref("app.normandy.logging.level", 70);
lockPref("app.normandy.user_id", "");
lockPref("browser.aboutwelcome.experimentsGate.enabled", false);
lockPref("browser.aboutwelcome.experimentsGate.skipSplashIfLoaded", true);

// Disable notification permission telemetry
lockPref("permissions.desktop-notification.telemetry.siteCategories", "{}");

// Disable Origin Trials
lockPref("dom.origin-trials.enabled", false);

// Remove partner attribution
lockPref("app.distributor", "");
lockPref("app.distributor.channel", "");
lockPref("mozilla.partner.id", "");

/* -----------------------------------------------------------------------------------
   002: MOZILLA
   ----------------------------------------------------------------------------------- */

// Clear unnecessary/undesired Mozilla URLs
lockPref("extensions.recommendations.privacyPolicyUrl", "");
lockPref("app.feedback.baseURL", "");
lockPref("datareporting.healthreport.infoURL", "");
lockPref("toolkit.datacollection.infoURL", "");
lockPref("app.normandy.shieldLearnMoreUrl", "");
lockPref("browser.newtabpage.activity-stream.privacyInfo.url", "");

// Disable `about:welcome`/onboarding
lockPref("browser.preonboarding.enabled", false);
lockPref("browser.aboutwelcome.enabled", false);
lockPref("browser.aboutwelcome.log", "off");
lockPref("browser.rights.3.shown", true);
lockPref("browser.startup.firstrunSkipsHomepage", false);
lockPref("browser.startup.homepage_override.buildID", "20100101");
lockPref("browser.startup.homepage_override.mstone", "ignore");
lockPref("browser.startup.upgradeDialog.enabled", false);
lockPref("browser.suppress_first_window_animation", true);
lockPref("startup.homepage_override_nimbus_disable_wnp", true);
lockPref("startup.homepage_override_url", "");
lockPref("startup.homepage_override_url_nimbus", "");
lockPref("startup.homepage_welcome_url", "");
lockPref("startup.homepage_welcome_url.additional", "");

// Disable add-on/feature recommendations
lockPref("browser.discovery.enabled", false);
defaultPref("browser.translations.mostRecentTargetLanguages", "en-US");
lockPref("browser.translations.panelShown", true);
lockPref("extensions.getAddons.browseAddons", "");
lockPref("extensions.getAddons.discovery.api_url", "data;");
lockPref("extensions.getAddons.showPane", false);
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false);
lockPref("extensions.recommendations.hideNotice", true);
lockPref("extensions.recommendations.themeRecommendationUrl", "");
lockPref("extensions.ui.lastCategory", "addons://list/extension");
lockPref("extensions.webservice.discoverURL", "");
lockPref("browser.dataFeatureRecommendations.enabled", false);
lockPref("browser.discovery.sites", "");
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Disable DoH Rollout/heuristics/steering
lockPref("doh-rollout._testing", false);
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

// Disable "Feature Tours"
lockPref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");
lockPref("browser.newtab.feature-tour", "{\"screen\":\"\",\"complete\":true}");
lockPref("browser.pdfjs.feature-tour", "{\"screen\":\"\",\"complete\":true}");

// Disable fetching Firefox Relay's "allowlist" and "denylist"
lockPref("signon.firefoxRelay.allowListRemoteSettingsCollection", "");
lockPref("signon.firefoxRelay.denyListRemoteSettingsCollection", "");

// Disable fetching Password Manager rules remotely
lockPref("signon.recipes.remoteRecipes.enabled", false);

// Disable Firefox Bridge
lockPref("browser.firefoxbridge.enabled", false);

// Disable (no-op) the Firefox/Gecko Profiler
lockPref("devtools.performance.popup.feature-flag", false);
lockPref("devtools.performance.recording.ui-base-url", "http://localhost:3");
lockPref("logging.config.output_type", "file");
lockPref("toolkit.aboutProcesses.showProfilerIcons", false);
defaultPref("devtools.performance.enabled", false);

// Disable the Firefox Messaging System
lockPref("app.update.background.messaging.targeting.snapshot.intervalSec", -1);
lockPref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "null");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "null");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "null");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "null");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "null");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "null");
lockPref("browser.newtabpage.activity-stream.feeds.newtabmessaging", false);
lockPref("messaging-system.askForFeedback", false);
lockPref("messaging-system.log", "off");
lockPref("messaging-system.profile.messagingProfileId", -1);
lockPref("messaging-system.profile.singleProfileMessaging.disable", false);

// Disable import of Mozilla's default bookmarks
lockPref("browser.bookmarks.restore_default_bookmarks", false);
lockPref("browser.bookmarks.testing.skipDefaultBookmarksImport", true);
lockPref("browser.places.importBookmarksHTML", true);

// Disable import of Mozilla's default protocol handlers
lockPref("gecko.handlerService.defaultHandlersVersion", 2147483647);

// Disable "Interest-based Content Relevance Ranking and Personalization"
lockPref("toolkit.contentRelevancy.enabled", false);
lockPref("toolkit.contentRelevancy.ingestEnabled", false);
lockPref("toolkit.contentRelevancy.log", false);

// Disable Mozilla nags/promotions
lockPref("browser.promo.cookiebanners.enabled", false);
lockPref("browser.promo.focus.disallowed_regions", "xx");
lockPref("browser.promo.focus.enabled", false);
lockPref("browser.promo.pin.enabled", false);
lockPref("browser.send_to_device_locales", "");
lockPref("browser.vpn_promo.disallowed_regions", "xx");
lockPref("browser.vpn_promo.enabled", false);
lockPref("pdfjs.enableNewBadge", false);
lockPref("privacy.trackingprotection.allow_list.hasUserInteractedWithETPSettings", true);
lockPref("browser.contentblocking.report.hide_vpn_banner", true);
lockPref("browser.contentblocking.report.lockwise.enabled", false);
lockPref("browser.contentblocking.report.mobile-android.url", "");
lockPref("browser.contentblocking.report.mobile-ios.url", "");
lockPref("browser.contentblocking.report.monitor.enabled", false);
lockPref("browser.contentblocking.report.show_mobile_app", false);
lockPref("browser.contentblocking.report.vpn.url", "");
lockPref("browser.contentblocking.report.vpn-android.url", "");
lockPref("browser.contentblocking.report.vpn-ios.url", "");
lockPref("browser.contentblocking.report.vpn-promo.url", "");
lockPref("browser.ipProtection.blockIPProtectionCallouts", true);
lockPref("browser.ipProtection.locationButtonBadgeDismissed", true);
lockPref("browser.ipProtection.openedPanelWithLocation", true);
lockPref("browser.ipProtection.productVpn.endpoint", "");
lockPref("browser.ipProtection.upgradeNotAvailable", true);
lockPref("browser.protections_panel.infoMessage.seen", true);
lockPref("browser.settings-redesign.promo.dismissed", true);
lockPref("browser.tabs.notes.newBadge.enabled", false);
lockPref("browser.tabs.splitview.hasUsed", true);
lockPref("cookiebanners.ui.desktop.showCallout", false);
lockPref("identity.fxaccounts.toolbar.accessed", true);
lockPref("sidebar.verticalTabs.dragToPinPromo.dismissed", true);
lockPref("trailhead.firstrun.didHandleCampaignAction", true);

// Disable Mozilla.UITour
lockPref("browser.uitour.enabled", false);
lockPref("browser.uitour.loglevel", "Off");
lockPref("browser.uitour.requireSecure", true);
lockPref("browser.uitour.surveyDuration", 0);
lockPref("browser.uitour.testingOrigins", "");
lockPref("browser.uitour.url", "");

// Disable "Privacy-Preserving Attribution"
lockPref("dom.origin-trials.private-attribution.state", 2);
lockPref("dom.private-attribution.submission.enabled", false);
lockPref("toolkit.shopping.ohttpConfigURL", "");
lockPref("toolkit.shopping.ohttpRelayURL", "");

// Disable Remote Permissions
lockPref("permissions.manager.remote.enabled", false);

/// Disable Remote Settings 'Preview' Buckets
lockPref("services.settings.preview_enabled", false);

/// Disable search attribution
lockPref("browser.search.param.search_rich_suggestions", "");

// Disable the Web Compatibility Reporter
lockPref("extensions.webcompat-reporter.enabled", false);
lockPref("extensions.webcompat-reporter.newIssueEndpoint", "https://phoenix.celenity.dev/issues");
lockPref("media.decoder-doctor.new-issue-endpoint", "https://phoenix.celenity.dev/issues");
lockPref("ui.new-webcompat-reporter.enabled", false);
lockPref("ui.new-webcompat-reporter.new-report-endpoint", "https://phoenix.celenity.dev/issues");

// Hide the "More from Mozilla" settings tab (`about:preferences#moreFromMozilla`)
lockPref("browser.preferences.moreFromMozilla", false);

// Opt out of add-on metadata updates (This prevents themes from displaying previews in `about:addons`)
defaultPref("extensions.getAddons.cache.enabled", false);

// Prevent checking if Firefox is the default browser
lockPref("browser.shell.checkDefaultBrowser", false);
lockPref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true);

// Prevent checking if Firefox is the default `mailto:` handler
lockPref("browser.mailto.dualPrompt", false);

// Prevent checking if Firefox is the default PDF viewer
lockPref("browser.shell.checkDefaultPDF", false);
lockPref("browser.shell.checkDefaultPDF.silencedByUser", true);
lockPref("browser.shell.setDefaultPDFHandler.onlyReplaceBrowsers", false);

// Skip Mozilla's `Privacy Notice` and `Terms of Use`
lockPref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 999);
lockPref("datareporting.policy.dataSubmissionPolicyNotifiedTime", "32503679999000");
lockPref("termsofuse.acceptedDate", "32503679999000");
lockPref("termsofuse.acceptedVersion", 999);
lockPref("termsofuse.bypassNotification", true);

/* -----------------------------------------------------------------------------------
   003: TRACKING PROTECTION
   ----------------------------------------------------------------------------------- */

// Abilita eccezioni per evitare problemi minori
lockPref("privacy.trackingprotection.allow_list.convenience.enabled", true);

// Enable ETP Strict
lockPref("browser.contentblocking.category", "strict"); 

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
lockPref("privacy.trackingprotection.allow_list.baseline.enabled", true);
lockPref("privacy.trackingprotection.allow_list.hasMigratedCategoryPrefs", true);

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
lockPref("layout.css.visited_links_enabled", false);

// Disable disk cache
lockPref("browser.cache.disk.enable", false);
lockPref("browser.cache.disk_cache_ssl", true);

// Disable favicons in shortcuts
defaultPref("browser.shell.shortcutFavicons", false);

// Disable logging blocked domains to `about:protections`
defaultPref("browser.contentblocking.database.enabled", false);
defaultPref("browser.contentblocking.cfr-milestone.enabled", false);
defaultPref("browser.contentblocking.cfr-milestone.milestone-shown-time", "999999999");
defaultPref("browser.contentblocking.cfr-milestone.update-interval", 0);
defaultPref("browser.contentblocking.report.privacy_metrics.enabled", false);

// Disable search and form history
lockPref("browser.formfill.enable", false);

// Disable WebRTC history
defaultPref("media.aboutwebrtc.hist.enabled", false);

// Disable window state restoration
defaultPref("browser.restoreWindowState.disabled", true);

// Increase the interval between between Session Store save operations
defaultPref("browser.sessionstore.interval", 1800000);

// Prevent storing unnecessary extra session data
defaultPref("browser.sessionstore.privacy_level", 2);

// Prevent writing media cache (ex. for video streaming) to disk in private windows
lockPref("browser.privatebrowsing.forceMediaMemoryCache", true);

// Remove cached files from browser windows opened with external applications
defaultPref("browser.download.start_downloads_in_tmp_dir", true);
defaultPref("browser.helperApps.deleteTempFileOnExit", true);

/* -----------------------------------------------------------------------------------
   006: DOWNLOADS
   ----------------------------------------------------------------------------------- */

// Block insecure downloads
lockPref("dom.block_download_insecure", true);

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
lockPref("security.OCSP.enabled", 0);
lockPref("security.OCSP.require", false);

// Disable sending background HTTP requests to websites that do not respond quickly to check if they support HTTPS
defaultPref("dom.security.https_only_mode_send_http_background_request", false);

// Disable third-party/OS-level root certificates
lockPref("security.certerrors.mitm.auto_enable_enterprise_roots", false);
lockPref("security.enterprise_roots.enabled", false);

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
lockPref("browser.urlbar.tipShownCount.searchTip_onboard", 999);
lockPref("browser.urlbar.tipShownCount.searchTip_redirect", 999);

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
lockPref("network.trr.uri", "https://dns.quad9.net/dns-query");

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

// Enable DoH without fallback by default
defaultPref("network.trr.mode", 3);

// Fix IPv6 connectivity when DoH is enabled
defaultPref("network.dns.preferIPv6", true);

// Prevent bypassing DoH for /etc/HOSTS entries by default
defaultPref("network.trr.exclude-etc-hosts", false);

// Prioritize HTTP/3
defaultPref("network.trr.allow_default_http3_first", true);
defaultPref("network.trr.force_http3_first", true);

/* -----------------------------------------------------------------------------------
   011: PROXIES
   ----------------------------------------------------------------------------------- */

// Prevent Firefox from automatically using the system's proxy configuration by default
lockPref("network.proxy.type", 0);

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

// Block media autoplay by default
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

// Enable click to play UI for certain CSS skins by default
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

/// Disable add-on sideloading
defaultPref("extensions.autoDisableScopes", 15);
defaultPref("extensions.enabledScopes", 5);
defaultPref("extensions.installDistroAddons", false);
defaultPref("extensions.sideloadScopes", 0);

// Disable the AMO Abuse Report API
defaultPref("extensions.addonAbuseReport.url", "");

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

// Only allow installation and updates of extensions using Firefox's built-in certificates by default
defaultPref("extensions.install.requireBuiltInCerts", true);
defaultPref("extensions.update.requireBuiltInCerts", true);

// Prevent automatically granting MV3 extensions optional host permissions by default
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

// Block websites from prompting to access geolocation by default
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

// Show sidebar by default when viewing PDFs
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

// Show advanced details on pages blocked by Safe Browsing by default
defaultPref("browser.xul.error_pages.show_safe_browsing_details_on_load", true);

/* -----------------------------------------------------------------------------------
   022: PRIVACY + SECURITY
   ----------------------------------------------------------------------------------- */

// Block background/hidden extension pages from opening file pickers
defaultPref("browser.disable_pickers_in_hidden_extension_pages", true);

// Disable Accessibility Services
defaultPref("accessibility.force_disabled", 1);

// Disable automatic updates for OpenSearch engines
defaultPref("browser.search.update", false);

// Disable Battery API
defaultPref("dom.battery.enabled", false);

// Disable Beacon API (Navigator.sendBeacon)
defaultPref("beacon.enabled", false);

// Disable Content Analysis SDK
lockPref("browser.contentanalysis.default_result", 0);
lockPref("browser.contentanalysis.enabled", false);
lockPref("browser.contentanalysis.interception_point.clipboard.enabled", false);
lockPref("browser.contentanalysis.interception_point.drag_and_drop.enabled", false);
lockPref("browser.contentanalysis.interception_point.file_upload.enabled", false);
lockPref("browser.contentanalysis.interception_point.print.enabled", false);
lockPref("browser.contentanalysis.max_connections", 0);
lockPref("browser.contentanalysis.show_blocked_result", true);
lockPref("browser.contentanalysis.silent_notifications", false);

// Disable Native Messaging
defaultPref("webextensions.native-messaging.max-input-message-bytes", 0);
defaultPref("webextensions.native-messaging.max-output-message-bytes", 0);
lockPref("webextensions.native-messaging.max-input-message-bytes.default", 1048576);
lockPref("webextensions.native-messaging.max-output-message-bytes.default", 2147483647);
defaultPref("widget.use-xdg-desktop-portal.native-messaging", 0); // [LINUX]

// Disable Reporting API
defaultPref("dom.reporting.enabled", false);
defaultPref("dom.reporting.header.enabled", false);

// Disable tab hover previews by default
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
lockPref("privacy.userContext.enabled", true);
lockPref("privacy.userContext.ui.enabled", true);

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

// Enable Origin-keyed agent clustering by default
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
lockPref("general.config.sandbox_enabled", true);

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

// Block websites from prompting to display notifications by default
defaultPref("permissions.default.desktop-notification", 2);

// Disable captive portal detection and connectivity checks
defaultPref("network.captive-portal-service.enabled", false);
defaultPref("network.connectivity-service.DNSv4.domain", "");
defaultPref("network.connectivity-service.DNSv6.domain", "");
defaultPref("network.connectivity-service.enabled", false);

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




/* ----------------------------------------------------------------------------------- */

// [0802] Disabilita suggerimenti sponsorizzati
lockPref("browser.urlbar.quicksuggest.enabled", false);
lockPref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
lockPref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// [0806] Disabilita determinate categorie di suggerimenti
defaultPref("browser.urlbar.addons.featureGate", false); // Estensioni
defaultPref("browser.urlbar.amp.featureGate", false); // adMarketplace
defaultPref("browser.urlbar.importantDates.featureGate", false); // Festività e ricorrenze
defaultPref("browser.urlbar.market.featureGate", false); // Shopping/Mercati
defaultPref("browser.urlbar.mdn.featureGate", false); // Strumento per sviluppatori
defaultPref("browser.urlbar.weather.featureGate", false); // Meteo
defaultPref("browser.urlbar.wikipedia.featureGate", false); // Anteprime dirette da Wikipedia
defaultPref("browser.urlbar.yelp.featureGate", false); // Yelp (recensioni di ristoranti e locali)
defaultPref("browser.urlbar.yelpRealtime.featureGate", false); // Yelp Realtime (aggiornamenti live su orari e affollamento)

/* -----------------------------------------------------------------------------------
   [0100] AVVIO
   ----------------------------------------------------------------------------------- */

// [0000] Disabilita gli avvisi quando si accede ad `about:config`
lockPref("browser.aboutConfig.showWarning", false);

// [0102] Ripristina sessione precedente
defaultPref("browser.startup.page", 3);

// [0105] Disabilita contenuti sponsorizzati nella home page di Firefox
lockPref("browser.newtabpage.activity-stream.showSponsored", false);
lockPref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
lockPref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

// [0106] clear default topsites
lockPref("browser.newtabpage.activity-stream.default.sites", "");

// [PF] Nasconde il logo di Firefox dalla pagina iniziale
defaultPref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);

// [RF] Mantenere il vecchio stile per la nuova scheda
defaultPref("browser.newtabpage.activity-stream.nova.enabled", false);

// [RF] Blocca il passaggio automatico dalla barra di ricerca a quella degli indirizzi
defaultPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// [RF] Imposta i siti preferiti nella pagina iniziale
defaultPref("browser.newtabpage.pinned", "[{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://it.wikipedia.org/wiki/Pagina_principale\",\"label\":\"Wikipedia\"},{\"url\":\"https://github.com/\",\"label\":\"GitHub\"},{\"url\":\"https://www.diretta.it/\",\"label\":\"Diretta\"}]");

// [RF] Imposta sfondo
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.wallpaper", "dark-landscape");

// [RF] Widgets
defaultPref("browser.newtabpage.activity-stream.widgets.system.enabled", true); // abilita i widgets
defaultPref("browser.newtabpage.activity-stream.widgets.system.lists.enabled", true); // abilita Task list
defaultPref("browser.newtabpage.activity-stream.widgets.system.focusTimer.enabled", true); // abilita Timer
defaultPref("browser.newtabpage.activity-stream.widgets.focusTimer.showSystemNotifications", true); // abilita notifiche Timer
lockPref("browser.newtabpage.activity-stream.system.showWeather", false); // disabilita Meteo (non funzionante)

/* -----------------------------------------------------------------------------------
   [0300] RACCOLTA DATI
   ----------------------------------------------------------------------------------- */

// [0335] Blocca telemetria nella home page di Firefox
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);

// [0360] Disabilita Captive Portal
defaultPref("captivedetect.canonicalURL", "");
defaultPref("network.captive-portal-service.enabled", false);

// [0361] Disabilita controlli connettività
defaultPref("network.connectivity-service.enabled", false);



// [1272] Mostra informazioni dettagliate sulle pagine di errore
lockPref("browser.xul.error_pages.expert_bad_cert", true);

/* -----------------------------------------------------------------------------------
   [2400] DOM (DOCUMENT OBJECT MODEL)
   ----------------------------------------------------------------------------------- */

// [2402] Impedisci agli script di spostare e ridimensionare le finestre
defaultPref("dom.disable_window_move_resize", true);

/* -----------------------------------------------------------------------------------
   [2600] MISCELLANEA
   ----------------------------------------------------------------------------------- */

// [2616] Rimuove permessi speciali per domini Mozilla
lockPref("permissions.manager.defaultsUrl", "");

// [2620] Disabilita l'esecuzione di JavaScript all'interno dei PDF
lockPref("pdfjs.disabled", false);
lockPref("pdfjs.enableScripting", false);

// [2624] Non aprire URL negli appunti cliccando con il tasto centrale sul tasto per aprire schede
lockPref("browser.tabs.searchclipboardfor.middleclick", false);

// [2630] Disabilita content analysis
lockPref("browser.contentanalysis.enabled", false);
lockPref("browser.contentanalysis.default_result", 0);

// [PF] Disabilita ricerca aggiornamenti
lockPref("app.update.auto", false); // [LINUX]

/* -----------------------------------------------------------------------------------
   [4000] FINGERPRINTING
   ----------------------------------------------------------------------------------- */

// [4503] Disabilita mozAddonManager Web API
lockPref("privacy.resistFingerprinting.block_mozAddonManager", true);

// [4512] Forza apertura link in una nuova scheda
lockPref("browser.link.open_newwindow", 3);

// [4513] Imponi sempre apertura in una nuova scheda
lockPref("browser.link.open_newwindow.restriction", 0);

// [SF] Disabilita service workers durante navigazione anonima
defaultPref("dom.serviceWorkers.privateBrowsing.enabled", false);

/* -----------------------------------------------------------------------------------
   [5000] SICUREZZA
   ----------------------------------------------------------------------------------- */

// [5017] Disabilita Form Autofill
lockPref("extensions.formautofill.addresses.enabled", false);
lockPref("extensions.formautofill.creditCards.enabled", false);

// [5018] Limita gli eventi che possono causare pop-up
defaultPref("dom.popup_allowed_events", "click dblclick");


defaultPref("devtools.accessibility.enabled", false);

// [SF] Mitigazione attacchi FROST
lockPref("dom.fs.enabled", false);
lockPref("dom.fs.writable_file_stream.enabled", false);
lockPref("app.update.BITS.enabled", false); // [WINDOWS]

/* -----------------------------------------------------------------------------------
   INTERFACCIA
   ----------------------------------------------------------------------------------- */

// [PF] Disabilita transizione schermo intero
lockPref("full-screen-api.transition-duration.enter", "0 0");
lockPref("full-screen-api.transition-duration.leave", "0 0");

// [PF] Disabilita avviso schermo intero
lockPref("full-screen-api.warning.delay", -1);
lockPref("full-screen-api.warning.timeout", 0);

// [PF] Abilita la personalizzazione dell'interfaccia utente tramite CSS
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// [PF] Aggiunge la voce "Visualizza informazioni immagine" al menu contestuale
defaultPref("browser.menu.showViewImageInfo", true);

// [PF] Abilita alcune funzionalità per la gestione dei profili
defaultPref("browser.profiles.enabled", true);

// [PF] Impedisce al puntatore del mouse di nascondersi mentre si digita
defaultPref("widget.gtk.hide-pointer-while-typing.enabled", false); // [LINUX]

// [RF] Blocca il pop-up automatico del traduttore
defaultPref("browser.translations.automaticallyPopup", false);

// [RF] Blocca gli errori fastidiosi dell'API di sintesi vocale
defaultPref("media.webspeech.synth.dont_notify_on_error", true); // [Nascosta]

// [RF] Disabilita l'indicatore globale WebRTC
lockPref("privacy.webrtc.hideGlobalIndicator", true);

// [RF] Nascondi la barra del titolo
defaultPref("browser.tabs.inTitlebar", 1);

// [RF] Rende visibile l'interfaccia per il backup delle preferenze
defaultPref("browser.backup.preferences.ui.enabled", true);

// [RF] Abilita il pulsante Picture-in-Picture su tutti i video
defaultPref("media.videocontrols.picture-in-picture.respect-disablePictureInPicture", false);
defaultPref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);

// [RF] Abilita il nuovo design della barra laterale
defaultPref("sidebar.revamp", true);

// [RF] Abilita autoscrolling
defaultPref("general.autoScroll", true);

// [RF] Mostra maggiori informazioni `about:processes`
defaultPref("toolkit.aboutProcesses.showAllSubframes", true);
defaultPref("toolkit.aboutProcesses.showThreads", true);

// [RF] Mostra opzioni stampa avanzate
defaultPref("print.more-settings.open", true);
defaultPref("print.show_page_setup_menu", true);

/* -----------------------------------------------------------------------------------
   GESTIONE SCHEDE
   ----------------------------------------------------------------------------------- */

// [PF] Apri i segnalibri in una nuova scheda
defaultPref("browser.tabs.loadBookmarksInTabs", true);

// [PF] Forza i link esterni ad aprirsi in una nuova scheda
defaultPref("browser.link.open_newwindow.override.external", 3);

// [PF] Apri le nuove schede in background
defaultPref("browser.tabs.loadDivertedInBackground", true);

// [PF] Apri i segnalibri in background
defaultPref("browser.tabs.loadBookmarksInBackground", true);

// [PF] Impedisce la chiusura automatica del menu dei segnalibri
defaultPref("browser.bookmarks.openInTabClosesMenu", false);

// [PF] Apri le nuove schede subito dopo quella attuale
defaultPref("browser.tabs.insertAfterCurrent", true);

// [PF] Lascia il browser aperto alla chiusura dell'ultima scheda
defaultPref("browser.tabs.closeWindowWithLastTab", false);

// [RF] Abilita note per le schede
defaultPref("browser.tabs.notes.enabled", true);

/* -----------------------------------------------------------------------------------
   FINE
   ----------------------------------------------------------------------------------- */

lockPref("rischio.fox", "150.27");
