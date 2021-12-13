var express = require('express');
var router = express.Router();
const restauranteController = require('../controllers/restauranteController')
const path = require('path')
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: (req, res, cb) =>{
        cb(null, "./public/data/uploads")
    },
    filename:  (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })

router.get('/listagemRestaurante', restauranteController.listagemRestaurante)

router.get('/cadastrarRestaurante', restauranteController.viewCadastrarRestaurante)
router.post('/cadastrarRestaurante', upload.single('restaurante_imagem'), restauranteController.acaoCadastrarRestaurante)

router.get('/alterar/:id', restauranteController.editar)
router.post('/alterar/:id', upload.single('restaurante_imagem'), restauranteController.acaoEditar)

router.get('/excluir/:id', restauranteController.excluir)


module.exports = router;
