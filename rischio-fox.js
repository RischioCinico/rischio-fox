
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
   006: DOWNLOADS
   007: INTERFACCIA
   008: SCHEDE
   009: CREDENZIALI
   010: CONNESSIONI
   011: PROXY
   012: MULTIMEDIA
   013: GEOLOCALIZZAZIONE
   014: PDF
   015: ESTENSIONI
   016: RENDERING
   017: SICUREZZA
   018: PRIVACY
   019: ISOLAMENTO
   
   027: CONTROL
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

// Disabilita l'invio di dati di diagnostica, metriche e telemetria tramite Beacon API
defaultPref("beacon.enabled", false);

// Disabilita l'invio automatico di report ai server esterni
defaultPref("dom.reporting.enabled", false);
defaultPref("dom.reporting.header.enabled", false);

// Disabilita l'invio dei report sulle violazioni della Content Security Policy (CSP) ai server esterni
defaultPref("security.csp.reporting.enabled", false);

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
lockPref("media.videocontrols.picture-in-picture.video-toggle.has-used", true);

// Nascondi badge "New"
lockPref("pdfjs.enableNewBadge", false);
lockPref("browser.tabs.notes.newBadge.enabled", false);
lockPref("browser.tabs.splitview.hasUsed", true);
lockPref("browser.ml.chat.page.footerBadge", false);
lockPref("browser.ml.chat.page.menuBadge", false);

// Disabilita avviso in `about:config`
lockPref("browser.aboutConfig.showWarning", false);

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

// Disabilita messaggio che propone di resettare il profilo
lockPref("browser.disableResetPrompt", true);

// Disabilita l'API Keyboard Lock quando una pagina web è in modalità a schermo intero.
defaultPref("dom.fullscreen.keyboard_lock.enabled", false);

// Impedisce al browser di cercare automaticamente aggiornamenti per i motori di ricerca preinstallati
defaultPref("browser.search.update", false);

/* -----------------------------------------------------------------------------------
   003: AVVIO
   ----------------------------------------------------------------------------------- */

// Disabilita avvio automatico in modalità Safe Mode a seguito di crash
defaultPref("toolkit.startup.max_resumed_crashes", -1);

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
lockPref("browser.urlbar.suggest.addons", false);
lockPref("browser.urlbar.suggest.amp", false);
lockPref("browser.urlbar.suggest.bookmark", false);
lockPref("browser.urlbar.suggest.clipboard", false);
lockPref("browser.urlbar.suggest.history", false);
lockPref("browser.urlbar.suggest.importantDates", false);
lockPref("browser.urlbar.suggest.mdn", false);
lockPref("browser.urlbar.suggest.quickactions", false);
lockPref("browser.urlbar.suggest.realtimeOptIn", false);
lockPref("browser.urlbar.suggest.recentsearches", false);
lockPref("browser.urlbar.suggest.sports", false);
lockPref("browser.urlbar.suggest.topsites", false);
lockPref("browser.urlbar.suggest.trending", false);
lockPref("browser.urlbar.suggest.weather", false);
lockPref("browser.urlbar.suggest.wikipedia", false);
lockPref("browser.urlbar.suggest.yelp", false);
lockPref("browser.urlbar.suggest.yelpRealtime", false);

// FeatureGate
lockPref("browser.search.visualSearch.featureGate", false);
lockPref("browser.urlbar.clipboard.featureGate", false);
lockPref("browser.urlbar.importantDates.featureGate", false);
lockPref("browser.urlbar.recentsearches.featureGate", false);
lockPref("browser.urlbar.richSuggestions.featureGate", false);
lockPref("browser.urlbar.secondaryActions.featureGate", false);
lockPref("browser.urlbar.trending.featureGate", false);
lockPref("browser.urlbar.trustPanel.breachAlerts.featureGate", false);

/* -----------------------------------------------------------------------------------
   005: I/O
   ----------------------------------------------------------------------------------- */

// Disabilita cache su disco
lockPref("browser.cache.disk.enable", false);
lockPref("browser.cache.disk_cache_ssl", false);

