// app/dashboard/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    document.title = "Dashboard - Monitoring Traksi";
    const SessionUser = sessionStorage.getItem("user");
    if (!SessionUser) {
      // Redirect to login if user data not found
      router.push("/login");
      return;
    }

    const parsedUserData = JSON.parse(SessionUser);
    setUserData(parsedUserData);
  }, []);

  const handleLogout = () => {
    // Clear session data
    sessionStorage.removeItem("user");
    // Redirect to login page
    router.push("/login");
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Hellow
      {/* <h1>Welcome to the Dashboard</h1>
      <p>User: {userData.email}</p>
      <p>Name: {userData.nama_lengkap}</p> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
