
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

/* -----------------------------------------------------------------------------------
   RACCOLTA DATI
   ----------------------------------------------------------------------------------- */

// Blocca telemetria (disattivata anche in policies.json)
lockPref("toolkit.telemetry.server", "data:,");
lockPref("toolkit.telemetry.coverage.opt-out", true);
lockPref("toolkit.coverage.opt-out", true);
lockPref("toolkit.coverage.endpoint.base", "");

// Blocca la telemetria legata alla homepage
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);

// Blocca Crash Reports
lockPref("breakpad.reportURL", "");
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
lockPref("browser.crashReports.unsubmittedCheck.enabled", false);

// Blocca l'invio automatico a Mozilla dei dati di profilazione
lockPref("toolkit.aboutLogging.uploadProfileToCloud", false);

// Blocca Origin Trials
lockPref("dom.origin-trials.enabled", false);

// Rimuove stringhe di identificazione
lockPref("app.distributor", "");
lockPref("app.distributor.channel", "");
lockPref("mozilla.partner.id", "");

// Disabilita Web Compatibility Reporter
lockPref("extensions.webcompat-reporter.enabled", false);
lockPref("ui.new-webcompat-reporter.enabled", false);

// Impedisce la creazione di registri dei domini bloccati
lockPref("browser.contentblocking.cfr-milestone.enabled", false);
lockPref("browser.contentblocking.cfr-milestone.milestone-shown-time", "999999999"); // [Nascosta]
lockPref("browser.contentblocking.cfr-milestone.update-interval", 0); // [Nascosta]
lockPref("browser.contentblocking.database.enabled", false);

/* -----------------------------------------------------------------------------------
   TRACCE SU DISCO
   ----------------------------------------------------------------------------------- */

// Abilita la cancellazione dei dati alla chiusura di Firefox
lockPref("privacy.sanitize.sanitizeOnShutdown", true);

// Elimina la cache e previene l'eliminazione accidentale di altri dati
lockPref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", false);
lockPref("privacy.clearOnShutdown_v2.cache", true);
lockPref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);
lockPref("privacy.clearOnShutdown_v2.formdata", false);
lockPref("privacy.clearOnShutdown_v2.siteSettings", false);

// Disabilita cache su disco
lockPref("browser.cache.disk.enable", false);
lockPref("browser.cache.disk_cache_ssl", false);

// Diminuisce il numero di salvataggi delle schede chiuse
lockPref("browser.sessionstore.max_tabs_undo", 5);

// Disabilita la cache Indietro/Avanti (bfcache)
lockPref("browser.sessionhistory.max_total_viewers", 0);
lockPref("fission.bfcacheInParent", false);

// Disabilita la generazione di miniature delle pagine
lockPref("browser.pagethumbnails.capturing_disabled", true); // [Nascosta]

// Disabilita la cronologia di ricerca e dei moduli
defaultPref("browser.formfill.enable", false);

// Limita lo storage temporaneo (es. IndexedDB)
lockPref("dom.quotaManager.temporaryStorage.fixedLimit", 52428800);

// Aumenta l'intervallo di salvataggio automatico della sessione per ridurre le scritture su disco
defaultPref("browser.sessionstore.interval", 300000); // 5 minuti

// Impedisce il salvataggio di dati extra e non necessari nella sessione
lockPref("browser.sessionstore.privacy_level", 2);

// Impedisce la scrittura della cache multimediale su disco nelle finestre private
lockPref("browser.privatebrowsing.forceMediaMemoryCache", true);

/* -----------------------------------------------------------------------------------
   FILE SCARICATI
   ----------------------------------------------------------------------------------- */

// Massimizza il controllo dell'utente sui download
lockPref("browser.download.useDownloadDir", false);
lockPref("browser.download.always_ask_before_handling_new_types", true);

// Gestisce i file temporanei per evitare tracce
lockPref("browser.download.start_downloads_in_tmp_dir", true);
lockPref("browser.helperApps.deleteTempFileOnExit", true);

// Previene l'aggiunta di tracce al sistema e alla cronologia del browser
lockPref("browser.download.manager.addToRecentDocs", false);
lockPref("browser.download.clearHistoryOnDelete", 2);

// Impedisci apertura automatica finestra download
lockPref("browser.download.alwaysOpenPanel", false);

/* -----------------------------------------------------------------------------------
   ELEMENTI FASTIDIOSI
   ----------------------------------------------------------------------------------- */

// Disabilita avviso schermo intero
lockPref("full-screen-api.warning.delay", -1);
lockPref("full-screen-api.warning.timeout", 0);

// Blocca pop-up presentazione blocco dei banner dei cookie
lockPref("cookiebanners.ui.desktop.showCallout", false);

// Blocca pop-up di avviso quando Firefox NON è il browser predefinito
lockPref("browser.shell.skipDefaultBrowserCheckOnFirstRun", true);

// Blocca avviso se Firefox non è il lettore PDF predefinito
lockPref("browser.shell.checkDefaultPDF", false); // [Nascosta]

/* -----------------------------------------------------------------------------------
   TRACKING PROTECTION
   ----------------------------------------------------------------------------------- */

// Abilita Enhanced Tracking Protection
lockPref("browser.contentblocking.category", "strict");

// Applica eccezioni per evitare malfunzionamenti delle pagine
defaultPref("privacy.trackingprotection.allow_list.baseline.enabled", true);
defaultPref("privacy.trackingprotection.allow_list.convenience.enabled", true);

// Salta automaticamente i banner di consenso dei cookie
defaultPref("privacy.trackingprotection.consentmanager.skip.enabled", true);
defaultPref("privacy.trackingprotection.consentmanager.skip.pbmode.enabled", true);

// Abilita Bounce Tracking Protection
lockPref("privacy.bounceTrackingProtection.requireStatefulBounces", false);

// Abbassa la priorità di rete per i tracker, velocizzando il caricamento della pagina
lockPref("privacy.trackingprotection.lower_network_priority", true);

/* -----------------------------------------------------------------------------------
   FINGERPRINTING
   ----------------------------------------------------------------------------------- */

// Disabilita l'uso delle proprietà di contesto SVG per prevenire il fingerprinting
lockPref("svg.context-properties.content.allowed-domains", "");

// Impedisce l'esposizione delle informazioni del renderer WebGL
lockPref("webgl.enable-renderer-query", false);
lockPref("webgl.override-unmasked-vendor", "Mozilla");
lockPref("webgl.sanitize-unmasked-renderer", true);

// Non usare colori di sistema
lockPref("widget.non-native-theme.use-theme-accent", false);
lockPref("browser.display.use_system_colors", false);
lockPref("ui.use_standins_for_native_colors", true);

// Reimposta ogni giorno la chiave di randomizzazione dell'impronta digitale (in aggiunta al reset per sessione e al riavvio del browser)
lockPref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
lockPref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);

// Arrotonda le dimensioni della finestra per prevenire il tracciamento
lockPref("privacy.window.maxInnerHeight", 900);
lockPref("privacy.window.maxInnerWidth", 1600);

// Disabilita i selettori CSS per i link visitati per prevenire il "history sniffing"
lockPref("layout.css.visited_links_enabled", false);

/* -----------------------------------------------------------------------------------
   CONNESIONI SICURE
   ----------------------------------------------------------------------------------- */

// Avvisa sempre sulle connessioni non sicure (HTTP)
lockPref("security.insecure_connection_text.enabled", true);
lockPref("security.insecure_connection_text.pbmode.enabled", true);

// Blocca le negoziazioni di connessione insicure per prevenire gli attacchi di "downgrade"
lockPref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Avvisa sempre quando si invia un modulo da HTTP a HTTPS, anche su IP locali
lockPref("security.insecure_field_warning.ignore_local_ip_address", false);

// Disabilita l'importazione automatica dei certificati del sistema operativo
defaultPref("security.osclientcerts.autoload", false);

// Disabilita i cifrari obsoleti e non sicuri basati su SHA-1
defaultPref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
defaultPref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);

// Disabilita l'invio di richieste HTTP in background nella modalità Solo HTTPS
defaultPref("dom.security.https_only_mode_send_http_background_request", false);

// Disabilita i certificati root di terze parti a livello di sistema operativo per prevenire gli attacchi MITM
lockPref("security.certerrors.mitm.auto_enable_enterprise_roots", false);
lockPref("security.enterprise_roots.enabled", false);

// Assicura che HTTP/3 non venga disabilitato in presenza di certificati root di terze parti
defaultPref("network.http.http3.disable_when_third_party_roots_found", false);

// Disabilita TLS 1.3 0-RTT per prevenire attacchi
defaultPref("network.http.http3.enable_0rtt", false);
defaultPref("security.tls.enable_0rtt_data", false);

// Abilita i controlli di revoca CRLite e dà loro la priorità su OCSP
defaultPref("security.pki.crlite_mode", 2);
defaultPref("security.remote_settings.crlite_filters.enabled", true);

// Disabilita completamente i controlli di revoca OCSP (obsoleto)
lockPref("security.ocsp.enabled", 0);
lockPref("security.OCSP.require", false);

