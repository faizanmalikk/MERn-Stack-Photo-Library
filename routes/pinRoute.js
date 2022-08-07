const express = require('express');
const { createPin, getAllpins, createsavePins, deletePin, createComments, pinDetails, deleteComment } = require('../controllers/pinsController');
const router = express.Router();
const { isAuthenticatedUser } = require('../middleware/auth');


router.route('/pin/create').post(isAuthenticatedUser , createPin)

router.route('/pins').get(isAuthenticatedUser , getAllpins)

router.route('/pins/:id').get(isAuthenticatedUser , pinDetails)

router.route('/pin/save').put(isAuthenticatedUser , createsavePins)

router.route('/pin/:id').delete(isAuthenticatedUser , deletePin)

router.route('/pin/comment').put(isAuthenticatedUser , createComments)

router.route('/comment/delete').delete(isAuthenticatedUser , deleteComment)


module.exports = router