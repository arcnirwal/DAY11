const reviewsController = require('../controllers/reviewsController.js');
const express = require('express');

const reviewsRouter = express.Router();

reviewsRouter.route('/:pId')
.get(reviewsController.getReviews)

module.exports = reviewsRouter