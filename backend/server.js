const express = require('express')
const cors = require('cors')
const port = 5000
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));



const database_name = 'registerDB'
const uri = `mongodb://localhost:27017/${database_name}`

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(response => {
        console.log('MongoDB database connection established successfully')})
    .catch(err => {
        console.log(err)} )

const RegisterRouter = require('./routes/Register')

app.use('/user', RegisterRouter)


app.listen(port, ()=> {
    console.log(`The server is running on ${port}`)
})