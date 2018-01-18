$(function () {
    var status = true;
    var test = false;
    var winArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    var square = $('.square');
    var click = 0;

    $('.square').on('click', function () {
        click++;
        if (status) {
            $(this).addClass('x').text('X').attr('data-tick', 'x');
            $(this).css('pointer-events', 'none');
            winArr.forEach(function (arr) {
                checkWin(arr);
                console.log(checkWin(arr));
            })
            function checkWin(arr) {
                var attrA = $(square[arr[0]]).attr('data-tick');
                var attrB = $(square[arr[1]]).attr('data-tick');
                var attrC = $(square[arr[2]]).attr('data-tick');
                if (attrA === "x" && attrB === "x" && attrC === "x" || attrA === "o" && attrB === "o" && attrC === "o") {
                    if (status) {
                        $('.square').css('pointer-events', 'none');
                        test = true;
                        return $('.result').text("X Win");
                    }
                    else {
                        $('.square').css('pointer-events', 'none');
                        test = true;
                        return $('.result').text("O Win");
                    }
                    return;
                }
            }
            status = false;
        }
        else {
            $(this).addClass('o').text('O').attr('data-tick', 'o');
            $(this).css('pointer-events', 'none');
            winArr.forEach(function (arr) {
                checkWin(arr);
            })
            function checkWin(arr) {
                var attrA = $(square[arr[0]]).attr('data-tick');
                var attrB = $(square[arr[1]]).attr('data-tick');
                var attrC = $(square[arr[2]]).attr('data-tick');
                if (attrA === "x" && attrB === "x" && attrC === "x" || attrA === "o" && attrB === "o" && attrC === "o") {
                    if (status) {
                        $('.square').css('pointer-events', 'none');
                        test = true;
                        return $('.result').text("X Win");
                    }
                    else {
                        $('.square').css('pointer-events', 'none');
                        test = true;
                        return $('.result').text("O Win");
                    }
                    return;
                }
            }
            status = true;
        }
        if (click === 9 && test == false) {
            return $('.result').text('Draw');
        }
    });
    // reset btn
    $('#reset-game').on('click', function () {
        window.location.href = window.location.href;
    })
})
