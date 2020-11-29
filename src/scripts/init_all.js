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

  // fetchHtml("../../docs/includes/out_header_jumbo.html", (da)=>{
  //   $('[refer="out_header_jumbo"]').replaceWith(da);
  // }) 
  // console.log('hello');
  // fetchHtml("../../docs/includes/sec_one.html", (da) =>{
  //   $('[refer="sec_one"]').replaceWith(da);
  // }) 


  // fetchHtml("../../docs/includes/sec_patience.html", (da)=>{
  //   $('[refer="sec_patience"]').replaceWith(da);
  // }) 

  // fetchHtml("../../docs/includes/out_footer.html", (da)=>{
  //   $('[refer="out_footer"]').replaceWith(da);
  // }) 
//////////////////////////////////////



// @prepros-append ../../src/mods/sec_one/sec_one.js 
// @prepros-prepend "../../src/mods/ajax/ajax_utils";
// @prepros-prepend "../../src/mods/ajax/iife";

// @prepros-prepend '../mods/ajax/iife.js';
console.log('-------from init_all.js');





