const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require('./models/userSchema');

app.use(express.json());

app.use(require("./router/auth"));

const PORT = process.env.PORT;

// //middleware
// const middleware = (req,res,next) =>{
//     console.log(`Hello middleware`);
//     next();
// }

app.get("/", (req, res) => {
	res.send(`Hello World from the server`);
});

// app.get("/about", middleware, (req, res) => {
// 	console.log(`Hello about`);
// 	res.send(`Hello about from the server`);
// });

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
