import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login/Login"
import Register from "./components/register/Register";
import Courses from "./components/Courses/Courses"
import Contact from "./components/Contact/Contact"
import Profil from './components/profil/Profil'
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
  </Routes>
  
  </div>
  )
}
export default App;
