const productModel = require('../models/productsModel.js');

const getAllProducts = async (req, res) => {
    const {sort='price',page=1,pageSize=3,fields="-info",...q} = req.query;
    // console.log(q) 
    try {
        // const data = await productModel.find(q);
        let query = productModel.find().find(q);

        // query  = query.sort('price')  // '-price' for descending order
        // query  = query.sort('price title')  // if price is equal the sort according to title
        
        query  = query.sort(sort.split(',').join(' '));

        const skip = pageSize * (page-1);
        const  limit = pageSize;
        query = query.skip(skip).limit(limit);

        // query = query.select('title');
        query = query.select(fields.split(',').join(' '));

        const data = await query;
        // console.log(data);

        const totalResults = await productModel.countDocuments()


        res.send({
            status: "success",
            results: data.length,
            totalResults: totalResults,
            pageSize: pageSize,
            page: page,
            data: {
                product: data
            }
        })
    }
    catch (err) {
        console.log(err);
        res.send({
            status: "fail",
            data: {
                error: err
            }
        })
    }
}

const addProducts = async (req, res) => {
    try {

        const {_id,...reqBody} = req.body
        const data = await productModel.create(reqBody)
        res.json({
            status: "success",
            results: 1,
            ans: {
                products: data
            }
        })
    }
    catch (err) {
        res.status(403);
        res.json({
            status: "fail",
            // message: JSON.stringify(err)
            message: err.message
        })
    }
}

const replaceProduct = async(req,res)=>{
    try{
        const reqId = req.params.id;
        // const data = {...req.body,reqId};
        const data = {...req.body};
        const ans = await productModel.findOneAndReplace( { _id : reqId } , { data });

        res.json({
            status:"success",
            results:1,
            message:"Changed"
        })
    }
    catch(err){
        res.json({
            status:"failes",
            message:err
        })
    }
}

const updateProducts = async(req,res)=>{
    try{
        const {_id,...data} = req.body
    const ans = await productModel.findOneAndUpdate( {_id : req.params.id} , data);
    res.json({
        status:"success",
        results:1,
        message:ans
    })
    }
    catch(err){
        res.json({
            status:"failed",
            results:1,
            message:err
        })
    }
}

const deleteProducts = async(req,res)=>{
    try{
        // let  = req.params;
        const ans = await productModel.deleteMany(
                            // {"price":req.params.id, "title":req.params.title} ||  {"title":req.params.title} );
                            {"title":req.params.title} ||  {"price":req.params.id, "title":req.params.title});
                            res.json({
                                status:"success",
                                results:1,
                                message:ans
                            })
    }
    catch(err){
        res.json({
            status:"failed",
            results:1,
            message:err
        })
    }
}



module.exports = {
    getAllProducts,
    addProducts,
    replaceProduct,
    updateProducts,
    deleteProducts
}