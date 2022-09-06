This is a full stack CRUD app that I commented out server.js of what was going to be abstracted and refactored to mvc.
What is unique about this is there is no main.js in public folders. 
For this reason, we had to use mongoose methods to take a POST in routes folder file edit.js and create a PUT method to update an object in the controllers folder file edit.js

*To get this working for you, fork or clone the repo then create a dotenv file .env in the config folder. Put your connection string to your database with the variable name DB_CONNECTION and type npm install in the terminal. If dependencies are out of date, type npm audit fix in the terminal.

You can name your database in mongodb in the .env file aswell. I found this handy so I can identify it in mongodb easily.

EX DB_CONNECTION = mongodb+srv://username:password@cluster.randomcharacters.mongodb.net/NameYourDataBaseHere?retryWrites=true&w=majority

This was a follow along with Mayanwolfe on twitch to learn mvc. https://www.twitch.tv/mayanwolfe

The exact video link can be found here -> https://www.twitch.tv/videos/1564975415

If you get confused I commented EVERYTHING!!! In my code I left the original server.js commented out instead of deleting it. I also left comments of where their respective counterparts go to and how they were changed to fit MVC.
