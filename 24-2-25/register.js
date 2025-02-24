// why you should use post request
// if oyu want to change the state of a server, then it should be a post request
// data is not visible in the url in post request

const express=require("express");
const app=express();
app.use(express.urlencoded({extended:true}))
let userData=[]
app.get("/adduser",(req,res)=>{
res.sendFile(__dirname+"/register.html");
})
app.post("/adduser",(req,res)=>{
    let{username,useremail,userpassword}=req.body;
    console.log(username,useremail,userpassword);
    let newUser={
        name:username,
        email:useremail,
        password:userpassword
    }
    userData.push(newUser);
    res.send(userData);
})

app.listen(2345,()=>{
    console.log("server started");
})

// express.url encoded middleware