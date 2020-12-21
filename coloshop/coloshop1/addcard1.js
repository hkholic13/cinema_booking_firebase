/*var firebaseConfig = {
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
  const signup=document.querySelector('#card-det'); 
  signup.addEventListener("submit",(e)=>{
    e.preventDefault();
    const cardno1=signup['card-number'].value;
    var user=auth.currentUser;
    if(user){
    db.collection('users').doc(user.uid).get().then(doc=>{
    db.collection('users').add({
           cardno:cardno1,
       })
       .then(function() {
        console.log("Document successfully updated!");
        window.location="test-bookingseatpage.html"
    })
        })
    }
    })*/
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
      const signup=document.querySelector('#card-det'); 
        
signup.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const cardno=signup['card-number'].value;
    const CVV=signup['card-cvc'].value;
    const card_holder=signup['card-holder'].value;
    //const cardno=signup['cardno'].value;
    const expmonth=signup['card-month'].value;
    const expyear=signup['card-year'].value;
  
    var user=auth.currentUser;
    var Ref = db.collection("users").doc(user.uid);
   // Set the "capital" field of the city 'DC'
    return Ref.update({
        cardno:cardno,
        CVV:CVV,
        card_holder:card_holder,
        expmonth:expmonth,
        expyear:expyear
        
    })
    .then(function() {
        console.log("Document successfully updated!");
        window.location="wallet.html"
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
 })
 
             
            
     

   