// Fornisce una protezione extra bloccando completamente le connessioni in caso di mancata corrispondenza del certificato
defaultPref("security.cert_pinning.enforcement_level", 2);

// Impone l'uso di HTTPS il più possibile, anche per indirizzi locali
defaultPref("dom.security.https_first_for_local_addresses", true);
defaultPref("dom.security.https_first_for_unknown_suffixes", true);
lockPref("dom.security.https_only_mode", true);
defaultPref("dom.security.https_only_mode.upgrade_local", true);
lockPref("dom.security.https_only_mode_pbm", true);

// Impedisci che i domini vengano esclusi automaticamente dalla modalità Solo HTTPS
defaultPref("dom.security.https_first_add_exception_on_failure", false);

// Consenti solo override temporanei per gli errori del certificato (per sessione)
defaultPref("security.certerrors.permanentOverride", false);

// Richiede negoziazioni sicure della connessione
defaultPref("security.ssl.require_safe_negotiation", true);

// Mostra informazioni tecniche dettagliate sulle pagine di errore
defaultPref("browser.xul.error_pages.expert_bad_cert", true);

/* -----------------------------------------------------------------------------------
   CONNESIONI IMPLICITE
   ----------------------------------------------------------------------------------- */

// Disabilita Early Hints (come in Cromite)
lockPref("network.early-hints.enabled", false);
lockPref("network.early-hints.over-http-v1-1.enabled", false);
lockPref("network.early-hints.preconnect.enabled", false);
lockPref("network.early-hints.preconnect.max_connections", 0);

// Impedisci che il clic con il tasto centrale del mouse su una nuova scheda apra URL
lockPref("browser.tabs.searchclipboardfor.middleclick", false);

/* -----------------------------------------------------------------------------------
   BARRE DI RICERCA
   ----------------------------------------------------------------------------------- */

// Disabilita "suggerimenti avanzati" nella barra degli indirizzi
defaultPref("browser.search.param.search_rich_suggestions", "");

// Consenti l'uso di un motore di ricerca diverso nelle finestre normali e private
lockPref("browser.search.separatePrivateDefault.ui.enabled", true);

// Mostra sempre il Punycode
lockPref("network.IDN_show_punycode", true);

// Disabilita l'autocompletamento degli URL
lockPref("browser.urlbar.autoFill", false);

// Disabilita i suggerimenti dagli appunti
defaultPref("browser.urlbar.clipboard.featureGate", false);
defaultPref("browser.urlbar.suggest.clipboard", false);

// Disabilita i suggerimenti della cronologia
defaultPref("browser.urlbar.suggest.history", false);

// Disabilita le azioni rapide
defaultPref("browser.urlbar.quickactions.showPrefs", true);
defaultPref("browser.urlbar.secondaryActions.featureGate", true);
defaultPref("browser.urlbar.shortcuts.actions", false);
defaultPref("browser.urlbar.suggest.quickactions", false);

// Disabilita l'onboarding delle azioni rapide
defaultPref("browser.urlbar.quickactions.timesToShowOnboardingLabel", 0);

// Disabilita i suggerimenti di ricerca recenti
defaultPref("browser.urlbar.recentsearches.featureGate", false);
defaultPref("browser.urlbar.suggest.recentsearches", false);

// Disabilita i suggerimenti del motore di ricerca (Tab to search)
defaultPref("browser.urlbar.suggest.engines", false);

// Disabilita l'onboarding dei suggerimenti del motore di ricerca (Tab to search)
defaultPref("browser.urlbar.tabToSearch.onboard.interactionsLeft", 0);

// Disabilita i suggerimenti di ricerca per impostazione predefinita
defaultPref("browser.search.suggest.enabled", false);
defaultPref("browser.urlbar.showSearchSuggestionsFirst", false);
defaultPref("browser.urlbar.suggest.searches", false);

// Disabilita i suggerimenti di ricerca
defaultPref("browser.urlbar.searchTips.test.ignoreShowLimits", false);
lockPref("browser.urlbar.tipShownCount.searchTip_onboard", 999);
lockPref("browser.urlbar.tipShownCount.searchTip_redirect", 999);

// Disabilita le ricerche di tendenza
defaultPref("browser.urlbar.suggest.trending", false);
defaultPref("browser.urlbar.trending.featureGate", false);

// Disabilita il taglio degli URL
lockPref("browser.urlbar.trimHttps", false);
lockPref("browser.urlbar.trimURLs", false);

