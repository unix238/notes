const noteModel = require('./models/note-model.js');

class NotesController {
  async getAll(req, res) {
    try {
      const allNotes = await noteModel.find();
      res.json(allNotes);
    } catch (e) {
      res.json(e);
    }
  }

  async getById(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(await noteModel.findById(req.params.id));
  }

  async deleteById(req, res) {
    try {
      res.json(await noteModel.findByIdAndDelete(req.params.id));
    } catch (e) {
      res.json(e);
    }
  }

  async updateById(req, res) {
    try {
      res.json(await noteModel.findByIdAndUpdate(req.params.id, req.body));
    } catch (e) {
      res.json(e);
    }
  }

  async create(req, res) {
    try {
      const newNote = {
        title: req.body.title,
        content: req.body.content,
        date: req.body.date,
      };
      res.json(await noteModel.create(newNote));
    } catch (e) {
      res.json(e);
    }
  }
}

module.exports = new NotesController();
