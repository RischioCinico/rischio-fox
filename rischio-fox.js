
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
/* permetti sfondi personalizzati */
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.customColor.enabled", true);
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.customWallpaper.enabled", true)

/*** Funzioni ***/
/* Fork Server https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html#fork-server */
defaultPref("dom.ipc.forkserver.enable", true); // [LINUX]

/*** Fastidi ***/
/* mostra sempre controlli picture in picture */
defaultPref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);

/*** 000 ABOUT:CONFIG ***/

// Disable annoying warnings when attempting to access the `about:config`
defaultPref("browser.aboutConfig.showWarning", false);
// Ensure that the `about:config` is always enabled
lockPref("general.aboutConfig.enable", true);
// Ensure our policies aren't overriden...
lockPref("browser.policies.perUserDir", false); // [LINUX]

/*** 001 DATA COLLECTION ***/

// Block domains
lockPref("network.dns.localDomains", "250analytics.com,a.omappapi.com,activity-stream-icons.services.mozilla.com,ads.allizom.org,ads.mozilla.org,ads.nonprod.webservices.mozgcp.net,ads.prod.webservices.mozgcp.net,ads-img.mozilla.org,analytics.getpocket.com,analytics.google.com,analytics.withgoogle.com,anf1.fuzzing.mozilla.org,anonymco.com,api.divviup.org,asan-nightly-frontend-elb-1348905149.us-east-2.elb.amazonaws.com,braze.com,contile.services.mozilla.com,contile-images.services.mozilla.com,classify-client.nonprod.webservices.mozgcp.net,classify-client.prod.webservices.mozgcp.net,classify-client.services.mozilla.com,crash-reports.allizom.org,crash-reports.mozilla.com,crash-reports-xpsp2.mozilla.com,crash-stacks.mozilla.com,crash-stats.allizom.org,crash-stats.mozilla.com,crash-stats.mozilla.org,dap.services.mozilla.com,dap.nonprod.webservices.mozgcp.net,dap.prod.webservices.mozgcp.net,dap-09-3.api.divviup.org,data.mozilla.com,data-ingestion.prod.dataops.mozgcp.net,dataops.mozgcp.net,dataservices.mozgcp.net,debug-ping-preview.firebaseapp.com,discovery.addons.allizom.org,discovery.addons.mozilla.org,discovery.addons-dev.allizom.org,divviup.org,download-stats.mozilla.org,download-stats.r53-2.services.mozilla.com,experimenter.services.mozilla.com,experimenter.nonprod.webservices.mozgcp.net,experimenter.prod.webservices.mozgcp.net,fhr.data.mozilla.com,fhr.r53-2.services.mozilla.com,firefox-android-home-recommendations.getpocket.com,firefox-dns-perf-test.net,fuzzing.mozilla.org,google-analytics.com,google-analytics-cn.com,googleanalytics.com,googlesyndication.com,googlesyndication-cn.com,googletagmanager.com,googletagmanager-cn.com,googletagservices.com,googletagservices-cn.com,improving.duckduckgo.com,incoming.glean.example.com,incoming.telemetry.mozilla.org,incoming.thunderbird.net,incoming-telemetry.thunderbird.net,ingestion-edge.prod.dataops.mozgcp.net,location.services.mozilla.com,locprod1-elb-eu-west-1.prod.mozaws.net,locprod2-elb-us-west-2.prod.mozaws.net,metrics-content.duckduckgo.com,new-sentry.gitlab.net,nonprod.classify-client.nonprod.webservices.mozgcp.net,normandy.cdn.mozilla.net,normandy.nonprod.cloudops.mozgcp.net,normandy.prod.cloudops.mozgcp.net,normandy-cdn.services.mozilla.com,omappapi.com,pagead2.googlesyndication.com,pipeline-incoming-prod-elb-149169523.us-west-2.elb.amazonaws.com,prod.ads.prod.webservices.mozgcp.net,prod.classify-client.prod.webservices.mozgcp.net,prod.dap.prod.webservices.mozgcp.net,prod.data-ingestion.prod.dataops.mozgcp.net,prod.dataops.mozgcp.net,prod.experimenter.prod.webservices.mozgcp.net,prod.ingestion-edge.prod.dataops.mozgcp.net,prod.sentry.prod.cloudops.mozgcp.net,prod-classifyclient.normandy.prod.cloudops.mozgcp.net,sdk.iad-05.braze.com,search.r53-2.services.mozilla.com,search.services.mozilla.com,self-repair.mozilla.org,self-repair.r53-2.services.mozilla.com,sentry.gitlab.net,sentry.io,sentry.nonprod.cloudops.mozgcp.net,sentry.prod.cloudops.mozgcp.net,sentry.prod.mozaws.net,sitereview.zscaler.com,snippets.allizom.org,snippets.cdn.mozilla.net,snippets.mozilla.com,snippets-prod.frankfurt.moz.works,snippets-prod.moz.works,snippets-prod.oregon-b.moz.works,snippets-stage.moz.works,snippets-stage.oregon-b.moz.works,snowplow.trx.gitlab.net,snowplowalb-1011729428.us-east-1.elb.amazonaws.com,snowplowprd.trx.gitlab.net,snowplowprdnlb-1490493263.us-east-2.elb.amazonaws.com,socorro.nonprod.webservices.mozgcp.net,socorro.prod.webservices.mozgcp.net,socorro-collector.services.mozilla.com,socorro-webapp-allizom.stage.mozaws.net,socorro-webapp.services.mozilla.com,spocs.getpocket.com,spocs.getpocket.dev,spocs.mozilla.net,ssl.google-analytics.com,ssl-google-analytics.l.google.com,stage.sentry.nonprod.cloudops.mozgcp.net,start.fedoraproject.org,start.thunderbird.net,start.ubuntu.com,start-stage.thunderbird.net,survey.mozilla.com,tagmanager.google.com,talkback.mozilla.org,talkback-public.mozilla.org,talkback-reports.mozilla.org,telemetry-coverage.mozilla.org,telemetry-coverage.r53-2.services.mozilla.com,telemetry-experiment.cdn.mozilla.net,telemetry-incoming.r53-2.services.mozilla.com,telemetry-incoming-a.r53-2.services.mozilla.com,telemetry-incoming-b.r53-2.services.mozilla.com,telemetry-prod-1054754349.us-east-1.elb.amazonaws.com,tiles-cdn.prod.ads.prod.webservices.mozgcp.net,updates.thunderbird.net,updates-stage.thunderbird.net,use-application-dns.net,vf.startpage.com,widgets.getpocket.com,www.250analytics.com,www.anonymco.com,www.google-analytics.com,www.google-analytics-cn.com,www.googleanalytics.com,www.googlesyndication.com,www.googlesyndication-cn.com,www.googletagmanager.com,www.googletagmanager-cn.com,www.googletagservices.com,www.googletagservices-cn.com,www.sentry.io,www-google-analytics.l.google.com,www-googletagmanager.l.google.com");
// Disable Browser Usage Telemetry metrics
lockPref("browser.engagement.ctrlTab.has-used", true);
lockPref("browser.engagement.downloads-button.has-used", true);
lockPref("browser.engagement.fxa-toolbar-menu-button.has-used", true);
lockPref("browser.engagement.home-button.has-used", true);
lockPref("browser.engagement.library-button.has-used", true);
lockPref("browser.engagement.sidebar-button.has-used", true);
// Disable Coverage
lockPref("toolkit.coverage.enabled", false);
lockPref("toolkit.coverage.endpoint.base", "");
lockPref("toolkit.coverage.log-level", 70);
lockPref("toolkit.coverage.opt-out", true); // Nascosta
lockPref("toolkit.telemetry.coverage.opt-out", true); // Nascosta
// Disable Crash Reporting
lockPref("breakpad.reportURL", "");
lockPref("browser.crashReports.crashPull", false);
lockPref("browser.crashReports.requestedNeverShowAgain", true);
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
lockPref("browser.crashReports.unsubmittedCheck.enabled", false);
lockPref("browser.tabs.crashReporting.includeURL", false);
lockPref("browser.tabs.crashReporting.sendReport", false);
lockPref("toolkit.crashreporter.include_context_heap", false);
// Disable Data Reporting & Telemetry
lockPref("browser.safebrowsing.features.emailtracking.datacollection.update", false); // [Nascosta]
lockPref("captchadetection.actor.enabled", false);
lockPref("captchadetection.hasUnsubmittedData", false); // [Nascosta]
lockPref("captchadetection.loglevel", "Off");
lockPref("datareporting.dau.cachedUsageProfileID", "beefbeef-beef-beef-beef-beeefbeefbee"); // [Nascosta]
lockPref("datareporting.dau.cachedUsageProfileGroupID", "b0bacafe-b0ba-cafe-b0ba-cafeb0bacafe"); // [Nascosta]
lockPref("datareporting.healthreport.uploadEnabled", false);
lockPref("datareporting.policy.dataSubmissionEnabled", false);
lockPref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
lockPref("datareporting.policy.firstRunURL", "");
lockPref("datareporting.usage.uploadEnabled", false);
lockPref("dom.security.unexpected_system_load_telemetry_enabled", false);
lockPref("extensions.dataCollectionPermissions.enabled", false);
lockPref("network.jar.record_failure_reason", false);
lockPref("network.traffic_analyzer.enabled", false);
lockPref("network.trr.confirmation_telemetry_enabled", false);
lockPref("nimbus.telemetry.targetingContextEnabled", false); // [Nascosta]
lockPref("privacy.imageInputTelemetry.enableTestMode", false); // [Nascosta]
lockPref("privacy.trackingprotection.emailtracking.data_collection.enabled", false);
lockPref("telemetry.fog.artifact_build", false);
lockPref("telemetry.fog.test.activity_limit", -1);
lockPref("telemetry.fog.test.inactivity_limit", -1);
lockPref("telemetry.fog.init_on_shutdown", false);
lockPref("telemetry.fog.test.localhost_port", 70000);
lockPref("telemetry.glean.internal.finalInactive", false); // [Nascosta]
lockPref("telemetry.glean.internal.maxPingsPerMinute", 0); // [Nascosta]
lockPref("telemetry.number_of_site_origin.min_interval", 999999999);
lockPref("toolkit.content-background-hang-monitor.disabled", true);
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.bhrPing.enabled", false);
lockPref("toolkit.telemetry.cachedClientID", "c0ffeec0-ffee-c0ff-eec0-ffeec0ffeec0"); // [Nascosta]
lockPref("toolkit.telemetry.cachedProfileGroupID", "decafdec-afde-cafd-ecaf-decafdecafde"); // [Nascosta]
lockPref("toolkit.telemetry.collectInterval", 999999999); // [Nascosta]
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
lockPref("toolkit.telemetry.eventping.maximumFrequency", 999999999); // [Nascosta]
lockPref("toolkit.telemetry.eventping.minimumFrequency", 999999999); // [Nascosta]
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false);
lockPref("toolkit.telemetry.healthping.enabled", false); // [Nascosta]
lockPref("toolkit.telemetry.initDelay", 999999999); // [Nascosta]
lockPref("toolkit.telemetry.log.dump", false); // [Nascosta]
lockPref("toolkit.telemetry.log.level", "Fatal"); // [Nascosta]
lockPref("toolkit.telemetry.minSubsessionLength", 999999999); // [Nascosta]
lockPref("toolkit.telemetry.newProfilePing.delay", 999999999); // [Nascosta]
lockPref("toolkit.telemetry.newProfilePing.enabled", false);
lockPref("toolkit.telemetry.overrideUpdateChannel", "release"); // [Nascosta]
lockPref("toolkit.telemetry.previousBuildID", ""); // [Nascosta]
lockPref("toolkit.telemetry.reportingpolicy.firstRun", false); // [Nascosta]
lockPref("toolkit.telemetry.scheduler.idleTickInterval", 999999999); // [Nascosta]
lockPref("toolkit.telemetry.scheduler.tickInterval", 999999999); // [Nascosta]
lockPref("toolkit.telemetry.send.overrideOfficialCheck", false); // [Nascosta]
lockPref("toolkit.telemetry.server", "data;");
lockPref("toolkit.telemetry.server_owner", "");
lockPref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false);
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false);
lockPref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
lockPref("toolkit.telemetry.testing.disableFuzzingDelay", false); // [Nascosta]
lockPref("toolkit.telemetry.testing.overridePreRelease", false); // [Nascosta]
lockPref("toolkit.telemetry.testing.overrideProductsCheck", false);
lockPref("toolkit.telemetry.testing.suppressPingsender", true); // [Nascosta]
lockPref("toolkit.telemetry.translations.logLevel", "Off");
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.untrustedModulesPing.frequency", 999999999); // [Nascosta]
lockPref("toolkit.telemetry.updatePing.enabled", false);
lockPref("toolkit.telemetry.user_characteristics_ping.current_version", 0);
lockPref("toolkit.telemetry.user_characteristics_ping.last_version_sent", 0);
lockPref("toolkit.telemetry.user_characteristics_ping.logLevel", "Off");
lockPref("toolkit.telemetry.user_characteristics_ping.opt-out", true);
lockPref("toolkit.telemetry.user_characteristics_ping.send-once", false);
lockPref("toolkit.telemetry.user_characteristics_ping.uuid", "");
lockPref("urlclassifier.features.emailtracking.datacollection.allowlistTables", "");
lockPref("urlclassifier.features.emailtracking.datacollection.blocklistTables", "");
// Disable Experiments/Studies (Shield/Nimbus/Normandy)
lockPref("app.normandy.run_interval_seconds", 0);
lockPref("app.normandy.api_url", "");
lockPref("app.normandy.enabled", false);
lockPref("app.normandy.experiments.lazy_classify", true);
lockPref("app.normandy.first_run", false);
lockPref("app.normandy.last_seen_buildid", "");
lockPref("app.normandy.logging.level", 70);
lockPref("app.normandy.user_id", "");
lockPref("app.shield.optoutstudies.enabled", false);
lockPref("messaging-system.log", "off");
lockPref("messaging-system.rsexperimentloader.collection_id", "");
lockPref("nimbus.appId", "");
lockPref("nimbus.profileId", "");
lockPref("nimbus.profilesdatastoreservice.enabled", false);
lockPref("nimbus.profilesdatastoreservice.read.enabled", false);
// Disable Origin Trials
lockPref("dom.origin-trials.enabled", false);
// Prevent automatically uploading profiler data (from `about:logging`) to Mozilla
lockPref("toolkit.aboutLogging.uploadProfileToCloud", false);
// Remove partner attribution
lockPref("app.distributor", "");
lockPref("app.distributor.channel", "");
lockPref("mozilla.partner.id", "");

