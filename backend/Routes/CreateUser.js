const express = require('express')
const user = require('../models/User')
const router = express.Router()
const { query, body, validationResult } = require('express-validator');

const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')
const jwtSecrete = 'MyNameIsHimeshTh:;akerya/*$%#&867Helod'

router.post('/createuser', [
    body('email').isEmail(),
    body('name').isLength({ min: 3 }),
    body('password').isLength({ min: 3 })
]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const salt = await bcrypt.genSalt(10)
        let securePassword = await bcrypt.hash(req.body.password, salt)
        try {

            await user.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ sucesss: true })
        } catch (err) {
            console.log(err)
            res.json({ sucesss: false })
        }
    })


router.post('/loginuser',
    [
        body('email').isEmail(),
        body('password').isLength({ min: 3 })
    ]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        let email = req.body.email;
        try {

            let userData = await user.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: 'Try loging with correct credentiails' })
            }
            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
            if (!(pwdCompare)) {
                return res.status(400).json({ errors: 'Try loging with correct credentiails' })

            }
            const data = {
                user:{
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data, jwtSecrete)
            return res.json({ sucesss: true, authToken:authToken })

        } catch (err) {
            console.log(err)
        }
    })
module.exports = router