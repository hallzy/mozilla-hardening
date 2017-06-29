# Mozilla Hardening

Please remember to backup your prefs.js file before adding the user.js file to
your profile! If these configs break websites that you frequent it will be
harder to undo if you don't backup the prefs.js file.

This Repo contains a list of about:config settings that I have changed for both
preferential reasons, and also privacy and security reasons.

A lot of the settings from these files have come from ghacks list of settings
(reference at the bottom). At this point my settings are up to date with ghacks
list version 0.11 updated February 2017 (which at the time of writing, is the
most up to date version). I have skipped over settings I feel are not necessary
for me, or would eliminate the use of websites that I use on a daily basis.

See the user.js file for my about:config settings.

## Usage

### Windows VS Non-Windows Version

The files are identical. The only difference is that the windows version has
Windows friendly carriage returns. For operating systems other than windows, you
can use the non windows js file.

### General

Please visit [User.js File](http://kb.mozillazine.org/User.js_file) for details
on how to apply the user.js file to your install of Firefox.

In short, you can either go to the url `about:config` and search for the configs
manually and set them, or you can move the user.js file to the
[profile folder](http://kb.mozillazine.org/Profile_folder) which differs across
operating systems.

In thunderbird, you can get to the `about:config` by going to
`Edit -> Preferences`, then select the `Advanced` panel, and then select the
`General` tab. Now click `Config Editor`.

## Special Usage for Removing `Pocket`

Before applying the Firefox user.js file, make sure to remove pocket from the
toolbar first. After that is done you can apply the `browser.pocket.enabled`
configuration.

## Thanks

Francois Marier for the
[Firefox talk at LinuxFest NorthWest 2017](https://youtu.be/YDxq_9oVzDQ)

[Haasn](https://github.com/haasn)
for their about:config
[gist](https://gist.github.com/haasn/69e19fc2fe0e25f3cff5)
in which I found many of my current settings.

[ghacks](https://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/)
list of Firefox security and privacy settings

Also thanks to [CHEF-KOCH](https://github.com/CHEF-KOCH)
/
[NoScript-Whitelist](https://github.com/CHEF-KOCH/NoScript-Whitelist)
For their
[uBlock](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/),
and
[NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/)
settings, which are a huge help. I will not be posting my configurations here as
the license requires a list of changes.  Regardless, most of the settings are
from that repo.
