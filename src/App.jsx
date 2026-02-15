import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navb/Navbar";
import Home from "./components/Home/Home";
import Project from "./pages/Project";
import Techstack from "./pages/Techstack";
import Contact from "./pages/Contact";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/techstack" element={<Techstack />} />
                <Route path="/Techstack" element={<Techstack />} />
                <Route path="/project" element={<Project />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
