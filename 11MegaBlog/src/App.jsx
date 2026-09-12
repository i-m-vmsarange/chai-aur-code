import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./features/auth/authSlice";
import { Footer, Header } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("Error fetching current user:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return !loading ? (
    <div className="min-h-screen flex justify-center flex-wrap   bg-gray-400">
      <div className="min-w-full block">
        <Header />
        <main> ToDo: {/* Outlet /> */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
};

export default App;
