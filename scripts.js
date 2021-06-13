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
