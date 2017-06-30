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
// Headers / Referers
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
// *** GEOLOCATION ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "GEOLOCATION BEGIN");
// Gives away your location to the world
user_pref("geo.enabled", false);
// Don't locate me google. Set it to a blank string
user_pref("geo.wifi.uri", "https://127.0.0.1");
// disables Firefox from logging geolocation requests
user_pref("geo.wifi.logging.enabled", false); // (hidden pref)
// This is for firefox to find out where you are to give you a location
// appropriate search engine. Set it to an empty string to remove feature
user_pref("browser.search.geoip.url", "");
// requests have a timeout of 1 in order to minimize giving away location
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("browser.search.geoip.timeout", 1);
// *****************************************************************************


// *****************************************************************************
// *** QUIET FOX1 ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "QUIETFOX1 BEGIN");
// Disable Mozilla gathering telemetry data
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", true); // (hidden pref)
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", ""); // (hidden pref)
user_pref("datareporting.healthreport.service.enabled", false); // (hidden pref)
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("browser.selfsupport.enabled", false); // (hidden pref)
user_pref("browser.selfsupport.url", "");
// Disable experiemts. Experiments allow Firefox to download and run restartless
// addons
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("experiments.activeExperiment", false);
// Disable silent opt-in of experiemnts
user_pref("network.allow-experiments", false);
// Disable Crash-Reports
user_pref("breakpad.reportURL", "");
// This makes it so that firefox does not give you recommended pages on a new
// tab screen
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
user_pref("browser.newtabpage.directory.source", "data:text/plain,");
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", true);
// disable "Snippets" (Mozilla content shown on about:home screen) MUST use
// HTTPS - arbitrary content injected into this page via http opens up MiTM
// attacks
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");
// disable "Pocket" (third party "save for later" service) & remove urls for
// good measure
// NOTE: Important: Remove the pocket icon from your toolbar first
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
// Just disable all social media integration. Integration, meaning a sidebar of
// firefox that always shows your social media stuff.
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
// Enables tracking protection for regular firefox use. Just like the tracking
// prevention that is enabled by default in private browsing mode. It blocks
// known tracking domains by default
user_pref("privacy.trackingprotection.enabled", true); // all windows pref (not just private)
user_pref("privacy.trackingprotection.pbmode.enabled", true); // private browsing pref
user_pref("privacy.trackingprotection.ui.enabled", true);
// disable SSL Error Reporting - PRIVACY
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
// *****************************************************************************


