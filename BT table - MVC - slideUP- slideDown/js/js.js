$(function () {
    var model = {
        player: [{
            name: "Diego Maradona",
            age: 57,
            src: "img/maradona.jpg",
            history: 'abc'
        },
        {
            name: "Lionel Messi",
            age: 30,
            src: "img/messi.jpg",
            history: 'abc'
        },
        {
            name: "Pele",
            age: 77,
            src: "img/pele.jpg",
            history: 'abc'
        },
        {
            name: "Zinedine Zidane",
            age: 45,
            src: "img/zidan.jpg",
            history: 'abc'
        },
        {
            name: "Cristiano Ronaldo",
            age: 32,
            src: "img/ronaldo.jpg",
            history: 'abc'
        },

        ]
    }

    var controler = {
        getModel: function () {
            var player = model.player;
            return player
        },

        getListName: function () {
            var player = model.player;
            var names = [];
            for (i = 0; i < player.length; i++) {
                names.push(player[i].name)
            }
            return names;
        },

        getAge: function () {
            var player = model.player;
            var ages = [];
            for (i = 0; i < player.length; i++) {
                ages.push(player[i].age)
            }
            return ages
        },

        getSrc: function () {
            var player = model.player;
            var srcs = [];
            for (i = 0; i < player.length; i++) {
                srcs.push(player[i].src)
            }
            return srcs;
        },

        start: function () {
            view.init();
        }

    }

    var view = {
        init: function () {
            this.listPlayerName = controler.getListName();
            this.listPlayerAge = controler.getAge();
            this.listPlayerSrc = controler.getSrc();
            this.player = controler.getModel();
            this.display();
        },

        display: function () {
            var listPlayerName = this.listPlayerName;
            var listPlayerAge = this.listPlayerAge;
            var listPlayerSrc = this.listPlayerSrc;
            var player = this.player;
            for (i = 0; i < player.length; i++) {
                $('table').append(
                    '<div class="playerName">' + '<h1>' + player[i].name + '</h1>'
                    + '</div>' +
                    '<div class="infoPlayer">' + '<img  style="width:200px;" src="' + player[i].src + '" />' + '<p>' + player[i].history + '</p>' + '<p>' + player[i].age + '</p>' + '</div>'
                )
            }
            $('.infoPlayer').slideUp();
            $('.playerName').click(function(){
                if($(this).hasClass('title')){
                    $('.infoPlayer').slideUp();
                    $('.playerName').removeClass('title');
                    return
                }
                $('.infoPlayer').slideUp();
                $(this).next().slideDown();
                $('.playerName').removeClass('title');
                $(this).addClass('title');
            })
        }
    }



    controler.start();
});

