const express =require('express')
const router = express.Router()
const {loginrequired} = require('../config/JWT')

router.get('/',(req, res)=>{
    res.render('index')
})

router.get('/dashboard',loginrequired,(req, res)=>{
    res.render('dashboard')
})

router.get('/logout',(req, res)=>{
    res.cookie('access-token',"",{maxAge: 1})
    res.redirect('/user/login')
})

module.exports = router