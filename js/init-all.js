// AJAX html INCLUDES from css tricks


  const insertHtml = function(url, callback){
    fetch(url).then(response => {
      return response.text()
    })
    .then(data => { callback(data) });
  }
/////////////////////////////////////////////////////











  insertHtml("./include/header.html", (da)=>{
    $('header').replaceWith(da);
  })

  insertHtml("./include/footer.html", (da)=>{
    $('footer').replaceWith(da);
  })


  insertHtml("./include/foot-scripts.html", (da)=>{
    document.querySelector("body").innerHTML += da;
    console.log('scripts were added ------------------')
  })



  insertHtml("./mod-res-title/re.html", (da)=>{
    $('.resources-top').replaceWith(da);
    $('.link').replaceWith(`<link rel="stylesheet", href="./mod-res-title/re.css">`);
  })


  





