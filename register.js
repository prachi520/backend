// why you should use post request
// if oyu want to change the state of a server, then it should be a post request
// data is not visible in the url in post request

const express=require("express");
const app=express();

app.get("/adduser",(req,res)=>{
res.sendFile(__dirname+"/register.html");
})

app.listen(2345,()=>{
    console.log("server started");
})