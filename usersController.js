const usersModel = require('../models/usersModels.js');

const getAllUsers = async(req,res)=>{
    const allUsers = await usersModel.find();
    res.send(allUsers)
}

module.exports = {
    getAllUsers
}