var db = firebase.firestore();


// Specefieke gebruiker ophalen

// db.collection("users").doc("NAaEhpMRaL9E1znwcn2o")
//     .onSnapshot(function(doc) {
//         document.write("Current data: ", doc.data());
//         console.log("Current data: ", doc.data());
//     });






// Alle gebruikers ophalen

db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});


db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots 
        document.write(doc.data().fname);
        document.write(doc.data().lname);
        document.write(doc.data().email);
        document.write(doc.data().number);

        document.createElement();

    });
});





// Wanneer de gebruikers gefilterd moeten worden

// db.collection("users").where("fname", "==", "Jan")
//     .get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });
