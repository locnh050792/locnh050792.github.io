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
                status = "offline";
            }
            else if (data.stream === undefined) {
                game = "Game Close";
                status = "offline";
            }
            else {
                game = data.stream.game;
                status = "Online";
            }
            $.getJSON(makeURL("channels", channel), function (data) {
                var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
                var name = data.display_name != null ? data.display_name : channel;
                var description = status === "Online" ? ":" + data.status : "Offline";
                // console.log(data)
                console.log(description)
                $(".main-content").append(
                    "<div class='row navbar-inverse'>" +
                    "<div class='logo col-lg-3'> <a target='_blank' href='" + data.url + "'> <img id='logo' src=" + logo + " alt='logo'> </div>" +
                    "<div class='name col-lg-3'>" + name + "</div> <div class='status col-lg-6'>" + description + "</div>" +
                    "</div>"
                )
            })

        })
    })
}

$(function () {
    getChannelInfo();
})