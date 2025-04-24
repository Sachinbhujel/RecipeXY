import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Recipe_Detail from './Recipe_Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div className='main'><Home /></div>} />
        <Route path='/recipe/:id' element={<Recipe_Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
