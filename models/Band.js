const { DataTypes } = require('sequelize');
const { Sequelize, sequelize } = require('../db');

// TODO - define the Band model
//let Band;

class Band extends Sequelize.Model{}
Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    
}, {
    sequelize: sequelize,
    modelName: 'Band'
});
module.exports = {
    Band
};