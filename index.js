const { application } = require('express');
const express = require('express');
const app = Express();

app.use(express.static(__dirname + '/public'));

app.get('/hola', (req, res) => {
    res.send('Ruta Hola');
});

app.get('/adios', (req, res) => {
    
    res.json({
        message: 'No es una despedida, nos vemos luego'});
});

app.post('/registro', (req, res) => {
    
    res.json({
        message: 'Recibiendo información de registro'});
});

app.post('/login', (req, res) => {
    
    res.json({
        message: 'Ruta nueva de Login'});
});

app.listen(3000, () => {
    console.log('example app listening on port 3000!');
});