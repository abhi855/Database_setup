const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("DATABSE Connected")
)
app.get("/hello", (req, res) => res.send("Hello World"))

app.listen(4000, () => console.log("Server is Running"))
