// tasks [postMessage,get]
// tasks:id [get]

const express=require('express')
// const routerw =express.Router() es otra opción
// const {Router} = requiere('express')

const router = require('express').Router()

const taskServices=require('./tasks.services')


// taskServices.getTasks no se ejecuta porque es callback
router.get('/tasks',taskServices.getTasks)
router.get('/task/:id',taskServices.getTask)
router.post('/task',taskServices.newTask)


// esto es como export default
module.exports=router