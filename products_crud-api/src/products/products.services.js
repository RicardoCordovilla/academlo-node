const { response } = require('express')
const productsControllers = require('./products.controllers')

const getAllProducts = (req, res) => {
    productsControllers.getAllProducts()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const postProduct = (req, res) => {
    const data = req.body
    if (data.name && data.category && data.price && data.isAvailable) {
        productsControllers.createProduct(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => {
                res.status(400).json({ message: err.message })
            })
    }
    else res.status(400).json({ message: 'Missing data' })
}

const getProductByName = (req, res) => {
    const name = req.params.name
    productsControllers.getProductByName(name)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => res.status(404).json({ message: err.message }))

}


const getProductByCategory = (req, res) => {
    const cat = req.params.cat
    productsControllers.getProductByCategory(cat)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => res.status(404).json({ message: err.message }))

}



const getProductById = (req, res) => {
    const id = req.params.id

    productsControllers.getProductById(id)
        .then(data => {
            if (data)
                res.status(200).json(data)
            else
                res.status(400).json({ message: `Invalid id: '${id}'` })
        })
        .catch(err => res.status(404).json({ message: err.message }))
    // el err.message lo genera squelize
}
// unpdate por campos parcial
const patchProduct = (req, res) => {
    const id = req.params.id
    const { name,category,price,isAvailable } = req.body

    productsControllers.editProduct(id, {  name,category,price,isAvailable })
        .then((response) => {
            if (response[0])
                res.status(200).json({
                    message: `Product with id: ${id}, edited succesfully!`,
                    // esto no es necesario
                    data: {
                        "id": id,
                        "name": name,
                        "category": category,
                        "price": price,
                        "isAvailable": isAvailable
                    }
                })
            else
                res.status(400).json({ message: `Invalid id: '${id}'` })
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

const putProduct = (req, res) => {
    const id = req.params.id
    const { name,category,price,isAvailable } = req.body
    // este if es para validar los datos que vengan todos los campos
    if (name && category && price && isAvailable) {
        productsControllers.editProduct(id, { name,category,price,isAvailable })
            .then((response) => {
                // si hay un response es que sí exite un id
                if (response[0]) {
                    res.status(200).json({ message: `Product with ID: ${id}, edited succesfully` })
                }
                else {
                    res.status(404).json({ message: 'Invalid ID' })
                }
            })
            .catch(err => { res.status(400).json({ message: err.message }) })
    }

    else {
        res.status(400).json({
            message: 'Missing data',
            fields: {
                name: 'string',
                category: 'string',
                price: 'integer',
                isAvailable: 'boolean'
            }
        })
    }

}

const deleteProduct = (req, res) => {
    const id = req.params.id
    productsControllers.deleteProduct(id)
        .then((response => {
            res.status(200).json(response)
        }))
        .catch(err => res.status(400).json({ message: err }))
}

module.exports = {
    getAllProducts,
    getProductById,
    postProduct,
    getProductByName,
    getProductByCategory,
    patchProduct,
    putProduct,
    deleteProduct
}
