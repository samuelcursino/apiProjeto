const express = require('express');

const modelFabricante = require('../model/modelFabricante');

const router = express.Router();

// -------------------------------------- ROTA DE CADASTRAR FABRICANTE ------------------------------------
router.post('/cadastrarFabricante', (req, res)=>{
    console.log(req.body);    
    let {id_fabricante, nome, email, telefone} = req.body;
    modelFabricante.create(
        //DADOS DA INSERÇÂO DO FABRICANTE
        {id_fabricante, nome, email, telefone}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"FABRICANTE INSERIDO COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR O FABRICANTE.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

// ------------------------------ ROTA DE LISTAGEM DE FABRICANTE -----------------------------
router.get('/listarFabricante', (req, res)=>{

    modelFabricante.findAll()
        .then(
            (response)=>{
                //console.log(response);
                return res.status(200).json({
                    erroStatus:false,
                    mensagemStatus:"FABRICANTE LISTADA COM SUCESSO.",
                    data:response
                })
            }
        ).catch(
            (error)=>{
                return res.status(400).json({
                    erroStatus:true,
                    mensagemStatus:"ERRO AO LISTAR A FABRICANTE.",
                    errorObject:error
                });
            }
        );

});
// -----------------------------------------------------------------------------------------------------

//------------------------------ ROTA DE LISTAGEM DE FABRICANTE POR ID ---------------------------
router.get('/listarFabricantePK/:id_fabricante', (req, res)=>{

    //DECLARAR E RECEBER O ID
    let {id_fabricante} = req.params;

    //AÇÃO DE SELEÇÃO DE DADOS DO SEQUELIZE
    modelFabricante.findByPk(id_fabricante)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"FABRICANTE RECUPERADA COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR A FABRICANTE.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ------------------------- ROTA DE LISTAGEM DE FABRICANTE POR NOME --------------------------
router.get('/listarFabricanteNOME/:nome', (req, res)=>{

    let {nome} = req.params;

    modelFabricante.findOne({attributes:['id_fabricante', 'nome', 'email', 'telefone'],where:{nome}})
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"FABRICANTE RECUPERADA COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR A FABRICANTE.",
                errorObject:error
            });
        }
    )
});
// -----------------------------------------------------------------------------------------------------

// ----------------------------- ROTA DE ALTERAÇÃO DE FABRICANTE ----------------------------------------
router.put('/alterarFabricante', (req, res)=>{

    const {id_fabricante, nome, email , telefone} = req.body;

    modelFabricante.update(
        {nome, email, telefone},
        {where:{id_fabricante}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"FABRICANTE ALTERADA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR A FABRICANTE.",
                errorObject:error
            });
        }
    );    
});
// -----------------------------------------------------------------------------------------------------

// ----------------------------------- ROTA DE EXCLUSÃO DE FABRICANTE-----------------------------------
router.delete('/excluirFabricante/:id_fabricante', (req, res)=>{
    console.log(req.params);
    let {id_fabricante} = req.params

    modelFabricante.destroy(
        {where:{id_fabricante}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"FABRICANTE EXCLUIDA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR A FABRICANTE.",
                errorObject:error
            });
        }
    );
});
// -----------------------------------------------------------------------------------------------------

module.exports = router;