const express = require('express')
const router = new express.Router();
const User = require('../models/User')


//grab all users.

router.get('/', async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    }catch (err){
        res.status(500).json({message: err.message})
    }
})


router.get('/:id', grabUser, (req, res) => {
    res.json(res.user)
})

router.delete('/:id', grabUser, async (req, res) => {
    try{
        await res.user.remove()
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400);
    }
});

async function grabUser(req, res, next){
    let user;
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message: "No user exists."})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }
    res.user = user
    next();
}
module.exports = router;
