import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_BASE = "http://localhost:5000/api/students";

const defaultForm = {
  name: "",
  email: "",
  course: "",
};

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(defaultForm);
  const [editId, setEditId] = useState("");
  const [status, setStatus] = useState("Ready");
  const [loading, setLoading] = useState(false);

  const loadStudents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_BASE);
      setStudents(response.data);
      setStatus("Students loaded");
    } catch (error) {
      setStatus(`Load failed: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const resetForm = () => {
    setForm(defaultForm);
    setEditId("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (editId) {
        await axios.put(`${API_BASE}/${editId}`, form);
        setStatus("Student updated successfully");
      } else {
        await axios.post(API_BASE, form);
        setStatus("Student created successfully");
      }
      resetForm();
      loadStudents();
    } catch (error) {
      setStatus(`Save failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const startEdit = (student) => {
    setEditId(student._id);
    setForm({
      name: student.name,
      email: student.email,
      course: student.course,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setStatus("Student deleted successfully");
      if (editId === id) {
        resetForm();
      }
      loadStudents();
    } catch (error) {
      setStatus(`Delete failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <main className="page">
      <section className="panel">
        <h1>Experiment 10 - Student CRUD</h1>
        <p className="hint">Frontend: React (Vite) | Backend: Express + MongoDB</p>
        <p className="status">{status}</p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            name="course"
            value={form.course}
            onChange={handleChange}
            placeholder="Course"
            required
          />
          <div className="actions">
            <button type="submit">{editId ? "Update Student" : "Create Student"}</button>
            <button type="button" className="secondary" onClick={resetForm}>
              Clear
            </button>
            <button type="button" className="secondary" onClick={loadStudents}>
              Refresh
            </button>
          </div>
        </form>
      </section>

      <section className="panel">
        <h2>All Students {loading ? "(Loading...)" : `(${students.length})`}</h2>
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan="4">No records found</td>
                </tr>
              ) : (
                students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.course}</td>
                    <td className="actions">
                      <button type="button" onClick={() => startEdit(student)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        className="danger"
                        onClick={() => handleDelete(student._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default App;
