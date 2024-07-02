import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import MyComponent from "./components/MyComponent/MyComponent";
import Profile from "./components/Profile/Profile";
import Layout from "./view/Layout/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-component" element={<MyComponent />} />
            <Route path="/user" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
