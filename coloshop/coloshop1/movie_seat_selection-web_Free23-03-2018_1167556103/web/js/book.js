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
  const bookform=document.querySelector('#bookform');
  bookform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const Username=bookform['Username'].value;
    const Numofseats=bookform['Numofseats'].value;
  })