
const express = require('express');
const app=express();
const bodyParser=require('body-parser')

const postRouter=require('./router/post')
const userRouter=require('./router/userroute')
app.use(bodyParser.json());
app.use("/post",postRouter);
app.use("/user",userRouter);
app.get('/', (req, res) => {
    res.send("Hello0000000000000");
});

app.get('/getall', (req, res) => {
    res.send("Hello");
});

module.exports=app;