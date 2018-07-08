// user.js

// url: http://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/
// required reading: http://kb.mozillazine.org/User.js_file

// README/IMPORTANT:
// The settings in this file (user.js) OVERWRITE the ones in your prefs
// (prefs.js - these are accessed via about:config) when FF is started.  See the
// required reading above.

// BACKUP FIRST:
// Backup your profile first, or even just the PREFS.JS. Go to your profile
// directory and copy prefs.js, rename it (eg to prefs.js.backup). That way, if
// you have problems, to restore FF to the state it was in beforehand, close FF,
// delete the prefs.js, rename your backup copy of prefs back to prefs.js,
// RENAME the user.js so it doesn't overwrite everything again, then start FF.

// COMMON ISSUES:
// Some prefs will break some sites (it's inevitable). If you are having issues
// search for "WARNING:" in this document, especially the ones listed just below

// This user.js has a priority of anonymity, security, and privacy.

// This pref is only used to show how far this configuration was parsed in the
// event of a syntax error.

// Table of Contents:
// *****************************************************************************
// Geolocation
// Quiet Fox1
// Quiet Fox2
// Block Implicit Outbound
// Location Bar / Search/ Auto Suggestions / History / Forms Etc
// Passwords
// Cache
// Ssl / Oscp / Certs / Encryption / Hsts / Hpkp / Https
// Fonts
// Headers / Referrers
// Plugins
// Media / Camera / Mic
// Ui
// Service Workers
// Dom And Javascript
// Hardware Fingerprinting
// Misc - Leaks / Fingerprinting / Privacy / Security
// First Party Isolation
// Tor Uplift
// Cookies And Dom Storage
// Shutdown
// Personal Settings
// Possibly Deprecated
// *****************************************************************************

user_pref("ghacks_user.js.parrot", "STARTING");

// *****************************************************************************
// *** START ***
// *****************************************************************************
user_pref("browser.startup.homepage", "check.torproject.org");
// *****************************************************************************

// *****************************************************************************
// *** GEOLOCATION ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "GEOLOCATION BEGIN");
// Gives away your location to the world
user_pref("geo.enabled", false);
// Don't locate me google. Set it to a blank string
user_pref("geo.wifi.uri", "data:,");
// disables Firefox from logging geolocation requests
user_pref("geo.wifi.logging.enabled", false); // (hidden pref)
// This is for Firefox to find out where you are to give you a location
// appropriate search engine. Set it to an empty string to remove feature
user_pref("browser.search.geoip.url", "data:,");
// requests have a timeout of 1 in order to minimize giving away location
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("browser.search.geoip.timeout", 1);
// Disable geolocation on non-secure origins.
// POSSIBLY DEPRECATED
user_pref("geo.security.allowinsecure", false);
// *****************************************************************************


// *****************************************************************************
// *** QUIET FOX1 ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "QUIETFOX1 BEGIN");
// Disable Mozilla gathering telemetry data
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", true); // (hidden pref)
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // (FF55+)
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // (FF55+)
user_pref("toolkit.telemetry.updatePing.enabled", false); // (FF56+)
user_pref("toolkit.telemetry.bhrPing.enabled", false); // (FF57+) Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // (FF57+)
user_pref("toolkit.telemetry.hybridContent.enabled", false); // (FF59+)
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", ""); // (hidden pref)
user_pref("datareporting.healthreport.service.enabled", false); // (hidden pref)
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// POSSIBLY DEPRECATED
user_pref("browser.selfsupport.enabled", false); // (hidden pref)
// POSSIBLY DEPRECATED
user_pref("browser.selfsupport.url", "data:,");
// Disable experiments. Experiments allow Firefox to download and run restartless
// addons
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
// Disable silent opt-in of experiments
user_pref("network.allow-experiments", false);
// disable Normandy/Shield (FF60+)
// Shield is an telemetry system (including Heartbeat) that can also push and
// test "recipes"
// https://wiki.mozilla.org/Firefox/Shield
// https://github.com/mozilla/normandy
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.shield-recipe-client.api_url", "");
// disable PingCentre telemetry (used in several system extensions) (FF57+)
user_pref("browser.ping-centre.telemetry", false);
// disable location bar suggesting local search history (FF57+)
// https://bugzilla.mozilla.org/show_bug.cgi?id=1181644
user_pref("browser.urlbar.maxHistoricalSearchSuggestions", 0); // max. number of search suggestions
// Disable Crash-Reports
user_pref("breakpad.reportURL", "data:,");
// disable sending of crash reports (FF44+)
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // (FF51+)
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false); // (FF51-57)
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // (FF58+)
// disable Onboarding (FF55+)
// Onboarding is an interactive tour/setup for new installs/profiles and
// features. Every time about:home or about:newtab is opened, the onboarding
// overlay is injected into that page
user_pref("browser.onboarding.enabled", false);
// disable Web Compatibility Reporter (FF56+)
// Web Compatibility Reporter adds a "Report Site Issue" button to send data to
// Mozilla
user_pref("extensions.webcompat-reporter.enabled", false);
// This makes it so that Firefox does not give you recommended pages on a new
// tab screen
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
// POSSIBLY DEPRECATED
user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
// Put the tabs on above address bar
// They are below the address bar by default in browsers like Pale Moon
user_pref("browser.tabs.onTop", true);
// Don't show the graphical preview when using ctrl+tab to cycle through tabs
// The preview is shown by default in browsers like Pale Moon
user_pref("browser.ctrlTab.previews", false);
// Disable Activity Stream (system addon)
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.library.activity-stream.enabled", false); // (FF57+)
// Don't allow Firefox Screenshots to be uploaded to any server.
user_pref("extensions.screenshots.upload-disabled", true); // (FF60+)
// disable "Snippets" (Mozilla content shown on about:home screen) MUST use
// HTTPS - arbitrary content injected into this page via http opens up MiTM
// attacks
user_pref("browser.aboutHomeSnippets.updateUrl", "data:,");
// disable Browser Error Reporter (FF60+)
user_pref("browser.chrome.errorReporter.enabled", false);
user_pref("browser.chrome.errorReporter.submitUrl", "");
// disable "Pocket" (third party "save for later" service) & remove URLs for
// good measure
// NOTE: Important: Remove the pocket icon from your toolbar first
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
// Just disable all social media integration. Integration, meaning a sidebar of
// Firefox that always shows your social media stuff.
user_pref("social.directories", "");
user_pref("social.whitelist", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.toast-notifications.enabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.enabled", false); // (hidden pref)
// disable "Reader View"
user_pref("reader.parse-on-load.enabled", false);
// disable FlyWeb, a set of APIs for advertising and discovering local-area web
// servers. It is a System Addon
user_pref("dom.flyweb.enabled", false);
// disable sync
user_pref("services.sync.enabled", false); // (hidden pref)
// *****************************************************************************


// *****************************************************************************
// *** QUIET FOX2 ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "QUIETFOX2 BEGIN");
// Enables tracking protection for regular Firefox use. Just like the tracking
// prevention that is enabled by default in private browsing mode. It blocks
// known tracking domains by default
user_pref("privacy.trackingprotection.enabled", true); // all windows pref (not just private)
user_pref("privacy.trackingprotection.pbmode.enabled", true); // private browsing pref
user_pref("privacy.trackingprotection.ui.enabled", true);
// disable SSL Error Reporting - PRIVACY
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "data:,");
// disable TLS1.3 0-RTT (round-trip time) (FF51+)
// 0-RTT is meant for visitors who have recently visited a site or are resuming
// a previous connection. For these resumed connections, standard TLS 1.3 is
// safer but no faster than any previous version of TLS.  0-RTT changes this.
// The catch is that the encryption is weaker, so this setting disables 0-RTT
// Everyone claims that the speedup is revolutionary, but 0-RTT only eliminates
// one round trip of communication... big woop.
// https://blog.cloudflare.com/introducing-0-rtt/
user_pref("security.tls.enable_0rtt_data", false); // (FF55+ default true)
// *****************************************************************************


