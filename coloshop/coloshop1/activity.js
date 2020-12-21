var firebaseConfig = {
  apiKey: "AIzaSyCUgHpoxuksst6-ir4drkljGXQBfUyEy80",
  authDomain: "myfirst2468.firebaseapp.com",
  databaseURL: "https://myfirst2468.firebaseio.com",
  projectId: "myfirst2468",
  storageBucket: "myfirst2468.appspot.com",
  messagingSenderId: "1010919552988",
  appId: "1:1010919552988:web:14c4a5fb687cb71829c119",
  measurementId: "G-M7L487C9YL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
var user = auth.currentUser; 
firebase.auth().onAuthStateChanged(function (user) {
  //if(!user){
  //  document.getElementsByTagName("body")[0].style.display="none"
  //window.location="login.html"
  //}
  //else{
  db.collection('users').doc(user.uid).get().then(doc => {
    db.collection('bookmark').get().then(snapshot => {
      snapshot.docs.forEach(doc1 => {
        
        if (doc.data().email == doc1.data().email) {
  
          let newRow = moviedata.insertRow()
          let movieNameCell = newRow.insertCell(0)
          let movieDateCell = newRow.insertCell(1)
          
          let movieNameData = document.createTextNode(doc1.data().moviename);
          movieNameCell.appendChild(movieNameData)
          let movieDateData = document.createTextNode(doc1.data().moviedate);
          movieDateCell.appendChild(movieDateData)
        }
      })

    })

    //document.getElementById('mobileno').value=doc.data().mobileno;
  })

})
const logout=document.querySelector('#logout');
  logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
    });
    auth.onAuthStateChanged(user=>{
    if(user){
      console.log('user logged in:',user)
    }
    else{
      console.log('user logged out');
      window.location="home.html"
    }
  })
  })


