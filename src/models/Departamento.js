const db = require("../database");
const { DataTypes } = require("sequelize");

const Departamento = db.define(
    "Departamento", 
    {
    numero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.TEXT,
    },    
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
{
    tableName: "departamento",
})

module.exports = Departamento