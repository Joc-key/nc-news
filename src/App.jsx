import './App.css'
import { useState } from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import ItemsList from './components/ItemsList';
import ArticlePage from './components/ArticlePage';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [categories, setCategories] = useState([]);

  return (
      <>
        <Routes>
          <Route path='/' element={<ItemsList />} />
          <Route path='/article/:id' element={<ArticlePage />} />
        </Routes>
      </>
  );
}

export default App;