import './App.css'
import { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import ItemsList from './components/ItemsList';

function App() {
  const [currentUser, setCurrentUser] = useState('Ant');
  const [categories, setCategories] = useState([]);

  return (
    <>
      <Routes>
        <Route path='/' element={<ItemsList />} />
      </Routes>
    </>
  );
}

export default App;