// *****************************************************************************
// *** BLOCK IMPLICIT OUTBOUND ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "IMPLICIT OUTBOUND BEGIN");
// Firefox also prefetches links of they contain prefetch tags in the HTML. So
// disable this stupidness as well.
user_pref("network.prefetch-next", false);
// In addition Firefox also does a DNS prefetch to resolve an address before you
// have clicked it. This will disable such a useless feature.
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // (hidden pref)
// disable Seer/Necko. This tries to predict what you will do next and
// pre-connects to those things. Also stores information in a database that can
// get up to 150MB in size.
user_pref("network.predictor.enabled", false);
// When you hover over a link in a web browser, Firefox makes a TCP and SSL
// connection to that address in order to speed up the connection in case you
// happen to click on it. Spammers can use this by sending emails to you, you
// check your email in a webmail client, and then the spammer knows your email
// is active if you hover over a link. This setting disables this
user_pref("network.http.speculative-parallel-limit", 0);
// This setting would allow URLs to be pinged, allowing for tracking and
// fingerprinting. Usually put onto a hyperlink, you can add ping addresses
// which are addresses that are notified when you click the link.
// As of Firefox 54.0 this is the default setting
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
// stop links launching Windows Store on Windows 8/8.1/10
user_pref("network.protocol-handler.external.ms-windows-store", false);
// disable predictor / prefetching (FF48+)
user_pref("network.predictor.enable-prefetch", false);
// *****************************************************************************


// *****************************************************************************
// *** LOCATION BAR / SEARCH/ AUTO SUGGESTIONS / HISTORY / FORMS ETC ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "LOCATION BAR ETC BEGIN");
// disable location bar using search - PRIVACY
// don't leak typos to a search engine, give an error message instead
user_pref("keyword.enabled", false);
// 0802: disable location bar domain guessing - PRIVACY/SECURITY
// domain guessing intercepts DNS "hostname not found errors" and resends a
// request (eg by adding www or .com). This is inconsistent use (eg FQDNs), does
// not work via Proxy Servers (different error), is a flawed use of DNS (TLDs:
// why treat .com as the 411 for DNS errors?), privacy issues (why connect to
// sites you didn't intend to), can leak sensitive data (eg query strings: eg
// Princeton attack), and is a security risk (eg common typos & malicious sites
// set up to exploit this)
user_pref("browser.fixup.alternate.enabled", false);
// disable locationbar dropdown - PRIVACY (shoulder surfers,forensics/
// unattended browser)
user_pref("browser.urlbar.maxRichResults", 0);
// display all parts of the URL
// why rely on just a visual clue - helps SECURITY
user_pref("browser.urlbar.trimURLs", false);
// disable URLbar autofill -  PRIVACY (shoulder surfers, forensics/unattended
// browser). I also just find it annoying
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);
// disable autocomplete - PRIVACY (shoulder surfers, forensics/unattended
// browser)
user_pref("browser.urlbar.autocomplete.enabled", false);
// disable history suggestions - PRIVACY (shoulder surfers, forensics/unattended
// browser)
user_pref("browser.urlbar.suggest.history", false);
// limit history leaks via enumeration (PER TAB: back/forward) - PRIVACY
// This is a PER TAB session history. You still have a full history stored under
// all history
// default=50, minimum=1=currentpage, 2 is the recommended minimum as some pages
// use it as a means of referral (eg hotlinking)
// I am leaving it as default, but keeping it here so that I know it exists
user_pref("browser.sessionhistory.max_entries", 50);
// Don't change colour for visited hyperlinks (vulnerability exists to leak
// history)
user_pref("layout.css.visited_links_enabled", false);
// disable displaying JavaScript in history URLs - SECURITY
// This is default anyways as of Firefox 54.0
user_pref("browser.urlbar.filter.javascript", true);
// Disable search bar LIVE search suggestions - Privacy
user_pref("browser.search.suggest.enabled", false);
// Disable location bar LIVE search results
// Also disable the location bar prompt to enable/disable or learn more about it
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
// Disable location bar suggesting "preloaded" top websites
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
// disable location bar making speculative connections (FF56+)
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// Disable location bar autocomplete
user_pref("browser.urlbar.autocomplete.enabled", false);
// Disable location bar suggestion types
// NOTE: if an of these are true, the above pref will be true too. If all three
// of these are false, the previous pref will be false.
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
// disable search and form history
user_pref("browser.formfill.enable", false);
// disable saving form data on secure websites - PRIVACY (shoulder surfers etc)
user_pref("browser.formfill.saveHttpsForms", false);
// disable one-off searches from the addressbar (FF51+)
user_pref("browser.urlbar.oneOffSearches", false);
// disable search reset (about:searchreset) (FF51+)
user_pref("browser.search.reset.enabled", false);
user_pref("browser.search.reset.whitelist", "");
// only show English characters in URLs. This will prevent me from being fooled
// by some phishing sites.
user_pref("network.IDN_show_punycode", true);
// block top level window data: URIs (FF56+)
// https://www.wordfence.com/blog/2017/01/gmail-phishing-data-uri/
user_pref("security.data_uri.block_toplevel_data_uri_navigations", true);
// disable CSP violation events (FF59+)
// https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent
user_pref("security.csp.enable_violation_events", false);
// POSSIBLY DEPRECATED: disable Form Autofill (FF54+)
user_pref("browser.formautofill.enabled", false);
// disable form @autocomplete (FF32+)
user_pref("dom.forms.autocomplete.experimental", false);
// Disable windows jumplists
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
// Disable windows taskbar preview
user_pref("browser.taskbar.previews.enable", false);
// *****************************************************************************


// *****************************************************************************
// *** PASSWORDS ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "PASSWORDS BEGIN");
// disable saving passwords
// NOTE: this does not clear any passwords already saved
// This is here in case I want to enable
// If you do not set this pref then make sure to set a master password to
// protect your saved passwords. Instructions on how to do this are at the link
// below, otherwise set the pref below the URL.
// https://support.mozilla.org/en-US/kb/use-master-password-protect-stored-logins
// user_pref("signon.rememberSignons", false);
// set how often Mozilla should ask for the master password
// 0=the first time, 1=every time it's needed, 2=every n minutes (as per the
// next pref)
user_pref("security.ask_for_password", 2);
// how often in minutes Mozilla should ask for the master password (see pref
// above)
user_pref("security.password_lifetime", 10);
// disable auto-filling username & password form fields in HTTP - SECURITY
// can leak in cross-site forms AND be spoofed
// password will still be auto-filled after a user name is manually entered
user_pref("signon.autofillForms", false);
// Show warning for credential form on HTTP pages
user_pref("security.insecure_field_warning.contextual.enabled", true);
// prevent cross-origin images from triggering an HTTP-Authentication prompt
// (FF55+)
// ie. a cross origin image tag should not be allowed to trigger an
// authentication prompt.
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);
// ignore websites' autocomplete="off" (FF30+)
user_pref("signon.storeWhenAutocompleteOff", true);
// force warnings for logins on non-secure (non HTTPS) pages
user_pref("security.insecure_password.ui.enabled", true);
// When attempting to fix an entered URL, do not fix an entered password along
// with it
user_pref("browser.fixup.hide_user_pass", true);
// *****************************************************************************


// *****************************************************************************
// *** CACHE ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "CACHE BEGIN");
// disable disk cache. This does not disable caching, just disk caching
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
// disable disk caching of SSL pages
user_pref("browser.cache.disk_cache_ssl", false);
// disable memory cache as well IF you're REALLY paranoid
// This will probably cause performance to drop
// Will not set
// user_pref("browser.cache.memory.enable", false);
// disable offline cache
user_pref("browser.cache.offline.enable", false);
// disable randomized FF HTTP cache decay experiments
user_pref("browser.cache.frecency_experiment", -1);
// *****************************************************************************


