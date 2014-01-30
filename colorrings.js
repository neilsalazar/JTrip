var colorring = document.getElementsByTagName("img");
var changeImage = function () {
    for (var i = 0; i < colorring.length; i++) {
        var color = Math.random();
        if (color <= 0.14285714) {
            colorring[i].className += 'red';
        } else if (color > 0.14285715 && color <= 0.28571428) {
            colorring[i].className += 'blue';
        } else if (color > 0.28571428 && color <= 0.42857142) {
            colorring[i].className += 'purple';
        } else if (color > 0.42857142 && color <= 0.57142856) {
            colorring[i].className += 'yellow';
        } else if (color > 0.57142856 && color <= 0.7142857) {
            colorring[i].className += 'green';
        } else if (color > 0.7142857 && color <= 0.85714284) {
            colorring[i].className += 'orange';
        }
    }
};
changeImage();
/*function startTimer() {
    setInterval(changeImage, 5);
}
startTimer();*/