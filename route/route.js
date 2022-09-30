const express = require('express');

const modelCategoria = require('../model/modelClientes');

const router = express.Router();

router.post('/cadastrar_categoria', (req, res)=>{
    res.send('Rota de cadastro de categoria');
});

router.get('/listar_categoria', (req, res)=>{
    res.send('Rota de listagem de categoria');
});

router.put('/alterar_categoria', (req, res)=>{
    res.send('Rota de alteração de categoria');
});

router.delete('/excluir_categoria', (req, res)=>{
    res.send('Rota de exclusão de categoria');
});

module.exports = router;