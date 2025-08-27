require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const connect = require('./config/connection')
const userRoute = require('./routes/userRoute')

connect()

app.use(express.json())

app.use('/api/users', userRoute)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})