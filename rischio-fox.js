
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
   002: MOZILLA
   003: TRACKING
   004: FINGERPRINTING
   005: TRACCE
*/

/* -----------------------------------------------------------------------------------
   [001] TELEMETRIA
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
   [002] MOZILLA
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
lockPref("browser.translations.mostRecentTargetLanguages", "en-US");
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
lockPref("doh-rollout.trrRace.canonicalDomain", "");
lockPref("doh-rollout.trrRace.complete", true);
lockPref("doh-rollout.trrRace.enabled", false);
lockPref("doh-rollout.trrRace.popularDomains", "");
lockPref("doh-rollout.trrRace.randomSubdomainCount", 0);

// Disable 'Essential Domains Fallback'
lockPref("network.essential_domains_fallback", false);

// Disable "Feature Tours"
lockPref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");
lockPref("browser.newtab.feature-tour", "{\"screen\":\"\",\"complete\":true}");
lockPref("browser.pdfjs.feature-tour", "{\"screen\":\"\",\"complete\":true}");

// Disable fetching Firefox Relay's "allowlist" and "denylist"
lockPref("signon.firefoxRelay.allowListRemoteSettingsCollection", "");
lockPref("signon.firefoxRelay.denyListRemoteSettingsCollection", "");

// Disable fetching Password Manager rules remotely by default
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
   [003] TRACKING
   ----------------------------------------------------------------------------------- */

// Abilita eccezioni per evitare problemi minori
lockPref("privacy.trackingprotection.allow_list.convenience.enabled", true);

// Enable ETP Strict
lockPref("browser.contentblocking.category", "strict"); 

// Block harmful add-on URLs
lockPref("privacy.trackingprotection.harmfuladdon.enabled", true); // [DEFAULT - Desktop Firefox] https://searchfox.org/firefox-main/rev/93aad2a6615f670b1279c229dd37f7397236131a/browser/app/profile/firefox.js#2434

// Block known consent managers (CMPs)
lockPref("privacy.trackingprotection.consentmanager.annotate_channels", true); // [DEFAULT]
lockPref("privacy.trackingprotection.consentmanager.skip.enabled", false); // [DEFAULT]
lockPref("privacy.trackingprotection.consentmanager.skip.pbmode.enabled", false);

// Block known cryptominers
lockPref("privacy.trackingprotection.cryptomining.enabled", true); 

// Block known email trackers
lockPref("privacy.trackingprotection.emailtracking.enabled", true);
lockPref("privacy.trackingprotection.emailtracking.pbmode.enabled", true);

// Block known fingerprinters
lockPref("privacy.trackingprotection.antifraud.annotate_channels", true);
lockPref("privacy.trackingprotection.antifraud.skip.enabled", false);
lockPref("privacy.trackingprotection.antifraud.skip.pbmode.enabled", false);
lockPref("privacy.trackingprotection.fingerprinting.enabled", true);

// Block known social trackers
lockPref("privacy.trackingprotection.socialtracking.enabled", true);

// Block known trackers
lockPref("privacy.trackingprotection.annotate_channels", true);
lockPref("privacy.trackingprotection.enabled", true);
lockPref("privacy.trackingprotection.pbmode.enabled", true);

// Block known trackers using the `strict` (Level 2) list
lockPref("privacy.annotate_channels.strict_list.enabled", true);
lockPref("privacy.annotate_channels.strict_list.pbmode.enabled", true);

// Block known tracking cookies
lockPref("network.cookie.cookieBehavior.trackerCookieBlocking", true);
lockPref("privacy.socialtracking.block_cookies.enabled", true);

// Enable Bounce Tracking Protection
lockPref("privacy.bounceTrackingProtection.mode", 1);

// Enable Query Parameter Stripping
lockPref("privacy.query_stripping.enabled", true);
lockPref("privacy.query_stripping.enabled.pbmode", true);
lockPref("privacy.query_stripping.redirect", true);

