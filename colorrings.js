var colorring = document.getElementsByTagName("img");
var changeImage = function () {
    for (var i = 0; i < colorring.length; i++) {
        var color = Math.random();
        if (color <= 0.25) {
            colorring[i].className += 'red';
        } else if (color >= 0.25 && color <= 0.50) {
            colorring[i].className += 'blue';
        } else if (color > 0.50 && color <= 0.75) {
            colorring[i].className += 'purple';
        }
    }
};
changeImage();
/*function startTimer() {
    setInterval(changeImage, 5);
}
startTimer();*/