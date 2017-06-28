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
user_pref("ghacks_user.js.parrot", "STARTING");

// *****************************************************************************
// *** PREFERENCES ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "PREFERENCES BEGIN");
// This makes it so you can press backspace to go back a page
user_pref("browser.backspace_action", 0);
// *****************************************************************************


// *****************************************************************************
// *** GEOLOCATION ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "GEOLOCATION BEGIN");
// Gives away your location to the world
user_pref("geo.enabled", false);
// Don't locate me google. Set it to a blank string
user_pref("geo.wifi.uri", "https://127.0.0.1");
// user_pref("geo.wifi.logging.enabled", false); // (hidden pref)
// user_pref("browser.search.geoip.url", "");
// user_pref("geo.wifi.xhr.timeout", 1);
// user_pref("browser.search.geoip.timeout", 1);
// *****************************************************************************


// *****************************************************************************
// *** QUIET FOX1 ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "QUIETFOX1 BEGIN");
// Disable Mozilla gathering telemetry data
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
// user_pref("toolkit.telemetry.unifiedIsOptIn", true); // (hidden pref)
// user_pref("toolkit.telemetry.server", "");
// user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
// user_pref("datareporting.healthreport.documentServerURI", ""); // (hidden pref)
// user_pref("datareporting.healthreport.service.enabled", false); // (hidden pref)
// user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
// user_pref("datareporting.policy.dataSubmissionEnabled", false);
// user_pref("toolkit.telemetry.cachedClientID", "");
// user_pref("browser.selfsupport.enabled", false); // (hidden pref)
// user_pref("browser.selfsupport.url", "");
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
// user_pref("browser.newtab.preload", false);
// user_pref("browser.newtabpage.directory.ping", "data:text/plain,");
// user_pref("browser.newtabpage.directory.source", "data:text/plain,");
// user_pref("browser.newtabpage.enhanced", false);
// user_pref("browser.newtabpage.introShown", true);
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
// disable more Necko/Captive Portal
// user_pref("captivedetect.canonicalURL", "");
// user_pref("network.captive-portal-service.enabled", false); // (FF52+?)
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
// *****************************************************************************

// *****************************************************************************
// *** PLUGINS ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "PLUGINS BEGIN");
// disable audio auto-play in non-active tabs (FF51+)
user_pref("media.block-autoplay-until-in-foreground", true);
// disable all GMP (Gecko Media Plugins)
// user_pref("media.gmp-provider.enabled", false);
// user_pref("media.gmp.trial-create.enabled", false);
// // disable widevine CDM
// user_pref("media.gmp-widevinecdm.visible", false);
// user_pref("media.gmp-widevinecdm.enabled", false);
// user_pref("media.gmp-widevinecdm.autoupdate", false);
// // disable all DRM content (EME: Encryption Media Extension)
// user_pref("media.eme.enabled", false);
// user_pref("browser.eme.ui.enabled", false);
// // block websites detecting DRM is disabled
// user_pref("media.eme.apiVisible", false);
// // disable the OpenH264 Video Codec by Cisco to "Never Activate"
// // This is the bundled codec used for video chat in WebRTC
// // Disable pings to the external update/download server
// user_pref("media.gmp-gmpopenh264.enabled", false); // (hidden pref)
// user_pref("media.gmp-gmpopenh264.autoupdate", false);
// user_pref("media.gmp-manager.url", "data:text/plain,");
// // disable the Adobe EME "Primetime CDM" (Content Decryption Module)
// user_pref("media.gmp-eme-adobe.enabled", false);
// user_pref("media.gmp-eme-adobe.visible", false);
// user_pref("media.gmp-eme-adobe.autoupdate", false);
// *****************************************************************************


// *****************************************************************************
// *** MEDIA / CAMERA / MIC ***
// *****************************************************************************
user_pref("ghacks_user.js.parrot", "MEDIA / CAMERA / MIC BEGIN");
// *****************************************************************************










// disable gyroscope and ambient light sensor readings. Apparently gyrscope data
// can be used to determine sound and voice, and there is a security
// vulberability with the ambient light stuff.
user_pref("device.sensors.enabled", false);

// disables this api which is basically never used legitimately, but is used to
// track and fingerprint you sometimes.
user_pref("dom.webaudio.enabled", false);

// only show english characters in urls. This will prevent me from being fooled
// by some phishing sites.
user_pref("network.IDN_show_punycode", true);

// Disables js from accessing the clipboard
user_pref("dom.allow_cut_copy", false);

// Disables timer - can be used to check how long an image (for example) takes
// to load. If it is quick, it was probably cached, and tells the website I have
// probably visited a site with that image recently.
user_pref("dom.enable_performance", false);

// Don't let websites see where I came from
user_pref("network.http.referer.XOriginPolicy", 1);

// Sends notifications to websites when a user copies, pastes, or cuts something
// from a webpage. NOTE: making this change is known to break some websites such
// as google docs. I have set this, but If I ever use google docs, I will need
// to change this
user_pref("dom.event.clipboardevents.enabled", false);

// Disabling this will make it so that websites cannot see your battery status.
// It turns out that the remaining battery life that is returned by this API is
// of such detail that it can be used to fingerprint you and track you online
user_pref("dom.battery.enabled", false);

// Having webGL enabled can allow attackers to provide malicious code to a web
// page and attack a GPU making the machine unusable. WebGL may also put a
// user's data and privacy at risk.
user_pref("webgl.disabled", true);


// This is an inter-browser communcation standard (WebRTC) that is a very
// significant risk to privacy and can be used to break out of VPN tunnels and
// proxies, and  leaks your IP address when using tor or a vpn
user_pref("media.peerconnection.enabled", false);

// loop is the codename for Firefox Hello, which is a video-chat service created
// by Mozilla. Not only do I not use it, but it uses WebRTC, which, as pointed
// out in the previous point is not secure.
// I had to add this manually. It seems FF Hello may have been scrapped, but in
// case it comes back, I added the config anyways
user_pref("loop.enabled", false);

// Disable Beacons which seem to mainly be used for analytical reasons, ie. to
// track you
// This was already set in my about:config for some reason.
user_pref("beacon.enabled", false);

// Can be used to fingerprint you and track you. Also, just want to disable face
// detection, and control of my webcam
user_pref("camera.control.face_detection.enabled", false);

