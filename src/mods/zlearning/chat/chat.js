

// import '../firebase/init-fire.js';
//@prepros-prepend ../firebase/init-fire.js



document.querySelector(".chat_bar").addEventListener('click',()=>{
  document.querySelector(".chat_con").classList.toggle("visible");
  console.log("working")
})





class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats')
  }
  async addChat(message){
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    }
    //save chat doc
    const response = await this.chats.add(chat);
    return response; // return this
  }
}


const chatroom = new Chatroom('gaming', "adam");

chatroom.addChat('hello adomas students!')
  .then((da)=>{console.log("run", da)})
  .catch((err)=>{console.log(err)}) 
