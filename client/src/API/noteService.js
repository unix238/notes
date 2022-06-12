import axios from 'axios';

class NoteService {
  async getAll() {
    const response = await axios.get(
      'https://notes-g3pka4jpo-unix238.vercel.app/notes/all'
    );
    return response.data;
  }

  async create(note) {
    const response = await axios.post(
      'https://notes-g3pka4jpo-unix238.vercel.app/notes/add',
      note
    );
    console.log(response);
  }

  async delete(note) {
    const response = await axios.delete(
      'https://notes-g3pka4jpo-unix238.vercel.app/notes/delete/' + note._id
    );
    console.log(response);
  }

  async update(note) {
    const response = await axios.put(
      'https://notes-g3pka4jpo-unix238.vercel.app/notes/update/' + note._id,
      note
    );
    console.log(response);
  }
}

export default new NoteService();
