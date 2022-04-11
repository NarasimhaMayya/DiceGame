var randomNum1 = Math.floor(Math.random() * 6) + 1;

var imageSource1 = "images/dice" + randomNum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageSource1);


var randomNum2 = Math.floor(Math.random() * 6) + 1;

var imageSource2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);


// Winning declaration

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";   
}
else if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else  {
    document.querySelector("h1").innerHTML = "Draw 🙃";
}