// *****************************************************************************
// *** SSL / OSCP / CERTS / ENCRYPTION / HSTS / HPKP / HTTPS ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "SSL / OSCP / CERTS etc  BEGIN");
// enable OCSP stapling. This may break some websites that otherwise would just
// be a warning
// OCSP is when you receive a certificate from a website that is still valid,
// but you go ahead and ask the CA if it really is still valid (just in case
// something changed). The stapling, means that instead of you Requesting OCSP
// from the CA, the website gives you back an OCSP response with a timestamp
// that was signed by the CA, so you do not need to ask the CA directly.
user_pref("security.ssl.enable_ocsp_stapling", true);
// query OCSP responder servers to confirm current validity of certificates
// 0=disable, 1=validate only certificates that specify an OCSP service URL
// 2=enable and use values in security.OCSP.URL and security.OCSP.signing
user_pref("security.OCSP.enabled", 1);
// Requires the use of OCSP. If OCSP can not be used, the connection to the
// website fails.
user_pref("security.OCSP.require", true);
// If OSCP is not stapled then the connection will fail.
user_pref("security.ssl.enable_ocsp_must_staple", true);
// Information on this is sparse, but I believe it relates to using OCSP for GET
// requests. There is very little information on the internet about this setting
// though, so I am unsure exactly what it does, and how much it will break
// things. Default was 'false'
user_pref("security.OCSP.GET.enabled", true);
// reject communication with servers using old SSL/TLS - vulnerable to a MiTM
// attack
// https://wiki.mozilla.org/Security:Renegotiation
// WARNING: tested Jan 2017 - still breaks too many sites
user_pref("security.ssl.require_safe_negotiation", true);
// display warning (red padlock) for "broken security"
// https://wiki.mozilla.org/Security:Renegotiation
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// enforce strict pinning
// PKP (public key pinning) 0-disabled 1=allow user MiTM (such as your
// antivirus), 2=strict
// WARNING: If you rely on an AV (antivirus) to protect your web browsing
// by inspecting ALL your web traffic, then leave at current default =1
user_pref("security.cert_pinning.enforcement_level", 2);
// Force TLS 1.2 to be used. SSL is a predecessor to TLS, though it is still
// often referred to as SSL. The default minimum is TLS 1.0. Setting this
// setting will just ensure that the minimum version usd is 1.2 so that we use
// the most up to date version.
user_pref("security.tls.version.min", 3);
user_pref("security.tls.version.fallback-limit", 3);
user_pref("security.tls.version.max", 4); // allow up to and including TLS 1.3
// disable 1024-DH Encryption
// WARNING: may break obscure sites, but not major sites, which should support
// ECDH over DHE
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);
// Enable Mixed-Content-Blocker to use the HSTS cache but disable the HSTS
// priming requests. HSTS is used to help force HTTPS to be used.
user_pref("security.mixed_content.use_hsts", true);
user_pref("security.mixed_content.send_hsts_priming", false);
// disable or limit SHA-1
// 0 = all SHA1 certs are allowed
// 1 = all SHA1 certs are blocked (including perfectly valid ones from 2015 and
//     earlier)
// 2 = deprecated option that now maps to 1
// 3 = only allowed for locally-added roots (e.g. anti-virus)
// 4 = only allowed for locally-added roots or for certs in 2015 and earlier
// WARNING: when disabled, some man-in-the-middle devices (eg security scanners
// and antivirus
// products, are failing to connect to HTTPS sites. SHA-1 will eventually become
// obsolete.
user_pref("security.pki.sha1_enforcement_level", 1);
// disable SSL session tracking (36+)
// SSL session IDs speed up HTTPS connections (no need to renegotiate) and last
// for 48hrs. Since the ID is unique, web servers can (and do) use it for
// tracking. If set to true, this disables sending SSL3 Session IDs and TLS
// Session Tickets to prevent session tracking
// WARNING: This will slow down TLS connections (personally I don't notice it at
// all)
user_pref("security.ssl.disable_session_identifiers", true); // (hidden pref)
// disable 3DES (effective key size < 128)
user_pref("security.ssl3.rsa_des_ede3_sha", false);
// disable 128 bits
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
// disable insecure active content on https pages - mixed content
user_pref("security.mixed_content.block_active_content", true);
// disable insecure passive content (such as images) on https pages
user_pref("security.mixed_content.block_display_content", true);
// Control "Add Security Exception" dialog on SSL warnings
// 0=do neither, 1=pre populate url 2=pre-populate url and pre fetch cert (def)
user_pref("browser.ssl_override_behavior", 1);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
// display HTTP sites as insecure (FF59+)
user_pref("security.insecure_connection_icon.enabled", true); // all windows
// *****************************************************************************


// *****************************************************************************
// *** FONTS ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "FONTS BEGIN");
// disable rendering of SVG OpenType fonts
// iSECPartnersReport recommends to disable this
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
// use more legible default fonts
// just a preference
user_pref("font.name.serif.x-unicode", "Georgia");
user_pref("font.name.serif.x-western", "Georgia"); // default Times New Roman
user_pref("font.name.sans-serif.x-unicode", "Arial");
user_pref("font.name.sans-serif.x-western", "Arial"); // default Arial
user_pref("font.name.monospace.x-unicode", "Lucida Console");
user_pref("font.name.monospace.x-western", "Lucida Console"); // default Courier New
// disable woff2
// Don't have time for these fonts to load.
user_pref("gfx.downloadable_fonts.woff2.enabled", false);
// disable graphite which FF49 turned back on by default
// In the past it had security issues
user_pref("gfx.font_rendering.graphite.enabled", false);
// *****************************************************************************


// *****************************************************************************
// *** HEADERS / REFERERS ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "HEADERS AND REFERERS BEGIN");
// disable referer from an SSL Website (no referrer header when going from an
// https page to another https page)
user_pref("network.http.sendSecureXSiteReferrer", false);
// Don't let websites see where I came from
user_pref("network.http.referer.XOriginPolicy", 1);
// Disable spoofing a referer
// Spoofing increases your exposure to cross-site request forgeries
user_pref("network.http.referer.spoofSource", false);
// Hide (not spoof) referer when leaving a .onion domain
user_pref("network.http.referer.hideOnionSource", true);
// disable the DNT HTTP header, which is essentially USELESS
// It is voluntary and most ad networks do not honour it.
// DNT is *NOT* how you stop being data mined.
// Don't encourage a setting that gives any legitimacy to 3rd parties being in
// control of your privacy.
// Sending a DNT header *highly likely* raises entropy, especially in standard
// windows.
user_pref("privacy.donottrackheader.enabled", false);
// *****************************************************************************


// *****************************************************************************
// *** PLUGINS ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "PLUGINS BEGIN");
// disable audio auto-play in non-active tabs (FF51+)
user_pref("media.block-autoplay-until-in-foreground", true);
// disable all GMP (Gecko Media Plugins)
// Authorizes codecs for encrypted media. Disabling may break things, so I will
// leave it alone. Just leaving it here for future reference
// user_pref("media.gmp-provider.enabled", false);
// user_pref("media.gmp.trial-create.enabled", false);
// disable widevine CDM
// It looks like this is needed for Netflix, and other DRM stuff. Therefore
// disabling could result in broken websites. Not disabling, just leaving it
// here for future reference
// user_pref("media.gmp-widevinecdm.visible", false);
// user_pref("media.gmp-widevinecdm.enabled", false);
// user_pref("media.gmp-widevinecdm.autoupdate", false);
// disable all DRM content (EME: Encryption Media Extension)
// No real reason to disable, other than the fact that DRM is stupid. But it
// could break sites if disabled possibly.
// user_pref("media.eme.enabled", false);
// user_pref("browser.eme.ui.enabled", false);
// user_pref("media.eme.chromium-api.enabled", false); // (FF55+)
// block websites detecting DRM is disabled
// I am not disabling DRM, so no point in setting this
// user_pref("media.eme.apiVisible", false);
// disable the OpenH264 Video Codec by Cisco to "Never Activate"
// This is the bundled codec used for video chat in WebRTC
// Disable pings to the external update/download server
// While it is used with WebRTC, I have already disabled WebRTC, and it is
// possible these codecs may be needed for other media. So I won't disable
// user_pref("media.gmp-gmpopenh264.enabled", false); // (hidden pref)
// user_pref("media.gmp-gmpopenh264.autoupdate", false);
// user_pref("media.gmp-manager.url", "data:text/plain,");
// user_pref("media.gmp-manager.url.override", "data:text/plain,"); // (hidden pref)
// user_pref("media.gmp-manager.updateEnabled", false); // disable local fallback (hidden pref)
// disable the Adobe EME "Primetime CDM" (Content Decryption Module)
// Won't disable again, since this could be needed for certain online media.
// user_pref("media.gmp-eme-adobe.enabled", false);
// user_pref("media.gmp-eme-adobe.visible", false);
// user_pref("media.gmp-eme-adobe.autoupdate", false);
// disable NPAPI plugins (Add-ons>Plugins)
// 0=deactivated, 1=ask, 2=enabled
// [NOTE] ESR52 users should check plugin.state* for other installed NPAPI plugins
// [NOTE] You can still over-ride individual sites e.g. youtube via site permissions
user_pref("plugin.state.flash", 0);
user_pref("plugin.state.java", 0);
// *****************************************************************************