// Enable SmartBlock and Web Compatibility interventions by default
lockPref("extensions.webcompat.enable_interventions", true);
lockPref("extensions.webcompat.enable_shims", true);
lockPref("extensions.webcompat.perform_injections", true);
lockPref("extensions.webcompat.perform_ua_overrides", true);
lockPref("extensions.webcompat.smartblockEmbeds.enabled", true);
lockPref("extensions.pictureinpicture.enable_picture_in_picture_overrides", true);

// State Partitioning (Total Cookie Protection / Isolamento Risorse)
lockPref("network.fetch.cache_partition_cross_origin", true);
lockPref("privacy.partition.bloburl_per_partition_key", true);
lockPref("privacy.partition.serviceWorkers", true);

// Enable Suspected Fingerprinters Protection (FPP)
lockPref("privacy.fingerprintingProtection", true);
lockPref("privacy.fingerprintingProtection.pbmode", true);
lockPref("privacy.reduceTimerPrecision", true);
lockPref("privacy.resistFingerprinting", false);
lockPref("privacy.resistFingerprinting.pbmode", false);

// Enable TCP/dFPI
lockPref("network.cookie.cookieBehavior", 5);
lockPref("network.cookie.cookieBehavior.pbmode", 5);
lockPref("network.cookie.cookieBehavior.optInPartitioning", true);
lockPref("network.cookie.cookieBehavior.optInPartitioning.pbmode", true);

// Ignore less restricted referer policies (than the default)
lockPref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
lockPref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode", true);
lockPref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode.top_navigation", true);
lockPref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true);

// Enable exceptions required to avoid major breakage by default
lockPref("privacy.trackingprotection.allow_list.baseline.enabled", true);
lockPref("privacy.trackingprotection.allow_list.hasMigratedCategoryPrefs", true);

// Lower the network priority of known trackers (if not blocked for whatever reason...)
lockPref("privacy.trackingprotection.lower_network_priority", true);

// Purge first-party tracking cookies
lockPref("privacy.purge_trackers.enabled", true);

/* -----------------------------------------------------------------------------------
   [004] FINGERPRINTING
   ----------------------------------------------------------------------------------- */

// Unnecessarily fingerprintable
clearPref("dom.webmidi.enabled");
clearPref("geo.enabled");

// Always load fonts bundled with Firefox
lockPref("gfx.bundled-fonts.activate", 1);

// Disable the ability to switch locales without requiring a restart
lockPref("intl.multilingual.liveReload", false);
lockPref("intl.multilingual.liveReloadBidirectional", false);

// Disable failIfMajorPerformanceCaveat in WebGL contexts
lockPref("webgl.disable-fail-if-major-performance-caveat", true); 

// Disable VP9 Benchmark
lockPref("media.benchmark.vp9.threshold", 0);

// Do not use the theme's toolbar color scheme for in-content pages by default
lockPref("browser.theme.unified-color-scheme", false);

// Enable fdlibm for Math.sin, Math.cos, and Math.tan
lockPref("javascript.options.use_fdlibm_for_sin_cos_tan", true);

// Limit font visibility to base system fonts + fonts from optional language packs
lockPref("layout.css.font-visibility", 2);

// Prevent enumeration of media devices
lockPref("media.devices.enumerate.legacy.enabled", false);

// Prevent exposing WebGL Renderer Info
lockPref("webgl.enable-renderer-query", false);
lockPref("webgl.override-unmasked-renderer", "Mozilla");
lockPref("webgl.override-unmasked-vendor", "Mozilla");
lockPref("webgl.sanitize-unmasked-renderer", false);

// Prevent pre-allocating content processes
lockPref("dom.ipc.processPrelaunch.enabled", false);
lockPref("dom.ipc.processPrelaunch.fission.number", 0);

// Prevent using system accent colors
lockPref("widget.non-native-theme.use-theme-accent", false);

// Prevent using system colors
lockPref("browser.display.document_color_use", 1);
lockPref("ui.use_standins_for_native_colors", true);

// Prompt to spoof locale to en-US
lockPref("privacy.spoof_english", 0);

