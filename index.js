require('dotenv').config()

const PORT = 3030;
const express = require('express');
const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb+srv://eykyu:flos-login@flos.rdf2a8q.mongodb.net/?retryWrites=true&w=majority'

const app = express();
app.use(express.json());

//connect our DB
mongoose.connect(DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection

//error handling on start.
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.listen(3000, () => console.log('Server is running on port' + PORT));
