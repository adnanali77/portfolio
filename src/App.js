import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Education from './Pages/Education';
import Navbar from './Components/Navbar';
import "./Styles/Navbar.css";
import Footer from './Components/Footer';
import ProjectDisplay from './Pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path="/project/:id" element={<ProjectDisplay/>} />
        <Route path='/Education' element={<Education/>}/>
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
