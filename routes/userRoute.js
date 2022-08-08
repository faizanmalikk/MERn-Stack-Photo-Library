const express = require('express');
const router = express.Router();
const { createUser, getLoggedInUserDetails, getAnyUserDeatils, logoutUser } = require('../controllers/userController');
const { isAuthenticatedUser } = require('../middleware/auth');


router.route('/create').post(createUser)

router.route('/user/:id').get(isAuthenticatedUser , getAnyUserDeatils )

router.route('/me').get(isAuthenticatedUser,getLoggedInUserDetails)

router.route('/logout').post(isAuthenticatedUser,logoutUser)

module.exports = router