// Visualizza la barra di ricerca in `Personalizza la barra degli strumenti...`
defaultPref("browser.search.widget.inNavBar", true);

// Abilita i suggerimenti dei segnalibri per impostazione predefinita 
defaultPref("browser.urlbar.suggest.bookmark", false);

// Abilita il risultato "Cerca in finestra privata" per impostazione predefinita
lockPref("browser.search.separatePrivateDefault.urlbarResult.enabled", true);

// Disabilita i suggerimenti di collegamento rapido per impostazione predefinita
defaultPref("browser.urlbar.suggest.topsites", false);

// Assicura che il motore di ricerca predefinito sia impostato su DuckDuckGo
defaultPref("browser.urlbar.placeholderName", "DuckDuckGo");
defaultPref("browser.urlbar.placeholderName.private", "DuckDuckGo");

// Mostra l'interfaccia utente per cambiare motore di ricerca per singole ricerche
lockPref("browser.urlbar.scotchBonnet.disableOneOffs", false);

// Mostra URL completi invece di termini di ricerca
defaultPref("browser.urlbar.restyleSearches", false);
defaultPref("browser.urlbar.showSearchTerms.enabled", false);
defaultPref("browser.urlbar.showSearchTerms.featureGate", false);

// Usa lo stesso motore di ricerca per impostazione predefinita nelle finestre di navigazione normale e privata
defaultPref("browser.search.separatePrivateDefault", true);

/* -----------------------------------------------------------------------------------
   DNS
   ----------------------------------------------------------------------------------- */

// Abilita DNS over HTTPS (DoH) senza fallback
lockPref("network.trr.mode", 3);

// Imposta Quad9 come provider DoH (versione senza EDNS Client Subnet per massima privacy)
defaultPref("network.trr.uri", "https://dns10.quad9.net/dns-query");

// Disabilita completamente il prefetch DNS non richiesto
lockPref("network.dns.disablePrefetch", true);
lockPref("network.dns.disablePrefetchFromHTTPS", true);

// Disabilita il caching delle risposte DNS
lockPref("network.dnsCacheEntries", 0);

// Disabilita i controlli di connettività DoH di Firefox
lockPref("network.connectivity-service.DNS_HTTPS.domain", "");
lockPref("network.trr.confirmationNS", "skip");
lockPref("network.trr.skip-check-for-blocked-host", true);

// Disabilita il fallback automatico al DNS di sistema non cifrato
lockPref("network.trr.strict_native_fallback", true);

// Disabilita i "listener" di rete che aggiornano le impostazioni dal sistema operativo
lockPref("network.notify.changed", false);
lockPref("network.notify.checkForNRPT", false);
lockPref("network.notify.checkForProxies", false);
lockPref("network.notify.dnsSuffixList", false);
lockPref("network.notify.initial_call", false);
lockPref("network.notify.IPv6", false);
lockPref("network.notify.resolvers", false);

// Risolvi i problemi di connettività IPv6 quando il DoH è abilitato
lockPref("network.dns.preferIPv6", true);

// Impedisci il bypass del DoH per le voci del file hosts
lockPref("network.trr.exclude-etc-hosts", false);

/* -----------------------------------------------------------------------------------
   PROXY
   ----------------------------------------------------------------------------------- */

// Impedisci il failover automatico a connessioni dirette (non-proxy)
lockPref("network.proxy.failover_direct", false);

// Impedisci di bypassare il proxy anche quando il sistema lo richiede
lockPref("network.proxy.allow_bypass", false);

// Usa il proxy per la risoluzione DNS remota (previene i DNS leaks)
lockPref("network.proxy.socks_remote_dns", true);

// Disabilita la gestione dei percorsi di sistema (es. file:///net)
lockPref("network.file.path_blacklist", "/net");

// Disabilita i percorsi UNC di Windows per prevenire il rischio di perdite di dati
lockPref("network.file.disable_unc_paths", true);

/* -----------------------------------------------------------------------------------
   WEBRTC
   ----------------------------------------------------------------------------------- */

// Previene i WebRTC IP leaks forzando l'uso del proxy
lockPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// Avvisa l'utente quando cambia scheda durante la condivisione dello schermo
lockPref("privacy.webrtc.sharedTabWarning", true);

// Disabilita l'indicatore globale WebRTC
lockPref("privacy.webrtc.hideGlobalIndicator", true);

/* -----------------------------------------------------------------------------------
   CONTENUTI MULTIMEDIALI
   ----------------------------------------------------------------------------------- */

// Blocca la riproduzione automatica dei contenuti multimediali
lockPref("media.autoplay.default", 5);

