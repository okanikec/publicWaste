const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const bodyParser = require('body-parser')
const errorController = require('./controllers/error')
const mongoConnect = require('./util/database')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000



const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const aboutRoutes = require('./routes/about')


app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.json())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.urlencoded({ extended: false }))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(aboutRoutes)
app.use(errorController.get404)



server.listen(port, () => {
    console.log(`server is up on port ${port}!`)
})

mongoConnect()    
