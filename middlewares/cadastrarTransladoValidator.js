var { check } = require("express-validator");

const cadastrarTransladoValidator = [
    check("tituloTranslado").isLength({min:3, max:40}).withMessage("O campo nome tem que conter no mínimo 3 carcterer."),
    check("transportaPet").notEmpty().withMessage("Selecione o campo transporta pet é obrigatório."),
    check("acessivelDeficiente").notEmpty().withMessage("Seleciona o campo se é acessivel para deficientes."),
    check("levarBagagens").notEmpty().withMessage("Selecione o campo levar bagagens."),
    check("recolheHotel").notEmpty().withMessage("Selecione o campo recolhe hotel."),
    check("precoOriginalTranslado").notEmpty().withMessage("Preencha o campo preço original."),
    check("precoPromocionalTranslado").notEmpty().withMessage("Preencha o campo preço Promocional."),
    check("descricao").isLength({min:50, max:250}).notEmpty().withMessage("Preencha o campo descrição."),
    check("imagem").notEmpty().withMessage("Faça upload de uma imagem."),
]

module.exports = {cadastrarTransladoValidator}