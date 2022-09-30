const express = require('express');

const modelCliente = require('../model/modelCliente');

const router = express.Router();

router.post('/cadastrarCliente', (req, res)=>{
    res.send('Rota de cadastro de cliente');
});

router.get('/listarCliente', (req, res)=>{
    res.send('Rota de listagem de cliente');
});

router.put('/alterarCliente', (req, res)=>{
    res.send('Rota de alteração de cliente');
});

router.delete('/excluirCliente', (req, res)=>{
    res.send('Rota de exclusão de cliente');
});

module.exports = router;