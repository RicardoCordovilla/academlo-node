const Products = require('../models/products.models')
const uuid = require('uuid')


const getAllProducts = async () => {
    const data = await Products.findAll() //traer todos los productos 
    // SELECT * from products;
    return data
}

const getProductById= async(id)=>{
    const data=await Products.findOne({
        where:{
            id:id,
        }
    })
    return data
}

const getProductByName= async(name)=>{
    const data=await Products.findAll({
        where:{
            name
        }
        // select * from products where name=name
    })
    return data
}

const getProductByCategory= async(category)=>{
    const data=await Products.findAll({
        where:{
            category:category
        }
        // select * from products where category=category
    })
    return data
}

const createProduct = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable:data.isAvailable
    })
    return newProduct

}


const editProduct = async (id, data) => {
    const response = await Products.update(data, {
      where: {
        id:id,
      },
    })
    return response
  }


  const deleteProduct=async(id)=>{
    const data=await Products.destroy({
        where:{
            id
        }
    })
  }



module.exports={
    getAllProducts,
    getProductById,
    createProduct,
    getProductByName,
    getProductByCategory,
    editProduct,
    deleteProduct
    
}