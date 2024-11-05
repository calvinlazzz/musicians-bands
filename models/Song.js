const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
class Song extends Sequelize.Model{}
Song.init({

    title: DataTypes.STRING,
    length: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
}, {
    sequelize: sequelize,
    modelName: 'Song'
});

module.exports = {
    Song
};