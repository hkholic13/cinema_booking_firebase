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
  const verify=document.querySelector('#verify');
  verify.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email=verify['email'].value;
  //$("#btn-resetPassword").click(function()){
    //var auth=firebase.auth();
    //var email=$("#email").value;
    if(email!=""){
      auth.sendPasswordResetEmail(email).then(function(){
        window.alert("email has been sent to ur email")
      })
      .catch(function(error){
        var errorCode=error.code;
        var errorMessage=error.message;
        console.log(errorCode);
        console.log(errorMessage);
        window.alert("Message:"+errorMessage);

      })
      
    }
    else{
      window.alert("Enter your email first")
    }
  }
