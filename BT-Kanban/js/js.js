$(function () {
    $(".sorted-list").sortable({
        connectWith: ".sorted-list",
        placeholder: "ui-state-highlight"
    });

    $(".collection-item").append('<i class="material-icons">delete</i>');

    $(".collection-item").hover(function () {
        $(this).children().show();
    },
        function () {
            $(this).children().hide();
        });


})


