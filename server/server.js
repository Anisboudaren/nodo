require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//connecting to the DB 
mongoose.connect(process.env.MONGO_URI )
.then( () => {
    console.log("connected to mongodb succesffuly !")})
.catch(err => {
    console.log('mongoDB connect err : ' , err)
})

//Routes
app.use('/api', require("./src/routes/index.js") )

//start server 
app.listen(port , () =>{
    console.log(`server is running at port ${port}`)
})