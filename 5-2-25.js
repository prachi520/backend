// defination: middleware is a function between request and response . It has acess to request and response object.

// running a middleware
// 1.at application level->(app.use(middleware-name))



const express = require("express");
const app = express();
app.use(m1);
// app.use(m2);
app.get("/", (req, res) => {
 console.log("running get request on path ");
 res.send ("home");
})
app.use(m2);
app.get("/about", (req,res)=>{
    console.log("running about request");
    res.send("about page")
})

function m1(req,res,next) {
    console.log("running middleware 1");
    next();
}

function m2(req,res,next) {
    console.log("running middleware 2");
    next();
}
app.listen(3000, () => {
    console.log("server started");
})

// Note:(1) if we run amiddleware at application level then it will run on every request
// (2) middleware run in a order it is called
