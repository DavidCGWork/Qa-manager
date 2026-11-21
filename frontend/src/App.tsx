
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/projects";
import TestCases from "./pages/testCases";
import Executions from "./pages/executions";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/test-cases" element={<TestCases />} />
            <Route path="/executions" element={<Executions />} />
        </Routes>
    );
}

export default App;
