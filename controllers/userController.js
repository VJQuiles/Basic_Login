const User = require('../models/User')

async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json({
            success: `${newUser} profile successfully created`
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({ "An error occured:": error })
    }
}

async function loginUser(req, res) {

}

module.exports = {
    createUser,
    loginUser,
}