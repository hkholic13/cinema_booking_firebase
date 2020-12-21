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

  const loginin=document.querySelector('#loginform');
  loginin.addEventListener("submit",(e)=>{
   e.preventDefault();
   const email=loginin['email'].value;
   const password=loginin['password'].value;
     firebase.auth().signInWithEmailAndPassword(email, password).then(cred=> {
    }).then(() => {
      window.location = "homepage.html";
      loginin.reset();
  }).catch(err => {
    var errorCode = err.code;
    var errorMessage=err.message;
    if (errorCode == 'auth/wrong-password') {
      alert('The password is wrong.');
    } 
    else {
      alert(errorMessage);
    }
  });
  });
         