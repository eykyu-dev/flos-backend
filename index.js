require('dotenv').config()

const PORT = 3000;
const express = require('express');
const mongoose = require('mongoose');
const DATABASE_URL = ''

const app = express();
app.use(express.json());

//connect our DB
mongoose.connect(DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection

//error handling on start.
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to Database'))

const userRouter = require("./routes/user-router")
app.use('/users', userRouter)
 

app.listen(3000, () => console.log('Server is running on port' + PORT));

