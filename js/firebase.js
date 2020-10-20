 
 
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


































// CONSTS
const form_new = document.querySelector("#form_new");
const form_signin = document.querySelector("#form_signin");

let creditToken;    
let downloadedArr = [];




let changeCol = (name, col)=>{    $("[name*='"+name+"']").css("border-left-color",col);} // console.log("color change", name, col) 
let changeState = (name, state)=>{    $("[name*='"+name+"']").attr("state",state); }// console.log("state change", name, state) 











// let returnArr ;

let downloadStates = () => {
    console.log("downloadStates is running")

    db.collection("texts").doc(creditToken).collection("articleStates")
    .where("state", "==", "read")
    .get()
    .then( snap => {
        
        let i = 0;
        snap.forEach( function(doc){
            let str = doc.id;
            if( str.includes("re")  ){
                console.log(i, doc.id, doc.data().state )
                if( doc.data().state == "read"){
    
                    changeCol( doc.id, "darkcyan"  )
                    changeState( doc.id, "read" )
                }else {
                    // console.log()
                    changeCol(doc.id , "black");
                    changeState( doc.id , "new");
                }
                i++;
            } 
            console.log("wrong id")

            
        });
        

        
        
    })

    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    

}





const updateVal = () => {
    downloadStates()
    // setTimeout(()=>{ changePage()  }, 1000)
}





// /////////////////////////////////////////////////////////////////
// const resetVal = () => {
//     for(i = 0; i < $( "[name*='re']" ).length ; i++){
//         changeCol(  "re", "blue" );
//         changeState( "re", "new")
//     }
// }
// /////////////////////////////////////////////////////////////////

const findAllRead = ()=>{
    let arr  = [];
    console.log($( "[name*='re']" ))
    for( i = 0; $( "[name*='re']" )[i] != undefined; i++){
      let el = $( "[name*='re']" )[i]
      let name = el.getAttribute("name");
      let state = el.getAttribute("state"); 

      let nextArr = [name,state] 
      arr.push(nextArr);  //console.log( "findallRead: iter=",i,arr)
  
    }; 

    return arr 
  }


function uploadStates(){  



    let arr = findAllRead();
    console.log("uploadStates-- " ,creditToken, arr.length, arr )
    for(i = 0; i < arr.length; i++){

        string = [arr[i][0]] 
        console.log('i=',i, "arr.l=", arr.length, "doc.id=",string[0], "doc().state=",arr[i][1] );

        db.collection("texts").doc(creditToken).collection("articleStates").doc(string[0]).set({
                state: arr[i][1],
            })
            .then(function() {
                    console.log("Document successfully written!");
                }).catch(function(error) {

                    console.error("Error writing document: ", error);
                });
            
           
    }


}

  


 
 // POPUP  
 function popup_close(){    $("#screencover").slideUp(); }
  
 function popup_open(){    $("#screencover").slideDown();}





























//new USER
$(form_new).on("submit", (e) => {

    e.preventDefault();
   const email = form_new.new_email.value;
   const pasw = form_new.new_pasw.value;   console.log("new user: ", email, pasw);

   auth.createUserWithEmailAndPassword(email, pasw).then( cred =>{
       
    creditToken = cred.user.uid;
    db.collection("texts").doc(creditToken).collection("articleStates").add({
        empty: "hi"
    })

    





    return db.collection('texts').doc(creditToken).set({
        bio: form_new.bio.value,
        // state: state
    })

    

   }).then( ()=>{

    // db.collection("texts").doc(creditToken).collection("articleStates").doc(hel)
    // .delete().then(function() {  console.log("Document successfully deleted!");})
    // .catch(function(error) { console.error("Error removing document: ", error);  });

    // form_new.new_email.value = "";
    // form_new.new_pasw.value = "";
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
        creditToken = cred.user.uid
        console.log(" LOGGED IN ", email, pasw, creditToken)
        updateVal();
        
        console.log("done, done")
    })

    
   

})









// AUTH CHANGE
auth.onAuthStateChanged(user => {
 console.log("STATE CHANGED: ");

 if(user){
     $("#signout").css({"display":"block"});
     $("#signin").css({"display":"none"});
     $("#user").text(user.email)

    db.collection("texts").onSnapshot(snapshot=>{
        // setupGuides(snapshot.docs)
        // console.log(snapshot)
    }, err => {
        console.log("Adomas error here: ",err.message)
    });

    creditToken = user.uid
    console.log("values updated")
    updateVal();

 }else{
    $("#signout").css({"display":"none"});
     $("#signin").css({"display":"block"});
    // setupGuides([]) 
 }

})








         