// Disabilita i plugin multimediali obsoleti (es. OpenH264)
lockPref("media.gmp-gmpopenh264.enabled", false);
lockPref("media.gmp.insecure.allow", false);
defaultPref("media.gmp-gmpopenh264.provider.enabled", false); // [LINUX] (per Fedora)

// Disabilita la registrazione dei log per i plugin multimediali
defaultPref("media.gmp.log.level", 70);

// Abilita la decodifica hardware per i video H.264
defaultPref("media.webrtc.hw.h264.enabled", true);

// Abilita i DRM
defaultPref("media.eme.enabled", true);
defaultPref("media.eme.require-app-approval", true);

/* -----------------------------------------------------------------------------------
   SICUREZZA AVANZATA
   ----------------------------------------------------------------------------------- */

// Disabilita i font Graphite & SVG OpenType
defaultPref("gfx.font_rendering.graphite.enabled", false);
defaultPref("gfx.font_rendering.opentype_svg.enabled", false);

// Disabilita MathML
defaultPref("mathml.disabled", true);

// Disabilita WebVR/WebXR
defaultPref("permissions.default.xr", 2);

// Disabilita ASM.JS
defaultPref("javascript.options.asmjs", false);

// Disabilita SharedArrayBuffer con COOP/COEP
defaultPref("dom.postMessage.sharedArrayBuffer.withCOOP_COEP", false);

// Disabilita il JIT per estensioni e contenuti locali
defaultPref("javascript.options.jit_trustedprincipals", false);

// Disabilita il JIT di ottimizzazione per WebAssembly
defaultPref("javascript.options.wasm_optimizingjit", false);

/* -----------------------------------------------------------------------------------
   GESTIONE CREDENZIALI
   ----------------------------------------------------------------------------------- */

// Mostra sempre il pulsante "Mostra Password"
defaultPref("layout.forms.reveal-password-button.enabled", true);

// Disabilita Autofill per maggiore sicurezza
lockPref("signon.autofillForms", false);

// Disabilita il Password Manager per il riempimento di indirizzi e carte di credito
lockPref("extensions.formautofill.addresses.enabled", false);
lockPref("extensions.formautofill.creditCards.enabled", false);

// Disabilita l'autenticazione Basic su HTTP
lockPref("network.http.basic_http_auth.enabled", false);

// Disabilita la cattura credenziali al di fuori dei form di login
lockPref("signon.formlessCapture.enabled", false);

// Disabilita NTLM
lockPref("network.automatic-ntlm-auth.allow-proxies", false);

// Impedisci la troncatura di testo incollato
defaultPref("editor.truncate_user_pastes", false);

// Disabilita SPNEGO
lockPref("network.negotiate-auth.allow-proxies", false);

// Abilita i prompt di conferma per l'autenticazione
lockPref("network.auth.confirmAuth.enabled", true);

// Impedisci che le risorse interne aprano dialoghi di autenticazione HTTP
lockPref("network.auth.subresource-http-auth-allow", 1);

// Disable Microsoft SSO
defaultPref("network.http.microsoft-entra-sso.container-enabled.0", false);
defaultPref("network.microsoft-sso-authority-list", "");






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
lockPref("privacy.donottrackheader.enabled", true);
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
defaultPref("network.connectivity-service.enabled", false);
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
defaultPref("gfx.canvas.accelerated.cache-size", 512); // default=256
// Enable CSS Masonry Layout
defaultPref("layout.css.grid-template-masonry-value.enabled", true);
// Enable SIMD
defaultPref("javascript.options.wasm_relaxed_simd", true);
// Enable VA-API by default
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
// Check for browser updates hourly
defaultPref("app.update.background.interval", 3600);
defaultPref("app.update.interval", 3600);
// Check for extension/theme updates hourly
defaultPref("extensions.update.interval", 3600);
// Notify users for extension updates by default
defaultPref("extensions.update.notifyUser", true); // [Nascosta]
// Sync with Remote Settings hourly, rather than the default of only once a day
defaultPref("services.settings.poll_interval", 3600);
defaultPref("browser.phoenix.status", "028");

/*** 029 FIREFOX HOME ***/

