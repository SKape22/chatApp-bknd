const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./src/api/v1/router')

const app = express()
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", router)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connection Successfull")
}).catch((err) => {
    console.log(err.message);
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server Started on Port ${process.env.PORT}`)
});
