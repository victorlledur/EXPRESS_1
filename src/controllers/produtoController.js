const res = require("express/lib/response");
const { Produto, Departamento } = require("../models/")

const produtoController = {
    listarProduto: async (req, res) => {
        const listaProdutos = await Produto.findAll(); //{include: Departamento} pode ser passado como parametro para buscar com relação

        res.json(listaProdutos);
    },

    async cadastrarProduto(req, res) {
        const { nome, descricao, preco, estoque, link_foto, numero_depto, } = req.body;

        const novoProduto = await Produto.create({
            nome,
            descricao,
            preco,
            estoque,
            link_foto,
            numero_depto,
        })
        res.json(novoProduto);
    },

    async deletarProduto(req, res) {
        const { codigo } = req.params;

        await Produto.destroy({
            where: {
                codigo,
            }
        });

        res.json("Produto deletado!")
    },

    async atualizarProduto(req, res) {
        const { codigo } = req.params;
        const { nome, descricao, preco, estoque, link_foto, numero_depto, } = req.body;

        const produtoAtualizado = await Produto.update(
            {
                nome,
                descricao,
                preco,
                estoque,
                link_foto,
                numero_depto,
            },
            {
                where: {
                    codigo,
                },
            }
        );
        res.json("Produto atualizado")
    },
};



module.exports = produtoController;