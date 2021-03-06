const Router = require('express').Router;
const notesController = require('../notes-controller.js');

const router = Router();

router.get('/all', notesController.getAll);
router.get('/:id', notesController.getById);
router.post('/add', notesController.create);
router.delete('/delete/:id', notesController.deleteById);
router.put('/update/:id', notesController.updateById);

module.exports = router;
