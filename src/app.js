const express = require('express')

// * Require DB module - ENABLE THIS BEFORE TO START
// require('./db/mongoose')

// * Require Routes here*
// const yourRoutes = require('./routes/template-route')

const app = express()

// // * Maintenance Mode
// app.use((req, res, next) => {
// 	res.status(503).send('Server is under mantenance!')
// })

app.use(express.json())

// * Use Routes here*
// app.use(yourRoutes)

module.exports = app
