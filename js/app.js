

// AJAX html INCLUDES from css tricks

fetch("./include/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

  window.onload = () => {

    let imgHeight = $('.cardsrow img').outerHeight();
    document.querySelectorAll(".cardsrow img").forEach(e=>{
      e.style.width = " "+ (imgHeight+24) + "px ";
    });

    





  };

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



















(function (global) {
  var dc = {};
  
  dc.artList = {}
  dc.artList.anki = "./include/ankitut.html";
  dc.artList.vids = "./include/vids.html";
  // console.log(dc.artList.anki, dc.artList[anki])

  const insertHtml = (selector, html)=>{
    let element = document.querySelector(selector);
    element.innerHTML = html;
  }

  dc.getHtml = function (article) {
    // console.log(article, artList[article]);
    $ajaxUtils.sendGetRequest(
      dc.artList[article],
      function (receivedHtml) {
        // console.log(receivedHtml, "inserted HTML yay!!!!!!!!!")
        insertHtml("#article",receivedHtml);

        sizeFix();
      },
      false);

      

  }





 


  dc.devopen = function () {
    document.querySelector("#devBtn").style.display = "inline";
  }

  dc.devTog = function () {
    $(".devMode").css("display", "block")
    $(".col1").css("background", "crimson")
    $("section:last-of-type").css("background", "crimson")

  }



  
  global.$dc = dc;
  })(window);