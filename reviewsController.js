


const reviewsModel = require('../models/reviewsModel');

const getReviews = async(req,res)=>{
    
    try{
        const data = reviewsModel.find();
        res.send({
            status:"success",
            reviews:data
        })
    }
    catch(err){
        res.send({
            status:"failed",
            error: err
        })
    }
}





module.exports = {
    getReviews
}