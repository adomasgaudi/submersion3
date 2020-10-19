// alert("10/17/2020 21:13");
// console.log("10/17/2020 21:13");
/////////////////////////////////////////////////////////////////


let fusers = db.collection("users");





   
  // POPUP  
  
function popup_close(){
  $("#screencover").css('display', 'none');
}

function popup_open(){
  $("#screencover").css('display', 'block');
}






////////////////////////////////////////////////////////////////////////










///////////////////////////////////////////////////////////////////////////



    



 










 //check
//  console.log(form_add, form_login)
 
 function findattr(attribute, value, element_type)    {
     element_type = element_type || "*";
 
     var All = document.getElementsByTagName(element_type);
     for (var i = 0; i < All.length; i++)       {
       if (All[i].getAttribute(attribute) == value) { return All[i]; }
     }
     
   }
 

   //FIRESTORE OLD FUNCTIONS
 
 function renderuser(doc) {

    //  // creates elements
    //  let lidoc = document.createElement("li");
    //  let namespan = document.createElement("span");
    //  let paswspan = document.createElement("span");
    //  let scorespan = document.createElement("span");
    //  let cross = document.createElement("div");
 
     //future
    //  lidoc.setAttribute("data-id", doc.id);
 
     //fills elements
    //  namespan.textContent = "name: " + doc.data().name + " " ;
    //  namespan.setAttribute("name", doc.data().name )
    //  paswspan.textContent = "pasw: " + doc.data().pasw + " " ;
    //  scorespan.textContent = "score: " + doc.data().score + " " ; 
    //  cross.textContent = "delete";
    //  cross.classList += "button";
 
    //  lidoc.appendChild(namespan);
    //  lidoc.appendChild(paswspan);
    //  lidoc.appendChild(scorespan);
    //  lidoc.appendChild(cross)
 
    //  userlist.appendChild(lidoc)
 
 
    //  cross.addEventListener("click", (e)=>{
    //      e.stopPropagation();
    //      let id = e.target.parentElement.getAttribute("data-id");
    //      db.collection("users").doc(id).delete();
 
    //      console.log("deleted?", db.collection("users").doc(id) )
    //      console.log(    "if this works...",  db.collection('users').doc(id).get().then((doc) => {doc.get("name")})        );
    //  })
 
 
 
 
     
 }
 
 
 db.collection("users").get().then((snapshot)=>{
    //  console.log(snapshot.docs)
     snapshot.docs.forEach( doc => {
        //  console.log(doc.data());
        //  renderuser(doc);
     } )
 })
 
 
 
 
 
 
 
 
 
 
 
 
 
 //FORMS
 

// CONSTS
 const form_add = document.querySelector("#form_add");
 const form_login = document.querySelector("#form_login");


 //ADD USER
 $(form_add).on("submit", (e) => {

     e.preventDefault();

    const email = form_add.add_email.value;
    const pasw = form_add.add_pasw.value;

    console.log(email, pasw)

    auth.createUserWithEmailAndPassword(email, pasw).then( cred =>{
      console.log( cred.user );
      

      form_add.add_email.value = "";
      form_add.add_pasw.value = "";
    })
    
 })
 

// SIGN OUT

 $("#signout").on("click", (e)=>{
    e.preventDefault();
    auth.signOut()
})


// LOG IN
$(form_login).on("submit", (e)=>{
    e.preventDefault();
    const email = form_login.login_email.value;
    const pasw = form_login.login_pasw.value; 


    auth.signInWithEmailAndPassword(email, pasw).then(cred =>{
      console.log(cred.user)
    })

    form_login.login_email.value = "";
    form_login.login_pasw.value = "";
})


// AUTH CHANGE
auth.onAuthStateChanged(user => {
  console.log("STATE CHANGED: ", user);

  if(user){

  }else{
    
  }

})









    

// ------------------------------------------------

 // change border color on click
$("main p").on("click", function(e){
  $(this).css({"border-left-color":"darkcyan"})
})



// ARRAY CREATOR

function obj(pos, bool, color) {
  this.pos = pos;
  this.bool = bool;
  this.color = color;
}

let state = [ ]

//FILL STATE ARRAY
$("main p").each( function(item){

  let boolean = true;
  if( $(this).css("border-left-color") == "rgb(73, 73, 73)" ){ boolean = false; }

  let next = new obj(item, boolean, $(this).css("border-left-color") )
  state.push(  next  ) 

})

// console.log(state)




const updateState = () => {
  let newState = []
  $("main p").each( function(item) {

    let boolean = true;
    if( $(this).css("border-left-color") == "rgb(73, 73, 73)" ){ boolean = false; }
  
    let next = new obj(item, boolean, $(this).css("border-left-color") )
    newState.push(  next  ) 
  
  })

  console.log(newState)
  
  if(newState != state){
    state = newState
  }

}



const updatePage = () => {
  

    $("main p").each( item => {

      console.log(state[item].color)
      let color = state[item].color
      $(this).css("border-left-color", color);

    })




}


// ADD COLOR TO DATA BASE
const addcolor = () => {
  console.log(current_user, "up top");
  
 }

  fusers.onSnapshot(snapshot=>{
    let changes = snapshot.docChanges();

    changes.forEach(change => {
      // console.log(change.doc.data())
    })

    // console.log(changes)
  })




  
    
  
