



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
firebase.analytics();

const db = firebase.firestore(); 

window.$db = db;
console.log(db)









