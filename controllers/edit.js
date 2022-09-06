// need to require mongoose schema in models folder so that controllers can talk to model
const TodoTask = require('../models/todotask')

module.exports = {
    getEdit: (req, res) => {
        // get item by id and assign it a variable
        const id = req.params.id;
        // mongoose method find all the tasks
        TodoTask.find({}, (err, tasks) => {
            // render all the tasks AND the task you are getting by id
            res.render("edit.ejs", { todoTasks: tasks, idTask: id });
        });
    },
    deleteTask: (req, res) => {
        // get item by id and assign it a variable
        const id = req.params.id;
        // mongoose method get task by id and remove it then redirecting to home page
        TodoTask.findByIdAndRemove(id, err => {
            if (err) return res.send(500, err);
            res.redirect("/");
        });
    },
    updateTask: (req, res) => {
        // get item by id and assign it a variable
        const id = req.params.id;
        // mongoose method that targets by id and updates that by the its id
        TodoTask.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                content: req.body.content
            },

            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/");
            });
    }
}