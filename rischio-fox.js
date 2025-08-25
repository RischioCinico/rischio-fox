
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

/*** Barra Laterale ***/
/* abilita la nuova sidebar */
defaultPref("sidebar.revamp", true);
/* strumenti da visualizzare nella sidebar */
defaultPref("sidebar.main.tools", "aichat,syncedtabs,history,bookmarks");

/*** Funzioni ***/
/* abilita scorrimento automatico */
defaultPref("general.autoScroll", true);
/* attiva gruppi di schede */
defaultPref("browser.tabs.groups.enabled", true);
/* Fork Server https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html#fork-server */
defaultPref("dom.ipc.forkserver.enable", true); // [LINUX]

/*** Fastidi ***/
/* disabilita popup traduttore */
defaultPref("browser.translations.automaticallyPopup", false);
/* mostra sempre controlli picture in picture */
defaultPref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);
/* nascondi barra del titolo */
defaultPref("browser.tabs.inTitlebar", 2);

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
/** TAB UNLOAD **/
defaultPref("browser.low_commit_space_threshold_mb", 3276); // default=200
defaultPref("browser.low_commit_space_threshold_percent", 20); // default=5
defaultPref("browser.tabs.min_inactive_duration_before_unload", 300000); // default=600000

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
// Disable password truncation
defaultPref("editor.truncate_user_pastes", false);
// Disable SPNEGO
defaultPref("network.negotiate-auth.allow-proxies", false);
// Enable anti-spoof confirmation prompts
defaultPref("network.auth.confirmAuth.enabled", true);

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


/* ░█▀█░█▀▀░█▀▀░█░█░█░█░█▀▀░█▀█░█░█ */
/* ░█▀▀░█▀▀░▀▀█░█▀▄░░█░░█▀▀░█░█░▄▀▄ */
/* ░▀░░░▀▀▀░▀▀▀░▀░▀░░▀░░▀░░░▀▀▀░▀░▀ */
// PeskyFox v142

/** MOZILLA UI **/
/* mostra profili */
defaultPref("browser.profiles.enabled", true);
/* usa tasti nativi nella barra del titolo */
defaultPref("widget.gtk.non-native-titlebar-buttons.enabled", true); // [LINUX]

/** THEME ADJUSTMENTS **/
/* abilita css e stili personalizzati */
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
/* mostra modalità compatta nelle opzioni */
defaultPref("browser.compactmode.show", true);

/** AI **/
defaultPref("browser.ml.enabled", false);
defaultPref("browser.ml.chat.enabled", false);

/** FULLSCREEN NOTICE **/
/* rimuove ritardo schermo intero */
defaultPref("full-screen-api.transition-duration.enter", "0 0");
defaultPref("full-screen-api.transition-duration.leave", "0 0");
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

/* ░█▀▀░█▀▀░█▀▀░█░█░█▀▄░█▀▀░█▀▀░█▀█░█░█ */
/* ░▀▀█░█▀▀░█░░░█░█░█▀▄░█▀▀░█▀▀░█░█░▄▀▄ */
/* ░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░░░▀▀▀░▀░▀ */
// SecureFox v142

/** TRACKING PROTECTION  **/
/* Global Privacy Control (GPC) */
defaultPref("privacy.globalprivacycontrol.enabled", true);

/** SEARCH / URL BAR **/
/* hide Firefox Suggest label in URL dropdown box */
defaultPref("browser.urlbar.groupLabels.enabled", false);

/** MOZILLA & TELEMETRIA **/
/* use alternative geolocation service instead of Google */
defaultPref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");

/* ░█▀█░█▀▄░█░█░█▀▀░█▀█░█▀▀░█▀█░█░█ */
/* ░█▀█░█▀▄░█▀▄░█▀▀░█░█░█▀▀░█░█░▄▀▄ */
/* ░▀░▀░▀░▀░▀░▀░▀▀▀░▀░▀░▀░░░▀▀▀░▀░▀ */
// ArkenFox v140

/*** [0100] AVVIO ***/
/* 0106 rimuovere topsites predefiniti */
defaultPref("browser.newtabpage.activity-stream.default.sites", "");

/*** [0200] GEOLOCALIZZAZIONE ***/
/* 0202 disabilita utilizzo del servizio di geolocalizzazione del sistema */
defaultPref("geo.provider.use_geoclue", false); // [LINUX]

/*** [0300] RACCOLTA DATI ***/
/* 0335 disable Firefox Home (Activity Stream) telemetry */
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);
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

/*** [0900] PASSWORDS ***/
/* 0905 limita (o disabilita) autenticazione HTTP */
defaultPref("network.auth.subresource-http-auth-allow", 1);

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
/* 2003 utilizza una singola interfaccia di rete per ICE */
defaultPref("media.peerconnection.ice.default_address_only", true);

/*** [2400] DOM (DOCUMENT OBJECT MODEL) ***/
/* 2402 impedisci agli scripts di spostare e ridimensionare finestre */
defaultPref("dom.disable_window_move_resize", true);

/*** [2600] MISTO ***/
/* 2620 disabilita PDFJS */
defaultPref("pdfjs.enableScripting", false);
/* 2640: disable CSP Level 2 Reporting */
defaultPref("security.csp.reporting.enabled", false);

/** EXTENSIONS **/
/* 2661 disabilita prompt di installazione esterni */
defaultPref("extensions.postDownloadThirdPartyPrompt", false);

/*** [2800] SHUTDOWN & SANITIZING ***/
/* 2810 previene pulizia dati automatica alla chiusura di Firefox */
pref("privacy.sanitize.sanitizeOnShutdown", false);

/*** [4500] RFP (ResistFingerPrinting) ***/
/* 4503 disabilita mozAddonManager Web API */
defaultPref("privacy.resistFingerprinting.block_mozAddonManager", true);
/* 4513 obbliga a rispettare "browser.link.open_newwindow" (4512) */
defaultPref("browser.link.open_newwindow.restriction", 0);

/*** [5000] OPSEC ***/
/* 5009 disabilita "apri con" per i download */
defaultPref("browser.download.forbid_open_with", true);
/* 5017 disabilita compilazione automatica form */
defaultPref("extensions.formautofill.addresses.enabled", false);
defaultPref("extensions.formautofill.creditCards.enabled", false);
/* 5018 limita eventi che possono aprire popup */
defaultPref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");

/*** 7002 blocca richieste permessi (è possibile dare manualmente i permessi ai siti visitati) */
defaultPref("permissions.default.geo", 2);
defaultPref("permissions.default.camera", 2);
defaultPref("permissions.default.microphone", 2);
defaultPref("permissions.default.desktop-notification", 2);

/*** [9000] NON-PROJECT RELATED ***/
/* 9002 disable General>Browsing>Recommend extensions/features as you browse */
defaultPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
defaultPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

/*** [9999] DEPRECATE ***/
// FF142
lockPref("security.OCSP.enabled", 0);
lockPref("security.OCSP.require", false);

// [FINE]
lockPref("rischio.fox", "142.18");
