var channels = ["freecodecamp", "ESL_SC2", "OgamingSC2", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "cretetion"];

function getChannelInfo() {
    channels.forEach(function (channel) {
        function makeURL(type, name) {
            return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
        };
        $.getJSON(makeURL("streams", channel), function (data) {
            // console.log(data);
            var game;
            var status;

            if (data.stream === null) {
                game = "Offline";
                status = "Offline";
            }
            else if (data.stream === undefined) {
                game = "Game Close";
                status = "Offline";
            }
            else {
                game = data.stream.game;
                status = "Online";
            }
            $.getJSON(makeURL("channels", channel), function (data) {
                var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
                var name = data.display_name != null ? data.display_name : channel;
                var description = status === "Online" ? ":" + data.status : "Offline";
                var mainContent = "<div class='row navbar-inverse " + status + "'>" +
                    "<div class='logo col-lg-2'> <a target='_blank' href='" + data.url + "'> <img id='logo' src=" + logo + " alt='logo'> </div>" +
                    "<div class='name col-lg-3'>" + name + "</div> <div class='status col-lg-7'>" + description + "</div>" +
                    "</div>";
                // console.log(data)
                console.log(description)
                if (status === "Online") {
                    $(".main-content").prepend(mainContent)
                } else {
                    $(".main-content").append(mainContent)
                }

            })

        })
    })
}

$(function () {
    getChannelInfo();
    if ($('.row').hasClass('Online')) {
        $('.Online').css('background-color', 'red')
    }
    $('#all').on('click', function () {
        $('.row').show();
    })

    $('#offline').on('click', function () {
        $('.Offline').show();
        $('.Online').hide();
    })
    $('#online').on('click', function () {
        $('.Online').show();
        $('.Offline').hide();
    })
})