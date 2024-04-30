const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:Number
})

const usersModel = mongoose.model("users",usersSchema);



// const user1 = new usersModel({
//     name: "Sparsh Chauhan",
//     email:"123@gmail.com",
//     phone: 123456789
// });

// user1.save().then((res)=>{
//     console.log(res)
// })


// const user2 = new usersModel({
//     name: "Raj Chauhan",
//     email:"456@gmail.com",
//     phone: 123456789
// });

// user2.save().then((res)=>{
//     console.log(res)
// })


// const user3 = new usersModel({
//     name: "Kajal",
//     email:"789@gmail.com",
//     phone: 123456789
// });

// user3.save().then((res)=>{
//     console.log(res)
// })

// const user4 = new usersModel({
//     name: "Kajla",
//     email:"111@gmail.com",
//     phone: 123456789
// });

// user4.save().then((res)=>{
//     console.log(res)
// })

// const user5 = new usersModel({
//     name: "Shivam",
//     email:"222@gmail.com",
//     phone: 123456789
// });

// user5.save().then((res)=>{
//     console.log(res)
// })


module.exports = usersModel;