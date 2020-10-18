 // <!-- TODO: Add SDKs for Firebase products that you want to use
    //      https://firebase.google.com/docs/web/setup#available-libraries -->
    // <!-- <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-analytics.js"></script> -->

// Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

        var firebaseConfig = {
            apiKey: "AIzaSyBptdW_yuMCO22Nt2Aetva5LqocZyYavzg",
            authDomain: "submersion-27c57.firebaseapp.com",
            databaseURL: "https://submersion-27c57.firebaseio.com",
            projectId: "submersion-27c57",
            storageBucket: "submersion-27c57.appspot.com",
            messagingSenderId: "656683492566",
            appId: "1:656683492566:web:7124e5df95023d0c411577",
            measurementId: "G-LJLH6QW309"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        // firebase.analytics();
        const db = firebase.firestore();
        
        // db.settings({ timestampsInSnapshots: true});






 ////////////////////////////////////////////////////////////










 console.log("FIREBASE JS running");


const id = (name) => { return document.getElementById(name) }

const userlist = document.querySelector("#userlist");
const form_adduser = document.querySelector("#add-user-form")
const form_login = document.querySelector("#login-form")

function findattr(attribute, value, element_type)    {
    element_type = element_type || "*";

    var All = document.getElementsByTagName(element_type);
    for (var i = 0; i < All.length; i++)       {
      if (All[i].getAttribute(attribute) == value) { return All[i]; }
    }
    
  }


function renderuser(doc) {
    // creates elements
    let lidoc = document.createElement("li");
    let namespan = document.createElement("span");
    let paswspan = document.createElement("span");
    let scorespan = document.createElement("span");
    let cross = document.createElement("div");

    //future
    lidoc.setAttribute("data-id", doc.id);

    //fills elements
    namespan.textContent = "name: " + doc.data().name + " " ;
    namespan.setAttribute("name", doc.data().name )
    paswspan.textContent = "pasw: " + doc.data().pasw + " " ;
    scorespan.textContent = "score: " + doc.data().score + " " ; 
    cross.textContent = "delete";
    cross.classList += "button";

    lidoc.appendChild(namespan);
    lidoc.appendChild(paswspan);
    lidoc.appendChild(scorespan);
    lidoc.appendChild(cross)

    userlist.appendChild(lidoc)


    cross.addEventListener("click", (e)=>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute("data-id");
        db.collection("users").doc(id).delete();

        console.log("deleted?", db.collection("users").doc(id) )
        console.log(    "if this works...",  db.collection('users').doc(id).get().then((doc) => {doc.get("name")})        );
    })




    
}



db.collection("users").get().then((snapshot)=>{
    // console.log(snapshot.docs)
    snapshot.docs.forEach( doc => {
        console.log(doc.data());
        renderuser(doc);
    } )
})













//FORMS

//ADD USER
form_adduser.addEventListener("submit", (e)=>{
    e.preventDefault();
    db.collection("users").add({
        name: form_adduser.name.value,
        pasw: form_adduser.pasw.value,
        score: "0"

    })
    form_adduser.name.value = "";
    form_adduser.pasw.value = "";
})



// LOGIN
    form_login.addEventListener("submit", (e)=>{
        e.preventDefault();
    
        // console.log("login: ", form_login.name.value, findattr( "name", form_login.name.value, "span"));
        let element = findattr( "name", form_login.name.value, "span" )
        let id = element.parentElement.getAttribute("data-id");
        console.log("id", id);

        db.collection("users").where("name", "==", "alex").get().then((snapshot)=>{
                snapshot.docs.forEach(doc => {
                    let pasw = doc.data().pasw
                    document.getElementById("user").textContent = pasw;
                })
        })
        
    
    });





//POP UP SIGN UP
    
    function dissapear(){
        document.getElementById('id01').style.display='none';
        console.log("ran dissapear")
    }

    function reappear(){
        document.getElementById('id01').style.display='block';
        console.log("ran reappear")
    }

    // Get the modal
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
    