// Reset the fingerprinting randomization key daily (in addition to per-session/when the browser restarts)
lockPref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
lockPref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);

// Round window sizes
lockPref("browser.startup.blankWindow", false);
lockPref("privacy.window.maxInnerHeight", 900);
lockPref("privacy.window.maxInnerWidth", 1600);
lockPref("privacy.resistFingerprinting.skipEarlyBlankFirstPaint", true);

// Set a fixed temporary storage limit
lockPref("dom.quotaManager.temporaryStorage.fixedLimit", 52428800);

// Set target video resolution to 1080p
lockPref("privacy.resistFingerprinting.target_video_res", 1080);

// Set zoom levels on a per-site basis
lockPref("browser.zoom.siteSpecific", true);

/* -----------------------------------------------------------------------------------
   [005] TRACCE
   ----------------------------------------------------------------------------------- */

// Decrease the number of tabs saved in Session Store
lockPref("browser.sessionstore.max_tabs_undo", 7);

// Disable back/forward cache (bfcache)
lockPref("browser.sessionhistory.max_total_viewers", 0);
lockPref("fission.bfcacheInParent", false);

// Disable collection/generation of background thumbnails
lockPref("browser.pagethumbnails.capturing_disabled", true);

// Disable collection/generation of wireframes
lockPref("browser.history.collectWireframes", false);

// Disable coloring visited links
lockPref("layout.css.visited_links_enabled", false);

// Disable disk cache
lockPref("browser.cache.disk.enable", false);
lockPref("browser.cache.disk_cache_ssl", true);

// Disable favicons in shortcuts
lockPref("browser.shell.shortcutFavicons", false);

// Disable LaterRun
lockPref("browser.laterrun.enabled", false);

// Disable logging blocked domains to `about:protections`
lockPref("browser.contentblocking.database.enabled", false);
lockPref("browser.contentblocking.cfr-milestone.enabled", false);
lockPref("browser.contentblocking.cfr-milestone.milestone-shown-time", "999999999");
lockPref("browser.contentblocking.cfr-milestone.update-interval", 0);
lockPref("browser.contentblocking.report.privacy_metrics.enabled", false);

// Disable search and form history
lockPref("browser.formfill.enable", false);

// Disable WebRTC history
lockPref("media.aboutwebrtc.hist.enabled", false);

// Disable window state restoration
lockPref("browser.restoreWindowState.disabled", true);

// Increase the interval between between Session Store save operations
lockPref("browser.sessionstore.interval", 1800000);

// Prevent persistence of TLS session resumption tokens across restarts
lockPref("network.ssl_tokens_cache_persistence", false);

// Prevent storing unnecessary extra session data
lockPref("browser.sessionstore.privacy_level", 2);

// Prevent writing media cache (ex. for video streaming) to disk in private windows
lockPref("browser.privatebrowsing.forceMediaMemoryCache", true);

// Remove cached files from browser windows opened with external applications
lockPref("browser.download.start_downloads_in_tmp_dir", true);
lockPref("browser.helperApps.deleteTempFileOnExit", true);

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
   [0200] GEOLOCALIZZAZIONE
   ----------------------------------------------------------------------------------- */

// [0202] Disabilita servizio di geolocalizzazione del sistema
defaultPref("geo.provider.use_geoclue", false); // [LINUX]

// [SF] Imposta BeaconDB come provider di geolocalizzazione di rete predefinito
defaultPref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");

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

/* -----------------------------------------------------------------------------------
   [0400] SAFE BROWSING
   ----------------------------------------------------------------------------------- */

// [0401] Safe Browsing
lockPref("browser.safebrowsing.malware.enabled", true);
lockPref("browser.safebrowsing.phishing.enabled", true);

// [0402] Blocca download pericolosi
lockPref("browser.safebrowsing.downloads.enabled", true);

// [0403] Disabilita controlli remoti
lockPref("browser.safebrowsing.downloads.remote.enabled", false);
lockPref("browser.safebrowsing.downloads.remote.url", "");