/*** 002 MOZILLA ***/

// Clear unnecessary/undesired Mozilla URLs
lockPref("app.feedback.baseURL", "");
lockPref("app.normandy.shieldLearnMoreUrl", "");
lockPref("datareporting.healthreport.infoURL", "");
lockPref("extensions.recommendations.privacyPolicyUrl", "");
lockPref("toolkit.datacollection.infoURL", "");
// Disable `about:welcome`/onboarding
lockPref("browser.aboutwelcome.enabled", false);
lockPref("browser.aboutwelcome.log", "off"); // [Nascosta]
lockPref("browser.preonboarding.enabled", false); // [Nascosta]
lockPref("browser.rights.3.shown", true); // [Nascosta]
lockPref("browser.startup.homepage_override.buildID", "20100101"); // [Nascosta]
lockPref("browser.startup.homepage_override.mstone", "ignore"); // [Nascosta]
lockPref("browser.startup.upgradeDialog.enabled", false);
lockPref("browser.suppress_first_window_animation", true);
lockPref("startup.homepage_override_nimbus_disable_wnp", true);
lockPref("startup.homepage_override_url", "");
lockPref("startup.homepage_override_url_nimbus", "");
lockPref("startup.homepage_welcome_url", "");
lockPref("startup.homepage_welcome_url.additional", "");
// Disable add-on/feature recommendations
lockPref("browser.dataFeatureRecommendations.enabled", false);
lockPref("browser.discovery.enabled", false);
lockPref("browser.discovery.sites", "");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "null");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "null");
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
lockPref("browser.translations.panelShown", true); // [Nascosta]
lockPref("extensions.getAddons.browseAddons", ""); // [Nascosta]
lockPref("extensions.getAddons.discovery.api_url", "data;");
lockPref("extensions.getAddons.showPane", false); // [Nascosta]
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false);
lockPref("extensions.recommendations.hideNotice", true); // [Nascosta]
lockPref("extensions.recommendations.themeRecommendationUrl", "");
lockPref("extensions.ui.lastCategory", "addons://list/extension"); // [Nascosta]
lockPref("extensions.webservice.discoverURL", ""); // [Nascosta]
// Disable DoH Rollout/heuristics/steering
lockPref("doh-rollout._testing", true); // [Nascosta]
lockPref("doh-rollout.disable-heuristics", true); // [Nascosta]
lockPref("doh-rollout.doneFirstRun", true); // [Nascosta]
lockPref("doh-rollout.doorhanger-decision", "UIDisabled"); // [Nascosta]
lockPref("doh-rollout.enabled", false); // [Nascosta]
lockPref("doh-rollout.mode", 5); // [Nascosta]
lockPref("doh-rollout.provider-steering.enabled", false); // [Nascosta]
lockPref("doh-rollout.provider-steering.provider-list", ""); // [Nascosta]
lockPref("doh-rollout.self-enabled", false); // [Nascosta]
lockPref("doh-rollout.skipHeuristicsCheck", true); // [Nascosta]
lockPref("doh-rollout.trr-selection.enabled", false); // [Nascosta]
lockPref("doh-rollout.trr-selection.provider-list", ""); // [Nascosta]
lockPref("doh-rollout.uri", ""); // [Nascosta]
lockPref("network.android_doh.autoselect_enabled", false); // [DEFAULT]
// Disable DoH performance measurements
lockPref("doh-rollout.trrRace.canonicalDomain", ""); // [Nascosta]
lockPref("doh-rollout.trrRace.complete", true); // [Nascosta]
lockPref("doh-rollout.trrRace.enabled", false); // [Nascosta]
lockPref("doh-rollout.trrRace.popularDomains", ""); // [Nascosta]
lockPref("doh-rollout.trrRace.randomSubdomainCount", 0); // [Nascosta]
// Disable 'Essential Domains Fallback'
lockPref("network.essential_domains_fallback", false);
// Disable Fakespot
lockPref("toolkit.shopping.ohttpConfigURL", "");
lockPref("toolkit.shopping.ohttpRelayURL", "");
// Disable "Feature Tours"
lockPref("browser.firefox-view.feature-tour", '{"screen":"","complete":true}');
lockPref("browser.newtab.feature-tour", '{"screen":"","complete":true}'); // [Nascosta]
lockPref("browser.pdfjs.feature-tour", '{"screen":"","complete":true}'); //
// Disable fetching Firefox Relay's "allowlist" (list of sites known to support Relay)
lockPref("signon.firefoxRelay.allowListRemoteSettingsCollection", ""); // [Nascosta]
// Disable fetching Password Manager rules remotely by default
lockPref("signon.recipes.remoteRecipes.enabled", false);
// Disable Firefox Bridge
lockPref("browser.firefoxbridge.enabled", false);
// Disable Firefox Messaging System targeting information background updates  
lockPref("app.update.background.messaging.targeting.snapshot.intervalSec", -1);
// Disable "Interest-based Content Relevance Ranking and Personalization"
lockPref("toolkit.contentRelevancy.enabled", false);
lockPref("toolkit.contentRelevancy.ingestEnabled", false);
lockPref("toolkit.contentRelevancy.log", false);
// Disable Mozilla promotions  
lockPref("browser.contentblocking.report.hide_vpn_banner", true);
lockPref("browser.contentblocking.report.lockwise.enabled", false);
lockPref("browser.contentblocking.report.mobile-android.url", "");
lockPref("browser.contentblocking.report.mobile-ios.url", "");
lockPref("browser.contentblocking.report.monitor.enabled", false);
lockPref("browser.contentblocking.report.proxy.enabled", false);
lockPref("browser.contentblocking.report.proxy_extension.url", "");
lockPref("browser.contentblocking.report.show_mobile_app", false);
lockPref("browser.contentblocking.report.vpn.url", "");
lockPref("browser.contentblocking.report.vpn-android.url", "");
lockPref("browser.contentblocking.report.vpn-ios.url", "");
lockPref("browser.contentblocking.report.vpn-promo.url", "");
lockPref("browser.privatebrowsing.vpnpromourl", "");
lockPref("browser.promo.cookiebanners.enabled", false);
lockPref("browser.promo.focus.enabled", false);
lockPref("browser.promo.pin.enabled", false);
lockPref("browser.protections_panel.infoMessage.seen", true);
lockPref("browser.send_to_device_locales", "");
lockPref("browser.vpn_promo.enabled", false);
lockPref("cookiebanners.ui.desktop.showCallout", false);
// Disable Mozilla.UITour   
lockPref("browser.uitour.enabled", false);
lockPref("browser.uitour.loglevel", "Off");
lockPref("browser.uitour.requireSecure", true); // [Nascosta]
lockPref("browser.uitour.surveyDuration", 0);
lockPref("browser.uitour.testingOrigins", ""); // [Nascosta]
lockPref("browser.uitour.url", ""); //  
// Disable Pocket  
lockPref("extensions.pocket.enabled", false);
// Disable "Privacy-Preserving Attribution"
lockPref("dom.origin-trials.private-attribution.state", 2);
lockPref("dom.private-attribution.submission.enabled", false);
// Disable Remote Permissions
lockPref("permissions.manager.remote.enabled", false);
// Disable search attribution
lockPref("browser.search.param.search_rich_suggestions", "");
// Disable the Web Compatibility Reporter
lockPref("extensions.webcompat-reporter.enabled", false);
lockPref("ui.new-webcompat-reporter.enabled", false);
// Hide the "More from Mozilla" settings tab
lockPref("browser.preferences.moreFromMozilla", false);
// Opt out of add-on metadata updates
lockPref("extensions.getAddons.cache.enabled", false);
// Prevent checking if Firefox is the default browser  
lockPref("browser.shell.checkDefaultBrowser", false);
lockPref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true);
// Prevent checking if Firefox is the default `mailto:` handler  
lockPref("browser.mailto.dualPrompt", false);
// Prevent checking if Firefox is the default PDF viewer  
lockPref("browser.shell.checkDefaultPDF", false); // [Nascosta]
lockPref("browser.shell.checkDefaultPDF.silencedByUser", true); // [Nascosta]
// Remove special privileges from Mozilla domains
lockPref("browser.tabs.remote.separatePrivilegedMozillaWebContentProcess", false);
lockPref("browser.tabs.remote.separatedMozillaDomains", "");
lockPref("dom.ipc.processCount.privilegedmozilla", 0);
lockPref("extensions.webextensions.restrictedDomains", "");
lockPref("permissions.manager.defaultsUrl", "");
lockPref("svg.context-properties.content.allowed-domains", "");
// Remove tracking parameters from Mozilla URLs + prevent exposing locale & unnecessary information
lockPref("app.releaseNotesURL", "https://www.mozilla.org/firefox/%VERSION%/releasenotes");
lockPref("app.releaseNotesURL.aboutDialog", "https://www.mozilla.org/firefox/%VERSION%/releasenotes");
lockPref("app.releaseNotesURL.prompt", "https://www.mozilla.org/firefox/%VERSION%/releasenotes");
lockPref("app.update.url.details", "https://www.mozilla.org/firefox/notes");
lockPref("app.update.url.manual", "https://www.mozilla.org/firefox/new");
lockPref("browser.backup.template.fallback-download.aurora", "https://www.mozilla.org/firefox/channel/desktop/#developer");
lockPref("browser.backup.template.fallback-download.beta", "https://www.mozilla.org/firefox/channel/desktop/#beta");
lockPref("browser.backup.template.fallback-download.esr", "https://www.mozilla.org/firefox/enterprise/#download");
lockPref("browser.backup.template.fallback-download.nightly", "https://www.mozilla.org/firefox/channel/desktop/#nightly");
lockPref("browser.backup.template.fallback-download.release", "https://www.mozilla.org/firefox/download/thanks/?s=direct");
lockPref("browser.contentblocking.report.cookie.url", "https://support.mozilla.org/kb/trackers-and-scripts-firefox-blocks-enhanced-track#w_cross-site-tracking-cookies");
lockPref("browser.contentblocking.report.cryptominer.url", "https://support.mozilla.org/kb/trackers-and-scripts-firefox-blocks-enhanced-track#w_cryptominers");
lockPref("browser.contentblocking.report.fingerprinter.url", "https://support.mozilla.org/kb/trackers-and-scripts-firefox-blocks-enhanced-track#w_fingerprinters");
lockPref("browser.contentblocking.report.lockwise.how_it_works.url", "https://support.mozilla.org/kb/password-manager-remember-delete-edit-logins");
lockPref("browser.contentblocking.report.monitor.sign_in_url", "https://monitor.firefox.com/oauth/init");
lockPref("browser.contentblocking.report.monitor.url", "https://monitor.firefox.com/");
lockPref("browser.contentblocking.report.social.url", "https://support.mozilla.org/kb/trackers-and-scripts-firefox-blocks-enhanced-track#w_social-media-trackers");
lockPref("browser.contentblocking.report.tracker.url", "https://support.mozilla.org/kb/trackers-and-scripts-firefox-blocks-enhanced-track#w_tracking-content");
lockPref("browser.dictionaries.download.url", "https://addons.mozilla.org/language-tools/");
lockPref("browser.newtabpage.activity-stream.support.url", "https://support.mozilla.org/kb/new-tab");
lockPref("browser.xr.warning.infoURL", "https://support.mozilla.org/kb/webxr-permission-info-page");
lockPref("extensions.abuseReport.amoFormURL", "https://addons.mozilla.org/feedback/addon/%addonID%/");
lockPref("extensions.blocklist.addonItemURL", "https://addons.mozilla.org/blocked-addon/%addonID%/%addonVersion%/");
lockPref("extensions.getAddons.link.url", "https://addons.mozilla.org/");
lockPref("extensions.getAddons.search.browseURL", "https://addons.mozilla.org/search?q=%TERMS%");
lockPref("extensions.update.background.url", "https://versioncheck-bg.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%");
lockPref("extensions.update.url", "https://versioncheck.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%");
lockPref("lightweightThemes.getMoreURL", "https://addons.mozilla.org/themes/");
lockPref("pdfjs.altTextLearnMoreUrl", "https://support.mozilla.org/kb/pdf-alt-text");
lockPref("signon.firefoxRelay.learn_more_url", "https://support.mozilla.org/kb/relay-integration#w_frequently-asked-questions");
lockPref("signon.firefoxRelay.manage_url", "https://relay.firefox.com/accounts/profile/");
lockPref("signon.firefoxRelay.privacy_policy_url", "https://www.mozilla.org/privacy/subscription-services/");
lockPref("signon.firefoxRelay.terms_of_service_url", "https://www.mozilla.org/about/legal/terms/subscription-services/");
// Skip Mozilla's `Privacy Notice` and `Terms of Use`
lockPref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 999);
lockPref("datareporting.policy.dataSubmissionPolicyNotifiedTime", "32503679999000");
lockPref("termsofuse.acceptedDate", "32503679999000");
lockPref("termsofuse.acceptedVersion", 999);
lockPref("termsofuse.bypassNotification", true);

