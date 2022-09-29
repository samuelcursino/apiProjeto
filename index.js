const express = require('express');
const rotasCategoria = require('./route/rotasCategoria');
const app = express();
app.listen(3000, ()=>{
    console.log('Servidor ta on na porta 4000 - http://localhost:4000');
});