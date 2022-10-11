const router = require('express').Router()

const productsServices=require('./products.services')


//? Este es el prefijo: /products
router.get('/',productsServices.getAllProducts) //? /products/
router.get('/:id',productsServices.getProductById) //? /products/:id
router.get('/n/:name',productsServices.getProductByName) 
router.get('/c/:cat',productsServices.getProductByCategory) 
router.post('/',productsServices.postProduct) //? /products/
router.patch('/:id',productsServices.patchProduct) //? /products/:id
router.put('/:id',productsServices.putProduct) //? /products/:id
router.delete('/:id',productsServices.deleteProduct) //? /products/:id





module.exports = router
