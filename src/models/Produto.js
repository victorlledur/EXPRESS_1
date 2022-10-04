const db = require("../database");
const { DataTypes } = require("sequelize");
const Departamento = require("./Departamento");

const Produto = db.define(
    "Produto", 
    {
    codigo: {
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
    preco: {
        type: DataTypes.DOUBLE,
    },
    estoque: {
        type: DataTypes.INTEGER,
    },
    link_foto: {
        type: DataTypes.STRING,
    },
    numero_depto: {
        type: DataTypes.INTEGER,
        references:{
            model: Departamento,
            key: "numero",
        },
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
{
    tableName: "produto",
})

module.exports = Produto