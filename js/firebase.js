 
 
 // <!-- TODO: new SDKs for Firebase products that you want to use
    //      https://firebase.google.com/docs/web/setup#available-libraries -->
    // <!-- <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script> -->

// Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

        var firebaseConfig = {
            apiKey: "AIzaSyBptdW_yuMCO22Nt2Aetva5LqocZyYavzg",
            authDomain: "submersion-27c57.firebaseapp.com",
            databaseURL: "https://submersion-27c57.firebaseio.com",
            projectId: "submersion-27c57",
            storageBucket: "submersion-27c57.appspot.com",
            messagingSenderId: "656683492566",
            appId: "1:656683492566:web:7124e5df95023d0c411577",
            measurementId: "G-LJLH6QW309"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        
        const db = firebase.firestore();
        const auth = firebase.auth();
        // db.settings({ timestampsInSnapshots: true});
        

////////////////////////////////////////////////////////////




















 
 
 // POPUP  
function popup_close(){    $("#screencover").slideUp(); }
  
function popup_open(){    $("#screencover").slideDown();}
  
 
 






 
 
 

// CONSTS
const form_new = document.querySelector("#form_new");
const form_signin = document.querySelector("#form_signin");






let creditToken;

//new USER
$(form_new).on("submit", (e) => {

    e.preventDefault();
   const email = form_new.new_email.value;
   const pasw = form_new.new_pasw.value;   console.log("new user: ", email, pasw);

   auth.createUserWithEmailAndPassword(email, pasw).then( cred =>{
       // 15th episode
       console.log(cred, cred.user, cred.user.uid);
       //update while i have the cred
    creditToken = cred.user.uid;
    // console.log(findAllRead())
    
    // console.log(blah, blah[0], blah[0].state)
    return db.collection('texts').doc(cred.user.uid).set({
        bio: form_new.bio.value,
        // state: state,




    })
    //  console.log( cred.user );
   }).then( ()=>{
    form_new.new_email.value = "";
    form_new.new_pasw.value = "";
    popup_close();  
   });

});







// SIGN OUT

$("#signoutbtn").on("click", (e)=>{
   e.preventDefault();
   auth.signOut()
})







// LOG IN
$(form_signin).on("submit", (e)=>{
   e.preventDefault();
   const email = form_signin.signin_email.value;
   const pasw = form_signin.signin_pasw.value; 


   auth.signInWithEmailAndPassword(email, pasw).then(cred =>{
     console.log("cred.user: ",cred.user)
   }).then( ()=>{

       form_signin.signin_email.value = "";
       form_signin.signin_pasw.value = "";
   })

})







function displayName(xxx) {
    $("#user").text(xxx);
}


// AUTH CHANGE
auth.onAuthStateChanged(user => {
 console.log("STATE CHANGED: ", user);

 if(user){
     $("#signout").css({"display":"block"});
     $("#signin").css({"display":"none"});
     displayName(user.email);

    db.collection("texts").onSnapshot(snapshot=>{
        // setupGuides(snapshot.docs)
        // console.log(snapshot)
    }, err => {
        console.log("Adomas error here: ",err.message)
    });

    creditToken = user.uid

 }else{
    $("#signout").css({"display":"none"});
     $("#signin").css({"display":"block"});
    // setupGuides([]) 
 }

})








function fire( ){

    console.log("credittoken test:",creditToken);
    let blah = findAllRead()
    
    db.collection('texts').doc(creditToken).set({
        state: blah[0].state,
        pos: blah[0].pos
    })


}