// Forza il salvataggio della cache dei contenuti multimediali esclusivamente nella RAM durante la navigazione anonima
lockPref("browser.privatebrowsing.forceMediaMemoryCache", true);

// Aumenta intervallo di tempo minimo tra i salvataggi della sessione (default: 60000)
defaultPref("browser.sessionstore.interval", 1800000);

// Impedisce scrittura dati durante riavvi o crash
defaultPref("browser.sessionstore.privacy_level", 2);

// Disabilita creazione miniature delle pagine web
lockPref("browser.pagethumbnails.capturing_disabled", true);

// Riduce il numero di schede da tenere in "Recently closed tab"
defaultPref("browser.sessionstore.max_tabs_undo", 5);

// Limita la cache delle pagine nella memoria di navigazione indietro/avanti
lockPref("browser.sessionhistory.max_total_viewers", 0);
lockPref("fission.bfcacheInParent", false);

// Disabilita la memorizzazione delle favicon
lockPref("browser.shell.shortcutFavicons", false);

// Disabilita il ripristino dello stato (posizionamento e dimensioni) della finestra del browser
lockPref("browser.restoreWindowState.disabled", true);

// Disabilita il salvataggio e il completamento automatico della cronologia dei moduli e della barra di ricerca
lockPref("browser.formfill.enable", false);

// Disabilita l'aggiornamento e il caricamento locale del database dei traccianti
lockPref("browser.contentblocking.database.enabled", false);

/* -----------------------------------------------------------------------------------
   006: DOWNLOADS
   ----------------------------------------------------------------------------------- */

// Blocca downloads non sicuri
lockPref("dom.block_download_insecure", true);
lockPref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
lockPref("browser.safebrowsing.downloads.remote.block_uncommon", false);
lockPref("browser.download.deletePrivate.chosen", false);

// Forza interazione utente prima dei download
lockPref("browser.download.alwaysOpenPanel", true);
lockPref("browser.download.always_ask_before_handling_new_types", true);

// Impedisce aggiunta dei download ai "recent documents" del sistema operativo
lockPref("browser.download.manager.addToRecentDocs", false);

// Rimuove file temporanei dopo l'apertura con applicazioni esterne
lockPref("browser.helperApps.deleteTempFileOnExit", true);

/* -----------------------------------------------------------------------------------
   007: INTERFACCIA
   ----------------------------------------------------------------------------------- */

// Nasconde barra del titolo
defaultPref("browser.tabs.inTitlebar", 1);

// Abilita nuova Sidebar
defaultPref("sidebar.revamp", true);
lockPref("browser.toolbarbuttons.introduced.sidebar-button", false);

// Disabilita avviso e transizione quando un video passa a schermo intero
lockPref("full-screen-api.warning.timeout", 0);
defaultPref("full-screen-api.transition-duration.enter", "0 0");
defaultPref("full-screen-api.transition-duration.leave", "0 0");

// Mostra "More settings" sulle anteprime di stampa
defaultPref("print.more-settings.open", true);

// Mostra "Also open a new tab" nelle impostazioni di avvio
defaultPref("browser.sessionstore.newTabOnRestore.showSetting", true);

// Mostra "Compact`in "Customize Toolbar"
defaultPref("browser.compactmode.show", true);

// Mostra "View Image Info" nel menu contestuale
defaultPref("browser.menu.showViewImageInfo", true);

// Previene chiusura automatica dei menu quando si apre un segnalibro
defaultPref("browser.bookmarks.openInTabClosesMenu", false);

// Mostra "Always ask" per permessi di camera e microfono
defaultPref("permissions.media.show_always_ask.enabled", true);

// Disabilita fastidioso avviso Web Speech API error
defaultPref("media.webspeech.synth.dont_notify_on_error", true);

// Disabilita fastidioso avviso del traduttore
defaultPref("browser.translations.automaticallyPopup", false);

// Mostra caratteri nascosti
defaultPref("layout.css.control-characters.visible", true);

// Mostra icona per svuotare search boxes
defaultPref("layout.forms.input-type-search.enabled", true);

