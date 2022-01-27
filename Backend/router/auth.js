const jwt = require("jsonwebtoken");
const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();
router.use(cookieParser());
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
	res.send(`Hello From Router.js`);
});

//USING PROMISES STORING DATA INTO DATABASE

// router.post('/register', (req,res) => {
//    const {name, email, phone, work, password, cpassword} = req.body;

//    if(!name || !email || !phone || !work || !password || !cpassword)
//    {
//        return res.status(422).json({error: "All fields are Required"});
//    }

//    User.findOne({email : email})
//    .then((userExist) =>{
//        if(userExist)
//        {
//         return res.status(422).json({error: "Email already exists"});
//        }

//        const user = new User({name, email, phone, work, password, cpassword});

//        user.save().then(() => {
//            res.status(201).json({message : "User Registered Successfully"});
//        }).catch((err) => res.status(500).json({error : 'Failed to register'}));
//    }).catch(err => {console.log(err); });

// })

//USING ASYNC/AWAIT STORING DATA INTO DATABASE

router.post("/register", async (req, res) => {
	const { name, email, phone, work, password, cpassword } = req.body;

	if (!name || !email || !phone || !work || !password || !cpassword) {
		return res.status(422).json({ error: "All fields are Required" });
	}

	try {
		const userExist = await User.findOne({ email: email });
		if (userExist) {
			return res.status(422).json({ error: "Email already exists" });
		} else if (password != cpassword) {
			return res.status(422).json({ error: "Passwords are not matching" });
		} else {
			const user = new User({ name, email, phone, work, password, cpassword });
			// pre wala will work.(passwor hashing - UserSchema)
			await user.save();

			res.status(201).json({ message: "User Registered Successfully" });
		}
	} catch (err) {
		console.log(err);
	}
});

//Signin functinality
router.post("/signin", async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ error: "Filled the data" });
		}

		const userLogin = await User.findOne({ email: email });

		if (userLogin) {
			const isMatch = await bcrypt.compare(password, userLogin.password);

			const token = await userLogin.generateAuthToken();
			console.log(token);

			res.cookie("jwtoken", token, {
				expires: new Date(Date.now() + 25892000000),
				httpOnly: true,
			});

			if (!isMatch) {
				res.status(400).json({ error: "Invalid Credentials" });
			} else {
				res.json({ message: "User Signin Successfully" });
			}
		} else {
			res.status(400).json({ error: "Invalid Credentials" });
		}
	} catch (err) {
		console.log(err);
	}
});

//About Page par data get karna

router.get("/about", authenticate, (req, res) => {
	console.log("About Page");
	res.send(req.rootUser);
});

module.exports = router;
