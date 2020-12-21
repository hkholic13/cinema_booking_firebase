 // Your web app's Firebase configuration
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
  const auth=firebase.auth();
  const db=firebase.firestore();
  const signup=document.querySelector('#form'); 
  signup.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email=signup['email'].value;
    const password=signup['password'].value;
    const fullname=signup['fullname'].value;
    const mobileno=signup['mobileno'].value;
    const username=signup['username'].value;
   auth.createUserWithEmailAndPassword(email,password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
        fullname: fullname,
        username: username,
        email:email,
        //password: password,
        wallet:0,
        mobileno: mobileno,
        cardno:0,
        cardmoney:10000
    });
}).then(() => {
    window.location = "login.html";
    signup.reset();
}).catch(err => {
  var errorCode = err.code;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } 
  else if(errorCode=='auth/email-already-in-use'){
    alert('email is already in use')}
});
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
    var fullame = user.fullame;
    var email = user.email;
  var username=user.username;
var mobileno=user.mobileno;
}

  });
});