/*** 003 TRACKING PROTECTION ***/

// Disable exceptions for minor issues by default
defaultPref("privacy.trackingprotection.allow_list.convenience.enabled", true);
// Block known tracking cookies
defaultPref("network.cookie.cookieBehavior.trackerCookieBlocking", true);
// Enable Bounce Tracking Protection
defaultPref("privacy.bounceTrackingProtection.requireStatefulBounces", false);
// Enable TCP/dFPI
defaultPref("network.cookie.cookieBehavior.optInPartitioning", true);
defaultPref("network.cookie.cookieBehavior.optInPartitioning.pbmode", true);
// Lower the network priority of known trackers (if not blocked for whatever reason...)
defaultPref("privacy.trackingprotection.lower_network_priority", true);

/*** 004 FINGERPRINTING PROTECTION ***/

// Disable VP9 Benchmark
defaultPref("media.benchmark.vp9.threshold", 0);
// Do not use the theme's toolbar color scheme for in-content pages by default
defaultPref("browser.theme.unified-color-scheme", false);
// Prevent exposing WebGL Renderer Info
defaultPref("webgl.enable-renderer-query", false);
defaultPref("webgl.override-unmasked-vendor", "Mozilla");
defaultPref("webgl.sanitize-unmasked-renderer", false);
// Prevent pre-allocating content processes
defaultPref("dom.ipc.processPrelaunch.enabled", false);
defaultPref("dom.ipc.processPrelaunch.fission.number", 0);
// Prevent using system accent colors
defaultPref("widget.non-native-theme.use-theme-accent", false);
// Prevent using system colors
defaultPref("browser.display.use_system_colors", false);
defaultPref("ui.use_standins_for_native_colors", true);
// Reset the fingerprinting randomization key daily (in addition to per-session/when the browser restarts)
defaultPref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
defaultPref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);
// Round window sizes
defaultPref("privacy.window.maxInnerHeight", 900);
defaultPref("privacy.window.maxInnerWidth", 1600);
// Set a fixed temporary storage limit
defaultPref("dom.quotaManager.temporaryStorage.fixedLimit", 52428800);

/*** 005 DISK AVOIDANCE ***/

// Decrease the number of tabs saved in Session Store
defaultPref("browser.sessionstore.max_tabs_undo", 7);
// Disable back/forward cache (bfcache)
defaultPref("browser.sessionhistory.max_total_viewers", 0);
defaultPref("fission.bfcacheInParent", false);
// Disable collection/generation of background thumbnails
defaultPref("browser.pagethumbnails.capturing_disabled", true); // [Nascosta]
// Disable coloring visited links
defaultPref("layout.css.visited_links_enabled", false);
// Disable disk cache
lockPref("browser.cache.disk.enable", false);
lockPref("browser.cache.disk_cache_ssl", false);
// Disable logging blocked domains to `about:protections`
defaultPref("browser.contentblocking.cfr-milestone.enabled", false);
defaultPref("browser.contentblocking.cfr-milestone.milestone-shown-time", "999999999"); // [Nascosta]
defaultPref("browser.contentblocking.cfr-milestone.update-interval", 0); // [Nascosta]
defaultPref("browser.contentblocking.database.enabled", false);
// Disable Search & Form History
defaultPref("browser.formfill.enable", false);
// Enable a fire button in Private Browsing Windows to reset the session
defaultPref("browser.privatebrowsing.resetPBM.enabled", true)
// Increase the interval between between Session Store save operations
defaultPref("browser.sessionstore.interval", 300000); // 5 minute; default=15000 (15s)
// Prevent exposing content in the window title for Private Browsing windows
defaultPref("privacy.exposeContentTitleInWindow.pbm", false);
// Prevent storing unnecessary extra session data
defaultPref("browser.sessionstore.privacy_level", 2);
// Prevent writing media cache (ex. for video streaming) to disk in private windows
defaultPref("browser.privatebrowsing.forceMediaMemoryCache", true);
// Remove cached files from browser windows opened with external applications
defaultPref("browser.download.start_downloads_in_tmp_dir", true);
defaultPref("browser.helperApps.deleteTempFileOnExit", true);
// Remove files from session list & history when deleted in Firefox
defaultPref("browser.download.clearHistoryOnDelete", 2);

/*** 006 DOWNLOADS ***/

// Notify when downloading files
defaultPref("browser.download.alwaysOpenPanel", false);
// Prevent adding downloads to "recent documents"...
defaultPref("browser.download.manager.addToRecentDocs", false);
// Prompt before downloading files
defaultPref("browser.download.always_ask_before_handling_new_types", true);
defaultPref("browser.download.useDownloadDir", false);

