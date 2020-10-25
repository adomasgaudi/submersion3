



document.addEventListener('mousemove', function(event){
  let card_x = getTransformValue(event.clientX,  window.innerWidth,  56);
  let card_y = getTransformValue(event.clientY,  window.innerHeight,  56);
  let shadow_x = getTransformValue(event.clientX,  window.innerWidth,  20);
  let shadow_y = getTransformValue(event.clientY,  window.innerHeight,  20);

  $(".floating").css("transform","rotateX("+card_y/1+"deg) rotateY("+card_x+"deg)");
  // $(".floating").css("box-shadow",-card_x+"px "+card_y/1+"px 55px rgba(0, 0, 0, .55)");
});

function getTransformValue(v1,v2,value){
  return ((v1/v2*value-value/2)*1).toFixed(1);                        
}
$(function(){
  setTimeout(function(){
    $("body").removeClass("active");
  }, 2200);
});