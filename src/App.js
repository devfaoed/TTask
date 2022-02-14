import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing screens display
import Home from './screen/Home';
import Character from './screen/Character';
import Episode from './screen/Episode';
import Quote from './screen/Qoutes';
import Death from './screen/Death';



// importing navbar component
import Navbar from "./components/Navbar";





function App() {
  return (
    <Router>
      <Navbar />
          <main>
              <Routes>
                      <Route path="/home" element={<Home />} />
                      <Route path="/character" element={<Character />}  />
                      <Route path="/episode" element={<Episode />} />
                      <Route  path="/qoutes" element={<Quote />} />
                      <Route  path="/death" element={<Death />} />
              </Routes>
          </main>
    </Router>
  );
}

 
export default App;
