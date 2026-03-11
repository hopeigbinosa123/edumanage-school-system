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

  // Function to get badge colour
  const getBadgeColor = (mark) => {
    if (mark >= 80) return "bg-green-600";
    if (mark >= 70) return "bg-blue-500";
    if (mark >= 60) return "bg-yellow-500";
    if (mark >= 50) return "bg-orange-500";
    return "bg-red-600";
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Grade Analysis</h2>

      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Mark (%)</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Progress</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((s, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.subject}</td>
              <td className="border p-2">{s.mark}</td>
              <td className="border p-2">
                <span className={`px-2 py-1 rounded text-white ${getBadgeColor(s.mark)}`}>
                  {classifyMark(s.mark)}
                </span>
              </td>
              <td className="border p-2">
                <div className="w-full bg-gray-200 rounded">
                  <div
                    className={`${getColor(s.mark)} h-4 rounded`}
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