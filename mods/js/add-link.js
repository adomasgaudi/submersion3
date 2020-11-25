



// add a link to a list
let form = document.querySelector('form');
let input = document.querySelector('#link_name');
let list = document.querySelector('#link-base');


//BUiLD links
const buildLinks = function(varx, id){
  
  let text = `
  <li data-id="${id}">
    <div class="row">
    
      <div class="col-7"><a href="${varx.url}">${varx.name}</a></div>
      <div class="col-3">
      <span style="text-align: right">${varx.date.toDate().toDateString()}</span>
      </div>
      <div class="col-2">
        <button class="btn btn-danger btn-sm my-2" style="border-radius: 10%; ">Del</button>
      </div>

    </div>
  </li>
  `;

  //^^^^^^^^^//
  document.querySelector("#link-base").innerHTML += text;
}





// ADD link
form.addEventListener('submit', e => {
  e.preventDefault();
  input.value
  const now = new Date();
  const link = {
    name: form.link_name.value,
    url: form.link_url.value,
    date: firebase.firestore.Timestamp.fromDate(now)
  }


  db.collection('links').add(link).then(()=>{
    console.log('link added')
  })


})

// DELETE link
list.addEventListener('click', e=>{
  console.log(e.target.parentElement.parentElement.parentElement)
  if(e.target.tagName === 'BUTTON'){
    const id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    db.collection('links').doc(id).delete().then(()=>{
      console.log("deleted")
    });
  }
  // console.log(e.target.tagName)
})








//ASYNC
// on page start add links from firebase
db.collection('links').get().then((snap)=>{
  snap.docs.forEach((onedoc)=>{
    buildLinks(onedoc.data(), onedoc.id);
  })

}).catch(err => {console.log(err)})