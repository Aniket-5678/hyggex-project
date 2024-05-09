
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/header/Navbar';

function App() {
  return (
    <div className='app-container'>
    
      <div>
      <Navbar/>
      </div>
        
     <Routes>
     <Route path='/'   element={<Home/>} />

     </Routes>

    </div>
  );
}

export default App;
