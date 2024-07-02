import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import MyComponent from "./components/MyComponent/MyComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar /> {/* This ensures the Navbar is always visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-component" element={<MyComponent />} />
        </Routes>
      </Router>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
