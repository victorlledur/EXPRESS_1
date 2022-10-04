const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email(),
        senha: Joi.string().required(),
        registro_geral: Joi.string().max(15).required(),
        cpf: Joi.string().max(15).required()
    })
})
