import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/layout/Navbar.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import ProjectDetails from "./components/projects/ProjectDetails.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import CreateProject from "./components/projects/CreateProject.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/project/:id" element={<ProjectDetails/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/create-project" element={<CreateProject/>}/>
            </Routes>
        </BrowserRouter>
    );
}