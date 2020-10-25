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
  


  function popup_close(){    $("#screencover").slideUp(); }
  
  function popup_open(){    $("#screencover").slideDown();}


  // (function() {
  
  //   var slideContainer = $('.slide-container');
    
  //   slideContainer.slick();
    
  //   $('.clash-card__image img').hide();
  //   $('.slick-active').find('.clash-card img').fadeIn(200);
    
  //   // On before slide change
  //   slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  //     $('.slick-active').find('.clash-card img').fadeOut(1000);
  //   });
    
  //   // On after slide change
  //   slideContainer.on('afterChange', function(event, slick, currentSlide) {
  //     $('.slick-active').find('.clash-card img').fadeIn(200);
  //   });
    
  // })();

  





  //rotate function
  document.addEventListener('mousemove', function(event){

    let card_x = getTransformValue(event.clientX,window.innerWidth,56);
    let card_y = 0;

    $(".floating").css( "transform" , "rotateX("+card_y+"deg) rotateY("+card_x+"deg)");


  });

  function getTransformValue(v1,v2,value){                    
    return (     ( (v1/v2*value) - (value/2) )*2    ).toFixed(1);                        
  }

  