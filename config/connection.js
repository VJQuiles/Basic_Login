require('dotenv').config()
const mongoose = require('mongoose')

const uri = process.env.MONGO_URI

const connect = () => {
    mongoose.connect(uri)
        .then(() => console.log(`DB Connection Successful`))
        .catch((err) => {
            console.error("DB Connection Error:", err)
            //if an error occurs, server is killed 
            process.exit(1)
        })

    //this triggers during an error while connectino is made and ongoing
    mongoose.connection.on('error', error => {
        console.error("Error occured during connection", error.message)
    })
}

module.exports = connect