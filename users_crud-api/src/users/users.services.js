const {
    getAllUsers,
    getUserById,
    createUser
} = require('./uses.controllers')

const getUsers = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
}

const getUser = (req, res) => {
    const id = req.params.id
    const data = getUserById(id)
    if (data)
        res.status(200).json(data)
    else
        res.status(404).json({ id: id, message: `${id} Invalid` })
}

const newUser = (req, res) => {
    const  params  = req.body
    if (params) {
        const data = createUser(first_name)
        res.status(201).json(data)
    }
    else {
        res.status(400).json({ message: 'Incomplete fields' })
    }
}

module.exports = {
    getUsers, getUser, newUser
}