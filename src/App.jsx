import Home from "./pages/Home";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import AddProjects from "./pages/AddProjects";
import ShowProject from "./pages/ShowProject";
import Project01 from "./pages/projects/project01/Project01";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/addprojects" element={<AddProjects />} />
      <Route path="/projects/:id" element={<ShowProject />} />
      <Route path="/project/01" element={<Project01/>}/>
    </Routes>
  );
}

export default App;