/*** 007 HTTP(S) ***/

// Always warn on insecure webpages
defaultPref("security.insecure_connection_text.enabled", true);
defaultPref("security.insecure_connection_text.pbmode.enabled", true);
defaultPref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// Always warn when submitting a form from HTTP to HTTPS, even on local IP addresses
defaultPref("security.insecure_field_warning.ignore_local_ip_address", false);
// Disable the automatic import of OS client authentication certificates
defaultPref("security.osclientcerts.autoload", false);
// Disable insecure ciphers (Like Chromium & Tor Browser)
defaultPref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
defaultPref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
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
// Enable CRLite revocation checks & prioritize over OCSP
defaultPref("security.pki.crlite_mode", 2); // [DEFAULT - Nightly]
defaultPref("security.remote_settings.crlite_filters.enabled", true); // [DEFAULT - non-Android]
// Enforce Strict Certificate Pinning
defaultPref("security.cert_pinning.enforcement_level", 2);
// Enforce using HTTPS as much as possible
defaultPref("dom.security.https_first_for_local_addresses", true);
defaultPref("dom.security.https_first_for_unknown_suffixes", true);
lockPref("dom.security.https_only_mode", true);
defaultPref("dom.security.https_only_mode.upgrade_local", true);
lockPref("dom.security.https_only_mode_pbm", true);
// If HTTPS-Only Mode is disabled in favor of HTTPS-First, prevent automatically exempting domains (to ensure we always try HTTPS first...)
defaultPref("dom.security.https_first_add_exception_on_failure", false);
// Only allow certificate error exceptions per-session
defaultPref("security.certerrors.permanentOverride", false);
// Require safe renegotiations
defaultPref("security.ssl.require_safe_negotiation", true);
// Show detailed information on insecure warning pages
defaultPref("browser.xul.error_pages.expert_bad_cert", true);

/*** 008 IMPLICIT CONNECTIONS ***/

// Disable Early Hints (Like Cromite)
defaultPref("network.early-hints.enabled", false);
defaultPref("network.early-hints.over-http-v1-1.enabled", false);
defaultPref("network.early-hints.preconnect.enabled", false);
defaultPref("network.early-hints.preconnect.max_connections", 0);
// Disable Network Prefetching
defaultPref("dom.prefetch_dns_for_anchor_http_document", false);
defaultPref("network.http.speculative-parallel-limit", 0);
defaultPref("network.predictor.enabled", false);
defaultPref("network.prefetch-next", false);
// Disable Preconnect
defaultPref("network.preconnect", false);
// Disable speculative pre-connections
defaultPref("browser.places.speculativeConnect.enabled", false);
defaultPref("browser.urlbar.speculativeConnect.enabled", false);
// Prevent middle mouse clicks on new tab button opening URLs or searches from clipboard
defaultPref("browser.tabs.searchclipboardfor.middleclick", false);

/*** 009 SEARCH & URL BAR ***/

// Allow using a different search engine in normal vs. private Windows
defaultPref("browser.search.separatePrivateDefault.ui.enabled", true);
// Always show Punycode
defaultPref("network.IDN_show_punycode", true);
// Disable autofill/autocompletion of URLs by default
defaultPref("browser.urlbar.autoFill", false);
// Disable clipboard suggestions by default, but allow users to enable them if desired
defaultPref("browser.urlbar.clipboard.featureGate", false);
defaultPref("browser.urlbar.suggest.clipboard", false);
// Disable history suggestions by default
defaultPref("browser.urlbar.suggest.history", false);
// Disable quick actions by default, but allow users to enable them if desired
defaultPref("browser.urlbar.quickactions.showPrefs", true);
defaultPref("browser.urlbar.secondaryActions.featureGate", true);
defaultPref("browser.urlbar.shortcuts.actions", false);
defaultPref("browser.urlbar.suggest.quickactions", false);
// Disable the quick actions onboarding
defaultPref("browser.urlbar.quickactions.timesToShowOnboardingLabel", 0);
// Disable recent search suggestions by default, but allow users to enable them if desired
defaultPref("browser.urlbar.recentsearches.featureGate", false);
defaultPref("browser.urlbar.suggest.recentsearches", false);
// Disable search engine suggestions (Tab to search) by default
defaultPref("browser.urlbar.suggest.engines", false);
// Disable search engine suggestion (Tab to search) onboarding results
defaultPref("browser.urlbar.tabToSearch.onboard.interactionsLeft", 0);
// Disable search suggestions by default
defaultPref("browser.search.suggest.enabled", false);
defaultPref("browser.urlbar.showSearchSuggestionsFirst", false);
defaultPref("browser.urlbar.suggest.searches", false);
// Disable search tips
defaultPref("browser.urlbar.searchTips.test.ignoreShowLimits", false);
defaultPref("browser.urlbar.tipShownCount.searchTip_redirect", 999);
// Disable trending searches by default, but allow users to enable them if desired
defaultPref("browser.urlbar.suggest.trending", false);
defaultPref("browser.urlbar.trending.featureGate", false);
// Disable URL trimming
defaultPref("browser.urlbar.trimHttps", false);
defaultPref("browser.urlbar.trimURLs", false);
// Display the search bar at `Customize toolbar...`
defaultPref("browser.search.widget.inNavBar", true);
// Enable bookmark suggestions by default 
defaultPref("browser.urlbar.suggest.bookmark", false);
// Enable the "Search in Private Window" result by default
defaultPref("browser.search.separatePrivateDefault.urlbarResult.enabled", true);
// Disable shortcut suggestions by default
defaultPref("browser.urlbar.suggest.topsites", false);
// Show full URLs instead of search terms
defaultPref("browser.urlbar.restyleSearches", false);
defaultPref("browser.urlbar.showSearchTerms.enabled", false);
defaultPref("browser.urlbar.showSearchTerms.featureGate", false);
// Use the same search engine in normal and private browsing windows by default
defaultPref("browser.search.separatePrivateDefault", true);

/*** 010 DNS ***/

// Disable DoH Connectivity Checks
defaultPref("network.connectivity-service.DNS_HTTPS.domain", "");
defaultPref("network.trr.confirmationNS", "skip");
defaultPref("network.trr.skip-check-for-blocked-host", true);
// Disable falling back to system DNS by default
defaultPref("network.trr.strict_native_fallback", true);
// Disable nsNotifyAddrListener
defaultPref("network.notify.changed", false);
defaultPref("network.notify.checkForNRPT", false);
defaultPref("network.notify.checkForProxies", false);
defaultPref("network.notify.dnsSuffixList", false);
defaultPref("network.notify.initial_call", false);
defaultPref("network.notify.IPv6", false);
defaultPref("network.notify.resolvers", false);
// Enable DoH without fallback & Set to Quad9 by default
defaultPref("network.trr.default_provider_uri", "https://dns.quad9.net/dns-query");
defaultPref("network.trr.mode", 3);
// Fix IPv6 connectivity when DoH is enabled
defaultPref("network.dns.preferIPv6", true);
// Prevent bypassing DoH for /etc/HOSTS entries by default
defaultPref("network.trr.exclude-etc-hosts", false);

/*** 011 PROXIES ***/

// Prevent Firefox from automatically using the system's proxy configuration by default
defaultPref("network.proxy.type", 0);
// Always start proxy extensions (if installed) as soon as possible
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

/*** 012 WEBRTC ***/

// disabilita indicatori WebRTC (sono buggati)
defaultPref("privacy.webrtc.hideGlobalIndicator", true);
// Prevent WebRTC from bypassing the proxy (if configured)
defaultPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
// Warn users when attempting to switch tabs in a window being shared over WebRTC
defaultPref("privacy.webrtc.sharedTabWarning", true);

/*** 013 MEDIA ***/

// Block media autoplay by default
defaultPref("media.autoplay.default", 5);
defaultPref("media.geckoview.autoplay.request.testing", 2);
// Encrypted Media Extensions (DRM)
defaultPref("browser.eme.ui.enabled", false);
defaultPref("media.eme.enabled", true);
defaultPref("media.eme.require-app-approval", true);
// Disable GMP logging by default
defaultPref("media.gmp.log.level", 70);
// Disable OpenH264 (in favor of hardware decoding)
defaultPref("media.ffmpeg.allow-openh264", false);
defaultPref("media.gmp-gmpopenh264.enabled", false);
defaultPref("media.gmp-gmpopenh264.provider.enabled", false); // [LINUX] RedHat/Fedora-specific
defaultPref("media.gmp-gmpopenh264.visible", false);
defaultPref("media.webrtc.hw.h264.enabled", true);
// Enable click to play UI for certain CSS skins by default
defaultPref("userContent.player.click_to_play", true); // [Nascosta]
// Sandbox GMP
defaultPref("media.gmp.insecure.allow", false); // [LINUX]

/*** 014 ATTACK SURFACE REDUCTION ***/

// Disable ASM.JS
defaultPref("javascript.options.asmjs", false);
// Disable Graphite & SVG OpenType fonts
defaultPref("gfx.font_rendering.graphite.enabled", false);
defaultPref("gfx.font_rendering.opentype_svg.enabled", false);
// Disable JavaScript Just-in-time Compilation (JIT)
defaultPref("javascript.options.baselinejit", false); // Baseline Compiler
defaultPref("javascript.options.ion", false); // WarpMonkey
defaultPref("javascript.options.jithints", false); // Eager baseline hints https://bugzilla.mozilla.org/show_bug.cgi?id=1831572
defaultPref("javascript.options.main_process_disable_jit", true); // [DEFAULT - iOS?] The JIT backend https://searchfox.org/mozilla-central/source/js/src/jit/JitOptions.cpp
defaultPref("javascript.options.native_regexp", false); // irregexp https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/21865
defaultPref("javascript.options.wasm_optimizingjit", false); // WASM-Ion (BaldrMonkey)
// Disable MathML
defaultPref("mathml.disabled", true);
// Disable SharedArrayBuffer using window.postMessage
defaultPref("dom.postMessage.sharedArrayBuffer.withCOOP_COEP", false);
// Disable WebVR/WebXR
defaultPref("permissions.default.xr", 2); //
// If JIT (Ion/WarpMonkey) is disabled, also disable it for extensions
defaultPref("javascript.options.jit_trustedprincipals", false);

/*** 015 PASSWORDS & AUTHENTICATION ***/

