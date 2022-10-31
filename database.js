const {MongoClient} = require('mongodb')
let databaseConnection

const connectToDatabase = (callback) => {
    const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yrj8epb.mongodb.net/bookstore?retryWrites=true&w=majority`
    const local = 'mongodb://localhost:27017/bookstore'
    MongoClient.connect(url)
    .then((client) => {
        databaseConnection = client.db()
        return callback()
    })
    .catch((error) => {
        console.log(`DATABASE CONNECTION ERROR: ${error}`)
        return callback(error)
    })
}

const getDatabase = () => databaseConnection


module.exports = { connectToDatabase, getDatabase }