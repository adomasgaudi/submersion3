 
 
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




let changeCol=(name, col)=>{
    console.log("color change", name, col)
    $("[name='"+name+"']").css("border-left-color",col);
  }

let changeState = (name, state)=>{
    console.log("state change", name, state)
    $("[name='"+name+"']").attr("state","read");
  }



let downloadStates = () => {
    
    let downArr = [];
    


    db.collection("texts").doc(creditToken).collection("articleStates")
    // .where("state", "==", "read")
    .get()
    .then( snap => {
        i = 0;
        snap.forEach( function(doc,index){
            // doc.data() is never undefined for query doc snapshots
            // todo !!!!!!!

            console.log("------ ", index, doc);
            downArr.push([])
            console.log(downArr)
            downArr[i].push(doc.id);
            downArr[i].push(doc.data().state);
            i++;
            
            // console.log( "downloaded: ",doc.id, " => ", doc.data(), downArr , " into ------", downloadedArr);
        });
        downloadedArr = downArr;
            return downloadedArr;
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    

}

let changePage = () => {
    for(i=0; i < downloadedArr.length; i++ ){
    
        // change color
        if(downloadedArr[i][1] = "read"){
            changeCol( downloadedArr[i][0], "green");
            changeState( downloadedArr[i][0], "read");

        }else {
            changeCol(downloadedArr[i][0], "blue");
            changeState( downloadedArr[i][0], "new");
        }
        
    }
    

}



const updateVal = () => {
    downloadStates()
    setTimeout(()=>{ changePage()  }, 1000)
}



const findAllRead = ()=>{
    let arr  = [];
    for( i = 0; $( "[state*='read']" )[i] != undefined; i++){
      let item = $( "[state*='read']" )[i]
      let name = $("[state*='read']")[i].getAttribute("name");
      let state = $("[state*='read']")[i].getAttribute("state"); 

      let nextArr = [name,state] 
      arr.push(nextArr);  console.log( "findallRead: iter=",i,arr)
  
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
       // 15th episode
    //    console.log(cred, cred.user, cred.user.uid);
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
    

 }else{
    $("#signout").css({"display":"none"});
     $("#signin").css({"display":"block"});
    // setupGuides([]) 
 }

})








         

