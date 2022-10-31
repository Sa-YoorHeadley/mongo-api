const {MongoClient} = require('mongodb')
let databaseConnection

const connectToDatabase = (callback) => {
    MongoClient.connect('mongodb://localhost:27017/bookstore')
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