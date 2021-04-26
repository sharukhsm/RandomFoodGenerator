let breakFastList = [{
    idMeal: 1,
    mealName: 'Yogurt Parfait',
    mealDescription: "Yogurt Parfait is an insanely easy breakfast made by layering yogurt with fresh raspberries and strawberries."
  },
  {
    idMeal: 2,
    mealName: 'Avacado Toast & Eggs',
    mealDescription: "Avocado toast is a delicious and simple breakfast, snack or light meal!"
  },
  {
    idMeal: 3,
    mealName: 'Oatmeal and Fruit',
    mealDescription: "Oats are commonly eaten for breakfast as oatmeal, which is made by boiling oats in water or milk. Oatmeal is often referred to as porridge."
  },
  {
    idMeal: 4,
    mealName: 'Pancake',
    mealDescription: "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface."
  },
  {
    idMeal: 5,
    mealName: 'Smoothie',
    mealDescription: "A smoothie is a drink made from pureed raw fruit and/or vegetables, using a blender."
  },
];

let lunchList = [{
    idMeal: 1,
    mealName: 'Dal kichdi',
    mealDescription: "Khichdi is a simple, classic Indian dish made with rice and yellow mung lentils."
  },
  {
    idMeal: 2,
    mealName: 'Sandwitch',
    mealDescription: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread."
  },
  {
    idMeal: 3,
    mealName: 'Salad',
    mealDescription: "A salad is a dish consisting of mixed pieces of food, sometimes with at least one raw ingredient. "
  },
  {
    idMeal: 4,
    mealName: 'Pizza',
    mealDescription: "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients."
  },
  {
    idMeal: 5,
    mealName: 'Rice',
    mealDescription: "Rice is versatile, healthy, and delicious, and these easy rice recipes are here to prove it! Ideas include side dishes, grain bowls, sushi, and more."
  },
];

let dinnerList = [{
    idMeal: 1,
    mealName: 'Burger',
    mealDescription: "A burger is a sandwich consisting of one or more cooked patties of ground meat, usually chicken, placed inside a sliced bread roll or bun."
  },
  {
    idMeal: 2,
    mealName: 'Noodles',
    mealDescription: "Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings."
  },
  {
    idMeal: 3,
    mealName: 'Fried rice',
    mealDescription: "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat."
  },
  {
    idMeal: 4,
    mealName: 'Chicken barbecue',
    mealDescription: "Barbecue chicken consists of chicken parts or entire chickens that are barbecued, grilled or smoked."
  },
  {
    idMeal: 5,
    mealName: 'Pasta',
    mealDescription: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking."
  },
];


function breakFast() {
  var randomNumber = Math.floor((Math.random() * breakFastList.length)); //0-4
  console.log(randomNumber);


  var random = breakFastList[randomNumber].mealName + "<br>" + breakFastList[randomNumber].mealDescription; //random bf list
  document.querySelector(".image-paragraph").innerHTML = random;
  document.querySelector(".image-paragraph").classList.add("a"); //adding styles to para using class a from styles.css
  console.log(randomNumber);

  var randomImageSource = "images/breakfast/food" + randomNumber + ".jpg"; //food1.jpg-food4.jpg
  document.querySelector(".food-img").setAttribute("src", randomImageSource); //changing img src
  console.log(randomNumber);


}


function lunch() {
  var randomNumber = Math.floor((Math.random() * lunchList.length)); //0-4
  console.log(randomNumber);

  var random = lunchList[randomNumber].mealName + "<br>" + lunchList[randomNumber].mealDescription; //random bf list
  document.querySelector(".image-paragraph").innerHTML = random;
  document.querySelector(".image-paragraph").classList.add("a"); //adding styles to para using class a from styles.css
  console.log(randomNumber);

  var randomImageSource = "images/lunch/food" + randomNumber + ".jpg"; //food1.jpg-food4.jpg
  document.querySelector(".food-img").setAttribute("src", randomImageSource); //changing img src
  console.log(randomNumber);


}

function dinner() {
  var randomNumber = Math.floor((Math.random() * dinnerList.length)); //0-4
  console.log(randomNumber);

  var random = dinnerList[randomNumber].mealName + "<br>" + dinnerList[randomNumber].mealDescription; //random bf list
  document.querySelector(".image-paragraph").innerHTML = random;
  document.querySelector(".image-paragraph").classList.add("a"); //adding styles to para using class a from styles.css
  console.log(randomNumber);

  var randomImageSource = "images/dinner/food" + randomNumber + ".jpg"; //food1.jpg-food4.jpg
  document.querySelector(".food-img").setAttribute("src", randomImageSource); //changing img src
  console.log(randomNumber);

}


function buttonGenerate() {
  var mealSelector = document.querySelector(".meal-select").value;
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

//Listern generate button
var h = document.querySelector(".btn");
h.addEventListener("click", buttonGenerate);