// [0404] Blocca download di software potenzialmente indesiderato
lockPref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", true);
lockPref("browser.safebrowsing.downloads.remote.block_uncommon", true);

/* -----------------------------------------------------------------------------------
   [0600] CONNESSIONI IMPLICITE
   ----------------------------------------------------------------------------------- */

// [0601] Disabilita link prefetching
lockPref("network.prefetch-next", false);

// [0602] Disabilita DNS prefetching
lockPref("network.dns.disablePrefetch", true);
lockPref("network.dns.disablePrefetchFromHTTPS", true);

// [0604] Blocca connessioni speculative al passaggio del mouse sui link
lockPref("network.http.speculative-parallel-limit", 0);

// [0605] Blocca connessioni speculative nei segnalibri e nella cronologia
lockPref("browser.places.speculativeConnect.enabled", false);

// [0610] Blocca "Hyperlink Auditing" (click tracking)
lockPref("browser.send_pings", false);

// [RF] Disabilita Preconnect (potrebbe bypassare la protezione di uBlock!)
// https://github.com/uBlockOrigin/uBlock-issues/issues/2913
lockPref("network.preconnect", false);

/* -----------------------------------------------------------------------------------
   [0700] DNS / DoH / PROXY / SOCKS
   ----------------------------------------------------------------------------------- */

// [0702] Usa il proxy per la risoluzione DNS remota
lockPref("network.proxy.socks_remote_dns", true);

// [0703] Disabilita i percorsi UNC di Windows per prevenire il rischio di perdite di dati
lockPref("network.file.disable_unc_paths", true);

// [0704] Disabilita GIO (Gnome Input/Output)
lockPref("network.gio.supported-protocols", "");

// [0705] Impedisci il failover automatico a connessioni dirette
lockPref("network.proxy.failover_direct", false);

// [0710] Abilita DNS-over-HTTPS (DoH) con protezione massima
lockPref("network.trr.mode", 3);

// [0712] Imposta Quad9 come DoH provider
lockPref("network.trr.uri", "https://dns.quad9.net/dns-query");

/* -----------------------------------------------------------------------------------
   [0800] BARRE DI RICERCA
   ----------------------------------------------------------------------------------- */

// [0801] Disabilita connessioni speculative nella barra degli indirizzi
lockPref("browser.urlbar.speculativeConnect.enabled", false);

// [0802] Disabilita suggerimenti sponsorizzati
lockPref("browser.urlbar.quicksuggest.enabled", false);
lockPref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
lockPref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// [0805] Disabilita suggerimenti ricerche di tendenza
defaultPref("browser.urlbar.trending.featureGate", false);

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

// [0807] Disabilita suggerimenti dagli appunti
lockPref("browser.urlbar.clipboard.featureGate", false);

// [0808] Disabilita ricerche recenti
lockPref("browser.urlbar.recentsearches.featureGate", false);

// [0810] Disabilita la cronologia di ricerca e dei moduli
defaultPref("browser.formfill.enable", false);

// [0820] Disabilita colorazione link visitati per prevenire "history sniffing"
defaultPref("layout.css.visited_links_enabled", false);

// [0830] Abilita la possibilità di usare un motore di ricerca diverso in finestre normali e private
defaultPref("browser.search.separatePrivateDefault", true);
lockPref("browser.search.separatePrivateDefault.ui.enabled", true);

/* -----------------------------------------------------------------------------------
   [0900] GESTIONE CREDENZIALI
   ----------------------------------------------------------------------------------- */

// [0903] Disabilita Autofill per maggiore sicurezza
lockPref("signon.autofillForms", false);

// [0904] Disabilita la cattura credenziali al di fuori dei form di login
lockPref("signon.formlessCapture.enabled", false);

// [0905] Impedisci che le risorse interne aprano dialoghi di autenticazione HTTP
lockPref("network.auth.subresource-http-auth-allow", 1);

/* -----------------------------------------------------------------------------------
   [1200] CONNESSIONI SICURE
   ----------------------------------------------------------------------------------- */

