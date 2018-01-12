var app = {
    newJob: function (e, type, input) {
        var jobName = $(input).val();
        var event = window.event || e;

        if (event.keyCode === 13 && jobName.trim() !== "") {
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

    deleteJob: function (span) {
        var modal = $('#modal-confirm');
        var item = $(span).parent();
        var btn = $('#btn-delete');
        $('.modal').modal();
        modal.modal('open');
        btn.off('click');
        btn.on('click', function () {
            console.log('fc click')
            item.remove();
            modal.modal('close');
        })
    }

}

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






