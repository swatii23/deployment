const express = require ("express")
require("dotenv").config()

const app = express()

app.get("/", (req, res) => {
    res.send({message : "API is working"})
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})