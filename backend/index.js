const express = require('express')
const cors = require('cors')
const app = express();
const port = 4000;
//Mongo db Connection
const mongoDB = require('./db')
mongoDB()

// Middleware to parse json request
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hello world')
})
app.use(express.json())
app.use('/api', require('./Routes/CreateUser'))
app.use('/api', require('./Routes/DisplayData'))
app.use('/api', require('./Routes/OrderData'))

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`)
})