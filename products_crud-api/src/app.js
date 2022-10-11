const express = require('express');
const initModels = require('./models/initModels');

const db = require('./utils/database')
const envvariables=require('./config')
const productsRouter=require('./products/products.router')

const app = express()

const port = envvariables.port

db.authenticate()
    .then(() => {
        console.log('db autenticated')
    })
    .catch((err) => console.log(err))


db.sync()
    .then(() => {
        console.log('db synced')
    })
    .catch((err) => console.log(err))

initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'OK!' })
})

app.use('/products',productsRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
