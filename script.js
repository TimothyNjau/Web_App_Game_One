let botVal, minVal, maxVal;
var btnCount = 0;

function rangeFunc() {
   minVal = parseInt(document.getElementById("minVal").value);
   maxVal = parseInt(document.getElementById("maxVal").value);
   let rangVal = maxVal - minVal;
   let randVal = Math.floor(Math.random() * rangVal);
   botVal = randVal + minVal;
   console.log(minVal, maxVal, randVal, botVal);

}
function compFunc(humanChoice) {
   humanChoice = parseInt(document.getElementById("randGuess").value);
   console.log(humanChoice);
   if (humanChoice == botVal) {
      document.getElementById("messageField").innerText = "Well Done! It took you " + btnCount + " attempts to guess this number";
      document.getElementById("randGuess").value = 0;
      rangeFunc();
   } else if (humanChoice > maxVal || humanChoice < minVal) {
      document.getElementById("messageField").innerText = "Your guess is outside of the range. Kindly try again"
   } else if (humanChoice == NaN) {
      document.getElementById("messageField").innerText = "Your guess is not a valid number. Kindly try again"
   }
   else if (humanChoice < botVal) {
      document.getElementById("messageField").innerText = "My number is greater than " + humanChoice;
   } else if (humanChoice > botVal) {
      document.getElementById("messageField").innerText = "My number is less than " + humanChoice;
   }
}
function clickCount(){
   btnCount ++;
   return btnCount;
}