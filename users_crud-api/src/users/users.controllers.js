const uuid = require('uuid')

const userDB = [
    {
        id: '13d87ac7-371e-44d8-bc45-67d1016234b8',
        first_name: 'Ricardo',
        last_name: 'Cordovilla',
        email: 'ricardo@correo.com',
        password: 'R1c4rdo',
        birthday: '1990/02/02'
    },
    {
        id: '67370f78-3a5e-4654-b0a7-29f33f7a746f',
        first_name: 'Jose',
        last_name: 'Vasquez',
        email: 'jose1@correo.com',
        password: 'J0s3123',
        birthday: '1992/03/03'
    },
    {
        id: '8db51d52-62a7-4fc3-b47f-87c07cc71060',
        first_name: 'Pedro',
        last_name: 'Fuentes',
        email: 'pfuentes@correo.com',
        password: 'ppff992',
        birthday: '1993/04/04'
    },
    {
        id: 'd7304606-f96a-4e85-84b5-eef67f10f7d5',
        first_name: 'Willy',
        last_name: 'Mendoza',
        email: 'willywonka@correo.com',
        password: 'will1nson',
        birthday: '1994/05/05'
    },
]

const getAllUsers = () => userDB

const getUserById=(id)=>{
    // en este caso no hacemos ningún parseo porque id es string
    const data=userDB.find(user=>user.id==id)
    return data
}

const createUser =(user)=>{
    user.id = uuid.v4()
    userDB.push(user)
    return user
}

module.exports={
    getAllUsers,getUserById,createUser
}

