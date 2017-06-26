// user.js

// Enables tracking protection for regular Thunderbird use. Just like the
// tracking prevention that is enabled by default in private browsing mode. It
// blocks known tracking domains by default
user_pref("privacy.trackingprotection.enabled", true);

// Tell websites your tracking preferences. ie, tell websites not to track you
// Ironically, enabling this can actually make you easier to track as this
// header is not common. Enable at your own risk.
// To be clear, turning it to true means the no tracking header is added to your
// requests, but adding that header can unfortunately make it easier to track
// you.
// I did not set this one
// user_pref("privacy.donottrackheader.enabled", true);

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

// Don't change colour for visited hyperlinks (vulnerability exists to leak
// history)
user_pref("layout.css.visited_links_enabled", false);

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

// This setting would allow URLs to be pinged, allowing for tracking and
// fingerprinting. Usually put onto a hyperlink, you can add ping addresses
// which are addresses that are notified when you click the link.
// As of Thunderbird 52.1.1 this is the default setting
user_pref("browser.send_pings", false);

// Having webGL enabled can allow attackers to provide malicious code to a web
// page and attack a GPU making the machine unusable. WebGL may also put a
// user's data and privacy at risk.
user_pref("webgl.disabled", true);

// This is an inter-browser communcation standard (WebRTC) that is a very
// significant risk to privacy and can be used to break out of VPN tunnels and
// proxies, and  leaks your IP address when using tor or a vpn
user_pref("media.peerconnection.enabled", false);

// Disable Beacons which seem to mainly be used for analytical reasons, ie. to
// track you
user_pref("beacon.enabled", false);

// Gives away your location to the world
user_pref("geo.enabled", false);

// Just disable all social media integration. Integration, meaning a sidebar of
// Thunderbird that always shows your social media stuff.
user_pref("social.directories", "");
user_pref("social.whitelist", "");
user_pref("social.remote-install.enabled", false);
user_pref("social.toast-notifications.enabled", false);

// Can be used to fingerprint you and track you. Also, just want to disable face
// detection, and control of my webcam
user_pref("camera.control.face_detection.enabled", false);

// Disable all Mozilla data gathering, tracking, and telemetry
// the telemetry settings is the default
user_pref("toolkit.telemetry.enabled", false);

// When you hover over a link, Thunderbird makes a tcp and ssl
// connection to that address in order to speed up the connection in case you
// happen to click on it. Spammers can use this by sending emails to you, you
// check your email in a webmail client, and then the spammer knows your email
// is active if you hover over a link. This setting disables this
user_pref("network.http.speculative-parallel-limit", 0);

// In addition Thunderbird also does a dns prefetch to resolve an address before
// you have clicked it. This will disable such a useless feature.
user_pref("network.dns.disablePrefetch", true);

// Thunderbird also prefetches links of they contain prefetch tags in the html.
// So disable this stupidness as well.
user_pref("network.prefetch-next", false);

// Force TLS 1.2 to be used. SSL is a predecessor to TLS, though it is still
// often referred to as SSL. The default minimum is TLS 1.0. Setting this
// setting will just ensure that the minimum version usd is 1.2 so that we use
// the most up to date version.
user_pref("security.tls.version.min", 3);
