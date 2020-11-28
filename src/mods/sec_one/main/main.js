

// IMG FIX
window.onload = () => {

  let imgHeight = $('.cardsrow img').outerHeight();
  document.querySelectorAll(".cardsrow img").forEach(e=>{
    e.style.width = " "+ (imgHeight+24) + "px ";
  });

};

console.log('main.js');