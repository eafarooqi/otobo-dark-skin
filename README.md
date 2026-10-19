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

The custom jQuery UI 1.14.2 theme (including autocomplete) is in
`css/thirdparty/jquery-ui-1.14.2/jquery-ui.css`, with images in
`css/thirdparty/jquery-ui-1.14.2/images/`. Its selectors have a `:root` prefix so the
theme takes precedence over the default `jquery-ui.min.css` that OTOBO's
`HTMLHead.tt` links after the skin CSS. Selectors beginning with `html` use
`html:root` instead. The supplied colors and layout declarations are unchanged.
Component styles remain under `css/thirdparty/`. Only declarations that reference
images are collected in `css/ThirdParty.Overrides.css`, loaded last. That file
lives in `css/`, which is a sibling of OTOBO's `css-cache/`. Image URLs such as
`../css/thirdparty/jquery-ui-1.14.2/images/ui-icons_ffffff_256x240.png` resolve to
the same PNG from either directory. This works with CSS caching enabled or
disabled, at any installation URL, without hardcoded web paths or base64 data.
Keep the image stylesheet directly in `css/` for this reason.
`css/thirdparty/Overrides.css` contains the jQuery UI compatibility rules for
OTOBO's default skin, plus the existing CKEditor and jsTree overrides. OTOBO
core styles and vacation-day highlighting stay in their original CSS files.

All three stylesheets are loaded through
`Loader::Agent::CommonCSS###999-OtoboDarkSkin-ThirdParty`. They exist only in
this skin, so OTOBO skips them for other skins. No JavaScript is replaced.

When replacing the downloaded theme in future, retain these selector prefixes.
Retain the `../css/thirdparty/jquery-ui-1.14.2/images/` image path prefix as well.
Put image declarations in `css/ThirdParty.Overrides.css`; keep other overrides
in `css/thirdparty/Overrides.css`, including compatibility with OTOBO's
`!important` styles.

After deploying the updated skin files and configuration, run these commands
from the OTOBO installation directory as the OTOBO service user:

```sh
bin/otobo.Console.pl Maint::Config::Rebuild
bin/otobo.Console.pl Maint::Loader::CacheCleanup
```

Hard-refresh the browser and check calendar navigation and date states,
autocomplete with the mouse and keyboard, jsTree fields, and CKEditor dialogs.

## Signature preview

`js/Core.Agent.OtoboDarkSkin.js` loads `css/thirdparty/Signature.css` inside
signature preview iframes when the dark skin is active. It derives the asset
URL from the selected skin's stylesheet, supports queue changes that reload
the iframe, and does not modify the saved signature HTML. Other skins are
unaffected. Deploy the JavaScript, iframe stylesheet, and updated configuration
together, then rebuild configuration and clear the loader cache as above.
