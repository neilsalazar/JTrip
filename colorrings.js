/*var colorring = document.getElementsByTagName("img");
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

var changeImgBorder = $("#picwrap img");
var changeBorder = function() {
    for (var i = 0; i < changeImgBorder.length; i++) {
        var $color = Math.random();
        if ($color <= 0.14285714) {
            $(changeImgBorder[i]).css("border-color", "rgba(255, 13, 13, 1)");
        } else if ($color > 0.14285715 && $color <= 0.28571428) {
            $(changeImgBorder[i]).css("border-color", "rgba(133, 229, 255, 1)");
        } else if ($color > 0.28571428 && $color <= 0.42857142) {
            $(changeImgBorder[i]).css("border-color", "rgba(200, 133, 255 1)");
        } else if ($color > 0.42857142 && $color <= 0.57142856) {
            $(changeImgBorder[i]).css("border-color", "rgba(255, 255, 18, 1)");
        } else if ($color > 0.57142856 && $color <= 0.7142857) {
            $(changeImgBorder[i]).css("border-color", "rgba(153, 255, 20, 1)");
        } else if ($color > 0.7142857 && $color <= 0.85714284) {
            $(changeImgBorder[i]).css("border-color", "rgba(255, 179, 3, 1)");
        }
}
};
setTimeout(changeBorder(), 2000);

setInterval(function() {
   changeBorder()
},
    7000);