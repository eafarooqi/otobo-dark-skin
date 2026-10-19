# otobo-dark-skin
A dark skin for OTOBO

![OTOBO Dark Skin](/screenshot.png?raw=true)

OTOBO is a fork based on the ((OTRS)) Community Edition.

- https://otobo.de
- https://github.com/RotherOSS/otobo

## Motivation
At the time of this release, only one default skin is included in OTOBO, and the colors used there are way too bright and shiny for me personally. So I decided to create a dark skin for OTOBO based on the files included in the default skin.

It's possible that it doesn't work well with all add-on packages, since I focused exclusively on packages I use, which are the following so far:
- FAQ
- Survey

## Installation
### OTOBO Package Manager
The skin plugin can be installed using the `OTOBO Package Manager` (Admin > Administration > Package Manager). 
Please download the `OPM` file from [Releases](https://github.com/relkai/otobo-dark-skin/releases) and install it using the `Install Package` button.

### OTOBO System configuration 
OTOBO offers a powerfull `System configuration` (Admin > Administration > System configuration) to change the behavior of the frontend. 

If you want this skin to be the default one for all new users, change the following system configuration setting to `OtoboDarkSkin`:
``` 
Loader::Agent::DefaultSelectedSkin
```

If you want to change the logo shown in the header of the agent interface, change the following system configuration setting:
```
AgentLogoCustom###OtoboDarkSkin
```

## Third-party styles

The custom jQuery UI 1.14.2 theme (including autocomplete) and its images are in
`css/thirdparty/jquery-ui-1.14.2/`. The supplied vendor CSS is unchanged.
`css/thirdparty/Overrides.css` contains the jQuery UI compatibility rules for
OTOBO's default skin, plus the existing CKEditor and jsTree overrides. OTOBO
core styles and vacation-day highlighting stay in their original CSS files.

Both third-party stylesheets are loaded through
`Loader::Agent::CommonCSS###999-OtoboDarkSkin-ThirdParty`. They exist only in
this skin, so OTOBO skips them for other skins. No JavaScript is replaced.

After deploying the updated skin files and configuration, run these commands
from the OTOBO installation directory as the OTOBO service user:

```sh
bin/otobo.Console.pl Maint::Config::Rebuild
bin/otobo.Console.pl Maint::Loader::CacheCleanup
```

Hard-refresh the browser and check calendar navigation and date states,
autocomplete with the mouse and keyboard, jsTree fields, and CKEditor dialogs.
