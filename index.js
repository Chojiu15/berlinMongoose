const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3002 || process.env.PORT
require('dotenv').config()
const postRouter = require('./routes/Posts')

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser : true, useUnifiedTopology : true})

app.use(postRouter)

app.listen(port, console.log('connected'))