// *****************************************************************************
// *** BLOCK IMPLICIT OUTBOUND ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "IMPLICIT OUTBOUND BEGIN");
// Firefox also prefetches links of they contain prefetch tags in the html. So
// disable this stupidness as well.
user_pref("network.prefetch-next", false);
// In addition firefox also does a dns prefetch to resolve an address before you
// have clicked it. This will disable such a useless feature.
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // (hidden pref)
// disable Seer/Necko. This tries to predict what you will do next and
// pre-connects to those things. Also stores information in a database that can
// get up to 150MB in size.
user_pref("network.predictor.enabled", false);
// When you hover over a link in a web browser, firefox makes a tcp and ssl
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
// display all parts of the url
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
// disable displaying javascript in history URLs - SECURITY
// This is default anyways as of Firefox 54.0
user_pref("browser.urlbar.filter.javascript", true);
// disable search and form history
// Leaving this commented so that forms still work. Just leaving it here so I
// know it exists for future if I change my mind
// user_pref("browser.formfill.enable", false);
// disable saving form data on secure websites - PRIVACY (shoulder surfers etc)
// Leaving this commented so that forms still work. Just leaving it here so I
// know it exists for future if I change my mind
// user_pref("browser.formfill.saveHttpsForms", false);
// disable one-off searches from the addressbar (FF51+)
user_pref("browser.urlbar.oneOffSearches", false);
// disable search reset (about:searchreset) (FF51+)
user_pref("browser.search.reset.enabled", false);
user_pref("browser.search.reset.whitelist", "");
// only show english characters in urls. This will prevent me from being fooled
// by some phishing sites.
user_pref("network.IDN_show_punycode", true);
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
// below, otherwise set the pref below the url.
// https://support.mozilla.org/en-US/kb/use-master-password-protect-stored-logins
// user_pref("signon.rememberSignons", false);
// set how often Mozilla should ask for the master password
// 0=the first time, 1=every time it's needed, 2=every n minutes (as per the
// next pref)
user_pref("security.ask_for_password", 2);
// how often in minutes Mozilla should ask for the master password (see pref
// above)
user_pref("security.password_lifetime", 10);
// disable auto-filling username & password form fields - SECURITY
// can leak in cross-site forms AND be spoofed
// password will still be auto-filled after a user name is manually entered
user_pref("signon.autofillForms", false);
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
user_pref("security.ssl.enable_ocsp_stapling", true);
// reject communication with servers using old SSL/TLS - vulnerable to a MiTM
// attack
// https://wiki.mozilla.org/Security:Renegotiation
// WARNING: tested Jan 2017 - still breaks too many sites
user_pref("security.ssl.require_safe_negotiation", true);
// display warning (red padlock) for "broken security"
// https://wiki.mozilla.org/Security:Renegotiation
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// query OCSP responder servers to confirm current validity of certificates
// 0=disable, 1=validate only certificates that specify an OCSP service URL
// 2=enable and use values in security.OCSP.URL and security.OCSP.signing
user_pref("security.OCSP.enabled", 1);
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
user_pref("font.name.sans-serif.x-western", "Arial");  // default Arial
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
// disable the Adobe EME "Primetime CDM" (Content Decryption Module)
// Won't disable again, since this could be needed for certain online media.
// user_pref("media.gmp-eme-adobe.enabled", false);
// user_pref("media.gmp-eme-adobe.visible", false);
// user_pref("media.gmp-eme-adobe.autoupdate", false);
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
// disable video capability for WebRTC
user_pref("media.navigator.video.enabled", false);
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
user_pref("dom.push.serverURL", "");
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
// session data.
user_pref("dom.indexedDB.enabled", false);
// https://wiki.mozilla.org/WebAPI/Security/WebTelephony
// allows phone calls. Issues arise with the possiblity of calls to high cost
// numbers, susceptible to spying (man in the middle)
user_pref("dom.telephony.enabled", false);
// disable User Timing API
// This can be used to fingerprint and track you
// Disables timer - can be used to check how long an image (for example) takes
// to load. If it is quick, it was probably cached, and tells the website I have
// probably visited a site with that image recently.
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
user_pref("dom.keyboardevent.code.enabled", false);
user_pref("dom.beforeAfterKeyboardEvent.enabled", false);
user_pref("dom.keyboardevent.dispatch_during_composition", false);
// disable touch events
// fingerprinting attack vector - leaks screen res & actual screen coordinates
// WARNING: If you use touch screens, reset this to the default
user_pref("dom.w3c_touch_events.enabled", 0);
// 2510: disable Web Audio API (FF51+)
// disables this api which is basically never used legitimately, but is used to
// track and fingerprint you sometimes.
user_pref("dom.webaudio.enabled", false);
// disable MediaDevices change detection (FF51+) (enabled by default starting
// FF52+). This triggers an event whenever a media device is added or removed
// from your computer
user_pref("media.ondevicechange.enabled", false);
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
// *****************************************************************************


// *****************************************************************************
// *** FIRST PARTY ISOLATION ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "FIRST PARTY ISOLATION BEGIN");
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
// disable Storage API (FF51+) which gives sites' code the ability to find out
// how much space they can use, how much they are already using, and even
// control whether or not they need to be alerted before the user agent disposes
// of site data in order to make room for other things.
user_pref("dom.storageManager.enabled", false);
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
// disable tab animation, speed things up a little
user_pref("browser.tabs.animate", false);
// disable fullscreeen animation. Test using F11.
user_pref("browser.fullscreen.animate", false);
// open links in a new tab immediately to the right of parent tab, not far right
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
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