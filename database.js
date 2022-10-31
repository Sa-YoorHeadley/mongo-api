const {MongoClient} = require('mongodb')
let databaseConnection

const connectToDatabase = (callback) => {
    const url = process.env.DB_URL || 'mongodb://localhost:27017/bookstore'
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