const express = require('express');

const modelCliente = require('../model/modelCliente');

const router = express.Router();

// -------------------------------------- ROTA DE CADASTRAR CPF's ------------------------------------
router.post('/cadastrarCPF', (req, res)=>{
    console.log(req.body);    
    let {cpf, email, telefone, endereco} = req.body;
    modelCliente.create(
        //DADOS DA INSERÇÂO DE CPF's
        {cpf, email, telefone, endereco}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CPF INSERIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR O CPF.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

// ------------------------------ ROTA DE LISTAGEM DE CPF's -----------------------------
router.get('/listarCliente', (req, res)=>{

    modelCliente.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"CPF LISTADO COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR O CPF.",
                    errorObject:error
                });
            }
        );

});
// -----------------------------------------------------------------------------------------------------

//------------------------------ ROTA DE LISTAGEM DE CLIENTE POR CPF ---------------------------
router.get('/listarClientePK/:cpf', (req, res)=>{

    //DECLARAR E RECEBER O CPF
    let {cpf} = req.params;

    //AÇÃO DE SELEÇÃO DE DADOS DO SEQUELIZE
    modelCliente.findByPk(cpf)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CPF RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O CPF.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ------------------------- ROTA DE LISTAGEM DE CPF POR EMAIL --------------------------
router.get('/listarClienteNOME/:email', (req, res)=>{

    let {email} = req.params;

    modelCliente.findOne({attributes:['cpf', 'email', 'telefone', 'endereco'],where:{email}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"EMAIL RECUPERADO COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR O EMAIL.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ----------------------------- ROTA DE ALTERAÇÃO DE EMAIL ----------------------------------------
router.put('/alterarCliente', (req, res)=>{

    const {cpf, email, telefone, endereco} = req.body;

    modelCliente.update(
        {email, telefone, endereco},
        {where:{cpf}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"EMAIL ALTERADO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR O EMAIL.",
                errorObject:error
            });
        }
    );    
});
// -----------------------------------------------------------------------------------------------------

// ----------------------------------- ROTA DE EXCLUSÃO DE CPF-----------------------------------
router.delete('/excluirCliente/:cpf', (req, res)=>{
    console.log(req.params);
    let {cpf} = req.params

    modelCliente.destroy(
        {where:{cpf}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CPF EXCLUIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR O CPF.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

module.exports = router;