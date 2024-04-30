const express = require('express')
const usersController = require('../controllers/usersController.js')

const usersRouter = express.Router();

usersRouter.route('/')
.get(usersController.getAllUsers)


module.exports = usersRouter