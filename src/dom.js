
(function (global) {
  let dom = {}





  dom.runs = function(word){
    console.log( `hi: ${word}`)
  }
  dom.runs("dom")

  console.log("not this again");


  
  
  global.$dom = dom;
  })(window);