const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require("./src/api/v1/router")

const app = express()
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/v1", routes)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connection Successfull")
}).catch((err) => {
    console.log(err.message);
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server Started on Port ${process.env.PORT}`)
});
