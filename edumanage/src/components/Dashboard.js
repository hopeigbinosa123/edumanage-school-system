import React from "react";

function Dashboard({ students }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Students: {students.length}</p>
      {/* Later: add average mark, attendance rate, at-risk count */}
    </div>
  );
}

export default Dashboard;