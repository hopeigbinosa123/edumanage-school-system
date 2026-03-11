import React from "react";

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

  return (
    <div>
      <h2 className="text-xl font-bold">Dashboard</h2>

      <div className="grid grid-cols-2 gap-4 my-4">
        <div className="p-4 border rounded">
          <p>Total Students: {totalStudents}</p>
          <p>Average Mark: {averageMark}%</p>
          <p>Average Attendance: {averageAttendance}%</p>
          <p>At-Risk Students: {atRiskCount}</p>
        </div>

        <div className="p-4 border rounded">
          <h3 className="font-semibold">Subject Performance</h3>
          <ul>
            {Object.keys(subjectStats).map((subject, i) => {
              const avg = (
                subjectStats[subject].total / subjectStats[subject].count
              ).toFixed(2);
              return (
                <li key={i}>
                  {subject}: {avg}%
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;