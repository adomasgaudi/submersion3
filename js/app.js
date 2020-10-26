// alert("10/17/2020 21:13");
// console.log("10/17/2020 21:13");
/////////////////////////////////////////////////////////////////























// ------------------------------------------------




// ON CLICK of paragraph

$("main p").on("click", function(e) {
  
  if($(this).attr("state") == "new"){
    $(this).css({"border-left-color":"darkcyan"}) //change color
    $(this).attr("state","read") //change state
    setTimeout( ()=>{  uploadStates();  }, 100 );
  }else if($(this).attr("state") == "read"){
    $(this).css({"border-left-color":"black"}) //change color
    $(this).attr("state","new") //change state
    setTimeout( ()=>{  uploadStates();  }, 100 );
  }else {}

  
  
})







let fakearray = [
  {id: "doc1", state: "read"},
  {id: "doc2", state: "new"},
  {id: "doc3", state: "new"},
  {id: "doc4", state: "read"}
]



// function arraymaker() {
//   let newArray = [];
//   let i=0;
//   fakearray.forEach( doc =>{
//     let newnewarray = []
//     newnewarray.push(doc.id)
//     newnewarray.push(doc.state)
//     console.log(newnewarray);

//     newArray[i] = newnewarray
    
    
//     console.log(i, doc.id,    doc.state, newArray)
//     i++;
//   });
//   return newArray;

// }

// window.onbeforeunload = function(event)
// {
//     return confirm("Confirm refresh");
// };









$(".expTop").on("click", function(){
  console.log($(this).next().css("display"))
  var content = $(this).next();
  if (content.css("display") == "none") {      
    content.css("display","block");    } 
  else {content.css("display","none")}
});




$(".popupTop").on("click", function(){
  var content = $(this).parent().nextAll(".popupBot").eq( 0 );
  if (content.css("display") == "none") {      
    content.css("display","block");    } 
  else {content.css("display","none")}
});

$(".popupTop2").on("click", function(){
  var content = $(this).parent().nextAll(".popupBot2").eq( 0 );
  if (content.css("display") == "none") {      
    content.css("display","block");    } 
  else {content.css("display","none")}
});


$(".popupTop").on("click",function(){
  $(this).css("color","maroon")
})
$(".popupTop2").on("click",function(){
  $(this).css("color","maroon")
})
// $(".popupTop:hover").css("color","red")




// $(".artTop").on("click", function(){
//   var content = $(this).nextAll(".artBot").eq( 0 );
//   if (content.css("display") == "none") {      
//     content.css("display","block");    } 
//   else {content.css("display","none")}
// });

$(".artTop").on("click", function(){
  var content = $(this).nextAll(".artBot").eq( 0 );
  if (content.css("display") == "none") {      
    content.slideDown()    } 
  else {content.slideUp()}
});








  

   $("nav a:nth-child(1)").on("click", function(e){
    e.preventDefault();
    
     if($("header .menu").css("display") == "block"){ 
      $("header .menu").css("display","none");
      

    }else{
      $("header .signup").css("display","none");
      $("header .menu").css("display","block");
      $("header .menu a").css("border-top","1px solid blue");
      $("header .menu a").css("border-bottom","1px solid blue");
    }
   })


   $("nav a:last-of-type").on("click", function(e){
    e.preventDefault();
    if($("header .signup").css("display") == "block"){ 
      $("header .signup").css("display","none");
      

    }else{
      $("header .signup").css("display","block");
      $("header .menu").css("display","none");
      $("header .signup a").css("border-top","1px solid red");
      $("header .signup a").css("border-bottom","1px solid red");
    }


   })


    // var xhr = new XMLHttpRequest;
    // xhr.open('GET', 'test.html?_=' + new Date().getTime());
    // //xhr.setRequestHeader('Cache-Control', 'no-cache');
    // xhr.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0');
    // xhr.setRequestHeader('cache-control', 'max-age=0');
    // xhr.setRequestHeader('expires', '0');
    // xhr.setRequestHeader('expires', 'Tue, 01 Jan 1980 1:00:00 GMT');
    // xhr.setRequestHeader('pragma', 'no-cache');
    // xhr.send();

    // http.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    // alert();
  //  console.log(xhr.send())


