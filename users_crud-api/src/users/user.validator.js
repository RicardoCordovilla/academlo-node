const userBaseModel = {
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    password: 'string',
    birthday: 'YYYY/MM/DD'
}
const validateModelUser = (user) => {
    if (!user) return false;
    return JSON.stringify(Object.keys(userBaseModel)) == JSON.stringify(Object.keys(user));
}

module.exports = {
    validateModelUser
}