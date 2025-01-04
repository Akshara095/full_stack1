var express = require('express')
var path = require('path')
var app = express()
var mdb = require('mongoose')
var cors = require('cors')
var User = require('./models/users')
const PORT = 3000
var dotenv = require('dotenv')
app.use(express.json())
app.use(cors())

.env.config()

mdb.connect(process.env.MONGO_URL).then(()=>{
    console.log("Mongodb Connection Successful")
}).catch(()=>{
    console.log("Check your connection string")
})
app.get('/',(req,res)=>{
    res.send("Welcome to Backend Server")
})
app.get('/json',(req,res)=>{
    res.json({server:"Welcome to Backend ",url:"localhost",port:"PORT"})
})
app.get('/static',(req,res)=>{
    console.log("Running")
    res.sendFile(path.join(__dirname,'index.html'))
})
app.post('/signup',(req,res)=>{
    console.log(req.body);
    var {firstName,lastName,email,password} = req.body
    console.log(firstName, lastName, email, password);
    try{
        var newUser = new User(req.body).
        console.log(req.body.password)
        newUser.save()
        console.log("User added successfully")
        res.status(200).send("User Added Successfully")
    }
    catch(err){
        console.log(err)
    }
})
app.get('/getsignup',async(req,res)=>{
        try{
            var allSignupRecords = await User.find()
            res.json(allSignupRecords)
            console.log("Fetched Successfully")
        }
        catch(err){
            console.log("Cannot able to read the records")
            console.log(err)
            res.send(err)
        }
    })
app.post('/login',async(req,res)=>{
    var {email,password} = req.body
    try{
    var existingUser = await User.findOne({email:email})
    //console.log(existingUser)
        if(existingUser){
            if(existingUser.password !== password){
            res.json({message:"Invalid Credentials",isLoggedIn:false})
            }
            else{
                res.json({message:"Login Successful",isLoggedIn:true})
            }
            
        }
        else{
            res.json({message:"Login Failed",isLoggedIn:false})
        }
    }
    catch(err){
        console.log("Some error")
    }
})
app.listen(PORT,()=>{
    console.log(`Backend Server Running... \nUrl:http://localhost:${PORT}`)
})
