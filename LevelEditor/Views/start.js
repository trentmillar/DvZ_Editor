var LL = LL || {};

(function () {
    var d = document;
    var c = {
        tag: 'canvas',
        engineDir: 'libs/cocos2d/',
        appFiles: [
            'src/Resource.js',
            'src/b2.js',
            'src/config/GameConfig.js',
            'src/config/EnemyType.js',
            'src/config/Level.js',
            'src/Bullet.js',
            'src/Grenade.js',
            'src/Enemy.js',
            'src/Robot.js',
            'src/Explosion.js',
            'src/Player.js',
            'src/LevelManager.js',
            'src/GameController.js',
            'src/GameControlMenu.js',
            'src/GameLayer.js',
            'src/GameOver.js',
            'src/AboutLayer.js',
            'src/SettingsLayer.js',
            'src/SysMenu.js'
        ]
    };
    window.addEventListener('DOMContentLoaded', function () {
        //first load engine file if specified
        /*var s = d.createElement('script');
        s.id = 'cocos2d-html5';
        s.src = c.engineDir + 'platform/jsloader.js';
        s.c = c;
        d.body.appendChild(s);*/
        var s = d.createElement('script');
        s.src = c.engineDir + 'platform/jsloader.js';
        d.body.appendChild(s);
        s.c = c;
        s.id = 'cocos2d-html5';
    });
})();