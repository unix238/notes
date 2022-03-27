import axios from "axios";

class NoteService {
  async getAll() {
    const response = await axios.get("http://localhost:4000/notes/all");
    return response.data;
  }

  async create(note) {
    const response = await axios.post("http://localhost:4000/notes/add", note);
    console.log(response);
  }

  async delete(note) {
    const response = await axios.delete(
      "http://localhost:4000/notes/delete/" + note._id
    );
    console.log(response);
  }

  async update(note) {
    const response = await axios.put(
      "http://localhost:4000/notes/update/" + note._id,
      note
    );
    console.log(response);
  }
}

export default new NoteService();
