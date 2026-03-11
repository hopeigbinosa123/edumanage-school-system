import React from "react";

function GradeAnalysis({ students }) {
  // Sort students by mark (highest first)
  const sorted = [...students].sort((a, b) => b.mark - a.mark);

  // Function to classify marks
  const classifyMark = (mark) => {
    if (mark >= 80) return "Distinction";
    if (mark >= 70) return "Merit";
    if (mark >= 60) return "Pass";
    if (mark >= 50) return "Symbol E";
    return "Fail";
  };

  // Function to get colour for progress bar
  const getColor = (mark) => {
    if (mark >= 80) return "bg-green-600";
    if (mark >= 70) return "bg-blue-500";
    if (mark >= 60) return "bg-yellow-500";
    if (mark >= 50) return "bg-orange-500";
    return "bg-red-600";
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Grade Analysis</h2>

      <table border="1" className="w-full mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Mark (%)</th>
            <th>Category</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.subject}</td>
              <td>{s.mark}</td>
              <td>{classifyMark(s.mark)}</td>
              <td>
                <div className="w-full bg-gray-200">
                  <div
                    className={`${getColor(s.mark)} h-4`}
                    style={{ width: `${s.mark}%` }}
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

export default GradeAnalysis;