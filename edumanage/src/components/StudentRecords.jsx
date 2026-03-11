import React, { useState } from "react";

function StudentRecords({ students, setStudents }) {
  const [form, setForm] = useState({
    name: "",
    grade: "",
    subject: "",
    mark: "",
    attendance: "",
  });
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update student
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.grade || !form.subject || !form.mark || !form.attendance) {
      alert("All fields are required!");
      return;
    }
    if (isNaN(form.mark) || form.mark < 0 || form.mark > 100) {
      alert("Mark must be between 0 and 100.");
      return;
    }
    if (isNaN(form.attendance) || form.attendance < 0 || form.attendance > 100) {
      alert("Attendance must be between 0 and 100.");
      return;
    }

    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = form;
      setStudents(updated);
      setEditIndex(null);
    } else {
      setStudents([...students, form]);
    }

    setForm({ name: "", grade: "", subject: "", mark: "", attendance: "" });
  };

  // Delete student
  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  // Edit student
  const editStudent = (index) => {
    setForm(students[index]);
    setEditIndex(index);
  };

  // Filter students by search
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Student Records</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mb-4">
        <input className="border p-2 rounded flex-1" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input className="border p-2 rounded flex-1" name="grade" placeholder="Grade" value={form.grade} onChange={handleChange} />
        <input className="border p-2 rounded flex-1" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
        <input className="border p-2 rounded flex-1" name="mark" placeholder="Mark (%)" value={form.mark} onChange={handleChange} />
        <input className="border p-2 rounded flex-1" name="attendance" placeholder="Attendance (%)" value={form.attendance} onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {editIndex !== null ? "Update" : "Add"} Student
        </button>
      </form>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Table */}
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Grade</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Mark (%)</th>
            <th className="border p-2">Attendance (%)</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((s, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.grade}</td>
              <td className="border p-2">{s.subject}</td>
              <td className="border p-2">{s.mark}</td>
              <td className="border p-2">{s.attendance}</td>
              <td className="border p-2">
                <span className={`px-2 py-1 rounded text-white ${s.mark < 50 || s.attendance < 70 ? "bg-red-600" : "bg-green-600"}`}>
                  {s.mark < 50 || s.attendance < 70 ? "At Risk" : "Active"}
                </span>
              </td>
              <td className="border p-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                  onClick={() => editStudent(i)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  onClick={() => deleteStudent(i)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentRecords;