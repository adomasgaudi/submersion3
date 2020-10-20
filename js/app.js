// alert("10/17/2020 21:13");
// console.log("10/17/2020 21:13");
/////////////////////////////////////////////////////////////////























// ------------------------------------------------




// ON CLICK of paragraph

$("main p").on("click", function(e) {
  
  if($(this).attr("state") == "new"){
    $(this).css({"border-left-color":"darkcyan"}) //change color
    $(this).attr("state","read") //change state
    setTimeout( ()=>{  uploadStates();  }, 100 );
  }else if($(this).attr("state") == "read"){
    $(this).css({"border-left-color":"black"}) //change color
    $(this).attr("state","new") //change state
    setTimeout( ()=>{  uploadStates();  }, 100 );
  }else {}

  
  
})







let fakearray = [
  {id: "doc1", state: "read"},
  {id: "doc2", state: "new"},
  {id: "doc3", state: "new"},
  {id: "doc4", state: "read"}
]



function arraymaker() {
  let newArray = [];
  let i=0;
  fakearray.forEach( doc =>{
    let newnewarray = []
    newnewarray.push(doc.id)
    newnewarray.push(doc.state)
    console.log(newnewarray);

    newArray[i] = newnewarray
    
    
    console.log(i, doc.id,    doc.state, newArray)
    i++;
  });
  return newArray;





}





