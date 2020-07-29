var randomNumber1 = Math.floor((Math.random() * 6) + 1 );
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage1Source = "images/" + randomDiceImage1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImage2Source = "images/" + randomDiceImage2;

document.querySelector(".img1").setAttribute("src",randomDiceImage1Source);
document.querySelector(".img2").setAttribute("src",randomDiceImage2Source);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
}else{
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
