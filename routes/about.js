const path = require('path')

const express = require('express')

const adminData = require('./admin')

const router = express.Router()

router.get('/about', (req, res, next)=> {
    res.render('about', {
        pageTitle: 'About',
        path: '/about',
        activeAbout: true,
        aboutCSS: true
    })
})

module.exports = router