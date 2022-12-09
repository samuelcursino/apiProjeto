const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelCliente = connection.define(
    'tbl_cliente',
    {
        cpf:{
            type: Sequelize.STRING(20),
            primaryKey: true,
            autoIncrement:false
        },
        email:{
            type: Sequelize.STRING(45),
            allowNull: false
        },
        telefone:{
            type: Sequelize.STRING(20),
            allowNull: false
        },
        endereco:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

//modelCliente.sync({force:true});

module.exports = modelCliente;