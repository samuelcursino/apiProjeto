const express = require('express');

const modelCliente = require('../model/modelCliente');

const router = express.Router();

// -------------------------------------- ROTA DE CADASTRAR CLIENTE ------------------------------------
router.post('/cadastrarCliente', (req, res)=>{
    console.log(req.body);    
    let {nome_cliente} = req.body;
    modelCliente.create(
        //DADOS DA INSERÇÂO DE CLIENTES
        {nome_cliente}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE INSERIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR O CLIENTE.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

// ------------------------------ ROTA DE LISTAGEM DE CLIENTE SEM CRITÉRIO -----------------------------
router.get('/listarCliente', (req, res)=>{

    modelCliente.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"CLIENTES LISTADOS COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR OD CLIENTES.",
                    errorObject:error
                });
            }
        );

});
// -----------------------------------------------------------------------------------------------------

//------------------------------ ROTA DE LISTAGEM DE CLIENTE POR COD_CLIENTE ---------------------------
router.get('/listarClientePK/:cod_cliente', (req, res)=>{

    //DECLARAR E RECEBER O DADO DE CODIGO DO CLIENTE
    let {cod_cliente} = req.params;

    //AÇÃO DE SELEÇÃO DE DADOS DO SEQUELIZE
    modelCliente.findByPk(cod_cliente)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O CLIENTE.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ------------------------- ROTA DE LISTAGEM DE CLIENTE POR NOME_CLIENTE --------------------------
router.get('/listarClienteNOME/:nome_cliente', (req, res)=>{

    let {nome_cliente} = req.params;

    modelCliente.findOne({attributes:['cod_cliente', 'nome_cliente'],where:{nome_cliente}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERARO CLIENTE.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ----------------------------- ROTA DE ALTERAÇÃO DE CLIENTE ----------------------------------------
router.put('/alterarCliente', (req, res)=>{

    const {cod_cliente, nome_cliente} = req.body;

    modelCliente.update(
        {nome_cliente},
        {where:{cod_cliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR O CLIENTE.",
                errorObject:error
            });
        }
    );    
});
// -----------------------------------------------------------------------------------------------------

// ----------------------------------- ROTA DE EXCLUSÃO DE CLIENTE -----------------------------------
router.delete('/excluirCliente/:cod_cliente', (req, res)=>{
    console.log(req.params);
    let {cod_cliente} = req.params

    modelCliente.destroy(
        {where:{cod_cliente}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CLIENTE EXCLUIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O CLIENTE.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

module.exports = router;