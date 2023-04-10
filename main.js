/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/validator.js
function validate(numCard) {
  const numCardOnlyNumber = numCard.match(/\d/g).join("");
  let sum = 0;
  if (numCardOnlyNumber.length % 2 === 0) {
    for (let i = 0; i < numCardOnlyNumber.length; i++) {
      if (i % 2 === 0) {
        sum += +numCardOnlyNumber[i] * 2 > 9 ? +numCardOnlyNumber[i] * 2 - 9 : +numCardOnlyNumber[i] * 2;
      } else {
        sum += +numCardOnlyNumber[i];
      }
    }
  } else {
    for (let i = 0; i < numCardOnlyNumber.length; i++) {
      if (i % 2 !== 0) {
        sum += +numCardOnlyNumber[i] * 2 > 9 ? +numCardOnlyNumber[i] * 2 - 9 : +numCardOnlyNumber[i] * 2;
      } else {
        sum += +numCardOnlyNumber[i];
      }
    }
  }
  return sum % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/paySystem.js
function paySystem(number) {
  document.querySelectorAll(".card-item").forEach(el => {
    el.classList.remove("active");
  });
  const firstNum = number.slice(0, 1);
  switch (firstNum) {
    case "2":
      document.querySelector(".cardMir").classList.add("active");
      break;
    case "3":
      document.querySelector(".cardAmericanExpress").classList.add("active");
      break;
    case "4":
      document.querySelector(".cardVisa").classList.add("active");
      break;
    default:
      break;
  }
  const twoNum = number.slice(0, 2);
  switch (+twoNum) {
    case 50:
    case 56:
    case 57:
    case 58:
    case 67:
    case 63:
      document.querySelector(".cardMaectro").classList.add("active");
      break;
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
      document.querySelector(".cardMactercard").classList.add("active");
      break;
    case 62:
      document.querySelector(".cardUnionPay").classList.add("active");
      break;
    default:
      break;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


document.querySelector("#card-submit").addEventListener("click", event => {
  event.preventDefault();
  const num = document.querySelector("#numberCard-input").value;
  if (validate(num)) {
    paySystem(num);
  } else {
    alert("Invalid card number");
  }
});
document.querySelector("#input-reset").addEventListener(event => {
  event.preventDefault();
  document.form[0].reset();
  document.querySelectorAll(".card-item").forEach(el => {
    el.classList.remove("active");
  });
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
//# sourceMappingURL=main.js.map