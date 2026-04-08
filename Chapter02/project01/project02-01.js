/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Ike Patterson
      Date:   02/21/2026

      Filename: project02-01.js
 */

function celsiusToFarenheit(degree) {
      return (degree * 1.8) + 32; 
}

function farenheitToCelsius(degree) {
      return (degree - 32) / 1.8;
}

document.getElementById("fValue").addEventListener("change", function() {
      let fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = farenheitToCelsius(fDegree);
});

document.getElementById("cValue").addEventListener("change", function() {
      let cDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = celsiusToFarenheit(cDegree);
});