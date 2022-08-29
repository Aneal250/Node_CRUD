const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

//import Routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

//middleware These are functions that are run before the request is handled by the server.

app.get("/", (req, res) => {
	res.send("we are on home");
});

app.get("/post", (req, res) => {
	res.send("we are on post");
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION, () =>
	console.log("connected to db")
);

app.listen(3000);
