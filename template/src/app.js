const useRouter=require('./users/users.router')

const db=require('./utils/database')

const authRouter=require('./auth/auth.router')

// Dependencias
const express = require('express')

// Configuraciones iniciales
const app = express()

// importacion de archivos
const { port } = require('./config')


db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })



app.use(express.json())

app.get('/',(req,res,next)=>{
    console.log('se está ejecutando un middlewhhere',req.method)
    next()
} ,(req, res) => {
    res.status(200).json({
        message: 'Ok!',
        users: `localhost:${port}/api/v1/users`
    })
})

app.use('/api/v1/users',useRouter)
app.use('/api/v1/auth',authRouter)


app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})