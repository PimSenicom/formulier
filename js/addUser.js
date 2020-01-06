

var db = firebase.firestore();


var voornaam = document.getElementById("voornaam").value;

console.log(voornaam);


function nieuweGebruiker(voornaam, achternaam, email, telefoonnummer) {

	db.collection("users").add({
    fname: voornaam,
    lname: achternaam,
    email: email,
   	number: telefoonnummer
		})

	.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);

    // redirect to 'bedanktpagina'
    window.location.href = 'succes.html'
	})

	.catch(function(error) {
    console.error("Error adding document: ", error);
});
}