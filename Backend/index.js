const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.static('public'))


app.get('/*', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, './public/index.html'))
    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
})

app.listen(5001, () => {
    console.log('server is running on 5001')
})