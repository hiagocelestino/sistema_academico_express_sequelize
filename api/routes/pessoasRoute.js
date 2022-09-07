const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaPessoasAtivas);
router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoa);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa);
router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaMatricula)
router.post('/pessoas/:estudanteId/matriculas', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.apagaMatricula)

module.exports = router;