const { BelongsTo } = require("sequelize");
const Departamento = require("./Departamento");
const Produto = require("./Produto");

// Produto BelongsTo(Departamento, {
//     foreignKey: "numero_depto",
// });

module.exports = {
    Departamento,
    Produto
}