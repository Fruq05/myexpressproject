const express = require('express')

const app = express()

const mongoose = require('mongoose')

const port = 6090

//connecting to database
mongoose.connect('mongodb+srv://okunlolafaruq:pass123@faruq.hvhl6te.mongodb.net/', )
const database = mongoose.connection
database.on('error', (error) => console.error(error))
database.once('open', () => console.log('connected to database successfully'))


app.get('/', (request, response) => {
    respond.status(200)
    respond.send('welcome to home page')
})

//configuring server
app.use(express.json())

//introducing routes to server
const userRouter = require('./route/users')

//using user routes
app.use(userRouter)

app.listen(port, () => console.log(`server started successfully at http://localhost:${port}`))



// const express = require ('express')

// const app = express()

// const port = 6020

// const productRouter = require('./route/product')
// app.use(productRouter)

// app.listen(port, () => console.log(`server started successfully at http://localhost:${port}`))