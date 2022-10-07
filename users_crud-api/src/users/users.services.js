const {
    getAllUsers,
    getUserById,
    createUser
} = require('./users.controllers')

const {validateModelUser}=require('./user.validator')

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
    if (validateModelUser(req.body)) {
        const data = createUser(req.body);
        res.status(201).json(data);
    } else {
        res.status(400).json({ message: "Invalid fields" })
    }
}

module.exports = {
    getUsers, getUser, newUser
}