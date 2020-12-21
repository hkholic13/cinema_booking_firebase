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
  const signup=document.querySelector('#bookmark');
  signup.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    var user=auth.currentUser;
   // Set the "capital" field of the city 'DC'
   if(user){
    db.collection('users').doc(user.uid).get().then(doc=>{
    db.collection('bookmark').add({
           moviename:"shubh mangal saavdhan",
            email:doc.data().email,
            moviedate:"24-07-2020"
       })     .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    });
    
  }
  });
  const signup1=document.querySelector('#bookmark1');
  signup1.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    var user=auth.currentUser;
   // Set the "capital" field of the city 'DC'
   if(user){
    db.collection('users').doc(user.uid).get().then(doc=>{
    db.collection('bookmark').add({
           moviename:"bhoot",
            email:doc.data().email,
            moviedate:"21-03-2020"
       })     .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    });
  }
  });
  const signup2=document.querySelector('#bookmark2');
  signup2.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    var user=auth.currentUser;
   // Set the "capital" field of the city 'DC'
   if(user){
    db.collection('users').doc(user.uid).get().then(doc=>{
    db.collection('bookmark').add({
           moviename:"alaivaikunthapuramulu",
            email:doc.data().email,
            moviedate:"15-04-2020"
       })     .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    });
  }
  });
  const signup3=document.querySelector('#bookmark3');
  signup3.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    var user=auth.currentUser;
   // Set the "capital" field of the city 'DC'
   if(user){
    db.collection('users').doc(user.uid).get().then(doc=>{
    db.collection('bookmark').add({
           moviename:"parasite",
            email:doc.data().email,
            moviedate:"23-08-2020"
       })     .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    });
  }
  });
  const signup4=document.querySelector('#bookmark4');
  signup4.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    var user=auth.currentUser;
   // Set the "capital" field of the city 'DC'
   if(user){
    db.collection('users').doc(user.uid).get().then(doc=>{
    db.collection('bookmark').add({
           moviename:"tanhaji",
            email:doc.data().email,
            moviedate:"22-05-2020"
       })     .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    });
  }
  });
  
const signup6=document.querySelector('#bookmark5');
  signup6.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    var user=auth.currentUser;
   // Set the "capital" field of the city 'DC'
   if(user){
    db.collection('users').doc(user.uid).get().then(doc=>{
    db.collection('bookmark').add({
           moviename:"loveaajkal",
            email:doc.data().email,
            moviedate:"19-06-2020"
       })     .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    });
  }
  });
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





//
//})

    

  