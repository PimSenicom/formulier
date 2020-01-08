

var db = firebase.firestore();


function nieuweGebruiker(voornaam, achternaam, email, aanhef, regDate, huisnummer, postcode, land, telefoonnummer, prijs, recruitmentChannel) {

	db.collection("users").add({

    FirstName: voornaam,
    LastName: achternaam,
    Email: email,
    Gender: aanhef,
    RegistrationDate: regDate,
    // StreetAddress: straat,
    HouseNumber: huisnummer,
    // HouseNumberAddition: toevoeging,
    PostalCode: postcode,
    // City: plaats,
    Country: land,
    PhoneNumber: telefoonnummer,
    // DateOfBirth: geboortedatum,
    Price: prijs,
    RecruitmentChannel: recruitmentChannel,
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