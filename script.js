const alertBox = document.querySelector("p"); // selected p tag
const button = document.querySelector(".button"); // selected button
const body = document.querySelector("body"); // body tag selected

// method for button color and text changes
const toggleBtn = (e) => {
  e.target.classList.toggle("green");
  e.target.innerText =
    e.target.innerText.trim() === "Alert" ? "Stop alert" : "Alert";
};

// method for inserting alert class
const alertMsg = () => {
  body.classList.toggle("alert");
  alertBox.innerHTML =
    alertBox.innerHTML === "This is alert!" ? null : "This is alert!";
};

// two listeners on button when button is clicked
button.addEventListener("click", alertMsg);
button.addEventListener("click", toggleBtn);
