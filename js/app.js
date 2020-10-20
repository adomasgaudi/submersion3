// alert("10/17/2020 21:13");
// console.log("10/17/2020 21:13");
/////////////////////////////////////////////////////////////////























// ------------------------------------------------




// ON CLICK of paragraph

$("main p").on("click", function(e) {
  
  $(this).css({"border-left-color":"darkcyan"}) //change color
  $(this).attr("state","read") //change state
  // console.group("update")
  setTimeout( ()=>{  uploadStates();  }, 100 );
  
})






