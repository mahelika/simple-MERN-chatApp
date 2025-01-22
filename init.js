const mongoose = require("mongoose");
const Chat = require("/models/chat.js");

main()
.then(()=> {
    console.log("connection sucessful");
})
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/chatapp')
}

let allChats =([
    {
        from: "trish",
        to: "priti",
        msg: "good morning. all the best.",
        created_at: new Date()
    },
    {
        from: "niti",
        to: "taylor",
        msg: "its 22nd jan today",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "amit",
        msg: "i'm learning mongoDB today.",
        created_at: new Date()
    },
    {
        from: "mohit",
        to: "pari",
        msg: "are you prepared for the exam today?",
        created_at: new Date()
    },
    {
        from: "vishu",
        to: "angel",
        msg: "heheeheheehehhe",
        created_at: new Date()
    }
]);

Chat.insertMany(allChats);