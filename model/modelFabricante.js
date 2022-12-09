const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelFabricante = connection.define(
    'tbl_fabricantes',
    {
        id_fabricante:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nome:{
            type: Sequelize.STRING(45),
            allowNull: false
        },
        email:{
            type: Sequelize.STRING(45),
            allowNull: false
        },
        telefone:{
            type: Sequelize.STRING(15),
            allowNull: false
        }
    }
);

//modelFabricante.sync({force:true});

module.exports = modelFabricante;