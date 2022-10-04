const { BelongsTo } = require("sequelize");
const Departamento = require("./Departamento");
const Produto = require("./Produto");
const Cliente = require("./Cliente")

// Produto BelongsTo(Departamento, {
//     foreignKey: "numero_depto",
// });

module.exports = {
    Departamento,
    Produto,
    Cliente
}