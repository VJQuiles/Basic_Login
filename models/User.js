const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must match an email address!"]
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    }
})

//Pre-save middleware to create a password
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10
        this.password = await bcrypt.hash(this.password, saltRounds)
        console.log(this.password)
    }
    next()
})

//Password check
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

//checks schema validators in a global fashion(any time there is an update to the data, this auto runs the validators)
mongoose.set('runValidators', true)

const User = mongoose.model("User", userSchema)

module.exports = User