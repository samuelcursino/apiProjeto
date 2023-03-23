const express = require('express');
const rotasClientes = require('./route/routeCliente');
const rotasFabricante = require('./route/routeFabricante');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log('teste de github')

app.use('/', rotasClientes);

app.use('/', rotasFabricante);

app.listen(3000, ()=>{
    console.log('Servidor ta on na porta 3000 - http://localhost:3000');
});