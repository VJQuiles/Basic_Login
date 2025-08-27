const mongoose = require('mongoose')

const uri = process.env.MONGO_URI

const connect = () => {
    mongoose.connect(uri)
        .then(() => console.log(`DB Connection Successful`))
        .catch((err) => console.error(err))
}

module.exports = connect