// *****************************************************************************
// *** MEDIA / CAMERA / MIC ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "MEDIA / CAMERA / MIC BEGIN");
// disable WebRTC
// This is an inter-browser communcation standard (WebRTC) that is a very
// significant risk to privacy and can be used to break out of VPN tunnels and
// proxies, and  leaks your IP address when using tor or a vpn
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.ice.tcp", false);
// disable video capability for WebRTC
user_pref("media.navigator.video.enabled", false);
// Limit WebRTC IP leaks if using WebRTC
user_pref("media.peerconnection.ice.defaullt_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
// disable WebGL, force bare minimum feature set if used & disable WebGL
// extensions
// Having webGL enabled can allow attackers to provide malicious code to a web
// page and attack a GPU making the machine unusable. WebGL may also put a
// user's data and privacy at risk.
user_pref("webgl.disabled", true);
user_pref("pdfjs.enableWebGL", false);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
// don't make WebGL debug info available to websites
user_pref("webgl.enable-debug-renderer-info", false);
// two more webgl preferences (FF51+)
user_pref("webgl.dxgl.enabled", false);
user_pref("webgl.enable-webgl2", false);
// disable speech recognition
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled", false);
// disable screensharing. Still webRTC related
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.screensharing.allowed_domains", "");
user_pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
// Can be used to fingerprint you and track you. Also, just want to disable face
// detection, and control of my webcam
user_pref("camera.control.face_detection.enabled", false);
// 2024: set a default permission for Camera/Microphone (FF58+)
// 0=always ask (default), 1=allow, 2=block
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
// disable canvas capture stream
user_pref("canvas.capturestream.enabled", false);
// disable camera image capture
user_pref("dom.imagecapture.enabled", false);
// disable offscreen canvas
user_pref("gfx.offscreencanvas.enabled", false);
// *****************************************************************************


// *****************************************************************************
// *** UI ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "UI BEGIN");
// UI SPOOFING: disable scripts hiding or disabling the following on new windows
// This is usually when clicking something opens up a smalle window that is less
// useful. ie, doesn't have an address bar etc.
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
// POPUP windows - prevent or allow javascript UI meddling
user_pref("dom.disable_window_flip", true); // window z-order
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_status_change", true);
user_pref("dom.allow_scripts_to_close_windows", false);
// 2204: disable links opening in a new window
// test url: https://people.torproject.org/~gk/misc/entire_desktop.html
// You can still right click a link and select open in a new window
// This is to stop malicious window sizes and screen res leaks etc
// Also, it is just annoying when websites open up new windows for you.
user_pref("browser.link.open_newwindow.restriction", 0);
// block popup windows
// [SETTING] Options>Privacy & Security>Permissions>Block pop-up windows
user_pref("dom.disable_open_during_load", true);
// *****************************************************************************


// *****************************************************************************
// *** SERVICE WORKERS ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "SERVICE WORKERS BEGIN");
// disable workers API and service workers API
// Service Workers are basically background tasks that a website does to offer
// up push notifications etc to alert you of things. As far as I know, usually
// used on social networking sites.
// WARNING: WILL break sites as this gains traction: eg mega.nz requires workers
user_pref("dom.workers.enabled", false);
user_pref("dom.serviceWorkers.enabled", false);
// disable service workers cache and cache storage
user_pref("dom.caches.enabled", false);
// disable push notifications (FF44+) [requires serviceWorkers to be enabled]
// web apps can receive messages pushed to them from a server, whether or
// not the web app is in the foreground, or even currently loaded
// WARNING: may affect social media sites like Twitter
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "data:,");
user_pref("dom.push.userAgentID", "");
// disable web/push notifications
// WARNING: may affect social media sites like Twitter
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
// *****************************************************************************


// *****************************************************************************
// *** DOM AND JAVASCRIPT ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "DOM AND JAVASCRIPT BEGIN");
// disable website access to clipboard events/content
// Sends notifications to websites when a user copies, pastes, or cuts something
// from a webpage.
// WARNING: This will break some sites functionality such as pasting into
// Facebook this applies to onCut, onCopy, onPaste events - i.e is you have to
// interact with the website for it to look at the clipboard
user_pref("dom.event.clipboardevents.enabled", false);
// disable clipboard commands (cut/copy) from "non-priviledged" content
// this disables document.execCommand("cut"/"copy") to protect your clipboard
// Essentially Disables js from accessing the clipboard
user_pref("dom.allow_cut_copy", false); // (hidden pref)
// 2404: disable JS storing data permanently
// WARNING: If set as false (disabled), this WILL break some [old] add-ons and
// DOES break a lot of sites' functionality. Applies to websites, add-ons and
// session data. This breaks google drive, so I am setting it to true, but if
// you do not care about google drive then you can set it to false
// [WARNING] Setting this to false BREAKS uBlock Origin 1.14.0+ [2017-08-30]
user_pref("dom.indexedDB.enabled", true);
// https://wiki.mozilla.org/WebAPI/Security/WebTelephony
// allows phone calls. Issues arise with the possiblity of calls to high cost
// numbers, susceptible to spying (man in the middle)
user_pref("dom.telephony.enabled", false);
// disable User Timing API
// This can be used to fingerprint and track you
// Disables timer - can be used to check how long an image (for example) takes
// to load. If it is quick, it was probably cached, and tells the website I have
// probably visited a site with that image recently.
// POSSIBLY DEPRECATED
user_pref("dom.enable_user_timing", false);
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_performance", false);
// disable shaking the screen
user_pref("dom.vibrator.enabled", false);
// 2415: max popups from a single non-click event - default is 20!
// NOTE: setting this too low could have unforseen consequences. Some new
// windows that are opened legitimately may be counted towards this count. 20 is
// quite high though, so lower it to around 2-5 ish.
user_pref("dom.popup_maximum", 3);
// limit events that can cause a popup
// default is "change click dblclick mouseup notificationclick reset submit touchend"
// http://kb.mozillazine.org/Dom.popup_allowed_events
user_pref("dom.popup_allowed_events", "click dblclick");
// disable idle observation
user_pref("dom.idle-observers-api.enabled", false);
// disable support for asm.js ( http://asmjs.org/ )
// asm.js has had security concerns in the past. Specifically out of bounds read
// and writes that can be exploited. See below links
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
user_pref("javascript.options.asmjs", false);
// disable ArchiveAPI i.e reading content of archives, such as zip files,
// directly in the browser, through DOM file objects. Default is false.
user_pref("dom.archivereader.enabled", false);
// force FF to tell you if a website asks to store data for offline use
user_pref("offline-apps.allow_by_default", false);
user_pref("browser.offline-apps.notify", true);
// 2427: disable Shared Memory (Spectre mitigation)
// [1] https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md
// [2] https://blog.mozilla.org/security/2018/01/03/mitigations-landing-new-class-timing-attack/
user_pref("javascript.options.shared_memory", false);
// *****************************************************************************


