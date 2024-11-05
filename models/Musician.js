const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Musician model
class Musician extends Sequelize.Model{}
Musician.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
},
{
    sequelize: sequelize,
    modelName: 'Musician'
}
)
module.exports = {
    Musician
};