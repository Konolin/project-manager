import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/layout/Navbar.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import ProjectDetails from "./components/projects/ProjectDetails.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/project/:id" element={<ProjectDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}