 console.log("FIRE!")
 
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

        // firebase.analytics();
        const db = firebase.firestore();
        const auth = firebase.auth();
        
        // db.settings({ timestampsInSnapshots: true});

////////////////////////////////////////////////////////////











//  //check
// //  console.log(form_new, form_signin)
 
//  function findattr(attribute, value, element_type)    {
//      element_type = element_type || "*";
 
//      var All = document.getElementsByTagName(element_type);
//      for (var i = 0; i < All.length; i++)       {
//        if (All[i].getAttribute(attribute) == value) { return All[i]; }
//      }
     
//    }
 

//    //FIRESTORE OLD FUNCTIONS
 
//  function renderuser(doc) {

//     //  // creates elements
//     //  let lidoc = document.createElement("li");
//     //  let namespan = document.createElement("span");
//     //  let paswspan = document.createElement("span");
//     //  let scorespan = document.createElement("span");
//     //  let cross = document.createElement("div");
 
//      //future
//     //  lidoc.setAttribute("data-id", doc.id);
 
//      //fills elements
//     //  namespan.textContent = "name: " + doc.data().name + " " ;
//     //  namespan.setAttribute("name", doc.data().name )
//     //  paswspan.textContent = "pasw: " + doc.data().pasw + " " ;
//     //  scorespan.textContent = "score: " + doc.data().score + " " ; 
//     //  cross.textContent = "delete";
//     //  cross.classList += "button";
 
//     //  lidoc.appendChild(namespan);
//     //  lidoc.appendChild(paswspan);
//     //  lidoc.appendChild(scorespan);
//     //  lidoc.appendChild(cross)
 
//     //  userlist.appendChild(lidoc)
 
 
//     //  cross.addEventListener("click", (e)=>{
//     //      e.stopPropagation();
//     //      let id = e.target.parentElement.getAttribute("data-id");
//     //      db.collection("users").doc(id).delete();
 
//     //      console.log("deleted?", db.collection("users").doc(id) )
//     //      console.log(    "if this works...",  db.collection('users').doc(id).get().then((doc) => {doc.get("name")})        );
//     //  })
 
 
 
 
     
//  }
 
 
//  db.collection("users").get().then((snapshot)=>{
//     //  console.log(snapshot.docs)
//      snapshot.docs.forEach( doc => {
//         //  console.log(doc.data());
//         //  renderuser(doc);
//      } )
//  })
 
 
 
 
 
 
 
 
 
 








 ////////////////////////////////////////////////////////////

 let fusers = db.collection("users");




 
 //FORMS
 

// CONSTS
const form_new = document.querySelector("#form_new");
const form_signin = document.querySelector("#form_signin");


//new USER
$(form_new).on("submit", (e) => {

    e.preventDefault();

   const email = form_new.new_email.value;
   const pasw = form_new.new_pasw.value;

   console.log(email, pasw)

   auth.createUserWithEmailAndPassword(email, pasw).then( cred =>{


    return db.collection('users').doc(cred.user.uid).set({
        bio: form_new.bio
    })

     console.log( cred.user );
     
     form_new.new_email.value = "";
     form_new.new_pasw.value = "";

   }).then( ()=>{
       
   } )
   
})


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
     console.log(cred.user)
   })

   form_signin.signin_email.value = "";
   form_signin.signin_pasw.value = "";
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

 }else{
    $("#signout").css({"display":"none"});
     $("#signin").css({"display":"block"});
 }

})


























