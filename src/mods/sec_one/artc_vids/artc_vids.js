




function sizeFix(){
  let vidWidth = $('#article iframe').outerWidth();
  let vidHeight;
  console.log( vidWidth, vidHeight);
  if(vidWidth > 500){
    vidHeight = (vidWidth/16)*9;
    console.log("16:9", vidWidth, vidHeight);
  }else{
    vidHeight = (vidWidth/4)*3;
    console.log("4:3");
  }
  document.querySelectorAll("#article iframe").forEach(e=>{
    e.style.height = " "+ (vidHeight) + "px ";
  });
}



window.addEventListener('resize', function(){
  sizeFix()
});



