const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true,
       trim: true,
       lowercase: true
     },
    email: {
       type: String,
       required: true,
       unique: true,  m 
    },
    password: {
        type: String,
        required: true
    }
})
module.exports = User;