// Mostra animazione cursore durante caricamenti
defaultPref("browser.spin_cursor_while_busy", true);

// Nasconde logo nei QR code generati con Firefox
defaultPref("browser.shareqrcode.embed_logo", false);

// Mostra maggiori informazioni sulle pagine bloccate da Safe Browsing
defaultPref("browser.xul.error_pages.show_safe_browsing_details_on_load", true);

// Mostra maggiori informazioni nelle pagine "about:"
defaultPref("media.mediacapabilities.from-database", true);
defaultPref("toolkit.aboutProcesses.showAllSubframes", true);
defaultPref("toolkit.aboutProcesses.showThreads", true);

// [PF] Impedisce al puntatore del mouse di nascondersi mentre si digita
defaultPref("widget.gtk.hide-pointer-while-typing.enabled", false); // [LINUX]

/* -----------------------------------------------------------------------------------
   008: SCHEDE
   ----------------------------------------------------------------------------------- */

// Non chiudere finestra del browser quando si chiude l'ultima scheda
defaultPref("browser.tabs.closeWindowWithLastTab", false);

// Apre pagine da applicazioni esterne in nuove schede
defaultPref("browser.link.open_newwindow.override.external", 3);

// Forza apertura pop-ups in nuove schede
defaultPref("browser.link.open_newwindow.restriction", 0);

// Apre segnalibri in una nuova scheda
defaultPref("browser.tabs.loadBookmarksInTabs", true);

// Abilita dissolvenza delle Unloaded Tabs
defaultPref("browser.tabs.fadeOutUnloadedTabs", true);

// Abilita note per le schede
defaultPref("browser.tabs.notes.enabled", true);

// Blocca ricerca degli appunti quando si apre una nuova scheda cliccando con il tasto centrale del mouse
defaultPref("browser.tabs.searchclipboardfor.middleclick", false);

// [PF] Apri le nuove schede in background
defaultPref("browser.tabs.loadDivertedInBackground", true);

// [PF] Apri i segnalibri in background
defaultPref("browser.tabs.loadBookmarksInBackground", true);

// [PF] Apri le nuove schede subito dopo quella attuale
defaultPref("browser.tabs.insertAfterCurrent", true);

// Disabilita l'anteprima delle schede al passaggio del mouse
defaultPref("browser.tabs.hoverPreview.enabled", false);
defaultPref("browser.tabs.hoverPreview.showThumbnails", false);

/* -----------------------------------------------------------------------------------
   009: CREDENZIALI
   ----------------------------------------------------------------------------------- */

// Disabilita l'autocompilazione automatica di username e password
lockPref("signon.autofillForms", false);

// Mostra tasto per rivelare password
defaultPref("layout.forms.reveal-password-button.enabled", true);

// Disabilita la cattura delle credenziali inserite fuori dai moduli HTML standard
defaultPref("signon.privateBrowsingCapture.enabled", false);
defaultPref("signon.formlessCapture.enabled", false);

// Disable password truncation
defaultPref("editor.truncate_user_pastes", false);

// Consente l'autenticazione HTTP per le risorse secondarie solo se sono dello stesso dominio
defaultPref("network.auth.subresource-http-auth-allow", 1);

// Estende i controlli di monitoraggio delle credenziali compromesse all'architettura Fission per i campi di login ad alto valore
defaultPref("fission.highValue.login.monitor", true);

/* -----------------------------------------------------------------------------------
   010: CONNESSIONI
   ----------------------------------------------------------------------------------- */

// Impedisce a Firefox di passare automaticamente alla modalità offline
defaultPref("network.manage-offline-status", false);

// Ritenta HTTP/3 alternando tra IPv4 e IPv6 in caso di errore di connessione
defaultPref("network.http.http3.retry_different_ip_family", true);

// Se una connessione TCP fallisce a metà apertura, ne avvia subito un'altra
defaultPref("network.http.retry_with_another_half_open", true); 

// Mostra subito i dettagli tecnici e il tasto di avanzamento negli errori HTTPS
defaultPref("browser.xul.error_pages.expert_bad_cert", true);

