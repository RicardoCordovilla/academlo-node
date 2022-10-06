const express= require('express')

const router=require('express').Router()

const usersServices=require('./users.services')

router.get('/users',usersServices.getUsers)
router.get('/users/:id',usersServices.getUser)
router.post('/users',usersServices.newUser)

module.exports=router
