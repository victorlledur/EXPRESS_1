const { Cliente } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const AuthController = {
    async login(req, res) {
        const { email, senha } = req.body;

        const cliente = await Cliente.findOne({
            where: {
                email,
            }
        })

        if (!cliente) {
            return res.status(400).json("Email não cadastrado");
        }

        if (!bcrypt.compareSync(senha, cliente.senha)) {
            return res.status(401).json("Senha invalida");
        }

        const token = jwt.sign(
            {
                id: cliente.id,
                email: cliente.email,
                nome: cliente.nome,
            },
            secret.key
        );

        return res.json(token);
    },
}

module.exports = AuthController;