// Mostra il codice d'errore del server invece di una pagina completamente bianca
defaultPref("browser.http.blank_page_with_error_response.enabled", false);

// Segna come non sicura la connessione se il server usa vecchi protocolli di rinegoziazione TLS
defaultPref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Disabilita OCSP
lockPref("security.OCSP.enabled", 0);
lockPref("security.OCSP.require", false);

// Disabilita l'invio di una richiesta HTTP in background per verificare la disponibilità del sito
defaultPref("dom.security.https_only_mode_send_http_background_request", false);

// Disabilita l'invio di Early Data nelle riconnessioni TLS 1.3
defaultPref("network.http.http3.enable_0rtt", false);
defaultPref("security.tls.enable_0rtt_data", false);

// Mostra pulsanti di sblocco nelle pagina d'errore HTTPS
defaultPref("dom.security.https_only_mode_error_page_user_suggestions", true);

// Chiede conferma all'utente prima di seguire un reindirizzamento temporaneo HTTP
defaultPref("network.http.prompt-temp-redirect", true);

// Disabilita preconnect
defaultPref("network.preconnect", false);

// Disabilita l'uso degli identificatori di sessione SSL/TLS (Session IDs)
defaultPref("security.ssl.disable_session_identifiers", true);

/* -----------------------------------------------------------------------------------
   011: PROXY
   ----------------------------------------------------------------------------------- */

// Impedisce connessione diretta a Internet se il proxy configurato smette di funzionare
defaultPref("network.proxy.failover_direct", false);

// Forza la risoluzione dei nomi di dominio (DNS) attraverso il server proxy SOCKS5
defaultPref("network.proxy.socks_remote_dns", true);

/* -----------------------------------------------------------------------------------
   012: MULTIMEDIA
   ----------------------------------------------------------------------------------- */

// Abilita sempre Picture-in-Picture per tutti i tipi di video
defaultPref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);

// Nasconde fastidioso tasto Picture-in-Picture sui video
defaultPref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);

// Blocca riproduzione automatica dei media che non sono stati cliccati direttamente
defaultPref("media.autoplay.blocking_policy", 2);

/* -----------------------------------------------------------------------------------
   013: GEOLOCALIZZAZIONE
   ----------------------------------------------------------------------------------- */

// Usa BeaconDB al posto delle API di Google per la geolocalizzazione
defaultPref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");

// Disabilita Geoclue
defaultPref("geo.provider.use_geoclue", false); // [LINUX]
defaultPref("geo.provider.geoclue.always_high_accuracy", false); // [LINUX]

// Disabilita il rilevamento della regione via IP da parte dei server Mozilla
defaultPref("browser.region.network.url", "");
defaultPref("browser.region.update.enabled", false);
lockPref("doh-rollout.home-region", "");

/* -----------------------------------------------------------------------------------
   014: PDF
   ----------------------------------------------------------------------------------- */

// Disabilita JavaScript nei PDF
defaultPref("pdfjs.enableScripting", false);

// Disabilita accelerazione hardware per il rendering dei PDF
defaultPref("pdfjs.enableWebGPU", false);

// Disabilita XFA
defaultPref("pdfjs.enableXfa", false);

// Disabilita la conversione automatica del testo in link cliccabili
defaultPref("pdfjs.enableAutoLinking", false);

// Apre i link in una nuova scheda
defaultPref("pdfjs.externalLinkTarget", 2);

// Evita che il browser tenti di aprire file sconosciuti come PDF
defaultPref("pdfjs.handleOctetStream", false);

// Aggiorna URL quando cambia la pagina nel lettore PDF
defaultPref("pdfjs.historyUpdateUrl", true);

/* -----------------------------------------------------------------------------------
   015: ESTENSIONI
   ----------------------------------------------------------------------------------- */

// Mostra add-ons nascosti in `about:debugging`
defaultPref("devtools.aboutdebugging.showHiddenAddons", true);

// Limita l'esecuzione delle estensioni solo a quelle nel profilo o integrate
defaultPref("extensions.enabledScopes", 5);

// Chiede sempre conferma manuale all'utente prima di attivare estensioni rilevate nel sistema
defaultPref("extensions.autoDisableScopes", 15);

// Disabilita mozAddonManager
defaultPref("privacy.resistFingerprinting.block_mozAddonManager", true);

// Permette l'installazione delle estensioni unicamente ai domini e alle origini autorizzate
defaultPref("extensions.install_origins.enabled", true);

// Non concedere automaticamente l'accesso a tutti i siti web alle estensioni
defaultPref("extensions.originControls.grantByDefault", false);

// Limita caricamenti di URL non sicuri all'interno dei popup per le estensioni Manifest V2
defaultPref("extensions.manifestV2.actionsPopupURLRestricted", true); 

// Impedisce alle estensioni di aprire popup o pannelli senza un'interazione diretta dell'utente
defaultPref("extensions.openPopupWithoutUserGesture.enabled", false);

// Rimuove qualsiasi estensione dalla lista di quelle autorizzate ad accedere alle API del Gecko Profiler
lockPref("extensions.geckoProfiler.acceptedExtensionIds", "");

// Blocca aggiornamenti per le definizioni dei motori di ricerca
defaultPref("browser.search.searchEnginesURL", "");

/* -----------------------------------------------------------------------------------
   016: RENDERING
   ----------------------------------------------------------------------------------- */

// Restringe la visibilità dei font installati
defaultPref("layout.css.font-visibility", 2);

// Impedisce alle pagine web di ereditare i colori del tema di sistema
defaultPref("widget.non-native-theme.use-theme-accent", false);
defaultPref("ui.use_standins_for_native_colors", true);

// Disabilita rendering di font per lingue complesse / non latine
defaultPref("gfx.font_rendering.graphite.enabled", false);

// Disabilita i font OpenType-SVG (grafica vettoriale SVG integrata nei file dei font)
defaultPref("gfx.font_rendering.opentype_svg.enabled", false);

// Disable rendering nativo di formule matematiche
defaultPref("mathml.disabled", true);

// Disabilita XSLT (trasformazione di documenti XML)
defaultPref("dom.xslt.enabled", false);

/* -----------------------------------------------------------------------------------
   017: SICUREZZA
   ----------------------------------------------------------------------------------- */

// Disabilita GNOME Integration & GIO (GNOME Input/Output)
defaultPref("browser.gnome-search-provider.enabled", false); // [LINUX] 
defaultPref("network.gio.supported-protocols", ""); // [LINUX]

// Impedisce alle pagine in background di richiamare selettori di file nativi del sistema
defaultPref("browser.disable_pickers_in_hidden_extension_pages", true);

// Disabilita completamente i servizi di accessibilità
defaultPref("accessibility.force_disabled", 1);
defaultPref("devtools.accessibility.enabled", false);

// Disabilita il provider di componenti aggiuntivi per i permessi dei siti
defaultPref("dom.sitepermsaddon-provider.enabled", false);

// Abilita la scadenza automatica dei permessi concessi ai siti web se non vengono utilizzati per un certo periodo
defaultPref("permissions.expireUnused.enabled", true);

// Disabilita il supporto di compatibilità per i vecchi componenti interni di Firefox
defaultPref("dom.use_components_shim", false);

// Disabilita l'assegnazione automatica dei permessi di accesso allo storage per i siti di terze parti
defaultPref("dom.storage_access.auto_grants", false);

// Vieta il caricamento di script remoti all'interno delle pagine privilegiate di Firefox (pagine "about:")
defaultPref("security.disallow_privilegedabout_remote_script_loads", true);

// Disabilita l'API Document Picture-in-Picture (Document PiP)
defaultPref("dom.documentpip.enabled", false);

// Mantiene attive le mitigazioni hardware e software contro gli attacchi Spectre per i contenuti isolati
defaultPref("javascript.options.spectre.disable_for_isolated_content", false);

// Abilita i controlli avanzati sulla memoria WebAssembly (Wasm)
defaultPref("javascript.options.wasm_memory_control", true);

