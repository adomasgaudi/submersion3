// alert("10/17/2020 21:13");
// console.log("10/17/2020 21:13");


// const log = (name) => {return console.log(name)};
// log("loglog")

// Check if a new cache is available on page load.
// window.addEventListener('load', function(e) {

//     window.applicationCache.addEventListener('updateready', function(e) {
//       if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
//         // Browser downloaded a new app cache.
//         // Swap it in and reload the page to get the new hotness.
//         window.applicationCache.swapCache();
//         if (confirm('A new version of this site is available. Load it?')) {
//           window.location.reload();
//         }
//       } else {
//         // Manifest didn't changed. Nothing new to server.
//       }
//     }, false);
  
//   }, false);


    // function runbtn(){
    //     console.log("alert");
    //   alert("console.log")
    // }

    

   
    
    
    function popup_close(){
      $("#screencover").css('display', 'none');
    }

    function popup_open(){
      $("#screencover").css('display', 'block');
    }


    // document.getElementById("screencover").addEventListener("click", (w)=>{
    //   $("#screencover").css('display', 'none');
    // })




    ////////////////////////////////////////////////////////////////////////










    ///////////////////////////////////////////////////////////////////////////










    



 
 const form_add = document.querySelector("#form_add");
 const form_login = document.querySelector("#form_login");

 //check
//  console.log(form_add, form_login)
 
 function findattr(attribute, value, element_type)    {
     element_type = element_type || "*";
 
     var All = document.getElementsByTagName(element_type);
     for (var i = 0; i < All.length; i++)       {
       if (All[i].getAttribute(attribute) == value) { return All[i]; }
     }
     
   }
 
 
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
 
 //ADD USER
 form_add.addEventListener("submit", (e)=>{
     e.preventDefault();
     db.collection("users").add({
         name: form_add.add_name.value,
         score: "0"
 
     })
     form_add.name.value = "";
 })
 





 
 
 // LOGIN
     form_login.addEventListener("submit", (e)=>{
         e.preventDefault();
     
 

        console.log(form_login.login_name.value, "- just logged in")
         db.collection("users").where("name", "==", form_login.login_name.value).get().then((snapshot)=>{
                 snapshot.docs.forEach(doc => {
                     let name = doc.data().name
                     document.getElementById("user").textContent = name;
                     
                 })
         })

         //check for all names
         db.collection("users").get().then((sn)=>{

            // console.log(sn.docs)
            sn.docs.forEach( doc => {
                console.log(doc.data().name);
                
            } )
         })    
 
         
     
     });
 














    // DISPLAY CURRENT USER
     $("#score").text("zero");
     let current_user = $("#user").get(0).textContent ;
     console.log(current_user, "is now");

     //bring current user score
    //  console.log("score")
    //  db.collection("users").where("name", "==", current_user).get().then((snapshot)=>{

    //     snapshot.docs.forEach(doc => {
    //       let score = doc.data().score;
    //       $("#score").text(score) 
    //       console.log("hiii")
    //       console.log(score, "score");
          
    //     })
    //   })
 









 // change border color on click
$("main p").on("click", function(e){
  $(this).css({"border-left-color":"darkcyan"})
  console.log($(this).css("border-left-color"))
})



$("main p").each( item => {
  console.log(item, "hi");


  // $(item).on("click", function(e){
  //   console.log("it worked!")
  // })

})

console.log(  $("main").css("background-color") )
// console.log($("main p")[2].css("border-left-color"));

let textState = [];

$("main p").each(function(item){
  textState.push( $(this).css("border-left-color") );
})

console.log(textState, textState.length);

// $("main p").length

function count() {
  for(i = 0; i < textState.length; i++){
    
    if( textState[0] == "rgb(73, 73, 73)" ){
      console.log(i, "good")
    }
  }
}
count()


function obj(pos, bool, color) {
  this.pos = pos;
  this.bool = bool;
  this.color = color;
}



// ARRAY CREATOR

let state = [ ]

//FILL STATE ARRAY
$("main p").each( function(item){

  let boolean = true;
  if( $(this).css("border-left-color") == "rgb(73, 73, 73)" ){ boolean = false; }

  let next = new obj(item, boolean, $(this).css("border-left-color") )
  state.push(  next  ) 

})


console.log(state)














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
  
    $("main p").each( function(item){
      console.log(state[item].color)
       
      $(this).css({"color": state[item].color})
      // $(this).css({"color": "red"})

    })




}



// var i = 0;
// while( (child = child.previousSibling) != null ) {
//   i++;
// }















