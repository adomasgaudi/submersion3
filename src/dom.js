
(function (global) {
  let dom = {}





  dom.runs = function(word){
    console.log( `hi: ${word}`)
  }
  dom.runs("dom")




  
  
  global.$dom = dom;
  })(window);