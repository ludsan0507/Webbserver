const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + "myfirstserver.html"))

app.get('/myfirstserver.css', (req, res) => {
    res.sendFile(clientDir + 'myfirstserver')
})

app.get('/postmalone.png', (req, res) => {
    res.sendFile(clientDir + 'postmalone.png')
})

app.post('/', (req,res) => {
    console.log(req.body.name)
    console.log(req.body.email)
    res.redirect('/')
})

