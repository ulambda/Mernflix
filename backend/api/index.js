require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user.js')
const app = express() //express app

//middleware
app.use(express.json())
app.use((request, response, next)=>{
    console.log(request.path, request.method)
    next()
})

//routes
app.get('/', (req, res) => res.json('welcome to the api.'))
app.use('/api/user', userRoutes)



//connect to mongodb
mongoose.connect(process.env.URI)
.then(()=>{ app.listen(process.env.PORT, () => {console.log('api running on http://localhost:' + process.env.PORT)})})
.catch((error)=>{console.log(error)})


