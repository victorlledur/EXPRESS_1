const db = require("../database");
const { DataTypes } = require("sequelize");
const Departamento = require("./Departamento");

const Cliente = db.define(
    "Cliente", 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING,
    },
    registro_geral: {
        type: DataTypes.STRING,
    },
    cpf: {
        type: DataTypes.STRING,
    },    
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
{
    tableName: "cliente",
})

module.exports = Cliente