// Always display a `reveal password` button in `password` `<input>` types 
defaultPref("layout.forms.reveal-password-button.enabled", true);
// Disable Autofill
defaultPref("signon.autofillForms", false);
// Disable Basic authentication over HTTP
defaultPref("network.http.basic_http_auth.enabled", false);
// Disable formless capture of log-in credentials
defaultPref("signon.formlessCapture.enabled", false);
// Disable Microsoft SSO
defaultPref("network.http.microsoft-entra-sso.container-enabled.0", false);
defaultPref("network.microsoft-sso-authority-list", "");
// Disable NTLM
defaultPref("network.automatic-ntlm-auth.allow-proxies", false);
/// Disable Password Manager by default - Insecure & unencrypted
defaultPref("extensions.formautofill.addresses.enabled", false);
defaultPref("extensions.formautofill.creditCards.enabled", false);
// Disable password truncation
defaultPref("editor.truncate_user_pastes", false);
// Disable SPNEGO
defaultPref("network.negotiate-auth.allow-proxies", false);
// Enable anti-spoof confirmation prompts
defaultPref("network.auth.confirmAuth.enabled", true);
// Prevent cross-origin sub-resources from opening HTTP authentication dialogs to protect against phishing
defaultPref("network.auth.subresource-http-auth-allow", 1);



/*** 016 EXTENSIONS ***/

// Allow certain trustworthy extensions to run on restricted/quarantined domains by default
defaultPref("extensions.quarantineIgnoredByUser.uBlock0@raymondhill.net", true); // uBlock Origin
defaultPref("extensions.quarantineIgnoredByUser.@testpilot-containers", true); // Firefox Multi-Account Containers
// Disable add-on sideloading
defaultPref("extensions.autoDisableScopes", 15);
defaultPref("extensions.enabledScopes", 5); // [Nascosta]
defaultPref("extensions.installDistroAddons", false); // [Nascosta]
defaultPref("extensions.sideloadScopes", 0); // [Nascosta]
// Disable the AMO Abuse Report API
defaultPref("extensions.addonAbuseReport.url", "");
// Disable mozAddonManager
defaultPref("extensions.webapi.enabled", false);
defaultPref("privacy.resistFingerprinting.block_mozAddonManager", true);
// Enable Add-on Distribution Control (Install Origins)
defaultPref("extensions.install_origins.enabled", true);
// Enable restricted/quarantined domains by default
defaultPref("extensions.remoteSettings.disabled", true); // [Nascosta]
defaultPref("extensions.quarantinedDomains.list", "autoatendimento.bb.com.br,ibpf.sicredi.com.br,ibpj.sicredi.com.br,internetbanking.caixa.gov.br,www.ib12.bradesco.com.br,www2.bancobrasil.com.br,10.0.0.1,127.0.0.1,192.168.1.1,192.168.50.1,1password.ca,1password.com,1password.eu,365online.com,account.amd.com,account.apple.com,account.asus.com,account.brave.com,account.collegeboard.org,account.live.com,account.microcenter.com,account.microsoft.com,account.nordpass.com,account.proton.me,account.sony.com,account.t-mobile.com,accounts.1password.ca,accounts.1password.com,accounts.1password.eu,accounts.ent.1password.com,accounts.fedoraproject.org,accounts.firefox.com,accounts.google.com,accounts.nintendo.com,accounts.scdn.co,accounts.snapchat.com,accounts.spotify.com,acs-home-prod-login-fde-hhd4d2h9drbfg7hy.a02.azurefd.net,addons.allizom.org,addons.mozilla.org,addons.thunderbird.net,admin.google.com,adyen.com,agrd.io,agreementexpress.net,alipay.com,alipayobjects.com,alipayplus.com,amazon.syf.com,amazonpay.in,amp.pandora.com,anz.com,anz.com.au,ap.www.namecheap.com,apay-us.amazon.com,api.stripe.com,api-auth.soundcloud.com,app.1password.ca,app.1password.com,app.1password.eu,app.advancedmd.com,app.dashlane.com,app.privacy.com,app.tuta.com,appleconnect.apple.com,appleid.apple.com,appleid.cdn-apple.com,applepay.cdn-apple.com,apply.commonapp.org,apps.apple.com,apps.microsoft.com,apps.obtainium.imranr.dev,api-dashboard.search.brave.com,apt.izzysoft.de,archive.mozilla.org,archlinux.org,argenta.be,artists.soundcloud.com,artists.spotify.com,asrock.com,asrockchina.com.cn,assets.loginwithamazon.com,att-yahoo.att.net,attestation.app,aur.archlinux.org,auth.adguard.io,auth.adguardaccount.com,auth.hulu.com,auth.meta.com,auth.max.com,auth.mozilla.auth0.com,auth.openai.com,auth.services.adobe.com,auth.sharefile.io,auth.synchronybank.com,auth.uber.com,auth.wikimedia.org,b.stripecdn.com,bancogalicia.com.ar,bank99.at,bankaust.com.au,bankaustria.at,bankdirekt.at,bankeasy.com,bankofamerica.com,bankofireland.com,bankvic.com.au,belfius.be,belkart.by,belveb.by,bendigobank.com.au,binance.com,binance.us,bisq.network,bitpay.com,bitwarden.com,bkash.com,bnpparibasfortis.be,bobpony.com,braintree-api.com,braintreegateway.com,brave.com,brave-browser-apk-beta.s3.brave.com,brave-browser-apk-nightly.s3.brave.com,brave-browser-apk-release.s3.brave.com,build.opensuse.org,businessaccess.citibank.citigroup.com,businessonline-boi.com,cakepay.com,cakewallet.com,calendar.proton.me,calyxos.org,cardcomplete.com,cash.app,cbzsecure.com,cdn.akamai.steamstatic.com,cdn.mullvad.net,cdn.sso.mozilla.com,cdimage.debian.org,checkout.com,coinspot.com.au,commbank.com.au,console.accrescent.app,console.aws.amazon.com,console.cloud.google.com,consumer.intel.com,copr.fedorainfracloud.org,creditcall.com,crelan.be,cromite.org,dash.cloudflare.com,developer.apple.com,developer.nvidia.com,discord.gg,dist.torproject.org,dl.google.com,donate.torproject.org,download.cdn.mozilla.net,download.fedoraproject.org,download.gigabyte.com,download.lineageos.org,download.mozilla.org,download-installer.cdn.mozilla.net,download-installer-origin.cdn.mozilla.net,download-origin.cdn.mozilla.net,drive.google.com,drive.proton.me,dsadata.intel.com,easybanking.unifi-digitalbanking.com,easybankint.com,ebanking.easybank.at,eff.org,ente.io,epicmychart.nychhc.org,epicmychart.optum.com,etoro.com,f-droid.org,fdroid.ironfoxoss.org,fdroid.link,fedoraproject.org,flatex.at,flathub.org,flex.okta.com,franciscanmychart.org,franklincollege.okta.com,ftp.eu.mozilla.org,ftp.mozilla.org,ftp.prod.mozaws.net,ftp.prod.mozilla.org,ftp-ssl.mozilla.org,ftp-test.mozilla.org,galicia.ar,gateway.bank,gatewaybank.bank,gatewaybank.com.au,gatewayfirst.com,geogroup.okta.com,george.sparkasse.at,george-business.sparkasse.at,gfgsa.com,google-admin.corp.google.com,grapheneos.org,greasyfork.org,guardarian.com,heartland.us,heartlandpaymentsystems.com,heartlandportico.com,hellobank.be,hendrick.okta.com,hsbc.com,hsbc.com.au,icard.com,id.fedoraproject.org,id.sonyentertainmentnetwork.com,id.spectrum.net,identity.corp.google.com,identity.doordash.com,identity.eset.com,identity.gtm.eset.com,identity.kde.org,identity.lego.com,identity.walmart.com,idmsa.apple.com,idmsa.apple.com.cn,idmsac.apple.com,iforgot.apple.com,ing.com,ing.com.au,ingwb.com,iparitet.by,itsme-id.com,js.stripe.com,kairoscope.org,kbc.be,kdrp.okta.com,keytradebank.be,klarna.com,kraken.com,laptop-updates.brave.com,lastpass.com,lineageos.org,localhost,login.aa.com,login.advancedmd.com,login.amd.com,login.aol.com,login.corp.google.com,login.disney.com,login.eset.com,login.gov,login.kroger.com,login.live.com,login.mailbox.org,login.microsoftonline.com,login.nvgs.nvidia.com,login.okta.com,login.sparkasse.at,login.tailscale.com,login.wikimedia.org,login.yahoo.com,login.yahoo.net,login.xfinity.com,login-app.advancedmd.com,login-dev.advancedmd.com,login-no1a.www.tiktok.com,login3.id.hp.com,login4.fisglobal.com,lowes.syf.com,m.stripe.com,m.stripe.network,mail.proton.me,mailbox.org,marmon.okta.com,matrix.to,mblogin.verizonwireless.com,mebank.com.au,merchant-ui-api.stripe.com,microg.org,mirrorbits.lineageos.org,linuxmint.com,molly.im,monero.com,mpay24.com,msauth.net,msauthimages.net,msdl.gravesoft.dev,msftauth.net,msftauthimages.net,msp.nordpass.com,mt-bank.net,mtb.com,mullvad.net,my.dish.com,my.disney.com,my.eir.ie,myaccount.google.com,myaccount.microsoft.com,mychart.albanymed.org,mychart.asante.org,mychart.atlantichealth.org,mychart.austinregionalclinic.com,mychart.azacp.com,mychart.bmc.org,mychart.carolinaeasthealth.com,mychart.ccf.org,mychart.centracare.com,mychart.childrenscolorado.org,mychart.clevelandclinic.org,mychart.crmcwy.org,mychart.duly.com,mychart.ecommunity.com,mychart.hopkinsmedicine.org,mychart.inova.org,mychart.kansashealthsystem.com,mychart.lovelace.com,mychart.mainehealth.org,mychart.med.utah.edu,mychart.metrohealth.net,mychart.multicare.org,mychart.mwhc.com,mychart.nghs.com,mychart.nortonhealthcare.org,mychart.ohiohealth.com,mychart.orlandohealth.com,mychart.premierhealthpartners.org,mychart.selfregional.org,mychart.sfdph.org,mychart.sih.net,mychart.stcharleshealthcare.org,mychart.texashealth.org,mychart.tmcaz.com,mychart.uchospitals.edu,mychart.uconn.edu,mychart.uihealthcare.org,mychart.uillinois.edu,mychart.upstate.edu,mychart.urmc.rochester.edu,mychartonline.umassmemorial.org,myhealthchart.com,mysignins.microsoft.com,mysinaichicago.org,mystate.com.au,nab.com.au,nmi.com,nordaccount.com,nordpass.com,nordstrom.okta.com,noscript.net,novantmychart.org,nrc.okta.com,oauth.xfinity.com,oidc.idp.clogin.att.com,ok1static.oktacdn.com,ok2static.oktacdn.com,ok7static.oktacdn.com,okta.jumbo.com,oldsecond.com,onedrive.com,onedrive.live.com,online.citi.com,openuserjs.org,outlook.com,outlook.office365.com,ow2-cqm-01.advancedmd.com,panel.nordpass.com,paritetbank.by,pass.proton.me,passwordreset.microsoftonline.com,passwords.google,passwords.google.com,patientportal.advancedmd.com,pay.amazon.co.jp,pay.amazon.co.uk,pay.amazon.com,pay.amazon.de,pay.amazon.es,pay.amazon.eu,pay.amazon.fr,pay.amazon.it,pay.google.com,pay.viasat.com,paybox.com,paybox.com.co,payconiq.be,payeezystrg.z19.web.core.windows.net,payments.amazon.com,payments-amazon.com,payoneer.com,payscout.com,paysend.com,payu.com,paywire.com,play.google.com,plex.direct,portal.corp.google.com,poste.dz,pp-wfe-100.advancedmd.com,privacybadger.org,prod.idp.collegeboard.org,productdelivery.mozilla-backup.org,profile.theguardian.com,proton.me,protonapps.com,psendbank.com,qdoba-prod.us.auth0.com,raiffeisen.at,rb.okta.com,register.gitlab.gnome.org,register.mailbox.org,registerdisney.go.com,release.calyxinstitute.org,releases.mozilla.org,renault-bank-direkt.de,renaultbank.es,renaultbank.fr,retoswap.com,revolut.com,rh.okta.com,rpmfusion.org,secure.chase.com,secure.informaction.com,secure.login.gov,secure.myvirtua.org,secure.pnc.com,secure.sndcdn.com,secure.soundcloud.com,secure.verizon.com,securelogin.synchronybank.com,secureonline.yourstatebank.com,send.vis.ee,signal.org,signin.att.com,signin.aws.amazon.com,signin.costco.com,signin.ebay.com,signin-static-js.att.com,signup.ebay.com,skydrive.com,smartpay.profitstars.com,sso.canvaslms.com,sso.fachschaften.org,sso.kroger.com,sso.redhat.com,start.1password.ca,start.1password.com,start.1password.eu,static.adguard.com,static.adtidy.org,stgeorge.com.au,store.epicgames.com,store.nintendo.com.hk,studio.youtube.com,tam.onecampus.com,tuta.com,u.bank,ubank.bank,ubank.com.au,ubuntu.com,unbelgin.com,unionpayintl.com,unzer.com,up.com.au,us.download.nvidia.com,usaepay.com,usbank.com,vault.bitwarden.com,vault.bitwarden.eu,venmo.com,verifone.com,viewmychart.com,vpn.proton.me,wallet.google,wallet.google.com,wallet.proton.me,wero-wallet.eu,westpac.co.nz,westpac.com.au,wiki.lineageos.org,wise.com,www.365online.com,www.chase.com,www.citi.com,www.citidirect.com,www.cromite.org,www.dashlane.com,www.debian.org,www.easybank.at,www.easybanking.net,www.eff.org,www.epicgames.com,www.firefox.com,www.gigabyte.com,www.icloud.com,www.icloud.com.cn,www.intel.com,www.lineageos.org,www.linuxmint.com,www.macquarie.com.au,www.mozilla.org,www.mychart.org,www.noscript.net,www.paypal.com,www.paypalobjects.com,www.pnc.com,www.privacy.com,www.privatebank.citibank.com,www.sparkasse.at,www.synchrony.com,www.synchronymastercard.com,www.thunderbird.net,www.torproject.org,www.virustotal.com,www.wintrustbank.com,www.wintrustdigitalbanking.com,www.xmrbazaar.com,www.yourstatebank.com,xmrbazaar.com");
// Ensure Firefox Multi-Account Containers can access all containers by default
defaultPref("extensions.userContextIsolation.@testpilot-container.restricted", "[]"); // [Nascosta]
// Ensure uBlock Origin can access all containers by default
defaultPref("extensions.userContextIsolation.uBlock0@raymondhill.net.restricted", "[]"); // [Nascosta]
// Harden CSP policy
defaultPref("extensions.webextensions.base-content-security-policy", "script-src 'self' 'unsafe-inline'; upgrade-insecure-requests;");
defaultPref("extensions.webextensions.base-content-security-policy.v3", "script-src 'self'; upgrade-insecure-requests;");
defaultPref("extensions.webextensions.default-content-security-policy", "script-src 'self'; upgrade-insecure-requests;");
// Never allow installing extensions without first prompting the user
defaultPref("extensions.postDownloadThirdPartyPrompt", false);
// Only allow installation and updates of extensions using Firefox's built-in certificates by default
defaultPref("extensions.install.requireBuiltInCerts", true); // [Nascosta]
defaultPref("extensions.update.requireBuiltInCerts", true); // [Nascosta]
// Prevent automatically granting MV3 extensions optional host permissions by default
defaultPref("extensions.originControls.grantByDefault", false);
// Prevent extensions from opening pop-ups to remote websites
defaultPref("extensions.manifestV2.actionsPopupURLRestricted", true);
// Prevent extensions from using the Gecko Profiler
defaultPref("extensions.geckoProfiler.acceptedExtensionIds", "");
// Prevent recommending search extensions
defaultPref("browser.search.searchEnginesURL", "");
// Prevent hiding extensions
defaultPref("devtools.aboutdebugging.showHiddenAddons", true);
// Require resources loaded by MV2 extensions to be specified under web_accessible_resources in the extension's manifest
defaultPref("extensions.content_web_accessible.enabled", true);
// Require secure origins to install add-ons
defaultPref("extensions.install.requireSecureOrigin", true); // [Nascosta]

