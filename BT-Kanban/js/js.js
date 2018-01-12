var COLUMN_TYPE = ["todo", "doing", "done"];

var DB = {
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
            if (!list[type]) list[type] = [];
            list[type].push(jobName);
            console.log(list)
            DB.setData(list);

            //update Dom
            this.addJobToList(type, jobName);
            //reset input
            $('input').val('');
        }
    },

    addJobToList: function (type, jobName) {
        var item = '<div href="#!" class="collection-item ui-state-default">' + jobName + '<i class="material-icons modal-trigger" data-target="modal1" onclick="app.deleteJob(this)">delete</i>' + '</div>';
        $('#' + type).append(item);
        $(".collection-item").hover(function () {
            $(this).children().show();
        },
            function () {
                $(this).children().hide();
            });
    },

    deleteJob: function (i) {
        var modal = $('#modal-confirm');
        var item = $(i).parent();
        var btn = $('#btn-delete');
        $('.modal').modal();
        modal.modal('open');
        btn.off('click');
        btn.on('click', function () {
            var columnType = item.parent().attr('id');
            var itemPosition = $('#' + columnType).children().index(item);
            // console.log(columnType);
            console.log(itemPosition);

            list[columnType].splice(itemPosition,1)
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
            console.log(jobName)
            app.addJobToList(type, jobName);
        })
    })

    $(".connectedSortable").sortable({
        connectWith: ".connectedSortable",
        placeholder: "ui-state-highlight",

        start: function (event, ui) {
            // $(ui.item[0]).addClass('dragging');
        },

        stop: function (event, ui) {
            // $(ui.item[0]).addClass('dragging');
        }
    });


    $('input').click(function () {
        $('input').next().removeClass('active');
        $(this).next().addClass('active');
    });

})








