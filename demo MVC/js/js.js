$(document).ready(function () {
    var model = {
        coffee: [{
            name: 'coffee 1',
            counter: 0,
            src: 'img/Anh1.png'
        },
        {
            name: 'coffee 2',
            counter: 0,
            src: 'img/Anh2.png'
        },
        {
            name: 'coffee 3',
            counter: 0,
            src: 'img/Anh3.png'
        }, {
            name: 'coffee 4',
            counter: 0,
            src: 'img/Anh4.png'
        }, {
            name: 'coffee 5',
            counter: 0,
            src: 'img/Anh5.png'
        },
        ],

        currentCoffee: {
            name: 'coffee 1',
            src: 'img/Anh1.png',
            counter: 0
        }
    }

    var controller = {
        getListName: function () {
            var coffees = model.coffee;
            // console.log(coffees);
            var names = [];
            for (i = 0; i < coffees.length; i++) {
                names.push(coffees[i].name);
            }

            return names;
        },

        getcurrentCoffees: function () {
            return model.currentCoffee;
        },

        getObj: function () {
            return model.coffee
        },

        getCounter: function () {
            var getCounter = model.coffee;
            return getCounter;
        },

        batdau: function () {
            view.khoitao()
        },
    }

    //var coffee = {};
    //coffee.name = "abc";
    var view = {
        // view.thiscoffeeNames 
        khoitao: function () {
            this.listcoffeeNames = controller.getListName();
            this.currentCoffee = controller.getcurrentCoffees();
            this.getCounter = controller.getCounter();
            this.getObj = controller.getObj();
            view.hienthi();
        },

        hienthi: function () {
            var listcoffeeNames = this.listcoffeeNames;
            var html = '';
            for (var i = 0; i < listcoffeeNames.length; i++) {
                html += '<li data-name=' + i + '>' + listcoffeeNames[i] + '</li>';
            }
            $('#list').html(html);
            $('#name').text(this.currentCoffee.name);
            $('#counter').text(this.currentCoffee.counter);
            $('img').attr("src", this.currentCoffee.src);

            var currentCoffee = this.currentCoffee;
            console.log(currentCoffee);  
            var getObj = this.getObj;
            $('li').click(function () {
                var selected = $(this).attr('data-name')
                currentCoffee = getObj[selected];
                console.log(currentCoffee);
                $('img').attr('src', currentCoffee.src)
                $('#name').text(currentCoffee.name);
                $('#counter').text(currentCoffee.counter);
            })

            var getCounter = this.getCounter;
            $('img').click(function () {
                var x = $('img').attr('src')
                // console.log(x)
                for (i = 0; i < getCounter.length; i++) {
                    if (x == getCounter[i].src) {
                        getCounter[i].counter += 1;
                        $('#counter').text(getCounter[i].counter);
                    }
                }
            })

        }
    }
    controller.batdau();
})