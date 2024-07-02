/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let card = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let suit = ["♠ ", "♥ ", "♣", "♦"];
  let randomCard = Math.floor(Math.random() * card.length);
  let randomSuit = Math.floor(Math.random() * suit.length);
  if (randomSuit == 1 || randomSuit == 3) {
    document.getElementById("card1").style.color = "red";
    document.getElementById("card2").style.color = "red";
  }
  let newCard = document.querySelector("#card1");
  newCard.innerHTML = suit[randomSuit];
  let newCard2 = document.querySelector("#card2");
  newCard2.innerHTML = suit[randomSuit];
  let number = document.querySelector("#center");
  number.innerHTML = card[randomCard];
  //newCard.classList.remove('heart')
  //newCard.classList.add(randomSuit);
};
