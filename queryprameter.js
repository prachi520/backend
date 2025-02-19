const express=require("express");
const app=express();
app.get("/profile",(req,res)=>{
    const {username,age,address} = req.query;

    // find in db

    res.send("profile page of" + " "+username+ " "+ age + " "+address)
})

app.listen(6542,()=>{
    console.log("server started")
})

let userData=[
    {
        id:1,
        name:"Prachi",
        address:"Delhi"
    },
    {
        id:2,
        name:"Pranjal",
        address:"Chandigarh"
    },
    {
        id:3,
        name:"Mehak",
        address:"Yamuna"
    }
]
app.get("/allusers",(req,res)=>{
    res.send(userData)
})
app.get("/getuserbyId",(req,res)=>{
    let {id}=req.query;
    for(let i=0;i<userData.length;i++){
        if(userData[i].id==id){
            return res.send(userData[i])
        }
    }
    res.send("user not found")
})

app.get("/deleteUserById", (req, res) => {
    let { id } = req.query;
    id = parseInt(id); // Convert id to a number

    let index = userData.findIndex(user => user.id === id);

    if (index !== -1) {
        userData.splice(index, 1); // Remove the user from the array
        res.send(`User with ID ${id} delete successfully.`);
    } else {
        res.send("User not found.");
    }
});

app.get("/addUser",(req,res)=>{
    const { name,address}=req.query;
 if(!name || !address){
  return res.status(400).send("Missing name or Address");
 }

 const newUser={id:userData.length+1,name,address};
 userData.push(newUser);

 res.send({mesage:"User added sucessfully",userData:newUser});
})