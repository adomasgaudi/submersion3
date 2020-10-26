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



// function arraymaker() {
//   let newArray = [];
//   let i=0;
//   fakearray.forEach( doc =>{
//     let newnewarray = []
//     newnewarray.push(doc.id)
//     newnewarray.push(doc.state)
//     console.log(newnewarray);

//     newArray[i] = newnewarray
    
    
//     console.log(i, doc.id,    doc.state, newArray)
//     i++;
//   });
//   return newArray;

// }

// window.onbeforeunload = function(event)
// {
//     return confirm("Confirm refresh");
// };









  $(".expTop").on("click", function(){
    console.log($(this).next().css("display"))
    var content = $(this).next();
    if (content.css("display") == "none") {      
      content.css("display","block");    } 
    else {content.css("display","none")}
  });


  $(".popupTop").on("click", function(){
    var content = $(this).parent().nextAll(".popupBox").eq( 0 );
    if (content.css("display") == "none") {      
      content.css("display","block");    } 
    else {content.css("display","none")}
  });

  $(".popupTop").on("click",function(){
    $(this).css("color","maroon")
  })
  // $(".popupTop:hover").css("color","red")
  





  // Vue.config.devtools = true;

  // Vue.component('card', {
  //   template: `
  //     <div class="card-wrap"
  //       @mousemove="handleMouseMove"
  //       @mouseenter="handleMouseEnter"
  //       @mouseleave="handleMouseLeave"
  //       ref="card">
  //       <div class="card"
  //         :style="cardStyle">
  //         <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
  //         <div class="card-info">
  //           <slot name="header"></slot>
  //           <slot name="content"></slot>
  //         </div>
  //       </div>
  //     </div>`,
  //   mounted() {
  //     this.width = this.$refs.card.offsetWidth;
  //     this.height = this.$refs.card.offsetHeight;
  //   },
  //   props: ['dataImage'],
  //   data: () => ({
  //     width: 0,
  //     height: 0,
  //     mouseX: 0,
  //     mouseY: 0,
  //     mouseLeaveDelay: null }),
  
  //   computed: {
  //     mousePX() {
  //       return this.mouseX / this.width;
  //     },
  //     mousePY() {
  //       return this.mouseY / this.height;
  //     },
  //     cardStyle() {
  //       const rX = this.mousePX * 30;
  //       const rY = this.mousePY * -30;
  //       return {
  //         transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };
  
  //     },
  //     cardBgTransform() {
  //       const tX = this.mousePX * -40;
  //       const tY = this.mousePY * -40;
  //       return {
  //         transform: `translateX(${tX}px) translateY(${tY}px)` };
  
  //     },
  //     cardBgImage() {
  //       return {
  //         backgroundImage: `url(${this.dataImage})` };
  
  //     } },
  
  //   methods: {
  //     handleMouseMove(e) {
  //       this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
  //       this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
  //     },
  //     handleMouseEnter() {
  //       clearTimeout(this.mouseLeaveDelay);
  //     },
  //     handleMouseLeave() {
  //       this.mouseLeaveDelay = setTimeout(() => {
  //         this.mouseX = 0;
  //         this.mouseY = 0;
  //       }, 1000);
  //     } } });
  
  
  
  // const app = new Vue({
  //   el: '#app' });






  

   $("nav a:nth-child(1)").on("click", function(e){
    e.preventDefault();
    
     if($("header .menu").css("display") == "block"){ 
      $("header .menu").css("display","none");
      

    }else{
      $("header .signup").css("display","none");
      $("header .menu").css("display","block");
      $("header .menu a").css("border-top","1px solid blue");
      $("header .menu a").css("border-bottom","1px solid blue");
    }
   })


   $("nav a:last-of-type").on("click", function(e){
    e.preventDefault();
    if($("header .signup").css("display") == "block"){ 
      $("header .signup").css("display","none");
      

    }else{
      $("header .signup").css("display","block");
      $("header .menu").css("display","none");
      $("header .signup a").css("border-top","1px solid red");
      $("header .signup a").css("border-bottom","1px solid red");
    }


   })


    var xhr = new XMLHttpRequest;
    // xhr.open('GET', 'test.html?_=' + new Date().getTime());
    //xhr.setRequestHeader('Cache-Control', 'no-cache');
    // xhr.send();
    xhr.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0');
    xhr.setRequestHeader('cache-control', 'max-age=0');
    xhr.setRequestHeader('expires', '0');
    xhr.setRequestHeader('expires', 'Tue, 01 Jan 1980 1:00:00 GMT');
    xhr.setRequestHeader('pragma', 'no-cache');

    // http.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    alert();
  //  console.log(xhr.send())


