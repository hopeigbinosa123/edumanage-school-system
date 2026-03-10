import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import StudentRecords from "./components/StudentRecords";
import GradeAnalysis from "./components/GradeAnalysis";
import AttendanceTracker from "./components/AttendanceTracker";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold">EduManage</h1>
      <nav className="flex gap-4 my-4">
        <button>Dashboard</button>
        <button>Student Records</button>
        <button>Grade Analysis</button>
        <button>Attendance Tracker</button>
      </nav>

      {/* For now, just render all modules */}
      <Dashboard students={students} />
      <StudentRecords students={students} setStudents={setStudents} />
      <GradeAnalysis students={students} />
      <AttendanceTracker students={students} />
    </div>
  );
}

export default App;