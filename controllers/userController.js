const User = require('../models/User')

async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json({
            success: `${newUser.username, newUser.email} profile successfully created`
        })
    } catch (error) {
        console.error(error)
        res.status(400).json({ "An error occured:": error })
    }
}

async function loginUser(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).json({ message: 'No no, Mr. Superman no here' })
        }
        const correctPassword = await user.isCorrectPassword(req.body.password)
        if (!correctPassword) {
            return res.status(400).json({ message: "Uh uh uh, that's not the magic email/word(s) uh uh uh " })
        }

        res.status(200).json({ sucess: "Successful Login" })
    } catch (error) {
        console.error(error)
        res.status(400).json({ "An error occurred": error.message })
    }
}

module.exports = {
    createUser,
    loginUser,
}