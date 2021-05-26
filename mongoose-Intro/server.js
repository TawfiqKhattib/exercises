const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const api = require('./server/routs/api');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test-db', { useNewUrlParser: true })
    // const bodyParser = require('body-parser')

const app = express();
const port = 8080;


app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api);
app.listen(port, function() {
    console.log(`Running server on port ${port}`);
})