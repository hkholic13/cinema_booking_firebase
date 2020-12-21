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

  //const loginin=document.querySelector('#loginform');
  var user=auth.currentUser;
  firebase.auth().onAuthStateChanged(function(user){
    // if(!user){
      //   document.getElementsByTagName("body")[0].style.display="none"
        // window.location="login.html"
     //}
       //  else{
             db.collection('users').doc(user.uid).get().then(doc=>{
                const spn=document.querySelector("#here")
                //const m=localStorage.getItem('mo') 
                spn.innerHTML=doc.data().wallet;
         //document.getElementById('here').value=doc.data().wallet;
         
 })
//}
  })
