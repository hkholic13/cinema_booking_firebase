
  
const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);

    name.textContent = doc.data().moviename;
    city.textContent = doc.data().moviedate;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);

    cafeList.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('bookmark').doc(id).delete();
    });
}
var auth5=firebase.auth();
var user = auth5.currentUser;
firebase.auth().onAuthStateChanged(function (user) {
// getting data
db.collection('users').doc(user.uid).get().then(doc => {
db.collection('bookmark').get().then(snapshot => {
    snapshot.docs.forEach(doc1 => {
        if (doc.data().email == doc1.data().email) {
        renderCafe(doc1);}
    })
})
})
})
// saving data
/*form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value = '';
    form.city.value = '';
});*/