// AccuWeather
defaultPref("browser.newtabpage.activity-stream.system.showWeather", true);
// Disable Contile (Sponsored tiles)
lockPref("browser.topsites.contile.enabled", false);
lockPref("browser.topsites.contile.endpoint", "");
lockPref("browser.topsites.contile.sov.enabled", false);
// Disable Fakespot
defaultPref("browser.newtabpage.activity-stream.discoverystream.contextualContent.fakespot.enabled", false);
defaultPref("browser.newtabpage.activity-stream.discoverystream.contextualContent.feeds", "need_to_know");
// Disable fetching favicons remotely from Mozila's remote Tippy Top service
defaultPref("browser.newtabpage.activity-stream.feeds.favicon", false);
// Disable fetching locale/fluent files remotely
defaultPref("browser.newtabpage.activity-stream.asrouter.useRemoteL10n", false);
// Disable fetching top sites remotely
defaultPref("browser.topsites.useRemoteSetting", false);
// Disable hiding URLs with certain parameters from Top Sites by default
defaultPref("browser.newtabpage.activity-stream.hideTopSitesWithSearchParam", "");
// Disable Firefox Sync first run/promotion and metrics
defaultPref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
// Disable impression stats
lockPref("browser.urlbar.quicksuggest.impressionCaps.nonSponsoredEnabled", false);
lockPref("browser.urlbar.quicksuggest.impressionCaps.sponsoredEnabled", false);
// Disable MARS (Mozilla Ad Routing Service)
lockPref("browser.newtabpage.activity-stream.discoverystream.reportAds.enabled", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.sections.contextualAds.enabled", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.sections.contextualAds.locale-config", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.sections.contextualAds.region-config", "");
lockPref("browser.newtabpage.activity-stream.feeds.adsfeed", false);
lockPref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.enabled", false);
lockPref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.spocs.enabled", false);
lockPref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.tiles.enabled", false);
lockPref("browser.newtabpage.activity-stream.unifiedAds.enabled", false);
lockPref("browser.newtabpage.activity-stream.unifiedAds.endpoint", "");
lockPref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled", false);
lockPref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", false);
// Disable Messaging Providers
lockPref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "null");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "null");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "null");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "null");
lockPref("browser.newtabpage.activity-stream.feeds.newtabmessaging", false);
lockPref("messaging-system.askForFeedback", false);
// Disable mobile promotions
lockPref("browser.newtabpage.activity-stream.mobileDownloadModal.enabled", false);
lockPref("browser.newtabpage.activity-stream.mobileDownloadModal.variant-a", false);
lockPref("browser.newtabpage.activity-stream.mobileDownloadModal.variant-b", false);
lockPref("browser.newtabpage.activity-stream.mobileDownloadModal.variant-c", false);
// Disable onboarding
lockPref("browser.newtabpage.activity-stream.discoverystream.onboardingExperience.dismissed", true);
lockPref("browser.newtabpage.activity-stream.discoverystream.onboardingExperience.enabled", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.topicSelection.onboarding.enabled", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.topicSelection.onboarding.maybeDisplay", false);
// Disable Pocket
defaultPref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCard.enabled", false);
defaultPref("browser.newtabpage.activity-stream.discoverystream.sendToPocket.enabled", false);
defaultPref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
defaultPref("browser.newtabpage.activity-stream.showRecentSaves", false);
// Disable Pocket sponsored stories
lockPref("browser.newtabpage.activity-stream.discoverystream.ctaButtonSponsors", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.placements.spocs", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.placements.spocs.counts", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.spocs-endpoint", "data;");
lockPref("browser.newtabpage.activity-stream.discoverystream.spocs-endpoint-query", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.spocAdTypes", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.spocMessageVariant", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.spocSiteId", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.sponsored-collections.enabled", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.spoc-positions", "");
lockPref("browser.newtabpage.activity-stream.showSponsored", false);
lockPref("browser.newtabpage.activity-stream.system.showSponsored", false);
// Disable recent activity by default [NO-ANDROID] [NO-MAIL]
defaultPref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
defaultPref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
defaultPref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
// Disable sponsored shortcuts
lockPref("browser.newtabpage.activity-stream.discoverystream.spoc-topsites-positions", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesAdTypes", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesPlacement.enabled", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesZoneIds", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.spocZoneIds", "");
lockPref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
// Disable stories
defaultPref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
defaultPref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
// Disable Telemetry
lockPref("browser.contextual-services.contextId", "{foo-123-foo}");
lockPref("browser.engagement.search_counts.pbm", false);
lockPref("ry", false);
lockPref("browser.newtabpage.activity-stream.telemetry.privatePing.enabled", false);
lockPref("browser.newtabpage.activity-stream.telemetry.privatePing.inferredInterests.enabled", false);
lockPref("browser.newtabpage.activity-stream.telemetry.privatePing.redactNewtabPing.enabled", true);
lockPref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
lockPref("browser.newtabpage.activity-stream.telemetry.surfaceId", "");
lockPref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
lockPref("browser.newtabpage.ping.enabled", false);
lockPref("browser.places.interactions.enabled", false);
lockPref("browser.places.interactions.log", false);
lockPref("browser.privacySegmentation.preferences.show", false);
lockPref("browser.search.serpEventTelemetryCategorization.enabled", false);
lockPref("browser.search.serpEventTelemetryCategorization.regionEnabled", false);
lockPref("browser.search.serpMetricsRecordedCounter", 0);
// Disable trending searches by default
defaultPref("browser.newtabpage.activity-stream.trendingSearch.enabled", false);
// Disable wallpaper promotions
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.highlightDismissed", true);
// Enable wallpapers, but disable fetching them remotely by default
defaultPref("browser.newtabpage.activity-stream.feeds.wallpaperfeed", true);
defaultPref("browser.newtabpage.activity-stream.newtabWallpapers.wallpaper", "dark-landscape");
// Hide checkboxes to enable sponsored shortcuts and Pocket sponsored stories
lockPref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
lockPref("browser.newtabpage.activity-stream.system.showSponsoredCheckboxes", false);
// Hide the Firefox logo
defaultPref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);
// If ads are somehow enabled, use OHTTP for superior privacy
defaultPref("browser.newtabpage.activity-stream.unifiedAds.ohttp.enabled", true);
// If Merino is enabled, disable experimentation
defaultPref("browser.newtabpage.activity-stream.discoverystream.merino-feed-experiment", false);
// If Merino is enabled, use OHTTP for superior privacy
defaultPref("browser.newtabpage.activity-stream.discoverystream.merino-provider.ohttp.enabled", true);
// If stories are enabled, disable impression tracking
lockPref("browser.newtabpage.activity-stream.impressionId", "{}");
lockPref("browser.newtabpage.activity-stream.discoverystream.rec.impressions", "{}");
lockPref("browser.newtabpage.activity-stream.discoverystream.spoc.impressions", "{}");
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories.rec.impressions", "{}");
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories.spoc.impressions", "{}");
// Prevent searches from jumping to the URL bar
defaultPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false); 
// Remove default shortcuts
lockPref("browser.newtabpage.activity-stream.default.sites", "");
lockPref("browser.newtabpage.activity-stream.improvesearch.noDefaultSearchTile", true);
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "");
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
defaultPref("browser.newtabpage.pinned", "[{\"url\":\"https://www.youtube.com/\",\"label\":\"YouTube\"},{\"url\":\"https://www.reddit.com/\",\"label\":\"Reddit\"},{\"url\":\"https://mail.google.com/mail/u/0/?hl=it#inbox\",\"label\":\"Gmail\"},{\"url\":\"https://addons.mozilla.org/it/firefox/\",\"label\":\"Estensioni\"},{\"url\":\"https://wiki.archlinux.org/title/List_of_applications\",\"label\":\"Applicazioni\"},{\"url\":\"https://it.wikipedia.org/wiki/Pagina_principale\",\"label\":\"Wikipedia\"},{\"url\":\"https://github.com/\",\"label\":\"GitHub\"},{\"url\":\"https://www.diretta.it/\",\"label\":\"Diretta\"}]");

