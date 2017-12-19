var clickEvent = document.getElementsByClassName('title');
var child = document.getElementsByClassName('describe');
console.log(child);
for (var i = 0; i < clickEvent.length; i++) {
    console.log(clickEvent[i]);
    console.log(i);
    clickEvent[i].addEventListener('click', function () {
        console.log(i);
        // child[i].style.display = "inline";

    })
}