///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////// 

// AJAX html INCLUDES from css tricks


  const fetchHtml = function(url, callback){
    fetch(url).then(response => {
      return response.text()
    })
    .then(data => { callback(data) });
  }
/////////////////////////////////////////////////////







//////////////////////////////////////
// import main htmls

  fetchHtml("../../dist/includes/out_header_jumbo.html", (da)=>{
    $('[refer="out_header_jumbo"]').replaceWith(da);
  }) 
  console.log('hello');
  
  

  fetchHtml("../../dist/includes/sec_one.html", (da) =>{
    $('[refer="sec_one"]').replaceWith(da);
  }) 



  fetchHtml("../../dist/includes/sec_patience.html", (da)=>{
    $('[refer="sec_patience"]').replaceWith(da);
  }) 

  fetchHtml("../../dist/includes/out_footer.html", (da)=>{
    $('[refer="out_footer"]').replaceWith(da);
  }) 
//////////////////////////////////////


// form mods
import "../../src/mods/sec_one/sec-one.js";
import "../../src/mods/ajax/ajax-utils";
import "../../src/mods/ajax/iife";
// @pepros-append ../../src/mods/sec_one/sec-one.js
// @pepros-append ./app.js

import '../mods/ajax/iife.js';  
// import './init-ajax.js';
// import './add-link.js';
console.log('-------from init-all.js');





