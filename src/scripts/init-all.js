// AJAX html INCLUDES from css tricks


  const fetchHtml = function(url, callback){
    fetch(url).then(response => {
      return response.text()
    })
    .then(data => { callback(data) });
  }
/////////////////////////////////////////////////////

// const insertHtml = function (callback)






// import main htmls


  fetchHtml("../../dist/includes/out_header_jumbo.html", (da)=>{
    $('[refer="out_header_jumbo"]').replaceWith(da);
  }) 
  console.log('hello');
  
  

  fetchHtml("../../dist/includes/sec_one.html", (da) =>{
    $('[refer="sec_one"]').replaceWith(da);
  }) 
    import "../../src/mods/sec_one/sec-one.js";
  // @pepros-append ../../src/mods/sec_one/sec-one.js


  fetchHtml("../../dist/includes/sec_patience.html", (da)=>{
    $('[refer="sec_patience"]').replaceWith(da);
  }) 

  fetchHtml("../../dist/includes/out_footer.html", (da)=>{
    $('[refer="out_footer"]').replaceWith(da);
  }) 



// @prepros-append ./app.js

import './init-ajax.js';
import './app.js';
import './add-link.js';





