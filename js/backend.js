var db = firebase.firestore();


///////////////////// Specefieke gebruiker ophalen //////////////////////////

// db.collection("users").doc("NAaEhpMRaL9E1znwcn2o")
//     .onSnapshot(function(doc) {
//         document.write("Current data: ", doc.data());
//         console.log("Current data: ", doc.data());
//     });






/////////////////////////////// Alle gebruikers ophalen ///////////////////////// BRON: https://www.youtube.com/watch?v=kmTECF0JZyQ&t

db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});

const userlist = document.querySelector('#user-list');

function renderUsers(doc){

    let tr = document.createElement('tr');
    let voornaam = document.createElement('td');
    let achternaam = document.createElement('td');
    let email = document.createElement('td');
    let nummer = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    voornaam.textContent = doc.data().FirstName;
    achternaam.textContent = doc.data().LastName;
    email.textContent = doc.data().Email;
    nummer.textContent = doc.data().PhoneNumber;

    tr.appendChild(voornaam);
    tr.appendChild(achternaam);
    tr.appendChild(email);
    tr.appendChild(nummer);

    userlist.appendChild(tr);

}


db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots 
        // var info = doc.data();

        // document.getElementById("kolom").innerHTML = info.fname + " " + info.lname;

        renderUsers(doc);

    });
});





//////////// Wanneer de gebruikers gefilterd moeten worden //////////////////////

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