/*** 017 AI ***/

// AI Chat
defaultPref("browser.ml.chat.enabled", true);
// Link Preview
defaultPref("browser.ml.linkPreview.enabled", true);
defaultPref("browser.ml.linkPreview.optin", true);
// Disable Perplexity URL bar promotion
defaultPref("browser.urlbar.perplexity.hasBeenInSearchMode", true);
// Suggest tabs and a name for tab groups
defaultPref("browser.tabs.groups.smart.enabled", true);
defaultPref("browser.tabs.groups.smart.optin", true);
defaultPref("browser.tabs.groups.smart.userEnabled", true);
// Do not censor Link Preview results
defaultPref("browser.ml.linkPreview.blockListEnabled", false);

/*** 018 GEOLOCATION ***/

// Block websites from prompting to access geolocation by default
defaultPref("permissions.default.geo", 2);
// Enable Geoclue for GNU/Linux distros by default
defaultPref("geo.provider.use_geoclue", false); // [LINUX]
// Prevent unconditionally providing high location accuracy
defaultPref("geo.provider.geoclue.always_high_accuracy", false); // [LINUX]
// Set BeaconDB as the default network geolocation provider
defaultPref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");

/*** 019 PDF.js ***/

// Disable Automatic Alt Text by default
defaultPref("pdfjs.enableAltTextModelDownload", false);
// Disable automatic hyperlinks
defaultPref("pdfjs.enableAutoLinking", false);
// Disable JavaScript
defaultPref("pdfjs.enableScripting", false);
// Disable XFA
defaultPref("pdfjs.enableXfa", false);
// Enable the ability to add signatures
defaultPref("pdfjs.enableSignatureEditor", true);
// Enable Alt Text
defaultPref("pdfjs.enableAltText", true);
defaultPref("pdfjs.enableAltTextForEnglish", true);
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

/*** 020 SAFE BROWSING ***/

// Improve privacy & speed by sending the domain *only* to Google & without sending your locale to anyone
defaultPref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "https://safebrowsing.google.com/safebrowsing/report_error/?tpl=mozilla&url=");
defaultPref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "https://safebrowsing.google.com/safebrowsing/report_error/?tpl=mozilla&url=");
defaultPref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "https://safebrowsing.google.com/safebrowsing/report_error/?tpl=mozilla&url=");
defaultPref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "https://safebrowsing.google.com/safebrowsing/report_error/?tpl=mozilla&url=");
defaultPref("browser.safebrowsing.reportPhishURL", "https://safebrowsing.google.com/safebrowsing/report_phish/?tpl=mozilla&url=");
// Disable the legacy (and broken) Safe Browsing API
lockPref("browser.safebrowsing.provider.google.lists", "disabled");
// Enable an additional plug-in blocklist from Mozilla
defaultPref("urlclassifier.blockedTable", "moztest-block-simple,mozplugin-block-digest256");
// Prevent sending metadata of downloaded files to Safe Browsing providers
defaultPref("browser.safebrowsing.downloads.remote.enabled", false);
// We can skip the redirect to improve performance
defaultPref("browser.safebrowsing.provider.google.reportURL", "https://transparencyreport.google.com/safe-browsing/search?url=");
defaultPref("browser.safebrowsing.provider.google4.reportURL", "https://transparencyreport.google.com/safe-browsing/search?url=");

/*** 021 MISC. PRIVACY + SECURITY ***/

// Disable Accessibility Services
defaultPref("accessibility.force_disabled", 1);
defaultPref("devtools.accessibility.enabled", false);
// Disable automatic updates for OpenSearch engines
defaultPref("browser.search.update", false);
// Disable Battery API (Navigator.getBattery)
defaultPref("dom.battery.enabled", false);
// Disable Beacon API (Navigator.sendBeacon)
defaultPref("beacon.enabled", false);
// Disable Clipboard API
lockPref("dom.events.asyncClipboard.clipboardItem", false);
lockPref("dom.events.asyncClipboard.readText", false);
lockPref("dom.events.testing.asyncClipboard", false);
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
// Disable WebMIDI
defaultPref("dom.sitepermsaddon-provider.enabled", false);
// Enable Messaging Layer Security (MLS)
defaultPref("dom.origin-trials.mls.state", 1);
// Enable Private Network Access Restrictions
defaultPref("network.lna.block_trackers", true);
// Prevent exposing XPCOM Components.interfaces to websites
defaultPref("dom.use_components_shim", false);

/*** 022 MISC. PRIVACY ***/

// Disable CSP reporting
defaultPref("security.csp.reporting.enabled", false);
// Disable Hyperlink Auditing (Click Tracking)
defaultPref("browser.send_pings.require_same_host", true);
// Disable online speech recognition
defaultPref("media.webspeech.service.endpoint", "data;"); // [Mascosta]
// Disable storage access heuristics
defaultPref("dom.storage_access.auto_grants", false);
defaultPref("privacy.restrict3rdpartystorage.heuristic.navigation", false);
defaultPref("privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction", false);
defaultPref("privacy.restrict3rdpartystorage.heuristic.recently_visited", false);
defaultPref("privacy.restrict3rdpartystorage.heuristic.redirect", false);
defaultPref("privacy.restrict3rdpartystorage.heuristic.window_open", false);
// Enable Containers
defaultPref("privacy.userContext.enabled", true);
// Enable Cookie Banner Reduction
defaultPref("cookiebanners.service.mode", 1);
defaultPref("cookiebanners.service.mode.privateBrowsing", 1);
// Enable Do Not Track & Global Privacy Control
defaultPref("privacy.globalprivacycontrol.enabled", true);
// Enable the (new) UI for browser profiles by default
defaultPref("browser.profiles.enabled", true);
// Disable the UI for containers
defaultPref("privacy.userContext.ui.enabled", false);
// Isolate permissions per container (if containers are enabled)
defaultPref("permissions.isolateBy.userContext", true);
// Isolate resources (ex. referrers & cookies) injected by extensions
defaultPref("privacy.antitracking.isolateContentScriptResources", true);
// Limit maximum cookie lifetime to 6 months/180 days (Like Brave)
defaultPref("network.cookie.maxageCap", 15552000);
// Prevent Firefox from automatically guessing which container to open an external link in
defaultPref("browser.link.force_default_user_context_id_for_external_opens", true);
// Prevent third parties from setting cookies unless the third party already has cookies as a first party (Like Safari)
defaultPref("privacy.dynamic_firstparty.limitForeign", true);
// Restrict tracking referers
defaultPref("network.http.referer.defaultPolicy.trackers", 1);
defaultPref("network.http.referer.defaultPolicy.trackers.pbmode", 1);
// Trim cross-origin referers (Like Safari)
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2);

/*** 023 MISC. SECURITY ***/

// Always warn users before launching other apps
defaultPref("network.protocol-handler.warn-external.mailto", true);
// Decrease the lifetime of extension processes
defaultPref("dom.ipc.keepProcessesAlive.extension", 0);
// Decrease the lifetime of privileged processes for `about:` pages
defaultPref("dom.ipc.keepProcessesAlive.privilegedabout", 0);
// Enable the Cross-Origin-Embedder Policy Header
defaultPref("dom.origin-trials.coep-credentialless.state", 1);
// Enable the Integrity-Policy header
defaultPref("security.integrity_policy.enabled", true);
defaultPref("security.integrity_policy.stylesheet.enabled", true);
// Enable Origin-keyed agent clustering by default (Like Chromium)
defaultPref("dom.origin_agent_cluster.default", true);
// Enforce Per-site Process Isolation + isolate all websites
lockPref("browser.sessionstore.disable_platform_collection", false);
lockPref("fission.autostart", true);
lockPref("fission.autostart.session", true);
lockPref("fission.disableSessionHistoryInParent", false);
lockPref("fission.webContentIsolationStrategy", 1);
defaultPref("gfx.webrender.all", true);
// Enable the Sanitizer API
defaultPref("dom.security.sanitizer.enabled", true);
// Enable socket process sandboxing
defaultPref("security.sandbox.socket.process.level", 1);
// Enable Spectre mitigations for isolated content
defaultPref("javascript.options.spectre.disable_for_isolated_content", false);
// Enforce various important security-related prefs
lockPref("dom.block_external_protocol_in_iframes", true);
lockPref("dom.block_external_protocol_navigation_from_sandbox", true);
lockPref("security.all_resource_uri_content_accessible", false);
lockPref("security.allow_eval_in_parent_process", false);
lockPref("security.allow_eval_with_system_principal", false);
lockPref("security.allow_parent_unrestricted_js_loads", false);
lockPref("security.allow_unsafe_parent_loads", false);
lockPref("security.data_uri.block_toplevel_data_uri_navigations", true);
// Ensure we block old/obsolete libavcodec libraries
lockPref("media.libavcodec.allow-obsolete", false);
// Never expose shell access
lockPref("network.protocol-handler.external.shell", false);
// Prefer to create new content processes, instead of re-using existing ones
defaultPref("browser.tabs.remote.subframesPreferUsed", false);
// Prevent marking JIT code pages as both writable and executable, only one or the other...
defaultPref("javascript.options.content_process_write_protect_code", true);
// Prevent AutoConfig files (if being used) from gaining privileged browser access...
lockPref("general.config.sandbox_enabled", true); // [Nascosta]
// Prevent remoteTypes from triggering process switches they shouldn't be able to...
defaultPref("browser.tabs.remote.enforceRemoteTypeRestrictions", true);
// Protect against CSRF Attacks (Like Chromium)
defaultPref("network.cookie.sameSite.laxByDefault", true);
defaultPref("network.cookie.sameSite.schemeful", true);
// Protect against MIME Exploits
defaultPref("dom.workers.importScripts.enforceStrictMimeType", true);
defaultPref("network.sniff.use_extension", true);
defaultPref("security.block_fileuri_script_with_wrong_mime", true);
// Yes, this is a real pref... 
lockPref("security.turn_off_all_security_so_that_viruses_can_take_over_this_computer", false); // [Nascosta]

/*** 024 MISC. ***/

// Block websites from prompting to display notifications by default
defaultPref("permissions.default.desktop-notification", 2);
// Disable Captive Portal Detection & Connectivity Checks
defaultPref("captivedetect.canonicalURL", "");
defaultPref("network.connectivity-service.DNSv4.domain", "");
defaultPref("network.connectivity-service.DNSv6.domain", "");
defaultPref("network.connectivity-service.IPv4.url", "");
defaultPref("network.connectivity-service.IPv6.url", "");
// Disable Firefox's "Reset/Refresh Profile" prompt
lockPref("browser.disableResetPrompt", true);
// Disable network connectivity status monitoring
defaultPref("network.manage-offline-status", false);
defaultPref("offline.autoDetect", false); // [LINUX] RedHat/Fedora-specific
// Disable network connectivity status monitoring
defaultPref("toolkit.networkmanager.disable", true); // [LINUX] RedHat/Fedora-specific
// Disable network requests to 0.0.0.0
lockPref("network.socket.ip_addr_any.disabled", true);
// Enable Firefox's newer 'Felt privacy' design for Certificate Errors
defaultPref("security.certerrors.felt-privacy-v1", true);
defaultPref("browser.privatebrowsing.felt-privacy-v1", true);
// Limit what events can cause pop-ups
defaultPref("dom.popup_allowed_events", "click dblclick");
// Open links from external programs in new tabs by default
defaultPref("browser.link.open_newwindow.override.external", 3);
// Prevent Safe Mode from automatically starting by default
defaultPref("toolkit.startup.max_resumed_crashes", -1);
// Prevent scripts from moving, resizing, and messing with windows
defaultPref("dom.disable_window_move_resize", true);
// Prevent websites from automatically refreshing
defaultPref("accessibility.blockautorefresh", true);
defaultPref("browser.meta_refresh_when_inactive.disabled", true);
// Reject invalid cookies
defaultPref("extensions.cookie.rejectWhenInvalid", true);
// Show advanced details on pages blocked by Safe Browsing by default
defaultPref("browser.xul.error_pages.show_safe_browsing_details_on_load", true);
// Show 'Always ask' for camera & microphone in the permissions drop-down (when that's what the user chose...)
pref("permissions.media.show_always_ask.enabled", true);

/*** 025 DEBUGGING ***/

// Allow inspecting the browser chrome by default
defaultPref("devtools.chrome.enabled", true);
// Allow inspecting the DOM by default
defaultPref("devtools.dom.enabled", true);
// Allow inspecting/debugging local tabs from `about:debugging` by default
defaultPref("devtools.aboutdebugging.local-tab-debugging", true);
// Always prompt before connecting to Remote Debugging...
lockPref("devtools.debugger.prompt-connection", true);
// Disable annoying "A simpler highlighter can be enabled in the settings..." banner when using developer tools
defaultPref("devtools.inspector.simple-highlighters.message-dismissed", true); // [Nascosta]
// Disable editor onboarding
defaultPref("devtools.webconsole.input.editorOnboarding", false);
// Disable pausing on debugger statements by default
defaultPref("devtools.debugger.pause-on-debugger-statement", false);
// Disable the Remote Debugging Web Socket
lockPref("devtools.debugger.remote-websocket", false);
// Display content scripts injected by extensions when debugging by default
defaultPref("devtools.debugger.show-content-scripts", true);
// Display Web Console timestamps by default
defaultPref("devtools.webconsole.timestampMessages", true);
// Disable WebDriver BiDi experimental commands and events
lockPref("remote.experimental.enabled", false);
// Enable the Web Console sidebar toggle
defaultPref("devtools.webconsole.sidebarToggle", true);
// Pretty print code when debugging by default
defaultPref("devtools.debugger.auto-pretty-print", true);
// Prevent logging URLs in Reader errors
defaultPref("reader.errors.includeURLs", false);
// Prevent WebDriver from overriding preferences by default
defaultPref("remote.prefs.recommended", false);
// Show default/browser styles in the Inspector by default
defaultPref("devtools.inspector.showUserAgentStyles", true);
// Unbreak debugging if `localhost` can't be looked up via DNS [NO-ANDROID]
defaultPref("devtools.debugger.chrome-debugging-host", "127.0.0.1");
// Wrap lines when debugging by default
defaultPref("devtools.debugger.ui.editor-wrapping", true);
// Wrap lines when viewing the source of webpages (via `view-source:`)
defaultPref("view_source.wrap_long_lines", true);

/*** 026 PERFORMANCE ***/

