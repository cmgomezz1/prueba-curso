const { application } = require('express');
const express = require('express');
const app = Express();

app.use(express.static(__dirname + '/public'));

app.get('/hola', (req, res) => {
    res.send('Ruta Hola');
});

app.get('/adios', (req, res) => {
    res.send('Ruta Adios');
});

app.post('/login', (req, res) => {
    res.send('Ruta de Login nueva');
});

app.listen(3000, () => {
    console.log('example app listening on port 3000!');
});