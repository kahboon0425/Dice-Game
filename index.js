var randomnumber1 = Math.floor(Math.random()*6) + 1; //1-6

var randomDiceImage = "dice" + randomnumber1 + ".png";   // dice1.png - dice6.png

var randomDiceSource = "images/dice" + randomnumber1 + ".png";   // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceSource);



var randomnumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + randomnumber2 + ".png";

var randomDiceSource = "images/dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceSource);




if (randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "Player 1 Win !";
}
else if (randomnumber2 === randomnumber1){
  document.querySelector("h1").innerHTML = "Draw!";
}
else{
  document.querySelector("h1").innerHTML = "Player 2 Win !";
}
