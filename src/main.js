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
  if (Array.isArray(divChild)) {
    for (let i = 0; i < divChild.length; i++) {
      divFather.appendChild(divChild[i]);
    }
  } else {
    divFather.appendChild(divChild);
  }
}

function renderRandomCard(values, suites) {
  let value = sampleFromArray(values);
  let suite = sampleFromArray(suites);

  let cardClass = "card" + " " + suite;
  let divCard = createDivAndSetAttributeClass(cardClass);
  let divIconHeader = createDivAndSetAttributeClass("card-icon-header");
  let divIconFooter = createDivAndSetAttributeClass("card-icon-footer");

  let divValue = createDivAndSetAttributeClass("card-value");

  if (value === "A") {
    divValue = createDivAndSetAttributeClass("special-card-value");
    divIconHeader.classList.remove("card-icon-header");
    divIconHeader = createDivAndSetAttributeClass("special-card-header");
    divIconHeader.innerHTML = value;

    divIconFooter.classList.remove("card-icon-footer");
    divIconFooter = createDivAndSetAttributeClass("special-card-footer");
    divIconFooter.innerHTML = value;
  } else {
    divValue.innerHTML = value;
  }

  let divsChild = [divIconHeader, divValue, divIconFooter];
  addDivChild(divCard, divsChild);

  let divWrapper = createDivAndSetAttributeClass("wrapper");
  let divBody = document.getElementsByTagName("body")[0];

  addDivChild(divWrapper, divCard);
  addDivChild(divBody, divWrapper);
}

function renderSpecialCard() {}