/*** 030 FIREFOX SUGGEST ***/

// Disable AccuWeather suggestions
defaultPref("browser.urlbar.suggest.weather", false);
defaultPref("browser.urlbar.weather.featureGate", true);
// Disable AMO suggestions
defaultPref("browser.urlbar.addons.featureGate", true);
defaultPref("browser.urlbar.suggest.addons", false);
// Disable AMP suggestions
defaultPref("browser.urlbar.amp.featureGate", false);
defaultPref("browser.urlbar.suggest.amp", false);
// Disable "Exposure" telemetry
lockPref("browser.urlbar.exposureResults", "");
lockPref("browser.urlbar.keywordExposureResults", "");
lockPref("browser.urlbar.showExposureResults", false);
// Disable Fakespot suggestions
defaultPref("browser.urlbar.fakespot.featureGate", false);
defaultPref("browser.urlbar.suggest.fakespot", false);
// Disable fetching minimum keyword lengths from Nimbus and/or Remote Settings
lockPref("browser.urlbar.addons.minKeywordLength", 4);
lockPref("browser.urlbar.fakespot.minKeywordLength", 4);
lockPref("browser.urlbar.weather.minKeywordLength", 4);
lockPref("browser.urlbar.yelp.minKeywordLength", 4);
// Disable Firefox Suggest
lockPref("browser.urlbar.quicksuggest.enabled", false);
// Disable MDN suggestions
defaultPref("browser.urlbar.mdn.featureGate", true);
defaultPref("browser.urlbar.suggest.mdn", false);
// Disable partner links/attribution
lockPref("browser.partnerlink.attributionURL", "");
lockPref("browser.partnerlink.campaign.topsites", "");
// Disable row labels
defaultPref("browser.urlbar.groupLabels.enabled", false);
// Disable sponsored suggestions
lockPref("browser.urlbar.sponsoredTopSites", false);
lockPref("browser.urlbar.suggest.quicksuggest.sponsored", false);
// Disable Telemetry
lockPref("browser.urlbar.quicksuggest.contextualOptIn", false);
lockPref("browser.urlbar.quicksuggest.dataCollection.enabled", false);
lockPref("browser.urlbar.quicksuggest.settingsUi", 2);
// Disable web suggestions
defaultPref("browser.urlbar.quicksuggest.scenario", "offline");
defaultPref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
// Disable Wikipedia suggestions
defaultPref("browser.urlbar.suggest.wikipedia", false);
defaultPref("browser.urlbar.wikipedia.featureGate", true);
// Disable Yelp suggestions
defaultPref("browser.urlbar.suggest.yelp", false);
defaultPref("browser.urlbar.yelp.featureGate", false);

