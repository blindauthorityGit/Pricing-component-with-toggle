let toggleBtn = document.getElementById("toggle");
let innerCircle = document.getElementById("innerCircle");
let priceTwo = document.getElementById("priceTwo");
let priceOneAnnual = document.getElementById("priceOneAnnual");
let priceTwoAnnual = document.getElementById("priceTwoAnnual");
let priceThreeAnnual = document.getElementById("priceThreeAnnual");
console.log(priceTwoAnnual);
toggleBtn.addEventListener("click", function() {
  innerCircle.classList.toggle("leftToggle");
  priceOne.classList.toggle("fade-out");
  priceTwo.classList.toggle("fade-out");
  priceThree.classList.toggle("fade-out");
  priceOneAnnual.classList.toggle("slide-in-right");
  priceTwoAnnual.classList.toggle("slide-in-right");
  priceThreeAnnual.classList.toggle("slide-in-right");
});
