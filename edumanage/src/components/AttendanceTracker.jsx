import React from "react";

function AttendanceTracker({ students }) {
  // Function to get colour based on attendance
  const getColor = (attendance) => {
    if (attendance >= 90) return "bg-green-600";
    if (attendance >= 80) return "bg-blue-500";
    if (attendance >= 70) return "bg-yellow-500";
    return "bg-red-600"; // Below 70% flagged
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Attendance Tracker</h2>

      <table border="1" className="w-full mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Attendance (%)</th>
            <th>Status</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.subject}</td>
              <td>{s.attendance}</td>
              <td>{s.attendance < 70 ? "⚠ Needs Attention" : "Good Standing"}</td>
              <td>
                <div className="w-full bg-gray-200">
                  <div
                    className={`${getColor(s.attendance)} h-4`}
                    style={{ width: `${s.attendance}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTracker;