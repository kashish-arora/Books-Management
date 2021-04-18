const express=require('express')
const router=express.Router()
const Book=require('../models/book')

router.get('/',async(req,res)=> {
    try {
        const books=await Book.find()
        res.json(books)
    }catch(err) {
        res.send(err)
    }
})

router.get('/:id',async(req,res)=> {
    try {
        const book=await Book.findById(req.params.id)
        res.json(book)
    }catch(err) {
        res.send(err)
    }
})

router.delete('/:id',async(req,res)=> {
    try {
        const book=await Book.findById(req.params.id)
        const b1=await book.remove()
        res.send(book)
    }catch(err) {
        res.send(err)
    }
})

router.post('/',async(req,res) => {
    const book=new Book({
        name: req.body.name,
        code: req.body.code,
        issued: req.body.issued
    })

    try{
        const b1=await book.save()
        res.json(b1)
    }catch(err){
        res.send(err)
    }
})

router.patch('/',async(req,res) => {
    try {
        const book=await Book.findById(req.params.id)
        book.issued=req.body.issued
        book.name=req.body.name
        book.code=req.body.code
        const b1=await book.remove()
        res.send(book)
    }catch(err) {
        res.send(err)
    }
})

module.exports=router