const express = require('express');
const rotasCategoria = require('./route/route');
const app = express();
app.listen(3000, ()=>{
    console.log('Servidor ta on na porta 3000 - http://localhost:3000');
});