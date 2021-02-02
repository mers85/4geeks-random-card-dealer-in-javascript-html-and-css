/* eslint-disable */
//import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function() {
  renderRandomCard(cardValues, suites);
  console.log("Hello world!");
};

let cardValues = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let suites = ["heart", "diams", "clubs", "spades"];

function sampleFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createDivAndSetAttributeClass(strClass) {
  let newDivWithClass = document.createElement("div");
  newDivWithClass.setAttribute("class", strClass);
  return newDivWithClass;
}

function addDivChild(divFather, divChild) {
  divFather.appendChild(divChild);
  return divFather;
}

function renderRandomCard(values, suites) {
  let value = sampleFromArray(values);
  let suite = sampleFromArray(suites);

  let cardClass = "card" + " " + suite;

  let divCard = createDivAndSetAttributeClass(cardClass);
  let divIconHeader = createDivAndSetAttributeClass("card-icon-header");
  let divIconFooter = createDivAndSetAttributeClass("card-icon-footer");

  let divValue = createDivAndSetAttributeClass("card-value");
  let cardValue = document.createTextNode(value);
  addDivChild(divValue, cardValue);

  divCard.appendChild(divIconHeader);
  divCard.appendChild(divValue);
  divCard.appendChild(divIconFooter);

  let divWrapper = createDivAndSetAttributeClass("wrapper");
  divWrapper.appendChild(divCard);

  let divBody = document.getElementsByTagName("body")[0];
  divBody.appendChild(divWrapper);
}
