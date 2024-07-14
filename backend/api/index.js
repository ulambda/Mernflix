require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const testRoutes = require('./routes/test.js')
const app = express() //express app

//middleware
app.use(express.json())
app.use((request, response, next)=>{
    console.log(request.path, request.method)
    next()
})

//routes
app.get('/', (request, response) => {response.json('welcome to the api.')})
app.use('/test', testRoutes)



//connect to mongodb
mongoose.connect(process.env.URI)
.then(()=>{ app.listen(process.env.PORT, () => {console.log('listening on port ' + process.env.PORT)})})
.catch((error)=>{console.log(error)})


