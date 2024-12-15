

import Home from "./pages/Home";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import { Route, Routes } from 'react-router-dom'
import AddProjects from "./pages/AddProjects";


function App() {
 

  return (

    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/addprojects" element={<AddProjects/>}/>
    </Routes>
   
   
   

   
  )
}

export default App