// *****************************************************************************
// *** HARDWARE FINGERPRINTING ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "HARDWARE FINGERPRINTING BEGIN");
// disable gamepad API - USB device ID enumeration
// Allows JS to identify a gaming controller etc to track you.
// https://trac.torproject.org/projects/tor/ticket/13023
user_pref("dom.gamepad.enabled", false);
// disable Battery Status API. Initially a Linux issue (high precision readout)
// that is now fixed. However, it is still another metric for fingerprinting
// NOTE: From FF52+ Battery Status API is only available in chrome/privileged code.
// http://techcrunch.com/2015/08/04/battery-attributes-can-be-used-to-track-web-users/
// https://www.theguardian.com/technology/2016/aug/02/battery-status-indicators-tracking-online
user_pref("dom.battery.enabled", false);
// disable giving away network info
// eg bluetooth, cellular, ethernet, wifi, wimax, other, mixed, unknown, none
user_pref("dom.netinfo.enabled", false);
// disable virtual reality devices
// No intention of ever using VR anyways
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.osvr.enabled", false); // (FF49+)
user_pref("dom.vr.openvr.enabled", false); // (FF51+)
// disable media device enumeration (FF29+)
// This would let a website know what kind of input and output devices I have
user_pref("media.navigator.enabled", false);
// disable video statistics - JS performance fingerprinting
user_pref("media.video_stats.enabled", false);
// 2507: disable keyboard fingerprinting (FF38+) (physical keyboards)
// The Keyboard API allows tracking the "read parameter" of pressed keys in
// forms on web pages. These parameters vary between types of keyboard layouts
// and between various languages, eg German vs English.
// WARNING: Don't use if Android + physical keyboard
// POSSIBLY DEPRECATED
user_pref("dom.keyboardevent.code.enabled", false);
user_pref("dom.beforeAfterKeyboardEvent.enabled", false);
user_pref("dom.keyboardevent.dispatch_during_composition", false);
// disable touch events
// fingerprinting attack vector - leaks screen res & actual screen coordinates
// WARNING: If you use touch screens, reset this to the default
user_pref("dom.w3c_touch_events.enabled", 0);
// Set a default permission for Location (FF58+)
// [SETTING] to add site exceptions: Page Info>Permissions>Access Your Location
// [SETTING] to manage site exceptions: Options>Privacy>Permissions>Location>Settings
// 0=always ask (default), 1=allow, 2=block
user_pref("permissions.default.geo", 2);
// 2510: disable Web Audio API (FF51+)
// disables this api which is basically never used legitimately, but is used to
// track and fingerprint you sometimes.
user_pref("dom.webaudio.enabled", false);
// disable PointerEvents
// Pointer Events have information like the pressure used when clicking or
// touching something on a screen and other information that could be considered
// a fingerprinting vector.
// https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent
user_pref("dom.w3c_pointer_events.enabled", false);
// disable MediaDevices change detection (FF51+) (enabled by default starting
// FF52+). This triggers an event whenever a media device is added or removed
// from your computer
user_pref("media.ondevicechange.enabled", false);
// Disable presentation API
user_pref("dom.presentation.enabled", false);
user_pref("dom.presentation.controller.enabled", false);
user_pref("dom.presentation.discoverable", false);
user_pref("dom.presentation.discovery.enabled", false);
user_pref("dom.presentation.receiver.enabled", false);
user_pref("dom.presentation.session_transport.data_channel.enable", false);
// Disable site specific Zoom
// Zoom levels affect screen res and are highly fingerprintable. This does not
// stop you from using zoom, it will just not use/remember any site specific
// settings.
user_pref("browser.zoom.siteSpecific", false);
// *****************************************************************************


// *****************************************************************************
// *** MISC - LEAKS / FINGERPRINTING / PRIVACY / SECURITY ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "MISC LEAKS FINGERPRINTING ETC BEGIN");
// disable sending additional analytics to web servers
user_pref("beacon.enabled", false);
// disable downloading on desktop
user_pref("browser.download.folderList", 2);
// always ask the user where to download - enforce user interaction for security
user_pref("browser.download.useDownloadDir", false);
// Delete temp files when you exit
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// don't integrate activity into windows recent documents
user_pref("browser.download.manager.addToRecentDocs", false);
// disable page thumbnail collection
user_pref("browser.pagethumbnails.capturing_disabled", true); // (hidden pref)
// 2608: disable JAR from opening Unsafe File Types
user_pref("network.jar.open-unsafe-types", false);
// 2611: disable WebIDE to prevent remote debugging and add-on downloads
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("devtools.webide.enabled", false);
// disable SimpleServiceDiscovery - which can bypass proxy settings - eg Roku
user_pref("browser.casting.enabled", false);
user_pref("gfx.layerscope.enabled", false);
// disable gyroscope and ambient light sensor readings. Apparently gyrscope data
// can be used to determine sound and voice, and there is a security
// vulberability with the ambient light stuff. Fingerprinting vector
user_pref("device.sensors.enabled", false);
// disable SPDY as it can contain identifiers
// Looks like SPDY is now deprecated anyways, so block it anyways.
user_pref("network.http.spdy.enabled", false);
user_pref("network.http.spdy.enabled.deps", false);
// 2615: disable http2 for now as well
user_pref("network.http.spdy.enabled.http2", false);
// 2617: disable pdf.js as an option to preview PDFs within Firefox
// see mime-types under Options>Applications) - EXPLOIT risk
// Enabling this (set to true) will change your option most likely to "Ask" or
// "Open with some external pdf reader". This does NOT necessarily prevent
// pdf.js being used via other means, it only removes the option. I think this
// should be left at default (false). 1. It won't stop JS bypassing it. 2.
// Depending on external pdf viewers there is just as much risk or more
// (acrobat). 3. Mozilla are very quick to patch these sorts of exploits, they
// treat them as severe/critical and 4. for convenience
// So leave it as false. But may as well block pdf.js in NoScript as it doesn't
// affect the viewing of PDFs
user_pref("pdfjs.disabled", false);
// when using SOCKS have the proxy server do the DNS lookup - dns leak issue
// eg in TOR, this stops your local DNS server from knowing your Tor destination
// as a remote Tor node will handle the DNS request
user_pref("network.proxy.socks_remote_dns", true);
// disable middle mouse click opening links from clipboard
// https://trac.torproject.org/projects/tor/ticket/10089
// http://kb.mozillazine.org/Middlemouse.contentLoadURL
user_pref("middlemouse.contentLoadURL", false);
// ensure you have a security delay when installing add-ons (milliseconds)
// default=1000, This also covers the delay in "Save" on downloading files.
// http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
// http://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/
user_pref("security.dialog_enable_delay", 1000);
// ensure Strict File Origin Policy on local files
// The default is true. Included for completeness
// http://kb.mozillazine.org/Security.fileuri.strict_origin_policy
user_pref("security.fileuri.strict_origin_policy", true);
// Applications [non Tor protocol] SHOULD generate an error
// upon the use of .onion and SHOULD NOT perform a DNS lookup.
user_pref("network.dns.blockDotOnion", true);
// strip optional user agent token, default is false, included for completeness
user_pref("general.useragent.compatMode.firefox", false);
// disable UITour backend so there is no chance that a remote page can use it
// Allows a site to change the browser UI to some extent
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
// disable remote JAR files being opened, regardless of content type
user_pref("network.jar.block-remote-files", true);
// prevent accessibility services from accessing your browser
user_pref("accessibility.force_disabled", 1);
// enforce separate content process for file://URLs (FF53+?)
// secures local files better
user_pref("browser.tabs.remote.separateFileUriProcess", true);
// disable "open with" in download dialog (FF50+)
user_pref("browser.download.forbid_open_with", true);
// disable DeviceStorage API
// This api is quite powerful
// https://wiki.mozilla.org/WebAPI/DeviceStorageAPI
user_pref("device.storage.enabled", false);
// sanitize webchannel whitelist
user_pref("webchannel.allowObject.urlWhitelist", "");
// disable HTTP Alternative Services
// This allows the browser to lie to you about what web address you are at
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
// disable various developer tools in browser context
user_pref("devtools.chrome.enabled", false);
// strip paths when sending URLs to PAC scripts (FF51+)
// CVE-2017-5384: Information disclosure via Proxy Auto-Config (PAC)
// https://bugzilla.mozilla.org/show_bug.cgi?id=1255474
user_pref("network.proxy.autoconfig_url.include_path", false);
// close bypassing of CSP via image mime types (FF51+)
// https://bugzilla.mozilla.org/show_bug.cgi?id=1288361
user_pref("security.block_script_with_wrong_mime", true);
// disable using UNC (Uniform Naming Convention) paths (FF61+)
// I am not doing this, so I set it to false. Here just in case.
user_pref("network.file.disable_unc_paths", false); // (hidden pref)
// *****************************************************************************


