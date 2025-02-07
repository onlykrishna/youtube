import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Content from "./components/content/content";
import "./App.css";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading Dashboard...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
        <Content />
      </div>
    </Router>
  );
};

export default App;
