

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
var settings = {
               rows: 5,
               cols: 15,
               rowCssPrefix: 'row-',
               colCssPrefix: 'col-',
               seatWidth: 35,
               seatHeight: 35,
               seatCss: 'seat',
               selectedSeatCss: 'selectedSeat',
               selectingSeatCss: 'selectingSeat'
           };


var init = function (reservedSeat) {
                var str = [], seatNo, className;
                for (i = 0; i < settings.rows; i++) {
                    for (j = 0; j < settings.cols; j++) {
                        seatNo = (i + j * settings.rows + 1);
                        className = settings.seatCss + ' ' + settings.rowCssPrefix + i.toString() + ' ' + settings.colCssPrefix + j.toString();
                        if ($.isArray(reservedSeat) && $.inArray(seatNo, reservedSeat) != -1) {
                            className += ' ' + settings.selectedSeatCss;
                        }
                        str.push('<li class="' + className + '"' +
                                  'style="top:' + (i * settings.seatHeight).toString() + 'px;left:' + (j * settings.seatWidth).toString() + 'px">' +
                                  '<a title="' + seatNo + '">' + seatNo + '</a>' +
                                  '</li>');
                    }
                }
                $('#place').html(str.join(''));
            };
            //case I: Show from starting
            
 
            //Case II: If already booked
    /*db.collection('seats').orderBy('timestamp',"desc").limit(1).get().then(snapshot => {
        snapshot.docs.forEach(doc1 => {
            console.log(doc1.id);
            var k=f1();
            db.collection('seats').where("movie_name","==",doc1.data().movie_name).where("theatre","==",doc1.data().theatre).where("date","==",doc1.data().date).where("time","==",doc1.data().time).get().then(snapshot=>{
                snapshot.docs.forEach(doc2=>{
                    if(movie_name=="tanhaji", theatre=="sandhya",date="20/03/2020"){
                        db.collection('reserve').doc("t20s").set({
                            seatno:k[0]},{merge:true})
                        ;
                    }
                })})})});



            
             var bookedseats;
             db.collection('reserve').get().then(snapshot=>{
                 snapshot.docs.forEach(doc3=>{
                    bookedseats=doc3.data().seatno
                 })
             })*/
             var bookedseats=[];
             init(bookedseats);
        

           
            
     $('.' + settings.seatCss).click(function () {
if ($(this).hasClass(settings.selectedSeatCss)){
    alert('This seat is already reserved');
}
else{
    $(this).toggleClass(settings.selectingSeatCss);
    }
});
 
$('#btnShow').click(function () {
    var str = [];
    $.each($('#place li.' + settings.selectedSeatCss + ' a, #place li.'+ settings.selectingSeatCss + ' a'), function (index, value) {
        str.push($(this).attr('title'));
    });
    alert(str.join(','));
});
var f1=function() {
    var str = [], item;
    $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
        item = $(this).attr('title');                   
        str.push(item);                   
    });
    alert(str.join(','));console.log(str);return str;}
$('#btnShowNew').click(function (){

var k=f1();

});



firebase.auth().onAuthStateChanged(function(user){
   if(!user){
       document.getElementsByTagName("body")[0].style.display="none"
       window.location="login.html"
   }
   
             
        });
    
         

var signup2=document.querySelector('#hform'); 
signup2.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("hi");
    
  
  var user=auth.currentUser;
  if(user){
     
      
      db.collection('seats').orderBy('timestamp',"desc").limit(1).get().then(snapshot => {
        snapshot.docs.forEach(doc1 => {
              console.log(doc1.id);
              var k=f1();
              db.collection('seats').where("movie_name","==",doc1.data().movie_name).where("theatre","==",doc1.data().theatre).where("date","==",doc1.data().date).where("time","==",doc1.data().time).get().then(snapshot=>{
                snapshot.docs.forEach(doc2=>{
                    console.log(doc2.data());
                    //console.log(doc2.data().seatno[0],"==",k[0]);
                    if(doc2.data().seatno[0]==k[0]){
                        console.log("testing");
                        bookedseats.push(Number(k[0]));
                        console.log(bookedseats);
                        init(bookedseats);
                        alert("seat already booked!check again");
                    }
                    
                })
                

                    db.collection('seats').doc(doc1.id).set({
                        seatno:f1()},
                        {merge:true},
                    )
                
              })
              
            })})
   
     
     /*.then(function() {
      console.log("Document successfully updated!");
      //window.location="test-bookingseatpage.html";
  })*/   
      

  }
});



  


       
