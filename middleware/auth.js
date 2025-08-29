require('dotenv').config()
const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET


function verifyUser(req, res, next) {
    try {
        let token = req.headers.authorization

        if (!token || !token.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'No token/incorrect format' })
        }

        token = token.split(' ').pop().trim()

        const decodedToken = jwt.verify(token, secret)

        req.user = decodedToken.data

        next()

        // can also use req.query.token
        // req.body?.token -> will come back undefined without the ? operator -> not always a body
    } catch (error) {
        console.error(error)
        res.status(401).json({ error: 'Bad token' })
    }
}

module.exports = verifyUser