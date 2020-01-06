

var db = firebase.firestore();

function nieuweGebruiker() {

	db.collection("users").add({
    first: "Ada",
    last: "Lovelace2",
    born: 1815
		})

	.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
	})

	.catch(function(error) {
    console.error("Error adding document: ", error);
});
}