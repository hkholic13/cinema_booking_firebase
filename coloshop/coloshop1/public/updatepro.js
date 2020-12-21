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
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  const db=firebase.firestore();
 firebase.auth().onAuthStateChanged(function(user){
    if(!user){
        document.getElementsByTagName("body")[0].style.display="none"
        window.location="login.html"
    }
        else{
            db.collection('users').doc(user.uid).get().then(doc=>{
        document.getElementById('fullname').value=doc.data().fullname;
        document.getElementById('username').value=doc.data().username;
        document.getElementById('mobileno').value=doc.data().mobileno;
})
var user=auth.currentUser;
const upform=document.querySelector('#upform');
upform.addEventListener("submit",(e)=>{
   e.preventDefault();
   
   const fullname=upform['fullname'].value;
   const mobileno=upform['mobileno'].value;
   const username=upform['username'].value;
   var Ref = db.collection("users").doc(user.uid);
  // Set the "capital" field of the city 'DC'
   return Ref.update({
       fullname:fullname,
       username:username,
       mobileno:mobileno,
   })
   .then(function() {
       console.log("Document successfully updated!");
       window.location="homepage.html"
   })
   .catch(function(error) {
       // The document probably doesn't exist.
       console.error("Error updating document: ", error);
   });
})
}
})