import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import HomePage from './Components/Home/HomePage';

function App() {
 

  return (
    <div className="App">
     
      <Router>
          
        <Routes>
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
