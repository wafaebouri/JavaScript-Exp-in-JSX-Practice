//Create a react app from scratch.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const yourName = "Kamal";
const currentDate = new Date();
console.log(currentDate);
const year = currentDate.getFullYear();
//It should display 2 paragraph HTML elements.
ReactDOM.render(
  <div>
    <p>Created by {yourName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
