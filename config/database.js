const mongoose = require('mongoose')

// create connection function
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.DB_CONNECTION
        )
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(err)
        process.exit(1)
    }
}

// export the function to call in server.js
module.exports = connectDB

// Connect to DB from original server.js
// mongoose.connect(
//     process.env.DB_CONNECTION, 
//     { useNewUrlParser: true }, 
//     () => {console.log("Connected to db!");}
// )