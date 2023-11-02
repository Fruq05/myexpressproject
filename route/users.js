const express = require('express')
const Users = require('../models/users')

const router = express.Router()

//get all users 
router.get('/users', (req, res) => {
    Users.find()
    .then((car) => res.json(car))
    .catch(() => {
        res.status(500).json({
            message: error.message
        })
    })
})


//get a single user
// router.get('/users/:id', (request, response) => {
//     const newUsers = new Users({
//         name: request.body.name,
//         email: request.body.email,
//         password: request.body.password
//     })

//     newUsers.save()
//     .then((nc) => {
//         response.status(201).json(nce)
//     })
//     .catch((error) => {
//         response.status(404).json({
//             message: error.message
//         })
//     })
// })

//add a new user
router.post('/users', (request, response) => {
    const newUsers = new Users({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    })

    newUsers.save()
    .then((nce) => {
        response.status(201).json(nce)
    })
    .catch((error) => {
        response.status(404).json({
            message: error.message
        })
    })
})

//update a user
router.put('/users/:id', (request, response) => {
    response.status(200)
    response.send(`user updated`)
})

router.delete('/users/:id', (request, response) => {
    response.status(200)
    response.send()
})







module.exports = router