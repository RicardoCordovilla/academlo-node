const router = require('express').Router()
const passport = require('passport')
const userServices = require('./users.services')


require('../middlewares/auth.middleware')(passport)

// rutas raiz
router.get('/',
    passport.authenticate('jwt', { session: false }),
    userServices.getAllUsers)


// ruta de informacion propia del usuario loggeado
// el orden de las rutas es importante para gestionar los parametros
router.route('/me')
    .get(
        passport.authenticate('jwt', { session: false }),
        userServices.getMyUser
    )
    .patch(
        passport.authenticate('jwt', { session: false }),
        userServices.patchMyUser
    )
    .delete(
        passport.authenticate('jwt', { session: false }),
        userServices.deleteMyUser
    )



// rutas dinamicas por ID
// router.get('/:id)
// router.patch('/:id)
// router.put('/:id)
// router.delete('/:id)

// /api/v1/users/:id
router.route('/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)





module.exports = router