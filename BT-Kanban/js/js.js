$(".collection-item").hover(function () {
    $(this).children().show();
},
    function () {
        $(this).children().hide();
    });



var app = {
    newJob: function (e, type, input) {
        var jobName = $(input).val();
        console.log(jobName);
        var event = window.event || e;

        if (event.keyCode === 13 && jobName.trim() !== "") {
            //update Dom
            this.addJobToList(type, jobName);
            //reset input
            $('input').val('');
        }
    },

    addJobToList: function (type, jobName) {
        console.log(type);
        var item = '<div href="#!" class="collection-item ui-state-default">' + jobName + '<i class="material-icons";">delete</i>' + '</div>';
        $('#' + type).append(item);
    }

}

$('.material-icons').click(function () {
    $(this).parent().remove();
})


$('input').click(function () {
    // $('label').removeClass('active');
    $(this).next().addClass('active');
});


$(".sorted-list").sortable({
    connectWith: ".sorted-list",
    placeholder: "ui-state-highlight"
});

    // $(".collection-item").append('<i class="material-icons">delete</i>');









