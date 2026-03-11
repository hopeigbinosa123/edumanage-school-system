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
    <div>
      <h2 className="text-xl font-bold">Student Records</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 my-4">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="grade" placeholder="Grade" value={form.grade} onChange={handleChange} />
        <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
        <input name="mark" placeholder="Mark (%)" value={form.mark} onChange={handleChange} />
        <input name="attendance" placeholder="Attendance (%)" value={form.attendance} onChange={handleChange} />
        <button type="submit">{editIndex !== null ? "Update" : "Add"} Student</button>
      </form>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="my-2"
      />

      {/* Table */}
      <table border="1" className="w-full mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Subject</th>
            <th>Mark (%)</th>
            <th>Attendance (%)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.grade}</td>
              <td>{s.subject}</td>
              <td>{s.mark}</td>
              <td>{s.attendance}</td>
              <td>{s.mark < 50 || s.attendance < 70 ? "At Risk" : "Active"}</td>
              <td>
                <button onClick={() => editStudent(i)}>Edit</button>
                <button onClick={() => deleteStudent(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentRecords;