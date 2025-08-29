const User = require('../models/User')
const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET
const expiration = '1h'

async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json({
            success: `${newUser.username, newUser.email} profile successfully created`
        })

        const payload = {
            _id: newUser.id,
            username: newUser.username,
            email: newUser.email,
        }

        jwt.sign(
            { data: payload },
            secret,
            { expiresIn: expiration },
            (error, token) => {
                if (error) throw error
                res.status(200).json({ success: `User creation successful. ${token}` })
            }
        )
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

        const payload = {
            _id: user.id,
            username: user.username,
            email: user.email,
        }

        // Token creation done slightly differently, where the message is generated in a call back funciton denoted in the the function signature rather than using the commented out line 50 to give us feedback of creation
        jwt.sign(
            { data: payload },
            secret,
            { expiresIn: expiration },
            (error, token) => {
                if (error) throw error
                res.status(200).json({ success: `Login successful. ${token}` })
            }
        )

        // res.status(200).json({ sucess: "Successful Login" })
        // return res.json({ sucess: "Successful Login", token })
    } catch (error) {
        console.error(error)
        res.status(400).json({ "An error occurred": error.message })
    }
}

async function getUser(req, res) {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Please log in." })
        }
        const selectedUser = await User.findById(req.user._id).select('-password')
        res.status(200).json(selectedUser)
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createUser,
    loginUser,
    getUser
}