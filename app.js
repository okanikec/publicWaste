const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const bodyParser = require('body-parser')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const aboutRoutes = require('./routes/about')


app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes)
app.use(shopRoutes)
app.use(aboutRoutes)



app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page No Dey'})
})



server.listen(port, () => {
    console.log(`server is up on port ${port}!`)
})

