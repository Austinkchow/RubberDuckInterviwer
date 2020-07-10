// imports
const router = require('express').Router()
const ctrl = require('../controllers')

// routes
router.post('/register', ctrl.users.register)
router.post('/login', ctrl.users.login)
router.delete('/logout', ctrl.users.logout)

// exports
module.exports = router