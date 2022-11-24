const express = require('express');
const rotasClientes = require('./route/route');

const app = express();

app.use(express.json());

console.log('teste de github')

app.use('/', rotasClientes);

app.listen(3000, ()=>{
    console.log('Servidor ta on na porta 3000 - http://localhost:3000');
});