// Handles initial GET request for the homepage
// Handles POST method request for adding a new task on homepage

const express = require('express')
// require a router
const router = express.Router()
// make sure my router can find the home.js file in controller folder
const homeController = require('../controllers/home')

// from homepage url go to controller folder to home.js and get method .getIndex
router.get('/', homeController.getIndex)
// from homepage url go to controller folder to home.js and get method .createTask
router.post('/', homeController.createTask)



// export router
module.exports = router