// Blocca l'esecuzione di script caricati tramite protocollo file:// se hanno un MIME type errato
defaultPref("security.block_fileuri_script_with_wrong_mime", true);

/* -----------------------------------------------------------------------------------
   018: PRIVACY
   ----------------------------------------------------------------------------------- */

// Abilita Global Privacy Control
lockPref("privacy.globalprivacycontrol.enabled", true);

// Disabilita l'API Battery Status per impedire ai siti web di tracciare il livello di carica e lo stato energetico del dispositivo
defaultPref("dom.battery.enabled", false);

// Limita l'invio dei ping HTML per limitare il tracciamento dei click
defaultPref("browser.send_pings.require_same_host", true);

// Taglia l'URL del Referrer inviato a siti di terze parti mantenendo solo lo schema, l'host e la porta (rimuovendo il percorso e i parametri)
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2);

// Limita la memorizzazione dei cookie e dello storage per i contenuti di terze parti integrati nelle pagine
defaultPref("privacy.dynamic_firstparty.limitForeign", true);

// Disabilita tutte le eccezioni euristiche basate su interazioni recenti o finestre aperte per lo storage di terze parti
defaultPref("privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction", false);
defaultPref("privacy.restrict3rdpartystorage.heuristic.recently_visited_time", 0);

// Applica l'attributo SameSite=Lax di default ai cookie
defaultPref("network.cookie.sameSite.laxByDefault", true);
defaultPref("network.cookie.sameSite.laxByDefaultWarningsForBeta", true);
defaultPref("network.cookie.sameSite.schemeful", true);

/* -----------------------------------------------------------------------------------
   019: ISOLAMENTO
   ----------------------------------------------------------------------------------- */

// Isola le risorse caricate dagli script delle estensioni per evitare il tracciamento tra siti diversi
defaultPref("privacy.antitracking.isolateContentScriptResources", true);

// Isola i permessi dei siti web in base ai Container
defaultPref("permissions.isolateBy.userContext", true);

// Forza l'apertura dei link esterni in arrivo da altre applicazioni nel Container predefinito
defaultPref("browser.link.force_default_user_context_id_for_external_opens", true);

// Forza il raggruppamento predefinito dei documenti in "Origin Agent Clusters" isolati
defaultPref("dom.origin_agent_cluster.default", true);

// Disabilita la preferenza per il riutilizzo dei processi esistenti per i sotto-frame nell'architettura Fission
defaultPref("browser.tabs.remote.subframesPreferUsed", false);

// Forza restrizioni rigorose sui tipi di processo remoti nell'architettura Fission
defaultPref("browser.tabs.remote.enforceRemoteTypeRestrictions", true);

// Imposta il livello massimo di isolamento (sandbox) del processo GPU
defaultPref("security.sandbox.gpu.level", 2);





/* -----------------------------------------------------------------------------------
   027: CONTROL
   ----------------------------------------------------------------------------------- *

// Allow inspecting the browser chrome
defaultPref("devtools.chrome.enabled", true);

// Allow inspecting/debugging local tabs from `about:debugging`
defaultPref("devtools.aboutdebugging.local-tab-debugging", true);

// Prevent middle mouse clicks from pasting clipboard contents
defaultPref("middlemouse.paste", false);

// Permetti CSS personalizzato
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

// Enable autoscrolling
defaultPref("general.autoScroll", true);

// Enable Firefox Translations (ma disabilita il fastidioso pop-up)
defaultPref("browser.ai.control.translations", "enabled");
defaultPref("extensions.translations.disabled", false);

// Enable spellcheck for both multi-line and single-line boxes
defaultPref("layout.spellcheckDefault", 2);

// Limit what events can cause pop-ups
defaultPref("dom.popup_allowed_events", "click dblclick");

/* -----------------------------------------------------------------------------------
   030: PERFORMANCE
   ----------------------------------------------------------------------------------- */

defaultPref("gfx.webrender.all", true);

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
   FINE
   ----------------------------------------------------------------------------------- */

lockPref("rischio.fox", "151.61");
