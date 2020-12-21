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