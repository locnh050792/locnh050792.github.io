var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&prop=extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrlimit=10&gsrsearch=";
var page = 'https://en.wikipedia.org/?curid='

$('input').change(function () {
    var title = $('input').val();
    var urlWiki = api + title;
    $('.result').remove();

    $.ajax({
        url: urlWiki,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data)
            var result = data.query.pages
            $.each(result, function (val) {
                $('body').append(
                    "<div class='result'>" +
                    "<a href=" + page + result[val].pageid + " " + "target='_blank'>" +
                    "<h1 class='title'>" + result[val].title + "</h1>" +
                    "<h4 class='extract'>" + result[val].extract + "</h4>" +
                    "</a>" +
                    "</div>"
                )
            })
        }
    });
});