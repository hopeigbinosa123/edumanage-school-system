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
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Attendance Tracker</h2>

      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Attendance (%)</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Progress</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.subject}</td>
              <td className="border p-2">{s.attendance}</td>
              <td className="border p-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    s.attendance < 70 ? "bg-red-600" : "bg-green-600"
                  }`}
                >
                  {s.attendance < 70 ? "⚠ Needs Attention" : "Good Standing"}
                </span>
              </td>
              <td className="border p-2">
                <div className="w-full bg-gray-200 rounded">
                  <div
                    className={`${getColor(s.attendance)} h-4 rounded`}
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