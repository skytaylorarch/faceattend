import React, { useState } from 'react';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import LecturerDashboard from './components/LecturerDashboard';
import StudentDashboard from './components/StudentDashboard';

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login setUser={setUser} />;

  if (user.role === 'admin') return <AdminDashboard user={user} />;
  if (user.role === 'lecturer') return <LecturerDashboard user={user} />;
  if (user.role === 'student') return <StudentDashboard user={user} />;

  return <div>Unknown role</div>;
}

export default App;
