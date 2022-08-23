import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login/Login"
import Register from "./components/register/Register";
import Courses from "./components/Courses/Courses"
import Contact from "./components/Contact/Contact"
import Profil from './components/profil/Profil'
import Dashboard from "./components/dashboard/Dashboard";
import Formationlis from "./components/dashboard/Formationliste/Formationliste"
import Onecoursesvisiteur from "./components/Courses/Onecoursesvisiteur"
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
  <Route path ="/mescoures" element={<Formationlis/>}/>
  <Route path ="/onecouresvisiteur" element={<Onecoursesvisiteur/>}/>
  
  </Routes>
  
  </div>
  )
}
export default App;
