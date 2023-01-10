const express = require('express');
const app = Express();

app.use(express.static(__dirname + '/public'));



app.listen(3000, () => {
    console.log('example app listening on port 3000!');
});