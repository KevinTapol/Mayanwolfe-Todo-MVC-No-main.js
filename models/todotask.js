// Blueprint for objects
const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
title: {
    type: String,
    required: true
},
content: {
    type: String,
    required: true
},
// auto gen current date and not require 
date: {
    type: Date,
    default: Date.now
}
})
// specify database name in DB_CONNECTION after mongodb.net/DatabaseName
// mongoose.model('Document/ObjectName', BluePrintModelSchema, 'CollectionName')
module.exports = mongoose.model('TodoTask',todoTaskSchema,'tasks');