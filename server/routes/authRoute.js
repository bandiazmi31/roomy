const userModel = require('../models/User');
const router = require('express').Router();

router.post('/login', (req, res) => {
    const {username, password, role} = req.body;
    userModel.findOne({username: username})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json("Login Success!")
            } else {
                res.json("Incorrect username or password!")
            }
        } else {
            res.json("user does not exist!")
        }
    })
})

router.post('/register', (req, res) => {
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

module.exports = router;