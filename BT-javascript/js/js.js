$(function () {
    var status = true;
    var winArr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    $('.square').on('click', function () {
        
        if (status) {
            $(this).addClass('x').text('X').attr('data-tick','x');
            $(this).css('pointer-events' , 'none');
            status = false;
        }
        else {
            $(this).addClass('o').text('O').attr('data-tick','o');
            $(this).css('pointer-events' , 'none');
            status = true;
        }
        console.log($('.square').attr());
        
    })
    //
    

})