// [1201] Richiedi negoziazione sicura SSL
lockPref("security.ssl.require_safe_negotiation", true);

// [1206] Disabilita TLS 1.3 0-RTT
lockPref("security.tls.enable_0rtt_data", false);

// [1223] Fornisce una protezione extra bloccando completamente le connessioni in caso di mancata corrispondenza del certificato
lockPref("security.cert_pinning.enforcement_level", 2);

// [1244] Abilita HTTPS-Only
lockPref("dom.security.https_only_mode", true);
lockPref("dom.security.https_only_mode_pbm", true);

// [1246] Disabilita l'invio di richieste HTTP in background
lockPref("dom.security.https_only_mode_send_http_background_request", false);

// [1270] Mostra avviso connessione insicure
lockPref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// [1272] Mostra informazioni dettagliate sulle pagine di errore
lockPref("browser.xul.error_pages.expert_bad_cert", true);

/* -----------------------------------------------------------------------------------
   [1600] REFERERS
   ----------------------------------------------------------------------------------- */

// [1602] Rimuovi i percorsi e le query dai referrer tra siti diversi
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2);

/* -----------------------------------------------------------------------------------
   [1700] CONTAINERS
   ----------------------------------------------------------------------------------- */

// [1701] Abilita Container
lockPref("privacy.userContext.enabled", true);
lockPref("privacy.userContext.ui.enabled", true);

/* -----------------------------------------------------------------------------------
   [2000] MEDIA
   ----------------------------------------------------------------------------------- */

// [2002] Previene i WebRTC IP leaks forzando l'uso del proxy
defaultPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// [2003] Mitiga il WebRTC IP Leak
defaultPref("media.peerconnection.ice.default_address_only", true);

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

// [2619] Mostra sempre il Punycode
lockPref("network.IDN_show_punycode", true);

// [2620] Disabilita l'esecuzione di JavaScript all'interno dei PDF
lockPref("pdfjs.disabled", false);
lockPref("pdfjs.enableScripting", false);

// [2624] Non aprire URL negli appunti cliccando con il tasto centrale sul tasto per aprire schede
lockPref("browser.tabs.searchclipboardfor.middleclick", false);

// [2630] Disabilita content analysis
lockPref("browser.contentanalysis.enabled", false);
lockPref("browser.contentanalysis.default_result", 0);

// [2635] Isola le risorse iniettate dalle estensioni
defaultPref("privacy.antitracking.isolateContentScriptResources", true);

// [2640] Disabilita Content Security Policy
lockPref("security.csp.reporting.enabled", false);

// [2651] Chiedi sempre dove salvare i download
lockPref("browser.download.useDownloadDir", false);

// [2652] Impedisci apertura automatica finestra download
lockPref("browser.download.alwaysOpenPanel", false);

// [2653] Non aggiungere i file scaricati ai documenti recenti di sistema
lockPref("browser.download.manager.addToRecentDocs", false);

// [2654] Chiedi sempre come aprire nuovi tipi di file
lockPref("browser.download.always_ask_before_handling_new_types", true);

// [2660] Limita cartelle consentite per le estensioni
lockPref("extensions.enabledScopes", 5); // [Nascosta]
lockPref("extensions.autoDisableScopes", 15);

// [2661] Mostra sempre prompt di installazione
lockPref("extensions.postDownloadThirdPartyPrompt", false);

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

// [5012] Disabilita l'autocompletamento degli URL
defaultPref("browser.urlbar.autoFill", false);

// [5017] Disabilita Form Autofill
lockPref("extensions.formautofill.addresses.enabled", false);
lockPref("extensions.formautofill.creditCards.enabled", false);

// [5018] Limita gli eventi che possono causare pop-up
defaultPref("dom.popup_allowed_events", "click dblclick");

// [SF] Disabilita i servizi di accessibilità
defaultPref("accessibility.force_disabled", 1);
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

lockPref("rischio.fox", "150.10");
