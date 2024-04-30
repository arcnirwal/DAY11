const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    review:String,
    rating:Number,
    productId: {
        type:String,
    },
    userId: {
        type:String,
    },
    createdAt : {
        type : Date,
        default : new Date()
    },
    updatedAt : {
        type : Date,
        default : new Date()
    }
})

const reviewsModel = mongoose.model('reviews',reviewSchema)

module.exports = reviewsModel