var COLUMN_TYPE = ["todo", "doing", "done"];
//Tao bien de luu va lay du lieu trong local storage
var DB = {

    //lay du lieu
    getData: function () {
        if (typeof (Storage) !== "undefined") {
            var data;

            try {
                data = JSON.parse(localStorage.getItem('list') || {});
            }
            catch (error) {
                data = {};
            }
            return data;

        } else {
            alert(' Sorry! No Web Storage support..')
            return {};
        }
    },

    //luu du lieu
    setData: function (data) {
        localStorage.setItem('list', JSON.stringify(data));
    }
}

var list = DB.getData();



var app = {
    newJob: function (e, type, input) {
        var jobName = $(input).val();
        var event = window.event || e;

        if (event.keyCode === 13 && jobName.trim() !== "") {
            var count = $('#' + type + ' > div').length + 1;
            if (type === "doing" && count > 3) {
                Materialize.toast('Doing can not more than 3 jobs', 2000)
                return false;
                
                
            }
            if (!list[type]) list[type] = [];
            list[type].push(jobName);
            DB.setData(list);

            //update Dom
            this.addJobToList(type, jobName);
            //reset input
            $('input').val('');

        }
    },

    addJobToList: function (type, jobName) {
        // var countDoing = $('#doing > div').length + 1;
        // console.log(countDoing)
        // if (countDoing > 3) {
        //     console.log('Doing ko dc vuot qua 3')
        //     return false;          
        // }
        var count = $('#' + type + ' > div').length + 1;
        // if (type === "doing" && count > 3) {

        //     return false;
        //     console.log('Doing ko dc vuot qua 3')
        // }
        // console.log(count);
        $('#' + type).prev().html('<h5>' + type.toUpperCase() + '<span>  (' + count + ')</span>' + '</h5>')
        var item = '<div href="#!" class="collection-item ui-state-default">' + jobName + '<i class="material-icons modal-trigger" data-target="modal1" onclick="app.deleteJob(this)">delete</i>' + '</div>';
        $('#' + type).append(item);
        //    console.log('#' + type +' .collection-item'.length )
        $(".collection-item").hover(function () {
            $(this).children().show();
        },
            function () {
                $(this).children().hide();
            });

    },

    deleteJob: function (i) {
        // console.log(i)
        var modal = $('#modal-confirm');
        var item = $(i).parent();
        var btn = $('#btn-delete');

        // console.log(count);
        $('.modal').modal();
        modal.modal('open');
        btn.off('click');
        btn.on('click', function () {
            var columnType = item.parent().attr('id');
            var itemPosition = $('#' + columnType).children().index(item);
            var count = $('#' + columnType + ' > div').length - 1;
            $('#' + columnType).prev().html('<h5>' + columnType.toUpperCase() + '<span>  (' + count + ')</span>' + '</h5>')
            // console.log(count);
            list[columnType].splice(itemPosition, 1)
            DB.setData(list);
            item.remove();
            modal.modal('close');

        })
    }

}

$(function () {
    // In trong Local Storage ra

    COLUMN_TYPE.forEach(function (type) {
        var columbType = list[type] || [];
        columbType.forEach(function (jobName) {
            app.addJobToList(type, jobName);
        })

        countJobLocalStorage = list[type].length;

        // console.log(countJob);
        $('#' + type).prev().html('<h5>' + type.toUpperCase() + '<span>  (' + countJobLocalStorage + ')</span>' + '</h5>')
        // console.log( list[type].length)
    })

    $(".connectedSortable").sortable({
        connectWith: ".connectedSortable",
        placeholder: "ui-state-highlight",

        start: function (event, ui) {
            // $(ui.item[0]).addClass('dragging');
            // console.log(event)
            // console.log(ui)
            ui.item.oldColumnType = ui.item[0].parentElement.id;
            ui.item.oldItemPosition = ui.item.index();
        },

        stop: function (event, ui) {
            // $(ui.item[0]).addClass('dragging');
            // console.log(event)
            // console.log(ui)
            var countDoing = $('#doing > div').length;
            console.log(countDoing)
            if (countDoing > 3) {
                Materialize.toast('Doing can not more than 3 jobs', 2000)
                return false;
            }
            var item = ui.item;
            var oldColumnType = item.oldColumnType;
            var oldItemPosition = item.oldItemPosition;
            var newColumnType = ui.item[0].parentElement.id;
            var newItemPosition = item.index();
            //remove item from old position
            list[oldColumnType].splice(oldItemPosition, 1)

            //add item to new position
            list[newColumnType].splice(newItemPosition, 0, item[0].firstChild.textContent)

            //luu vao storage
            DB.setData(list);

            // console.log(oldColumnType);
            // console.log(oldItemPosition);
            // console.log(newColumnType);
            // console.log(newItemPosition);

        }
    });




    $('input').click(function () {
        $('input').next().removeClass('active');
        $(this).next().addClass('active');
    });

})







