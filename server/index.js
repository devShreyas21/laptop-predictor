import express from "express"
import mongoose, { Mongoose } from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import {spawn} from 'child_process'
// import { error } from "console"

const app=express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(cors())

// mongodb+srv://shreyask003:shrutiyasshre2003@cluster0.zhsmw6b.mongodb.net/

mongoose.connect('mongodb+srv://shreyask003:shrutiyasshre2003@cluster0.zhsmw6b.mongodb.net/')

const schema1 = mongoose.Schema({
    company:String,
    inches:String,
    cpu:String,
    gpu: String,
    ram: String,
    memory: String,
    resolution:String,
    weight:String,
})

const schema2 = mongoose.Schema({
    name:String,  
    username:String,
    email:String,
    password:String,
})

const Filters = mongoose.model('filters', schema1)

const User = mongoose.model("users",schema2)

app.get('/', async (req,res)=>{
    const filters = await Filters.find({}).lean()
    res.json(filters)
})

app.post('/', async (req, res)=>{

    var prediction
    const labels = await req.body
    console.log(labels)
    const child = spawn('python',['index3.py', labels])

    child.stdout.on('data',(data)=>{
        prediction = data.toString()
        console.log(prediction)
        res.send(prediction)
    })

    child.stderr.on('data',(data)=>{
        console.log(`error : ${data}`)
    })


    // console.log(prediction)

})

app.post('/login', async(req,res)=>{
    console.log(req.body)
    const username = req.body.username
    const password = req.body.password
    const result = await User.findOne({username:username, password:password})
    console.log(result)
    res.status(200).json(result)
})

app.post('/signUp',(req,res) => {
    const u = req.body
    const newUser=User(u)
    try{
        newUser.save()
    }
    catch(err){
        console.log(err)
    }
    
})

app.listen(4000,console.log("Live on 4000"))