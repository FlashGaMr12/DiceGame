var randomNumber1 = Math.floor(Math.random() * 6  + 1); // 1-6
var randomDice = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png
var image1 = document.querySelector(".img1").setAttribute("src", randomDice); //random image

var randomNumber2 = Math.floor(Math.random() * 6  + 1); // 1-6
var randomDice2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png
var image2 = document.querySelector(".img2").setAttribute("src", randomDice2); //random image

if(randomNumber1 > randomNumber2){

 document.querySelector(".heading1").innerHTML = "🏁Player 1 wins";

}else if(randomNumber2 > randomNumber1){

  document.querySelector(".heading1").innerHTML = "Player 2 wins 🏁";
}else if(randomNumber1===randomNumber2){

  document.querySelector(".heading1").innerHTML = "🎌Draw";
}
