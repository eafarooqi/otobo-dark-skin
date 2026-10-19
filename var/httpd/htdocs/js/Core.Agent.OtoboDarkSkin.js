/* Apply the selected skin to the separate signature preview document. */
(function () {
    'use strict';

    function StyleSignature(Frame) {
        if (!Frame || Frame.tagName !== 'IFRAME' || !Frame.classList.contains('Signature')) {
            return;
        }

        var SkinCSS = document.querySelector('link[href*="/skins/Agent/OtoboDarkSkin/"]'),
            FrameDocument;

        if (!SkinCSS) {
            return;
        }

        try {
            FrameDocument = Frame.contentDocument;
        }
        catch (Error) {
            return;
        }

        if (!FrameDocument || !FrameDocument.head || FrameDocument.getElementById('OtoboDarkSkinSignature')) {
            return;
        }

        var Stylesheet = FrameDocument.createElement('link');
        Stylesheet.id = 'OtoboDarkSkinSignature';
        Stylesheet.rel = 'stylesheet';
        // Both css/ and css-cache/ are siblings of the skin's css/ folder.
        Stylesheet.href = new URL('../css/thirdparty/Signature.css', SkinCSS.href).href;
        FrameDocument.head.appendChild(Stylesheet);
    }

    // Capture iframe loads, including reloads after the selected queue changes.
    document.addEventListener('load', function (Event) {
        StyleSignature(Event.target);
    }, true);

    function Init() {
        document.querySelectorAll('iframe.Signature').forEach(StyleSignature);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', Init);
    }
    else {
        Init();
    }
}());
