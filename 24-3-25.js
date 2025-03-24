// odm->object document mapper
const_express=require("express");
const app=express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.listen(2222,()=>{
    console.log("server started")
})