const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8080
const FOO = process.env.FOO || "FOO not found in env"

console.log(`Node.js ${process.version} HELLO Wed 22 Oct 07:42:21 EEST 2025`)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ msg: "Rahti2 node 0.4" })
})


app.listen(PORT, () => {
    try {
        console.log(`Running on http://localhost:${PORT}`)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    
})
