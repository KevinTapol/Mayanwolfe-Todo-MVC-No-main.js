//npm install express mongoose ejs dotenv
//npm install --save-dev nodemon

//"start": "nodemon server.js"

//Declare Variables
const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
//go into folder config to database.js and take the connectDB function
const connectDB = require("./config/database");
//go into folder models to TodoTask.js to grab the document blueprint 
// const TodoTask = require("./models/TodoTask");
//and go to routes folder to home.js
const homeRoutes = require('./routes/home')
//go to routes folder to edit.js
const editRoutes = require('./routes/edit')
// .env file at root
// require('dotenv').config() 
// env file in config folder
require('dotenv').config({path: './config/.env'})

// this function call replaces the connect to MongoDB
connectDB()

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

// Set Routes
// listen on home url from user and redirect to homeRoutes
app.use('/', homeRoutes)
// url from user /edit, redirect to editRoutes
app.use('/edit', editRoutes)



//Connect to MongoDB replaced by async fn in database.js in config folder
// mongoose.connect(
//     process.env.DB_CONNECTION, 
//     { useNewUrlParser: true }, 
//     () => {console.log("Connected to db!");}
// )

// Copy this method give it the method name getIndex and put it in controllers folder home.js
// GET METHOD
// app.get("/", async (req, res) => {
//     try {
//         TodoTask.find({}, (err, tasks) => {
//             res.render("index.ejs", { todoTasks: tasks });
//         });
//     } catch (err) {
//         if (err) return res.status(500).send(err);
//     }
// });

// Copy this method give it the method name createTask and put it in controllers folder home.js
//POST METHOD
// app.post('/', async (req, res) => {
//     const todoTask = new TodoTask(
//         {
//             title: req.body.title,
//             content: req.body.content
//         });
//     try {
//         await todoTask.save();
//         console.log(todoTask)
//         res.redirect("/");
//     } catch (err) {
//         if (err) return res.status(500).send(err);
//         res.redirect("/");
//     }
// });

// Copy this method rename it getEdit and move it into edit.js file in controllers folder
//UPDATE METHOD 
// app
//     .route("/edit/:id")
//     .get((req, res) => {
//         const id = req.params.id;
//         TodoTask.find({}, (err, tasks) => {
//             res.render("edit.ejs", { todoTasks: tasks, idTask: id });
//         });
//     })
// copy this method and rename it updateTask in file edit.js inside folder controllers
// .post((req, res) => {
//     const id = req.params.id;
//     TodoTask.findByIdAndUpdate(
//         id,
//         {
//             title: req.body.title,
//             content: req.body.content
//         },

//         err => {
//             if (err) return res.status(500).send(err);
//             res.redirect("/");
//         });
// });
// Copy this method rename it to deleteTask and move it to edit.js file in controllers folder
//DELETE Method
// app
//     .route("/remove/:id")
//     .get((req, res) => {
//         const id = req.params.id;
//         TodoTask.findByIdAndRemove(id, err => {
//             if (err) return res.send(500, err);
//             res.redirect("/");
//         });
//     });

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));