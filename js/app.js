let toggleBtn = document.getElementById("toggle");
let innerCircle = document.getElementById("innerCircle");
let priceTwo = document.getElementById("priceTwo");
let priceOneAnnual = document.getElementById("priceOneAnnual");
let priceTwoAnnual = document.getElementById("priceTwoAnnual");
let priceThreeAnnual = document.getElementById("priceThreeAnnual");
let annualy = document.getElementById("annualy");
let monthly = document.getElementById("monthly");

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    // up arrow
  } else if (e.keyCode == "40") {
    // down arrow
  } else if (e.keyCode == "37") {
    priceOne.classList.toggle("fade-out");
    innerCircle.classList.toggle("leftToggle");
    priceTwo.classList.toggle("fade-out");
    priceThree.classList.toggle("fade-out");
    priceOneAnnual.classList.toggle("fade-in");
    priceTwoAnnual.classList.toggle("fade-in");
    priceThreeAnnual.classList.toggle("fade-in");
    monthly.classList.toggle("inactive");
    annualy.classList.toggle("active");
    // left arrow
  } else if (e.keyCode == "39") {
    e.preventDefault();
    priceOne.classList.toggle("fade-out");
    innerCircle.classList.toggle("leftToggle");
    priceTwo.classList.toggle("fade-out");
    priceThree.classList.toggle("fade-out");
    priceOneAnnual.classList.toggle("fade-in");
    priceTwoAnnual.classList.toggle("fade-in");
    priceThreeAnnual.classList.toggle("fade-in");
    monthly.classList.toggle("inactive");
    annualy.classList.toggle("active");
    // right arrow
  }
}

console.log(priceTwoAnnual);
toggleBtn.addEventListener("click", function() {
  innerCircle.classList.toggle("leftToggle");
  priceOne.classList.toggle("fade-out");
  priceTwo.classList.toggle("fade-out");
  priceThree.classList.toggle("fade-out");
  priceOneAnnual.classList.toggle("fade-in");
  priceTwoAnnual.classList.toggle("fade-in");
  priceThreeAnnual.classList.toggle("fade-in");
  monthly.classList.toggle("inactive");
  annualy.classList.toggle("active");
});
