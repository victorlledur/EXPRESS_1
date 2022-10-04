const express = require("express");
const produtoController = require("../controllers/produtoController")
const routes = express.Router();

routes.get("/produto/lista", produtoController.listarProduto);
routes.post("/produto/criar", produtoController.cadastrarProduto);
routes.delete("/produto/:codigo/deletar", produtoController.deletarProduto)
routes.put("/produto/:codigo/atualizar", produtoController.atualizarProduto)

module.exports = routes;
