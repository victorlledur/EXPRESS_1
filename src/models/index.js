const Departamento = require("./Departamento");
const Produto = require("./Produto");
const Cliente = require("./Cliente")

Produto.hasOne(Departamento, {
    foreignKey: "numero_depto",
});

Departamento.hasMany(Produto);

module.exports = {
    Departamento,
    Produto,
    Cliente
}