import Home from "./pages/Home";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import AddProjects from "./pages/AddProjects";
import ShowProject from "./pages/ShowProject";
import About from "./pages/About";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/addprojects" element={<AddProjects />} />
      <Route path="/projects/:id" element={<ShowProject />} />
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
}

export default App;
