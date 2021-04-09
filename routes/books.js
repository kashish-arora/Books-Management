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
        res.delete(book)
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

module.exports=router