const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
    },
    {
        from: "neha",
        to: "mohit",
        msg: "send me your notes",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me js callbacks",
        created_at: new Date(),
    },
    {
        from: "ragini",
        to: "sahil",
        msg: "lets study together",
        created_at: new Date(),
    },
    {
        from: "sahil",
        to: "ragini",
        msg: "yeah lets do it",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
    

