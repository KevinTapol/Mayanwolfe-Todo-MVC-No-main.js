//This route will handle editing and deleting items, as well as rendering the edit page itself.

const express = require('express')
// require a router
const router = express.Router()
// make sure my router can find the home.js file in controller folder
const editController = require('../controllers/edit')

// this is how we pass a changeable value in a route aka route path parameter NOT URL provided by user!!!
// get the id of the object to be changed, go to the edit.js in the controller folder and call the method getEdit
router.get('/:id', editController.getEdit)
// route remove by id, go to the edit.js file in controller folder and call the method deleteTask
router.get('/remove/:id', editController.deleteTask)
// since we have no client side js inorder to update we need to do a post request and mongoose will handle the update using the method findByIdAndUpdate()
// route by object id
router.post('/:id', editController.updateTask)

// export router
module.exports = router