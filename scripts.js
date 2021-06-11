// let screen = document.getElementsByClassName("screen");

// // let add = document.getElementsByClassName("add");
// // let subtract = document.getElementsByClassName("subtract");
// // let multiply = document.getElementsByClassName("multiply");
// // let divide = document.getElementsByClassName("divide");
// let equalButton = document.getElementsByClassName("equal");
// let clearButton = document.getElementsByClassName("clear");

// let numbers = document.querySelectorAll(".number");
// let operators = document.querySelectorAll(".operator");

// let num1 = 0;
// let num2 = 0;

// equalButton = document.addEventListener("click", equal);
// clearButton = document.addEventListener("click", clear);

// for (let n = 0; n < numbers.length; n++) {
//   numbers[n].addEventListener("click", append);
// }

// for (let n = 0; n < operators.length; n++) {
//   operators[n].addEventListener("click", changescreen);
// }

// function append(a) {
//   if (screen == "0" && a.target.innerHTML == "0") {
//     num1;
//     screen;
//   } else if (a.target.innerHTML == ".") {
//     if (screen.includes(".")) {
//       num1;
//       screen;
//     } else if (screen == "") {
//       num1 = "0" + a.target.innerHTML;
//       screen = "0" + a.target.innerHTML;
//     }
//   } else {
//     num1 += a.target.innerHTML;
//     screen += a.target.innerHTML;
//   }
// }

// function clear() {
//   num1 = "";
//   num2 = "";
//   screen = "";
// }

// function changescreen(a) {
//   num1 = num2;
//   screen.innerHTML = "";
// }

const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".screen");

buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

function calculate(event) {
  let clickedButton = event.target.value;
  if (clickedButton === "=") {
    if (screen.value !== "") {
      screen.value = eval(screen.value);
    }
  } else if (clickedButton === "C") {
    screen.value = "";
  } else {
    screen.value += clickedButton;
  }
}
