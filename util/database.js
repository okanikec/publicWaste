const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let db

const mongoConnect = () => { 
    MongoClient.connect('mongodb+srv://htmlcss2:*******@cluster0.allck.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected!')
        db = client.db()
        console.log(db)
        //callback()
    }).catch(err => {
        console.log(err)
        throw err
    })

}

const getDb = () => {
    if(db) {
        return db
    }
    throw 'No database found!'
}

// exports.mongoConnect = mongoConnect
// exports.getDb = getDb
module.exports = getDb
module.exports = mongoConnect



