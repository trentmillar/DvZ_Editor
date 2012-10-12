(function () {
    var baseScripts = [
        'scripts/jquery-1.8.2.js',
        'scripts/jquery.validate.js'
    ];

    var d = document;
    var c = d.querySelector('#btg-scripts').c;

    if (c.loadExtension != null && c.loadExtension == true) {
        baseScripts = baseScripts.concat([
            '../extensions/GUI/CCControlExtension/CCControl.js',
            '../extensions/GUI/CCControlExtension/CCControlButton.js',
            '../extensions/GUI/CCControlExtension/CCControlUtils.js',
            '../extensions/GUI/CCControlExtension/CCInvocation.js',
            '../extensions/GUI/CCControlExtension/CCScale9Sprite.js',
            '../extensions/GUI/CCControlExtension/CCMenuPassive.js',
            '../extensions/GUI/CCControlExtension/CCControlSaturationBrightnessPicker.js',
            '../extensions/GUI/CCControlExtension/CCControlHuePicker.js',
            '../extensions/GUI/CCControlExtension/CCControlColourPicker.js',
            '../extensions/GUI/CCControlExtension/CCControlSlider.js',
            '../extensions/GUI/CCControlExtension/CCControlSwitch.js',
            '../extensions/GUI/CCScrollView/CCScrollView.js',
            '../extensions/GUI/CCScrollView/CCSorting.js',
            '../extensions/GUI/CCScrollView/CCTableView.js',
            '../extensions/CCBReader/CCNodeLoader.js',
            '../extensions/CCBReader/CCBReaderUtil.js',
            '../extensions/CCBReader/CCControlLoader.js',
            '../extensions/CCBReader/CCSpriteLoader.js',
            '../extensions/CCBReader/CCNodeLoaderLibrary.js',
            '../extensions/CCBReader/CCBReader.js'
        ]);
    }

    if (!c.engineDir) {
        baseScripts = [];
    }
    else {
        baseScripts.forEach(function (e, i) {
            baseScripts[i] = c.engineDir + e;
        });
    }
    if (c.box2d)
        baseScripts.push('libs/box2d/box2d.js');
    var loaded = 0;
    var que = baseScripts.concat(c.appFiles);
    que.push('main.js');
    if (navigator.userAgent.indexOf("Trident/5") > -1) {
        //ie9
        this.serial = -1;
        var loadNext = function () {
            var s = this.serial + 1;
            if (s < que.length) {
                var f = d.createElement('script');
                f.src = que[s];
                f.serial = s;
                f.onload = loadNext;
                d.body.appendChild(f);
                p = s / (que.length - 1);
                //TODO: code for updating progress bar
            }
        };
        loadNext();
    }
    else {
        que.forEach(function (f, i) {
            var s = d.createElement('script');
            s.async = false;
            s.src = f;
            s.onload = function () {
                loaded++;
                p = loaded / que.length;
                //TODO: code for updating progress bar
            };
            d.body.appendChild(s);
            que[i] = s;

        });
    }
})();
