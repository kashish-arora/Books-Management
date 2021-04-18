const express=require('express')
const mongoose=require('mongoose')
const url='mongodb+srv://kash:pass@cluster0.qrs7x.mongodb.net/BookDB?retryWrites=true&w=majority'

const app=express()

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',()=>{
    console.log('Connected to DB!')
})

app.use(express.json())

const bookRouter=require('./routes/books')
app.use('/books',bookRouter)

app.listen(9009,()=>{
    console.log('Server started')
})