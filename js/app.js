// alert("10/17/2020 21:13");
// console.log("10/17/2020 21:13");
/////////////////////////////////////////////////////////////////







// ------------------------------------------------





// ARRAY CREATOR

function obj(pos, state) {
  this.pos = pos;
  this.state = state;
}

// let state = [ ]

//FILL STATE ARRAY
// const initialise = () => {
//   console.log(  "init test ", $("[name*='re']")  )
//   $("[name*='re']").each( function(item){
//     let next = new obj(item, "new");
//     state.push(  next  ) ;  
//   })
// }
// initialise();





/////////////////////////////////////////


// const updateState = () => {
//   let newState = []
//   $("main p").each( function(item) {

    
//     if( $(this).css("border-left-color") == "rgb(73, 73, 73)" || $(this).css("border-left-color") == "rgb(36, 36, 36)" ){ boolean = false; }
  
//     let next = new obj(item, boolean, $(this).css("border-left-color") )
//     newState.push(  next  ) 
  
//   })
  
//   if(newState != state){
//     state = newState
//   }

// }








  db.collection('texts').onSnapshot(snapshot=>{
    let changes = snapshot.docChanges();

    console.log("changes test :", changes);
    changes.forEach(change => {
      console.log("changes.doc.data test :", change.doc.data())
    })

  })












// 

$("main p").on("click", function(e) {
  console.log("this test:", this, $(this), e , e.target);
  
  $(this).css({"border-left-color":"darkcyan"}) //change color
  $(this).attr("state","read") //change state
  
  setTimeout( ()=>{ 
    //upload to firebase
    db.collection('texts')
    // updateState()
    // console.log(state)  
  }, 100 );

})
    


const findAllRead = ()=>{
  let arr  = [];
  for( i = 0; $( "[state*='read']" )[i] != undefined; i++){
    let item = $( "[state*='read']" )[i]
    // console.log( item, item.getAttribute("name"))
    let name = $("[state*='read']")[i].getAttribute("name");
    let state = $("[state*='read']")[i].getAttribute("state");

    console.log(name, state)
    let nextObj = new obj(name, state);
    
    arr.push(nextObj);

  }
  console.log(arr);
  return arr 
}



























// $( "[state*='read']" ).each( (e)=>{
//   console.log(e.target, this, $(this), "00909")
// } )


// // change border color on click
// $("main p").on("click", function(item) {
//   console.log( this )
//   // console.log(item);
//   if( $(this).css("border-left-color") == "rgb(0, 139, 139)" ){
    
//     $(this).css({"border-left-color":"rgb(73, 73, 73)"}); //CHANGE COLOR
//     // state[item].state = "new"  // SET ARRAY
  
//     state.forEach( (e)=>{
//       console.log(e)
//     } )
//     // console.log(state[item])
//     // console.log(state)
    

//   }else{   
//     $(this).css({"border-left-color":"darkcyan"}) 
//     // state["item"].state = "read"  // SET ARRAY
//     // console.log(state[item])
//     // console.log(state)
//     state.forEach( (e)=>{
//       console.log(e, e.pos, item, "----")
//       if(e.pos == item){console.log("hurray")}
//       e
//     } )
//   }

//   setTimeout( ()=>{ 
//     updateState()
//     // console.log(state)  
//   }, 100 );
  
  




  
// })


// console.log( $("main p")[0], "hello" )
  
//     $("main p")[0]

//     $("main p").on("click", (e)=>{

//       console.log( e.target )
//       // e.stopPropagation();
//       // let i = 0;
//       $("main p").each( (event)=>{
//         // console.log(event)
//         // if( e.target ){}
//       } )


//     })



    













