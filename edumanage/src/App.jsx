import React, { useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import StudentRecords from "./components/StudentRecords.jsx";
import GradeAnalysis from "./components/GradeAnalysis.jsx";
import AttendanceTracker from "./components/AttendanceTracker.jsx";

function App() {
  const [students, setStudents] = useState([]);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderTab = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard students={students} />;
      case "StudentRecords":
        return <StudentRecords students={students} setStudents={setStudents} />;
      case "GradeAnalysis":
        return <GradeAnalysis students={students} />;
      case "AttendanceTracker":
        return <AttendanceTracker students={students} />;
      default:
        return <Dashboard students={students} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-700 text-white py-6 shadow">
        <h1 className="text-3xl font-bold text-center">EduManage</h1>
        <p className="text-center text-sm mt-2">School Management System</p>
      </header>

      {/* Navbar */}
      <nav className="flex justify-center gap-6 bg-gray-800 text-white p-4 shadow">
        {["Dashboard", "StudentRecords", "GradeAnalysis", "AttendanceTracker"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded transition ${
              activeTab === tab
                ? "bg-blue-600 font-semibold"
                : "hover:bg-gray-700"
            }`}
          >
            {tab === "StudentRecords"
              ? "Student Records"
              : tab === "GradeAnalysis"
              ? "Grade Analysis"
              : tab === "AttendanceTracker"
              ? "Attendance Tracker"
              : "Dashboard"}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="p-6 max-w-6xl mx-auto">{renderTab()}</main>
    </div>
  );
}

export default App;