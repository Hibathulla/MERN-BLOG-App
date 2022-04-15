const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//REGISTER

router.post("/register", async (req, res) => {

    const availUser = await User.findOne({username: req.body.username})
    try {
        if(availUser) {
            return res.status(400).json({msg: 'Email already exists'})
        }
            
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)

        const newUser = User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        });

        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
         res.status(500).json(err)
    }
})

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user) {
            return res.status(400).json("email doesnt exist. Please Register")
        }

        const validate = await bcrypt.compare(req.body.password, user.password)
        if(!validate) {
            return res.status(400).json("Wrong credentials")
        }

        const {password, ...others} = user._doc; //seperating password and other login credentials;

        res.status(200).json(others);

    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router;