// *****************************************************************************
// *** FIRST PARTY ISOLATION ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "FIRST PARTY ISOLATION BEGIN");
// enable First Party Isolation (FF51+)
// [WARNING] May break cross-domain logins and site functionality until
// perfected
// NOTE: This may also break self-destructing-cookies addon, so I am not
// settings this.
// user_pref("privacy.firstparty.isolate", true);
// enforce FPI restriction for window.opener (FF54+)
// I don't think this has any affect unless the previous setting is also set.
// Leave this here anyways in case I enable the previous setting later.
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);
// enable privacy.resistFingerprinting (FF41+)
// (hidden pref) (not hidden FF55+)
user_pref("privacy.resistFingerprinting", true);
// set new window sizes to round to hundreds (FF55+) [SETUP]
// [NOTE] Width will round to multiples of 200s and height to 100s, to fit your
// screen. The override values are a starting point to round from if you want
// some control
// Override dimensions. Used to help prevent fingerprinting based on screen size
user_pref("privacy.window.maxInnerWidth", 1600); // (hidden pref)
user_pref("privacy.window.maxInnerHeight", 900); // (hidden pref)
// spoof (or limit?) number of CPU cores (FF48+)
// [WARNING] *may* affect core chrome/Firefox performance, will affect content.
// Supposed to protect against fingerprinting... I don't think it matters that
// much so I am commenting for now.
// user_pref("dom.maxHardwareConcurrency", 2);
// *****************************************************************************



// *****************************************************************************
// *** TOR UPLIFT ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "TOR UPLIFT BEGIN");
// *****************************************************************************


// *****************************************************************************
// *** COOKIES AND DOM STORAGE ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "COOKIES AND DOM STORAGE BEGIN");
// Allow cookies from same host. Disabling cookies makes it a nightmare to sign
// in to things like youtube
// 0=allow all 1=allow same host 2=disallow all 3=allow 3rd party if it already
// set a cookie
user_pref("network.cookie.cookieBehavior", 1);
// ensure that third-party cookies (if enabled, see above pref) are session-only
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true); // (FF58+)
// disable Storage API (FF51+) which gives sites' code the ability to find out
// how much space they can use, how much they are already using, and even
// control whether or not they need to be alerted before the user agent disposes
// of site data in order to make room for other things.
user_pref("dom.storageManager.enabled", false);
user_pref("browser.storageManager.enabled", false);
// disable HTTP sites setting cookies with the "secure" directive (default: true) (FF52+)
user_pref("network.cookie.leave-secure-alone", true);
// Clear localStorage and UUID when a webextension is uninstalled. Both of these
// preferences have to be the same
user_pref("extensions.webextensions.keepStorageOnUninstall", false);
user_pref("extensions.webextensions.keepUuidOnUninstall", false);
// Enable warning when websites try to install add-ons
// [SETTING] Privacy & Security>Permissions>Warn you when websites try to install add-ons
// [SETTING-ESR52] Security>General>Warn me when sites try to install add-ons
user_pref("xpinstall.whitelist.required", true); // default: true
// *****************************************************************************

// *****************************************************************************
// *** SHUTDOWN ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "SHUTDOWN BEGIN");
// enable FF to clear stuff on close
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// 2803: what to clear on shutdown
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true); // active logins
user_pref("privacy.clearOnShutdown.siteSettings", false);
// *****************************************************************************

