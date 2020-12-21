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
  const signup=document.querySelector('#wform');
  var user=auth.currentUser;
  signup.addEventListener("submit",(e)=>{
    e.preventDefault();
    const CVV=signup['CVV'].value;
    const card_holder=signup['card_holder'].value;
    const cardno=signup['cardno'].value;
    const expmonth=signup['expmonth'].value;
    const expyear=signup['expyear'].value;
    var user=auth.currentUser;
    if(user){
        db.collection('users').doc(user.uid).get().then(doc=>{
            var cardm=doc.data().wallet
            const m=localStorage.getItem('mo') 
           //db.collection('users').get().then((snapshot)=>{
            //snapshot.docs.forEach(doc=>{
            if(doc.data().cardno==cardno && doc.data().expmonth==expmonth && doc.data().expyear==expyear && doc.data().card_holder==card_holder && doc.data().CVV==CVV){
            var Ref = db.collection("users").doc(user.uid);
            var upwallet=Number(cardm) + Number(m);
            var cmm=doc.data().cardmoney
            var camo=Number(cmm)-Number(m)
             Ref.update({
                wallet:upwallet,
                cardmoney:camo
            })
            .then(function() {
                console.log("Document successfully updated!");
                window.location="walletbalance.html"
           })
         }
    
}) 
//
//})

    }
})
  