// Compress cached JavaScript bytecode
defaultPref("browser.cache.jsbc_compression_level", 3); // default=0
// Decrease the content notification interval
defaultPref("content.notify.interval", 100000); // default=120000
// Disable certain UI animations by default
defaultPref("sidebar.animation.enabled", false);
defaultPref("ui.panelAnimations", 0); // [Nascosta]
defaultPref("ui.prefersReducedMotion", 1); // [Nascosta] 
defaultPref("ui.swipeAnimationEnabled", 0); // [Nascosta]
// Disable CSS error reporting by default
defaultPref("layout.css.report_errors", false);
// Disable pacing requests
defaultPref("network.http.pacing.requests.enabled", false);
// Disable tab hover previews by default [ 
defaultPref("browser.tabs.hoverPreview.enabled", false);
defaultPref("browser.tabs.hoverPreview.showThumbnails", false);
// Display advanced performance settings at `about:preferences#general` [ 
defaultPref("browser.preferences.defaultPerformanceSettings.enabled", false);
// Enable Branch Hinting
defaultPref("javascript.options.wasm_branch_hinting", true);
// Enable Canvas2D acceleration (if supported)
defaultPref("gfx.canvas.accelerated.cache-items", 8192); // default=8192
defaultPref("gfx.canvas.accelerated.cache-size", 512); // // default=256
// Enable CSS Masonry Layout
defaultPref("layout.css.grid-template-masonry-value.enabled", true);
// Enable SIMD
defaultPref("javascript.options.wasm_relaxed_simd", true);
// Enable VA-API by default [LINUX-ONLY] 
defaultPref("media.ffmpeg.vaapi.enabled", true); // [LINUX]
// Enable the WebRender native compositor (if supported)
defaultPref("gfx.webrender.compositor", true);
// Increase buffering for video playback
defaultPref("media.cache_readahead_limit", 7200); // Default = 3600
defaultPref("media.cache_readahead_limit.cellular", 7200); // Default = 30
defaultPref("media.cache_resume_threshold", 3600); // Default = 1800
defaultPref("media.cache_resume_threshold.cellular", 3600); // Default = 10
defaultPref("media.throttle-cellular-regardless-of-download-rate", false); // [Nascosta]
// Increase the chunk size for calls to image decoders
defaultPref("image.mem.decode_bytes_at_a_time", 65536); // default=16384
// Increase DNS caching
defaultPref("network.dnsCacheExpiration", 3600); // Default = 60
defaultPref("network.dnsCacheExpirationGracePeriod", 240); // Default = 60
defaultPref("network.dnsCacheEntries", 1000); // Default = 800
// Increase the file-backed media cache size for cellular connections
defaultPref("media.cache_size.cellular", 512000); // Default = 32768
// Increase the memory-backed media cache size
defaultPref("media.memory_cache_max_size", 3145728); // default=8192
// Increase the skia font cache size (Like Chromium)
defaultPref("gfx.content.skia-font-cache-size", 20); // default=5
// Increase the maximum number of HTTP connections
defaultPref("network.http.max-connections", 1800); // default=900
defaultPref("network.http.max-persistent-connections-per-proxy", 48); // default=32
defaultPref("network.http.max-persistent-connections-per-server", 10); // default=6
defaultPref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3
// Increase TLS token caching
defaultPref("network.ssl_tokens_cache_capacity", 32768); // default=2048
// Use higher performance pinch-zoom
defaultPref("gfx.webrender.low-quality-pinch-zoom", true);

/*** 027 Nice Stuff ***/

// Allow Picture-in-Picture on all websites, even if they try to block it...
defaultPref("media.videocontrols.picture-in-picture.respect-disablePictureInPicture", false);
// Allow zoom on all websites, even if they try to block it...
defaultPref("browser.ui.zoom.force-user-scalable", true);
// Allow zooming out beyond the initial scale of websites by default
defaultPref("apz.allow_zooming_out", true);
// Allow the use of custom CSS by default
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// Always load bookmarks in new tabs by default
defaultPref("browser.tabs.loadBookmarksInTabs", true);
// Disable annoying Web Speech API errors, especially relevant on Linux
defaultPref("media.webspeech.synth.dont_notify_on_error", true); // [Nascosta]
// Disable fullscreen delay
defaultPref("full-screen-api.transition-duration.enter", "0 0");
defaultPref("full-screen-api.transition-duration.leave", "0 0");
// Display the option to enable `Compact` mode at `Customize toolbar...`
defaultPref("browser.compactmode.show", true);
// Display a spinning animation while websites are loading
defaultPref("browser.spin_cursor_while_busy", true);
// Enable autoscrolling
defaultPref("general.autoScroll", true);
// Enable Backup settings (at `about:preferences#general`)
defaultPref("browser.backup.preferences.ui.enabled", true);
// Enable + customize the new Sidebar by default
defaultPref("browser.toolbarbuttons.introduced.sidebar-button", false);
defaultPref("sidebar.backupState", '{"command":"","launcherWidth":0,"launcherExpanded":false,"launcherVisible":false}');
defaultPref("sidebar.main.tools", "aichat,syncedtabs,history,bookmarks");
defaultPref("sidebar.revamp", true);
defaultPref("sidebar.visibility", "hide-sidebar");
// Enable developer options for `about:profiling`
defaultPref("devtools.performance.aboutprofiling.has-developer-options", true);
// Enable Firefox Labs (`about:preferences#experimental`)
defaultPref("browser.preferences.experimental", true);
lockPref("browser.preferences.experimental.hidden", false);
// Firefox Translations
defaultPref("browser.translations.automaticallyPopup", false);
defaultPref("browser.translations.newSettingsUI.enable", true);
defaultPref("extensions.translations.disabled", false); // [Nascosta]
// Enable Spellcheck for both multi-line and single-line boxes
defaultPref("layout.spellcheckDefault", 2);
// Enable Tab Groups
defaultPref("browser.tabs.groups.enabled", true);
// Enable Taskbar Tabs (PWAs)
defaultPref("browser.taskbarTabs.enabled", true);
// Enable the `Unload Tab` context menu item by default
defaultPref("browser.tabs.unloadTabInContextMenu", true);
// Enable the `View Image Info` context menu item
defaultPref("browser.menu.showViewImageInfo", true);
// Ensure users can always control Nimbus recipes
defaultPref("nimbus.debug", true);
defaultPref("nimbus.validation.enabled", false);
// Hide the Title Bar by default
defaultPref("browser.tabs.inTitlebar", 1);
// Highlight all Findbar (Ctrl + F) results by default
defaultPref("findbar.highlightAll", true);
// Prevent the alt key from toggling menu bar by default
defaultPref("ui.key.menuAccessKeyFocuses", false);
// Prevent displaying Private Browsing windows as separate icons on the Windows Taskbar by default
defaultPref("browser.privateWindowSeparation.enabled", false);
// Prevent including the space next to words when double-clicking/selecting text
defaultPref("layout.word_select.eat_space_to_next_word", false);
// Prevent automatically closing the Bookmarks menu after selecting a bookmark
defaultPref("browser.bookmarks.openInTabClosesMenu", false);

/*** 028 UPDATES ***/

// Ensure the browser's binary is always old enough to check for browser updates [NO-ANDROID]
defaultPref("app.update.checkInstallTime.days", 0);
// Alert users of browser updates ASAP
defaultPref("app.update.badgeWaitTime", 0);
defaultPref("app.update.notifyDuringDownload", true);
defaultPref("app.update.promptWaitTime", 0);
/// Check for browser updates hourly
defaultPref("app.update.background.interval", 3600);
defaultPref("app.update.interval", 3600);
// Check for extension/theme updates hourly
defaultPref("extensions.update.interval", 3600);
// Notify users for extension updates by default
defaultPref("extensions.update.notifyUser", true); // [Nascosta]
// Sync with Remote Settings hourly, rather than the default of only once a day
defaultPref("services.settings.poll_interval", 3600);
defaultPref("browser.phoenix.status", "028");

/* ░█▀█░█▀▀░█▀▀░█░█░█░█░█▀▀░█▀█░█░█ */
/* ░█▀▀░█▀▀░▀▀█░█▀▄░░█░░█▀▀░█░█░▄▀▄ */
/* ░▀░░░▀▀▀░▀▀▀░▀░▀░░▀░░▀░░░▀▀▀░▀░▀ */
// PeskyFox v142

/* usa tasti nativi nella barra del titolo */
defaultPref("widget.gtk.non-native-titlebar-buttons.enabled", true); // [LINUX]

/** FULLSCREEN NOTICE **/
/* disabilita avviso schermo intero */
defaultPref("full-screen-api.warning.delay", -1);
defaultPref("full-screen-api.warning.timeout", 0);

/** NEW TAB PAGE **/
/* non spostare il focus dal searchbox alla barra degli indirizzi */
defaultPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
/* nascondi logo Firefox */
defaultPref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);
/* nascondi sponsorizzazioni */
defaultPref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
defaultPref("browser.newtabpage.activity-stream.showSponsored", false);
defaultPref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

/** TAB BEHAVIOR **/
/* apri risultati di ricerca in una nuova scheda */
defaultPref("browser.search.openintab", true);
defaultPref("browser.urlbar.openintab", true);
/* carica in background le schede aperte da programmi esterni */
defaultPref("browser.tabs.loadDivertedInBackground", true);
/* apre segnalibri in una nuova scheda */
defaultPref("browser.tabs.loadBookmarksInBackground", true);
/* apri nuove schede subito dopo la scheda attuale */
defaultPref("browser.tabs.insertAfterCurrent", true);
/* lascia il browser aperto alla chiusura dell'ultima scheda */
defaultPref("browser.tabs.closeWindowWithLastTab", false);
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

/* ░█▀▀░█▀▀░█▀▀░█░█░█▀▄░█▀▀░█▀▀░█▀█░█░█ */
/* ░▀▀█░█▀▀░█░░░█░█░█▀▄░█▀▀░█▀▀░█░█░▄▀▄ */
/* ░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░░░▀▀▀░▀░▀ */
// SecureFox v142

/** SEARCH / URL BAR **/
/* hide Firefox Suggest label in URL dropdown box */
defaultPref("browser.urlbar.groupLabels.enabled", false);

/* ░█▀█░█▀▄░█░█░█▀▀░█▀█░█▀▀░█▀█░█░█ */
/* ░█▀█░█▀▄░█▀▄░█▀▀░█░█░█▀▀░█░█░▄▀▄ */
/* ░▀░▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░░░▀▀▀░▀░▀ */
// ArkenFox v140

/*** [0100] AVVIO ***/
/* 0106 rimuovere topsites predefiniti */
defaultPref("browser.newtabpage.activity-stream.default.sites", "");

/*** [0300] RACCOLTA DATI ***/
/* 0335 disable Firefox Home (Activity Stream) telemetry */
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);
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

/*** [0800] BARRE DI RICERCA / FORMS ***/
/* 0802 disabilita suggerimenti sponsorizzati nella barra degli indirizzi */
defaultPref("browser.urlbar.quicksuggest.enabled", false);
defaultPref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
defaultPref("browser.urlbar.suggest.quicksuggest.sponsored", false);
/* 0806 disabilita suggerimenti nella barra degli indirizzi */
defaultPref("browser.urlbar.addons.featureGate", false);
defaultPref("browser.urlbar.amp.featureGate", false);
defaultPref("browser.urlbar.fakespot.featureGate", false);
defaultPref("browser.urlbar.mdn.featureGate", false);
defaultPref("browser.urlbar.weather.featureGate", false);
defaultPref("browser.urlbar.wikipedia.featureGate", false);
defaultPref("browser.urlbar.yelp.featureGate", false);

/*** [2800] SHUTDOWN & SANITIZING ***/
/* 2810 previene pulizia dati automatica alla chiusura di Firefox */
pref("privacy.sanitize.sanitizeOnShutdown", false);

/*** [9999] DEPRECATE ***/
// FF142
clearPref("security.OCSP.enabled");
clearPref("security.OCSP.require");

// [FINE]
lockPref("rischio.fox", "142.31");
