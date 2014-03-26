//AutoWoot para o site "plug.dj" 
function AutoWoot() {
    aw = {
        autowoot: true,
        clicks: 0,
        close: function () {
            API.off(API.DJ_ADVANCE, aw.djAdvance);
            API.off(API.CHAT, aw.chat);
            $('#woot').unbind('click', aw.doubleClick);
        },
        djAdvance: function () {
            if (aw.autowoot) {
                setTimeout(function () {
                    $("#woot").click();
                }, 1000);
            }
        },
        doubleClick: function () {
            aw.clicks++;
            if (aw.clicks == 2) {
                aw.autowoot = !aw.autowoot;
                aw.clicks = 0;
                _$context.trigger('notify', 'icon-woot', aw.autowoot ? 'AutoWoot is now on!' : 'AutoWoot is now off!');
            }
            setTimeout(function () {
                aw.clicks = 0;
            }, 600);
        }
    };

    API.on(API.DJ_ADVANCE, aw.djAdvance, this);
    API.on(API.CHAT, aw.chat, this);
    $("#woot").bind('click', aw.doubleClick);
    $('#woot').click();
}
if (typeof aw !== "undefined") aw.close();
AutoWoot();


var url = document.URL;
var BEM = "http://plug.dj/brazil-eletro-mus1c/";

if (url === BEM) {
    API.chatLog("ON :v:", alert);
} else {
    API.chatLog("Enabling AutoWoot", alert);
}

if (url === BEM) {
    document.getElementById("playback").children[0].children[0].src = "http://i.imgur.com/6pmFP4q.jpg";
    setTimeout(function () {
        $("body").css("background-image", "url(http://i.imgur.com/car4AE2.png)");
    }, 100);
}
