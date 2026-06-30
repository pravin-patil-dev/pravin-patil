const fs = require("fs");

const createfile = fs.writeFileSync(`student.txt`,"hello my name is pravin");
    console.log ("file is created sucessfully");



const updatefile = fs.appendFileSync("student.txt","and i am learning node.js");
console.log("file is updated sucessfully");

const readfile = fs.readFileSync("student.txt","utf-8");
console.log(readfile);













const express = require ("express");
const app = express();
  
app.get("/",(req,res)=>{
    res.send("hello express.js");
})

app.get("/about",(req,res)
=>{
    console.log("hello about page");
    res.send("hello about page");
});
app.get("/contact",(req,res)=>{
res.send("hello contact page");
});
app.get("/profile",(req,res)=>{
    res.send({
        name:"pravin",
        course:"node.js",
        skilla:["html","css"]
    })
});
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})