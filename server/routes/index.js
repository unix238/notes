import { Router } from "express";
import notesController from "../notes-controller.js";

const router = Router();

router.get('/all', notesController.getAll);
router.get('/:id', notesController.getById);
router.post('/add', notesController.create);
router.delete('/delete/:id', notesController.deleteById);
router.put('/update/:id', notesController.updateById);

export default router;