/*** 031 SYNC ***/

// Disable promotions  
lockPref("identity.fxaccounts.toolbar.pxiToolbarEnabled", false);
lockPref("identity.fxaccounts.toolbar.pxiToolbarEnabled.monitorEnabled", false);
lockPref("identity.fxaccounts.toolbar.pxiToolbarEnabled.relayEnabled", false);
lockPref("identity.fxaccounts.toolbar.pxiToolbarEnabled.vpnEnabled", false);
lockPref("identity.mobilepromo.android", "");
lockPref("identity.mobilepromo.ios", "");
lockPref("identity.sendtabpromo.url", "");
// Disable set-up/feature recommendation  
lockPref("identity.fxaccounts.toolbar.syncSetup.panelAccessed", true);
// Disable Telemetry  
lockPref("identity.fxaccounts.account.telemetry.sanitized_uid", "");
lockPref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false);
lockPref("services.sync.log.logger.telemetry", "Fatal"); //  [Nascosta]
lockPref("services.sync.telemetry.maxEventsCount", 0); //  [Nascosta]
lockPref("services.sync.telemetry.maxPayloadCount", 0);
lockPref("services.sync.telemetry.submissionInterval", 999999999);
// Improve the reliability of extension storage sync  
defaultPref("services.sync.extension-storage.skipPercentageChance", 0);
// Prevent automatically sharing Firefox Sync accounts  
defaultPref("identity.fxaccounts.migrateToDevEdition", false);
// Reduce information shared with Firefox Sync 
defaultPref("services.sync.sendVersionInfo", false);

/*** MOZILLA ***/

// Enable a fire button in Private Browsing Windows to reset the session
lockPref("browser.privatebrowsing.resetPBM.enabled", true)
// Prevent exposing content in the window title for Private Browsing windows
lockPref("privacy.exposeContentTitleInWindow.pbm", false);

/*** 032 Rischio-Fox ***/

// apri risultati di ricerca in una nuova scheda
defaultPref("browser.search.openintab", true);
defaultPref("browser.urlbar.openintab", true);
// carica in background le schede aperte da programmi esterni
defaultPref("browser.tabs.loadDivertedInBackground", true);
// apre segnalibri in una nuova scheda
defaultPref("browser.tabs.loadBookmarksInBackground", true);
// apri nuove schede subito dopo la scheda attuale
defaultPref("browser.tabs.insertAfterCurrent", true);
// lascia il browser aperto alla chiusura dell'ultima scheda
defaultPref("browser.tabs.closeWindowWithLastTab", false);
// controls if a double-click word selection also deletes one adjacent whitespace
defaultPref("editor.word_select.delete_space_after_doubleclick_selection", true);
// non nascondere il cursore del mouse mentre si digita
defaultPref("widget.gtk.hide-pointer-while-typing.enabled", false); // [LINUX]

/* Fork Server https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html#fork-server */
pref("dom.ipc.forkserver.enable", true); // [LINUX]
/* Mostra sempre controlli picture in picture */
pref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);

/*** Configurazione ***/

// Disabilita gli avvisi quando si accede ad `about:config`
lockPref("browser.aboutConfig.showWarning", false);
// Assicura che le nostre policy non vengano sovrascritte
lockPref("browser.policies.perUserDir", false); // [LINUX]
// Controllo versione
lockPref("rischio.fox", "142.44");
