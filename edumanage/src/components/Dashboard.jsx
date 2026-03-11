import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Dashboard({ students }) {
  // Calculate statistics
  const totalStudents = students.length;
  const averageMark =
    totalStudents > 0
      ? (students.reduce((sum, s) => sum + Number(s.mark), 0) / totalStudents).toFixed(2)
      : 0;
  const averageAttendance =
    totalStudents > 0
      ? (students.reduce((sum, s) => sum + Number(s.attendance), 0) / totalStudents).toFixed(2)
      : 0;
  const atRiskCount = students.filter(
    (s) => s.mark < 50 || s.attendance < 70
  ).length;

  // Subject performance breakdown
  const subjectStats = {};
  students.forEach((s) => {
    if (!subjectStats[s.subject]) {
      subjectStats[s.subject] = { total: 0, count: 0 };
    }
    subjectStats[s.subject].total += Number(s.mark);
    subjectStats[s.subject].count += 1;
  });

  // Chart data
  const chartData = {
    labels: students.map((s) => s.name),
    datasets: [
      {
        label: "Marks (%)",
        data: students.map((s) => s.mark),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
      {
        label: "Attendance (%)",
        data: students.map((s) => s.attendance),
        backgroundColor: "rgba(153,102,255,0.6)",
      },
    ],
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-6 my-4">
        <div className="p-4 bg-gray-50 shadow rounded">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p>Total Students: <span className="font-bold">{totalStudents}</span></p>
          <p>Average Mark: <span className="font-bold">{averageMark}%</span></p>
          <p>Average Attendance: <span className="font-bold">{averageAttendance}%</span></p>
          <p>At-Risk Students: <span className="text-red-600 font-bold">{atRiskCount}</span></p>
        </div>

        <div className="p-4 bg-gray-50 shadow rounded">
          <h3 className="text-lg font-semibold mb-2">Subject Performance</h3>
          <ul>
            {Object.keys(subjectStats).map((subject, i) => {
              const avg = (
                subjectStats[subject].total / subjectStats[subject].count
              ).toFixed(2);
              return (
                <li key={i} className="mb-1">
                  <span className="font-semibold">{subject}:</span> {avg}%
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Chart */}
      {students.length > 0 ? (
        <div className="bg-gray-50 shadow rounded p-4">
          <h3 className="text-lg font-semibold mb-2">Marks & Attendance Overview</h3>
          <Bar data={chartData} />
        </div>
      ) : (
        <p className="italic text-gray-500">No student data yet.</p>
      )}
    </div>
  );
}

export default Dashboard;