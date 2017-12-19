$(window).scroll(function () {
    if ($(this).scrollTop() > 100) $('#backtop').fadeIn();
    else $('#backtop').fadeOut();
    });
    $('#backtop').click(function () {
    $('body,html').animate({scrollTop: 0}, 'slow');
    });