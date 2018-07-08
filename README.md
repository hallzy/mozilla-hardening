# Mozilla Hardening

This repo was last updated when the ghacks-user-js repo was at commit:
08a5410b88b9ae5a71614ed7dffb4bd2d805e6a5

## Intro

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

For Linux, I have also provided a script in `firefox/nix/` that will globally
install Firefox webextensions for the computer.

## Usage

### Install Extensions Script

There are 4 ways to use this script:

1. Provide the script with a URL to the XPI file for the extension
2. Provide the name of the extension
3. Provide a pre-downloaded XPI file for the extension
4. Populate the `extensions` array in the script

#### Providing URL

```bash
$ ./install_extensions.sh https://addons.mozilla.org/firefox/downloads/file/972162/noscript_security_suite-10.1.8.2-an+fx.xpi?src=dp-btn-primary
```

This will download this specific XPI file for you, rename it to the extension's
ID, and move it to the correct folder. All you have to do after running this
command is restart Firefox.

#### Providing Extension Name

```bash
$ ./install_extensions.sh noscript
```

This will download the latest XPI file for this extension for you, rename it to
the extension's ID, and move it to the correct folder. All you have to do after
running this command is restart Firefox.

Note that the name you provide must be the same as what is in the URL for this
extension. Example, if you google `noscript` and go to the Firefox addons page,
you will see that the URL for this extension is:
`https://addons.mozilla.org/en-US/firefox/addon/noscript/`.
Here we can see that the extension name is `noscript`.

#### Providing File

```bash
$ ./install_extensions.sh noscript.xpi
```

If you have already downloaded the XPI file that you want, just provide the
script with an XPI file (must have the `.xpi` extension).

This will rename it to the extension's ID, and move it to the correct folder.
All you have to do after running this command is restart Firefox.

#### Populating the extensions array

If you open the script you will see an extensions array at the top of the file
that looks something like this:

```bash
declare -a extensions=(
"noscript"
"umatrix"
"ublock-origin"
"canvasblocker"
)
```

You can change this to contain any extensions you want (so long as the extension
names are the names given in the URL of the addon page for that extension).

If you want to use this array for your extension installation, run the script
like below:

```bash
$ ./install_extensions.sh
```

This will download the latest version of each extension in the `extensions`
array, rename them to their IDs, and move them to the correct folder.  All you
have to do after running this command is restart Firefox.

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

## Firefox Extensions

### NoScript

This add-on blocks all scripts on every page that you visit by default, along
with some cross site scripting etc.

See below in the `thanks` section to find `CHEF-KOCH`s
NoScript settings, which are a good place to start. It comes with some common
sites that are okay to whitelist, and also some blacklisted sites that are known
trackers.

### uBlock and uMatrix

Content Blockers

See below in the `thanks` section to find `CHEF-KOCH`s
uBlock settings, which are a good place to start.

### HTTPS Everywhere

An extension that attempts to force HTTPS on every webpage you visit.

My settings are as follows:
* Click the HTTPS Everywhere icon in your toolbar
* Make sure that `block all unencrypted requests` is checked (I have noticed
  that with this setting Firefox slows down a lot eventually to the point where
it will not even load pages anymore. Choose this option if you so choose)
* Go to the SSL Observatory Preferences
* It is a good idea to enable this if you are comfortable doing so. EFF is
  trustworthy, and enabling this feature will help you to be more secure.

### Random Agent Spoofer

This randomly (or selectively) changes your User Agent Profile. Essentially, it
tells websites that you are using a different browser and system than you
actually are in order to increase anonymity, and reduce fingerprinting.

My settings are:
* Random (Desktop)
* Every Request
* Under Options, I select "Disable Canvas Support"
* Most of the other settings are covered by the user.js file. NOTE: When you
  install this addon, it will make changes to all of settings we did in user.js,
  hence, disabling some of our settings. Restart Firefox, and the user.js file
  will then take precedence.
* Now go to the add-ons page and select preferences for this. Uncheck the "show
  notifications" box

### Privacy Badger

Add-on by EFF. This is designed to stop trackers. It doesn't use a pre-made list
of domains to block, it just learns over time what it should block and develops
its own list.

My Settings:
* Click the icon in the toolbar and click the gear icon
* Select the general settings tab and check all 4 boxes

### Self Destructing Cookies

Deletes cookies after you have left the website that uses the cookies.

Only setting is unchecking the box `notifications` in the preferences part of
the list of add-ons

### Canvas Blocker

Canvas's are a good source of trackable material for trackers. This helps
mitigate this.

You can either block the canvas outright, or spoof it with this add-on. Choose
either or in the preferences.

Blocking will just not provide the API with any information, which one might
argue makes you trackable simply because a non-result is still a result.
Spoofing will give the API information, but it will be false and different
everytime the API asks for information. Your call.

The Fake Readout (spoofing) is the default setting.

### SSleuth

This add-on just gives your HTTPS connection a grade from 0 to 10 and gives
information about your connection.

### Disconnect

Blocks certain content, ads, and analytics.

### NoCoin

[NoCoin](https://github.com/keraf/NoCoin) Blocks in browser bitcoin miners from
running

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
list of Firefox security and privacy settings. This list is now updated on
github:
[ghacks-user.js](https://github.com/ghacksuserjs/ghacks-user.js)

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
