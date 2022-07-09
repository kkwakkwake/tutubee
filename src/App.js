import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import Shorts from './pages/Shorts';
import Music from './pages/Music';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/login' element={<Login />} />
      <Route path='/shorts' element={<Shorts />} />
      <Route path='/music' element={<Music />} />
    </Routes>
  );
}

export default App;
