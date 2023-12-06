function changeColor (){
    setTimeout(function() {
        document.body.style.background = "yellow";
    }, 500)
    setTimeout(function() {
        document.body.style.background = "aqua";
    }, 1000)
    setTimeout(function() {
        document.body.style.background = "crimson";
    }, 1500)
    setTimeout(changeColor, 1500);
}
changeColor()