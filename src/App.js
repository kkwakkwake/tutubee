import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
