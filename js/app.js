// alert("10/17/2020 21:13");
// console.log("10/17/2020 21:13");




// Check if a new cache is available on page load.
// window.addEventListener('load', function(e) {

//     window.applicationCache.addEventListener('updateready', function(e) {
//       if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
//         // Browser downloaded a new app cache.
//         // Swap it in and reload the page to get the new hotness.
//         window.applicationCache.swapCache();
//         if (confirm('A new version of this site is available. Load it?')) {
//           window.location.reload();
//         }
//       } else {
//         // Manifest didn't changed. Nothing new to server.
//       }
//     }, false);
  
//   }, false);


    // function runbtn(){
    //     console.log("alert");
    //   alert("console.log")
    // }

    console.log($("#screencover").css('display', 'none'));

   
    
    
    function popup_close(){
      $("#screencover").css('display', 'none');
    }

    function popup_open(){
      $("#screencover").css('display', 'block');
    }


    // document.getElementById("screencover").addEventListener("click", (w)=>{
    //   $("#screencover").css('display', 'none');
    // })