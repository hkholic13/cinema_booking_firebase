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
  const signup=document.querySelector('#cform'); 
  signup.addEventListener("submit",(e)=>{
    e.preventDefault();
    var user=auth.currentUser;
    if(user){
    db.collection('users').doc(user.uid).get().then(doc=>{
    db.collection('booking').add({
           moviename:"bheesma",
            email:doc.data().email,
       })
       .then(function() {
        console.log("Document successfully updated!");
        window.location="test-bookingseatpage.html"
    })
        })
    }

        
        })
         
        
 