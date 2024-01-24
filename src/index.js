import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { breakFastList, lunchList, dinnerList } from "./food";

ReactDOM.render( <div>
    <App />
    <div className="made-with-love">
      <p>Made with love by Sharukh🖤 </p>
    </div>
  </div>, document.getElementById("root"));

function breakFast() {
  var randomNumber = Math.floor(Math.random() * breakFastList.length); //generates number between  0-5
  console.log(randomNumber);

  var random =
    breakFastList[randomNumber].mealName +
    "<br>" +
    breakFastList[randomNumber].mealDescription; //random bf list
  document.querySelector(".image-paragraph").innerHTML = random;
  document.querySelector(".image-paragraph").classList.add("a"); //adding styles to para using class a from styles.css

  var randomImageSource = breakFastList[randomNumber].mealImage;
  document.querySelector(".food-img").setAttribute("src", randomImageSource); //changing img src
}

function lunch() {
  var randomNumber = Math.floor(Math.random() * lunchList.length); //0-5
  console.log(randomNumber);

  var random =
    lunchList[randomNumber].mealName +
    "<br>" +
    lunchList[randomNumber].mealDescription; //random bf list
  document.querySelector(".image-paragraph").innerHTML = random;
  document.querySelector(".image-paragraph").classList.add("a"); //adding styles to para using class a from styles.css
  console.log(randomNumber);

  var randomImageSource = lunchList[randomNumber].mealImage;
  document.querySelector(".food-img").setAttribute("src", randomImageSource); //changing img src
}

function dinner() {
  var randomNumber = Math.floor(Math.random() * dinnerList.length); //0-5
  console.log(randomNumber);

  var random =
    dinnerList[randomNumber].mealName +
    "<br>" +
    dinnerList[randomNumber].mealDescription; //random bf list
  document.querySelector(".image-paragraph").innerHTML = random;
  document.querySelector(".image-paragraph").classList.add("a"); //adding styles to para using class a from styles.css
  console.log(randomNumber);

  var randomImageSource = dinnerList[randomNumber].mealImage;
  document.querySelector(".food-img").setAttribute("src", randomImageSource); //changing img src
}

function buttonGenerate() {
  var mealSelector = document.querySelector(".meal-select").value; //getting value from select element
  if (mealSelector === "break-fast") {
    breakFast();
  } else if (mealSelector === "lunch") {
    lunch();
  } else if (mealSelector === "dinner") {
    dinner();
  } else {
    console.log("Please select something other than this");
  }
}

//Listern to generate button
var h = document.querySelector(".btn");
h.addEventListener("click", buttonGenerate);
