import React from "react";
import { breakFastList, lunchList, dinnerList } from "../food";

function App() {
  return (
    <div>
      {console.log(breakFastList, lunchList, dinnerList)}
      <h1>Meal Planner</h1>
      <div className="container-1">
        <h2>Select your meal</h2>

        <select className="form-select form-select-sm meal-select">
          <option value="">Please choose your option</option>
          <option value="break-fast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <button type="button" className="btn btn-primary">
          Generate
        </button>
      </div>
      <p className="image-paragraph"></p>
      <img
        className="food-img"
        src="https://i.pinimg.com/originals/8f/64/ad/8f64ad76980a7e3b35d084a6d67c96c5.jpg"
        alt=""
      ></img>
    </div>
  );
}

export default App;
