import path from 'path'
import express from 'express'

const PORT = process.env.HTTP_PORT || 3000
const app = express()

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/', (req, res) => {
    res.send('Just going to send it');
})

app.get('/flower', (req, res) => {
    res.json({
        name: 'Dandelion',
        color: 'Blue-ish'
    })
})

app.listen(PORT, () => {
    console.log('Server listening at port ${PORT}.')
})