const Sequelize = require('sequelize');

const connection = new Sequelize(
    'bd_projeto_api', 
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;