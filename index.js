const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./Data/courses.json')

app.get('/', (req, res) => {
    res.send('learning api is running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(cr => cr.id == id)
    res.send(course)
})

app.listen(port, () => {
    console.log('api running on the port', port)
})