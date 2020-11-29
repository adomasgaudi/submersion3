
// (function(global){    

//  })(window);

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   let topbody = document.body.scrollTop;
//   console.log(topbody)
//   // document.querySelector("body").style.fontSize = "30px";
//   // if (topbody.scrollTop > 50 ) {
//   //   console.log('scrolling')
//   // } else {
//   //   console.log('scrolling2')
//   //   document.querySelector("#sticky").style.fontSize = "90px";
//   // }
// }

// get the sticky element
// const stickyElm = document.querySelector('.resources')
// let options = {
//   // root: document.querySelector('.resources'),
//   rootMargin: '0px',
//   threshold: 1
// }

// const observer = new IntersectionObserver( 
//   ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
//   options
// );

// observer.observe(stickyElm) 



// //to check when element get's position sticky
// var observer = new IntersectionObserver(function(entries) {
//   // no intersection 
//   if (entries[0].intersectionRatio === 0)
//     document.querySelector(".resources").classList.add("isSticky");
  
//   else if (entries[0].intersectionRatio === 1)
//     document.querySelector(".resources").classList.remove("isSticky");
// }, 
// { threshold: [0, 1] });


// observer.observe(document.querySelector(".resources-top"));
