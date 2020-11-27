// AJAX html INCLUDES from css tricks


  const insertHtml = function(url, callback){
    fetch(url).then(response => {
      return response.text()
    })
    .then(data => { callback(data) });
  }
/////////////////////////////////////////////////////








// import htmls from pugs

  insertHtml("../../dist/includes/out_header_jumbo.html", (da)=>{
    $('[refer="out_header_jumbo"]').replaceWith(da);
  }) 
  
  insertHtml("../../dist/includes/sec_one.html", (da) =>{
    $('[refer="sec_one"]').replaceWith(da);
  }) 

        insertHtml('../../dist/includes/aside.html', (da)=>{
          $('[refer="aside"]').replaceWith(da);
        })

        insertHtml('../../dist/includes/main.html', (da)=>{
          $('[refer="main"]').replaceWith(da);
        })








  insertHtml("../../dist/includes/sec_patience.html", (da)=>{
    $('[refer="sec_patience"]').replaceWith(da);
  }) 
  insertHtml("../../dist/includes/out_footer.html", (da)=>{
    $('[refer="out_footer"]').replaceWith(da);
  }) 
  insertHtml("../../dist/includes/out_scripts.html", (da)=>{
    $('[refer="out_scripts"]').replaceWith(da);
  }) 
 

 
  // insertHtml("./include/footer.html", (da)=>{
  //   $('footer').replaceWith(da);
  // })


  // insertHtml("./include/foot-scripts.html", (da)=>{
  //   document.querySelector("body").innerHTML += da;
  //   console.log('scripts were added ------------------')
  // })



  // insertHtml("./mod-res-title/re.html", (da)=>{
  //   $('.resources-top').replaceWith(da);
  //   $('.link').replaceWith(`<link rel="stylesheet", href="./mod-res-title/re.css">`);
  // })






// import './test.css';
// import './init-ajax.js';
// import '../digital_clock/date';

// console.log("webpack")
// $dom.runs("bubba hunnnnaa")
  





