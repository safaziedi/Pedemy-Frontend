import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login/Login"
import Register from "./components/register/Register";
import Courses from "./components/Courses/Courses"
import Contact from "./components/Contact/Contact"
import Profil from './components/profil/Profil'
import Dashboard from "./components/dashboard/Dashboard";

import Onecoursesvisiteur from "./components/Courses/Onecoursesvisiteur"
import Onecoureuser from "./components/Courses/Onecoureuser"
function App() {
  return( 
    
  <div>
  
  <Routes>
  <Route path ="/" element={<Home/>}/>
  <Route path ="/login" element={<Login/>}/>
  <Route path ="/register" element={<Register/>}/>
  <Route path ="/courses" element={<Courses/>}/>
  <Route path ="/contact" element={<Contact/>}/>
  <Route path ="/profil" element={<Profil/>}/>
  <Route path ="/dashboard/*" element={<Dashboard/>}/>
  
  <Route path ="/onecouresvisiteur" element={<Onecoursesvisiteur/>}/>
  <Route path ="/onecoureuser" element={<Onecoureuser/>}/>
  
  </Routes>
  
  </div>
  )
}
export default App;
