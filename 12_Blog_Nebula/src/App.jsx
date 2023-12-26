import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./features/authSlice";
import { Header, Footer } from "./components";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
// import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((useData) => {
        if (useData) {
          dispatch(login({ useData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
      <Router>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
    <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
