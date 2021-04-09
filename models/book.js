const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    issued: {
        type: Boolean,
        redquired: true,
        default: false
    }
})




module.exports=mongoose.model('Book',bookSchema)