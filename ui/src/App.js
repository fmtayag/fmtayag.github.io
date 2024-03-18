import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Footer from './components/Footer.js';
import ProjectDetails from './pages/ProjectDetails.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects/:id" element={<ProjectDetails />}></Route>
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
