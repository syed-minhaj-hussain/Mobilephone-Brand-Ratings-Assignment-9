import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var el = ["jiophone", "4/5", "micromax", "2/5"];

  var mr = ["redmi", "5/5", "Nokia", "3/5"];

  var fs = ["Sansung", "5/5", "OnePlus", "4/5"];
  var mobilePhones = {
    Entrylevel: el,
    Midrange: mr,
    FlagShip: fs
  };
  var arrayOfMobilePhones = Object.keys(mobilePhones);
  // var arrayOfmobilePhonesValues = Object.values(mobilePhones);

  // console.log(arrayOfmobilePhonesValues);
  var [ratings, setRatings] = useState("");

  function clickEventHandler(index) {
    // console.log("clicked", index, index.key);
    ratings = mobilePhones[index];
    // ratings.map((key) => {
    //   return key;
    // });
    console.log(ratings);

    setRatings(ratings);
  }
  // arrayOfmobilePhonesValues.map((index) => {
  //   // console.log(index);
  // });
  return (
    <div className="App">
      <h3>Popular Mobile Phone Brands</h3>
      {arrayOfMobilePhones.map((index) => {
        return (
          <span
            className={"main-box"}
            key={index}
            onClick={() => clickEventHandler(index)}
          >
            {index}{" "}
          </span>
        );
      })}{" "}
      <br />
      {/* <div style={{ padding: "1rem" }}>{ratings}</div> */}
      <br /> <hr />
      <div className={"box"}>
        <span className={""}>Brand : {ratings[0]}</span> <br />
        {"  "}
        <span>Ratings : {ratings[1]} ⭐</span> <br />
      </div>
      <div className={"box"}>
        <span>Brand : {ratings[2]}</span> <br />
        <span>Ratings : {ratings[3]} ⭐</span>
      </div>
    </div>
  );
}
