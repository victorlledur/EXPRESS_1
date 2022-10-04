const { Cliente } = require("../models");
const bcrypt = require("bcryptjs")


const clienteController = {
    async registro(req, res){
        const {nome, email, senha, registro_geral, cpf} = req.body;

        const newSenha = bcrypt.hashSync(senha, 10)

        const newCliente = await Cliente.create({
            nome,
            email,
            senha: newSenha,
            registro_geral,
            cpf
        })

        return res.status(201).json(newCliente);
    },
}

module.exports = clienteController;