// *****************************************************************************
// *** PERSONAL SETTINGS ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "PERSONAL SETTINGS BEGIN");
// disable closing browser with last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);
// Make backspace go back a page
// (0 = previous page, 1 = scroll up, 2 = do nothing)
user_pref("browser.backspace_action", 0);
// open new windows in a new tab instead
// 1=current window, 2=new window, 3=most recent window
user_pref("browser.link.open_newwindow", 3);
// disable "Do you really want to leave this site?" popups
user_pref("dom.disable_beforeunload", true);
// don't open "page source" in a tab. The window used instead is cleaner
user_pref("view_source.tab", false);
// spellchecking:
// 0=none, 1-multi-line controls, 2=multi-line & single-line controls
user_pref("layout.spellcheckDefault", 1);
// disable animations
user_pref("toolkit.cosmeticAnimations.enabled", false);
// POSSIBLY DEPRECATED
// disable tab animation, speed things up a little
user_pref("browser.tabs.animate", false);
// POSSIBLY DEPRECATED: disable fullscreeen animation. Test using F11.
user_pref("browser.fullscreen.animate", false);
// open links in a new tab immediately to the right of parent tab, not far right
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
// Don't preload tabs when I hover over them
user_pref("browser.tabs.remote.warmup.enabled", false);
// Disable proxy in firefox by default
// Useful on Windows if you are wanting to disable IE by changing the Windows
// proxy settings.
// http://kb.mozillazine.org/Network.proxy.type
user_pref("network.proxy.type", 0);
// disable Screenshots (FF55+)
user_pref("extensions.screenshots.disabled", true); // (FF55+)
user_pref("extensions.screenshots.system-disabled", true); // (FF54+)
// disable Form Autofill (also see 0864) (FF55+)
// Stored data is NOT secure (uses a JSON file)
// Heuristics controls Form Autofill on forms without @autocomplete attributes
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off"); // (FF56+)
user_pref("extensions.formautofill.creditCards.enabled", false); // (FF56+)
user_pref("extensions.formautofill.experimental", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
// hide recently bookmarked items (you still have the original bookmarks) (FF49+)
// https://bugzilla.mozilla.org/show_bug.cgi?id=1401238
user_pref("browser.bookmarks.showRecentlyBookmarked", false);
// *****************************************************************************

// *****************************************************************************
// *** NOSCRIPT ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "NOSCRIPT BEGIN");
// Set the do not track to off
user_pref("noscript.doNotTrack.enabled", false);
// same as noscript.autoReload.allTabs but determines what happens when you
// globally allow scripts, which I should never do but if I do I only want the
// current tab to be reloaded
user_pref("noscript.autoReload.allTabsOnGlobal", false);
// same as other reloads, but as far as I can tell, disables autoReload when
// scripts are allowed globally regardless. It is my understanding that this
// supersedes the allTabsOnGlobal setting but I do not know this for sure.
user_pref("noscript.autoReload.global", false);
// Controls if all tabs are reloaded when you do a bulk permission change such
// as allowing all on the current page. False means that only the current tab is
// reloaded when this occurs.
user_pref("noscript.autoReload.allTabsOnPageAction", false);
// Setting to true keeps the CTRL+SHIFT+\ key combo to temporarily allow the
// current top-level domain. False makes it permanent
user_pref("noscript.toggle.temp", true);
// More recent versions of NoScript check for rules affecting the origin and the
// parent of the origin when allowing or blocking plugins. This behaviour is
// meant to provide effective protection against Flash-Based XSS and is
// recommended to keep as true (default).
user_pref("noscript.forbidActiveContentParentTrustCheck", true);
// Anti-XSS protection automatically filters the requests from untrusted origins
// to trusted destinations, where a trusted site is either allowed, or
// temporarily allowed. If you prefer temporarily allowed sites to be considered
// untrusted from the XSS point of view set the below setting to false, true
// considers them both as trusted.
user_pref("noscript.xss.trustTemp", true);
// the injectionChecker engine checks checks all the requests that start from
// whitelisted origins for suspicious patterns landing on different trusted
// sites. If a potential XSS attack is detected (even if coming from a trusted
// source) anti-XSS filters are triggered according to this preference. See the
// below options:
// 0 = Never Check
// 1 = Check cross-site requests from temporarily allowed sites
// 2 = Check every cross-site request (DEFAULT)
// 3 = Check EVERY request
user_pref("noscript.injectionCheck", 2);
// Keep the sticky UI (default) which lets you select multiple sources at once
// without reloading or closing the noscript dialog
user_pref("noscript.stickyUI", true);
// Should stickyUI also work for ctrl+shift+s... true (default) is yes.
user_pref("noscript.stickyUI.onKeyboard", true);
// Do live reloads with stickyUI. I don't want this so I am leaving as false
// (default)
user_pref("noscript.stickyUI.liveReload", false);

// *****************************************************************************
// **** GENERAL TAB OF SETTINGS ****
// Temporarily allow top-level sites by default
// 0 = Disabled (unchecked)
// 1 = Enabled for Full addresses eg: http://www.noscript.net (checked)
// 2 = Enabled for Full domains eg: www.noscript.net (checked)
// 3 = Enabled for base 2nd level domains eg: noscript.net (checked)
user_pref("noscript.autoAllow", 0);
// Open permissions menu when mouse hovers over NoScript's Icon
// True (checked) = hovering over the NoScript Toolbar icon opens the dialog.
// False (checked) =  means you actually have to click it to do something
user_pref("noscript.hoverUI", false);
// if hoverUI is false "left clicking on noscript toolbar button toggles
// permissions for current top-level site"
// 0 = Disabled - Click the logo to open the dialog (unchecked)
// 1 = Enabled - Full Addresses (checked)
// 2 = Enabled - Full Domains (checked)
// 3 = Enabled - Base 2nd Level Domains (checked)
user_pref("noscript.toolbarToggle", 0);
// Automatically reload affected pages when permissions change
user_pref("noscript.autoReload", true);
// Reload the current tab only
// Setting to false only reloads the current page instead of all tabs
user_pref("noscript.autoReload.allTabs", false);
// Allow sites opened through bookmarks
user_pref("noscript.allowBookmarks", false);
// *****************************************************************************

// *****************************************************************************
// **** WHITELIST TAB OF SETTINGS ****
// Whitelist is in "capability.policy.maonoscript.sites"
// Blacklist is in "noscript.untrusted"

// Scripts Globally Allowed (dangerous)
// False does not allow scripts globally
user_pref("noscript.global", false);
// *****************************************************************************

// *****************************************************************************
// **** EMBEDDINGS TAB OF SETTINGS ****
// Controls the "Apply these restrictions to whitelisted sites too" checkbox.
// Setting to true checks the box
user_pref("noscript.contentBlocker", false);
// These apply only to untrusted sites unless noscript.contentBlocker is set to
// true.
// They forbid certain things from running
user_pref("noscript.forbidJava", true);
user_pref("noscript.forbidFlash", true);
user_pref("noscript.forbidSilverlight", true);
user_pref("noscript.forbidPlugins", true);
user_pref("noscript.forbidMedia", true);
user_pref("noscript.forbidIFrames", true);
user_pref("noscript.forbidFrames", true);
user_pref("noscript.forbidFonts", true);
// Block every object coming from a site marked as untrusted
user_pref("noscript.alwaysBlockUntrustedContent", true);
// Forbid WebGL
user_pref("noscript.forbidWebGL", true);
// Show placeholder icon
user_pref("noscript.showPlaceholder", true);
// No placeholder for objects coming from sites marked as untrusted
user_pref("noscript.showUntrustedPlaceholder", false);
// Ask for confirmation before temporarily unblocking an object
user_pref("noscript.confirmUnblock", true);
// Collapse blocked objects
user_pref("noscript.collapseObject", true);
// *****************************************************************************

// *****************************************************************************
// **** APPEARANCE TAB OF SETTINGS ****
// show Status bar label
user_pref("noscript.statusLabel", false);
// show Contextual Menu
user_pref("noscript.ctxMenu", true);
// show Allow [...]
user_pref("noscript.showPermanent", true);
// show Mark [...] as untrusted
user_pref("noscript.showDistrust", true);
// show Base 2nd level Domains (noscript.net)
user_pref("noscript.showBaseDomain", true);
// show Full Domains (www.noscript.net)
user_pref("noscript.showDomain", false);
// show full Addresses (http://www.noscript.net)
user_pref("noscript.showAddress", false);
// show Allow Scripts Globally -- Please note that this is the appearance section...
// this setting does not turn on global scripts, it only shows the option in the
// drop down dialog.
user_pref("noscript.showGlobal", false);
// show About NoScript x.x.x
user_pref("noscript.showAbout", true);
// Show untrusted domains
user_pref("noscript.showUntrusted", true);
// Show blocked objects
user_pref("noscript.showBlockedObjects", true);
// Show recently blocked sites
user_pref("noscript.showRecentlyBlocked", true);
// Show allow all this page
user_pref("noscript.showAllowPage", false);
// Show temporarily allow all this page.
user_pref("noscript.showTempAllowPage", true);
// Show make page permissions permanent
user_pref("noscript.showTempToPerm", true);
// Show revoke temporary permissions
user_pref("noscript.showRevokeTemp", true);
// Show permanent "allow" commands in private windows
user_pref("noscript.showVolatilePrivatePermissionsToggle", true);
// *****************************************************************************

// *****************************************************************************
// **** NOTIFICATIONS TAB OF SETTINGS ****
// Show message about blocked scripts
user_pref("noscript.notify", true);
// Place message at the bottom
// if false it goes to the top. This setting only has an affect if
// noscript.notify is true
user_pref("noscript.notify.bottom", false);
// Hide after x seconds
// This setting turns the hiding off
user_pref("noscript.notify.hide", false);
// This setting defines how long after showing the notification that it will be
// hidden. Default is 5, but it doesn't do anything unless noscript.notify.hide
// is true
user_pref("noscript.notify.hideDelay", 5);
// XSS Notifications
user_pref("noscript.xss.notify", true);
// Show message about blocked META Redirections. Not 100% sure what this means
// but true is the default and seems like a good idea to notify about something.
user_pref("noscript.forbidMetaRefresh.notify", true);
// Show notifications about ABE
user_pref("noscript.ABE.notify", true);
// Show notifications about ClearClick Warnings (ClearClick is NoScripts
// anti-clickjacking)
user_pref("noscript.clearClick.prompt", true);
// Give audio feedback when scripts are blocked
user_pref("noscript.sound", false);
// This defines what audio file to use when a script is blocked. Only has an
// affect if noscript.sound is true. I commented because I don't use it, nor do
// I care what file it uses, however if the default changes in the future I
// would rather noscript change that on its own.
// user_pref("noscript.sound.block", "chrome://noscript/skin/block.wav");
// Display the release notes on updates
user_pref("noscript.firstRunRedirection", true);
// *****************************************************************************

// *****************************************************************************
// **** ADVANCED TAB OF SETTINGS ****
// Forbid Bookmarkets (I don't because I sometimes find them useful. If I ever
// decide not to use them I will change this)
// ONLY APPLIES FOR UNTRUSTED SOURCES
user_pref("noscript.forbidBookmarklets", false);
// Forbid <a ping...>
// a ping attribute in an <a> tag provides a list of URLs that will be notified
// if you choose to follow the hyperlink specified in the <a> tag. This disables
// that ability.
// ONLY APPLIES FOR UNTRUSTED SOURCES
user_pref("noscript.noping", true);
// hide <noscript> elements
// <noscript> elements are page elements that only display if scripts are
// blocked. This setting blocks those as well.
// ONLY APPLIES FOR UNTRUSTED SOURCES
user_pref("noscript.nselNever", true);
// Forbid META redirections inside <noscript> elements
// ONLY APPLIES FOR UNTRUSTED SOURCES
user_pref("noscript.forbidMetaRefresh", true);
// Forbid XSLT - XSLT = Extensible Stylesheet Language Transformations, which is
// a language for transforming XML documents into other XML documents or other
// formats such as HTML, plain text etc.
// No idea why I would need to block it but it was blocked by default, so may as
// well leave it.
// ONLY APPLIES FOR UNTRUSTED SOURCES
user_pref("noscript.forbidXSLT", true);
// Block scripting in whitelisted subdocuments of non-whitelisted pages.
// ONLY APPLIES FOR UNTRUSTED SOURCES
user_pref("noscript.restrictSubdocScripting", true);
// Show the <noscript> element which follows a blocked <script>
// In effect, if a noscript element follows a script that was blocked in the
// html code, then show the noscript element.
// ONLY APPLIES FOR **TRUSTED** SOURCES
user_pref("noscript.nselForce", true);
// allow <a ping..>. This is NOT a noscript setting but a browser setting. The
// preference is below, but it is commented because it is set earlier in this
// user.js file
// ONLY APPLIES FOR **TRUSTED** SOURCES
// user_pref("browser.send_pings", false);
// Allow local links
// ONLY APPLIES FOR **TRUSTED** SOURCES
user_pref("capability.policy.maonoscript.checkloaduri.enabled", "");
// Cascade top document's permissions to 3rd party scripts
// ONLY APPLIES FOR **TRUSTED** SOURCES
user_pref("noscript.cascadePermissions", false);
// XSS - Sanitize cross-site suspicious requests
user_pref("noscript.filterXGet", true);
// XSS - Turn cross-site POST requests into data-less GET requests
user_pref("noscript.filterXPost", true);
// Enable automatic secure cookies management
user_pref("noscript.secureCookies", false);
// Forbid active web content unless it comes from a secure (HTTPS) connection:
// 0 = Never
// 1 = When using a proxy (recommended for use with TOR)
// 2 = Always
user_pref("noscript.allowHttpsOnly", 0);
// Allow HTTPS scripts globally on HTTPS documents
user_pref("noscript.globalHttpsWhitelist", false);
// Enable ABE (Application Boundaries Enforcer)
user_pref("noscript.ABE.enabled", true);
// Allow sites to push their own rulesets
user_pref("noscript.ABE.siteEnabled", false);
// WAN IP (xxx.xxx.xxx.xxx) is in LOCAL
user_pref("noscript.ABE.wanIpAsLocal", true);
// Enables and sets up ClearClick for trusted and/or untrusted sites.
// It is a bitfield where untrused = 1 and trusted = 2
// eg: 0 = Disabled
// eg: 1 = untrusted only
// eg: 2 = trusted only
// eg: 3 = untrusted and trusted
user_pref("noscript.clearClick", 3);
// -----------------------------------------------------------------------------
// For completeness, the following key is for XSS exceptions:
// ---- noscript.filterXExceptions
// This pref is a list of domains that are forced to use HTTPS
// ---- noscript.httpsForced
// This pref is a list of dmomains where we NEVER force Https connections
// ---- noscript.httpsForcedExceptions
// This pref forces encryption for all the cookies set over HTTPS for the sites
// specified in the pref string
// ---- noscript.secureCookiesExceptions
// This pref ingores unsafe cookies set over HTTPS from the sites set in this
// pref string
// ---- noscript.secureCookiesForced
// System rulesets for ABE
// ---- noscript.ABE.rulesets.SYSTEM
// User rulesets for ABE
// ---- noscript.ABE.rulesets.USER
// *****************************************************************************


// *****************************************************************************
// *** POSSIBLY DEPRECATED ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "POSSIBLY DEPRECATED BEGIN");
// possibly deprecated:
// loop is the codename for Firefox Hello, which is a video-chat service created
// by Mozilla. Not only do I not use it, but it uses WebRTC, which, as pointed
// out in the previous point is not secure.
// I had to add this manually. It seems FF Hello may have been scrapped, but in
// case it comes back, I added the config anyways
user_pref("loop.enabled", false);
// (41+) disable HTTP2 (draft)
// https://bugzilla.mozilla.org/1132357
user_pref("network.http.spdy.enabled.http2draft", false);
// *****************************************************************************


// END: internal custom pref to test for syntax errors
user_pref("ghacks_user.js.parrot", "END");



// APPENDIX A: TEST SITES
// Here is an exhaustive list of various websites in which to test your browser.
// You should enable JS on these sites for the tests to present a worst-case
// scenario. In reality, you should control JS and XSS (cross site scripting) on
// sites with add-ons such as NoScript, uMatrix, uBlock Origin, among others, to
// reduce the possibility of fingerprinting attacks.
// url: http://www.ghacks.net/2015/12/28/the-ultimate-online-privacy-test-resource-list/

// 01: Fingerprinting
// Panopticlick      https://panopticlick.eff.org/
// JoDonym           http://ip-check.info/?lang=en
// Am I Unique?      https://amiunique.org/
// Browserprint      https://browserprint.info/test


// 02: Multiple Tests [single page]
// Whoer             https://whoer.net/
// 5who              http://5who.net/?type=extend
// IP/DNS Leak       https://ipleak.net/
// IP Duh            http://ipduh.com/anonymity-check/


// 03: Multiple Tests [multi-page]
// BrowserSpy.dk     http://browserspy.dk/
// BrowserLeaks      https://www.browserleaks.com/
// HTML Security     https://html5sec.org/
// PC Flank          http://www.pcflank.com/index.htm


// 04: Encryption / Ciphers / SSL/TLS / Certificates
// BadSSL            https://badssl.com/
// DCSec             https://cc.dcsec.uni-hannover.de/
// Qualys SSL Labs   https://www.ssllabs.com/ssltest/viewMyClient.html
// Fortify           https://www.fortify.net/sslcheck.html
// How's My SSL      https://www.howsmyssl.com/
// RC4               https://rc4.io/
// Heartbleed        https://filippo.io/Heartbleed/
// Freak Attack      https://freakattack.com/clienttest.html
// Logjam            https://weakdh.org/
// Symantec          https://cryptoreport.websecurity.symantec.com/checker/views/sslCheck.jsp


// 05: Other
// AudioContext      https://audiofingerprint.openwpm.com/
// Battery           https://pstadler.sh/battery.js/
// DNS Leak          https://www.dnsleaktest.com/
// DNS Spoofability  https://www.grc.com/dns/dns.htm
// Evercookie        https://samy.pl/evercookie/
// Firefox Add-ons   http://thehackerblog.com/addon_scanner/
// localStorage      http://www.filldisk.com/
// HSTS Supercookie  http://www.radicalresearch.co.uk/lab/hstssupercookies
// HSTS [sniffly]    https://zyan.scripts.mit.edu/sniffly/
// HTML5             https://www.youtube.com/html5
// Keyboard Events   https://w3c.github.io/uievents/tools/key-event-viewer.html
// rel=noopener      https://mathiasbynens.github.io/rel-noopener/
// Popup Killer      http://www.kephyr.com/popupkillertest/index.html
// Popup Test        http://www.popuptest.com/
// Redirects         https://jigsaw.w3.org/HTTP/300/Overview.html
// Referer Headers   https://www.darklaunch.com/tools/test-referer
// Resouce://URI     https://www.browserleaks.com/firefox
// WebRTC IP Leak    https://www.privacytools.io/webrtc.html


// 06: Safe Browsing, Tracking Protection
// Attack            https://itisatrap.org/firefox/its-an-attack.html
// Blocked           https://itisatrap.org/firefox/blocked.html
// Malware           https://itisatrap.org/firefox/unwanted.html
// Phishing          https://itisatrap.org/firefox/its-a-trap.html
// Tracking          https://itisatrap.org/firefox/its-a-tracker.html
