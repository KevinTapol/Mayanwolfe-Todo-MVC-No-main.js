This is a full stack CRUD app that I commented out server.js of what was going to be abstracted and refactored to mvc.
What is unique about this is there is no main.js in public folders. 
For this reason, we had to use mongoose methods to take a POST in routes folder file edit.js and create a PUT method to update an object in the controllers folder file edit.js

*To get this working for you, fork or clone the repo then create a dotenv file .env in the config folder. Put your connection string to your database with the variable name DB_CONNECTION and type npm install in the terminal.

You can name your database in mongodb in the .env file aswell. I found this handy so I can identify it in mongodb easily.

EX DB_CONNECTION = mongodb+srv://username:password@cluster.randomcharacters.mongodb.net/NameYourDataBaseHere?retryWrites=true&w=majority

Next in the terminal run npm install to install all the dependacies in package.json.
If the packages are out of date run npm audit fix
