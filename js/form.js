var tabblad = 0;
openTabblad(tabblad);


function openTabblad(n) {

	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";

	if (n == 0) {
    document.getElementById("prevBtn").style.visibility = "hidden";
  } else {
    document.getElementById("prevBtn").style.visibility = "visible";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Versturen";
  } else {
    document.getElementById("nextBtn").innerHTML = "Volgende";
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


    // Data uit formulier opslaan in variabelen

    var voornaam = document.getElementById('voornaam').value;
    var achternaam = document.getElementById('achternaam').value;
    var email = document.getElementById('email').value;
    var aanhef = document.getElementById('aanhef').value;
    var regDate = Date.now();
    // var straat = document.getElementById('straat').value;
    var huisnummer = document.getElementById('huisnummer').value;
    // var toevoeging = document.getElementById('toevoeging').value;
    var postcode = document.getElementById('postcode').value;
    // var plaats = document.getElementById('plaats').value;
    var land = 'NL';
    var telefoonnummer = document.getElementById('telefoonnummer').value;
    // var geboortedatum = document.getElementById('geboortedatum').value;
    var prijs = '29,95';
    var recruitmentChannel = 'FB';

    // Nieuwe gebruiker toevoegen
    nieuweGebruiker(voornaam, achternaam, email, aanhef, regDate, huisnummer, postcode, land, telefoonnummer, prijs, recruitmentChannel)
    return false;
  }

  // Anders het volgende tabblad openen
  openTabblad(tabblad);

}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  // y = x[tabblad].getElementsByTagName("input");

  y = x[tabblad].querySelectorAll('input, select');
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