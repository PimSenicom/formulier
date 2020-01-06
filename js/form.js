var tabblad = 0;
openTabblad(tabblad);

var voornaam3;
var achternaam3;
var email3;
var telefoonnummer3;

function openTabblad(n) {

	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";

	if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)

}



function nextPrev(n) {

  // Welk tabblad er wordt weergeven
  var x = document.getElementsByClassName("tab");

  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;

  // Hide the current tab:
  x[tabblad].style.display = "none";

  // Increase or decrease the current tab by 1:
  tabblad = tabblad + n;

  // if you have reached the end of the form...
  if (tabblad >= x.length) {
    // ... the form gets submitted:
    // document.getElementById("multistepForm").submit();
    voornaam3 = document.getElementById('voornaam').value;
    achternaam3 = document.getElementById('achternaam').value;
    email3 = document.getElementById('email').value;
    telefoonnummer3 = document.getElementById('telefoonnummer').value;
    nieuweGebruiker(voornaam3, achternaam3, email3, telefoonnummer3);
    return false;
  }
  // Otherwise, display the correct tab:
  openTabblad(tabblad);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[tabblad].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  //If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[tabblad].className += " finish";
  }
  return valid; // return the valid status
}


function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}