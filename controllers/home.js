// need to require mongoose schema in models folder so that controllers can talk to model
const TodoTask = require('../models/todotask')

// take get method from server.js give it the method name getIndex
// database TodoTask model find everything render our ejs with everything in it
module.exports = {
    getIndex : async (req, res) => {
        try {
            const tasks = await
            TodoTask.find()
                res.render("index.ejs", { todoTasks: tasks });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },
    createTask : async (req, res) => {
        const todoTask = new TodoTask(
            {
                title: req.body.title,
                content: req.body.content
            });
        try {
            await todoTask.save();
            console.log(todoTask)
            res.redirect("/");
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    }
}