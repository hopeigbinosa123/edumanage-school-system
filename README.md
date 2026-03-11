# EduManage — School Management System

System Development N5 Project

---

## About
A browser-based school management system built with React.  
Manage student records, grades, and attendance.

---

## Student Details
- **Name:** Hope Igbinoba  
- **Student No:** 20240219012  
- **Institution:** Eagleview Graduate Institution  
- **Year:** 2026  

---

## 📚 Project Overview
EduManage enables school administrators and educators to:
- Manage student records (CRUD operations).
- Track academic performance with grading categories.
- Monitor attendance with visual indicators.
- View a dashboard with key statistics and charts.

This project is **front-end only** (no backend or database). Data persists only during the session.



## Technology Stack
- **React (JSX)** → Component-based UI
- **Vite** → Fast build tool
- **Tailwind CSS** → Styling and responsive layout
- **JavaScript (ES6+)** → Application logic
- **GitHub** → Version control and collaboration

---

## Current Structure
```
src/
 ├── components/
 │    ├── Dashboard.js
 │    ├── StudentRecords.js
 │    ├── GradeAnalysis.js
 │    └── AttendanceTracker.js
 ├── App.js
 ├── index.js
 └── index.css
```

## 🚀 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/edumanage.git
   cd edumanage
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Open in browser at `http://localhost:5173/`

## 🎓 Student Records Module
The Student Records module allows educators to:
- Add new student records (name, grade, subject, mark, attendance).
- Edit existing student information.
- Delete student records.
- Search students by name.
- Automatically classify students as **Active** or **At Risk** based on marks (<50%) or attendance (<70%).

Validation ensures:
- All fields must be completed.
- Marks and attendance must be numeric values between 0 and 100.

## 📊 Grade Analysis Module
The Grade Analysis module provides:
- A **leaderboard** of students sorted by marks (highest first).
- Classification into categories:
  - Distinction (80%+)
  - Merit (70–79%)
  - Pass (60–69%)
  - Symbol E (50–59%)
  - Fail (<50%)
- Colour-coded progress bars to visually represent student performance.

## 📅 Attendance Tracker Module
The Attendance Tracker module provides:
- Visual progress bars for each student’s attendance percentage.
- Colour-coded tiers:
  - Green (90%+)
  - Blue (80–89%)
  - Yellow (70–79%)
  - Red (<70%)
- Flags students below **70% attendance** with a “Needs Attention” alert.

## 📈 Dashboard Module
The Dashboard module provides:
- **Summary statistics**:
  - Total number of students
  - Average mark across all students
  - Average attendance rate
  - Count of at-risk students (mark <50% or attendance <70%)
- **Subject performance breakdown**:
  - Average marks per subject
- A clear overview of the school’s academic and attendance trends.

## 📄 License
This project is for educational purposes under the **System Development N5 curriculum**.
