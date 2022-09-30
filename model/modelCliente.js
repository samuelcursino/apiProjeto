const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelCategoria = connection.define(
    'tbl_cliente',
    {
        cod_cliente:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nome_cliente:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);