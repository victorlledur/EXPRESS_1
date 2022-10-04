const express = require("express");
const produtoController = require("../controllers/produtoController")
const clienteController = require("../controllers/clienteController")
const authControler = require("../controllers/authController");
const requestLog = require("../middleweres/requestLog")
const bloqueio = require("../middleweres/bloqueio")
const clienteCreateValidation = require("../validations/Cliente/create")
const authLoginValidation = require("../validations/auth/login")
// const auth = require("../middleweres/auth");
const routes = express.Router();


routes.get("/produtos", requestLog, bloqueio, produtoController.listarProduto);
routes.post("/produtos", produtoController.cadastrarProduto);
routes.delete("/produtos/:codigo", produtoController.deletarProduto);
routes.put("/produtos/:codigo", produtoController.atualizarProduto);

routes.post("/cliente", clienteCreateValidation, clienteController.registro);
routes.post("/login", authLoginValidation, authControler.login);

module.exports = routes;
