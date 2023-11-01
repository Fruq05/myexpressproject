// const express = require('express')

// const app = express()

// const port = 9090


// //introducing routes to server
// const userRouter = require('./route/users')

// //using user routes
// app.use(userRouter)

// app.listen(port, () => console.log(`server started successfully`))



const express = require ('express')

const app = express()

const port = 9090

const productRouter = require('./route/product')
app.use(productRouter)

app.listen(port, () => console.log(`server started successfully`))