const express =  require('express')
const {ObjectId} = require('mongodb')
const { connectToDatabase, getDatabase } = require('./database.js')

// App initialization and Middleware
const app = express()
app.use(express.json())


//Database Connection
let db
connectToDatabase((error) => {
    if(!error){
        const port = process.env.PORT || 3001
        app.listen(port, () => {
            console.log(`Listening on ${port}`)
        })

        db = getDatabase()
    }
})

// ROUTES

//ROOT
app.get('/', (req, res) => {
    res.json({status: 'Running'})
})

// Get all books
app.get('/books', (req, res) => {
    const page = req.query.page || 0 
    const limit = parseInt(req.query.limit) || 3

    let books = []
    db.collection('books')
    .find()
    .sort({author: 1})
    .skip(page * limit)
    .limit(limit)
    .forEach(book => books.push(book))
    .then(() => {
        res.status(200).json({data: books})
    })
    .catch(error => {
        res.status(500).json({error: "Could not fetch documents"})
    }) 
})

// Get book by id
app.get('/books/:id', (req, res) =>{
    const {id} = req.params

    if(ObjectId.isValid(id)){
        db.collection('books')
            .findOne({_id: ObjectId(id)})
            .then(doc => {
                res.status(200).json({data: doc})
            })
            .catch(error => {
                res.status(500).json({error: "Could not find book"})
            }) 
    } else {
        res.status(500).json({error: "Invalid ID"})
    }
})

// Create book
app.post('/books', (req, res) => {
    const book = req.body
    db.collection('books')
    .insertOne(book)
    .then(result =>{
        res.status(201).json(result)
    })
    .catch(error =>{
        res.status(500).json({error: "Could not add book"})
    }) 
})

// Delete book
app.delete('/books/:id', (req, res) => {
    const {id} = req.params

    if(ObjectId.isValid(id)){
        db.collection('books')
        .deleteOne({_id: ObjectId(id)})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json({error: 'Could not delete book'})
        })

    } else {
        res.status(500).json({error: "Invalid ID"})
    }
})

// Update fields of a book
app.patch('/books/:id', (req, res) => {
    const {id} = req.params
    const updates = req.body

    if(ObjectId.isValid(id)){
        db.collection('books')
        .updateOne({_id: ObjectId(id)}, {$set: updates})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json({error: 'Could not update book'})
        })
    } else {
        res.status(500).json({error: "Invalid ID"})
    }
})