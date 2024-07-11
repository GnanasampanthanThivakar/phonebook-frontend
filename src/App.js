// src/App.js
import React, { useEffect } from 'react';
import { syncOfflineData } from './sync';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddPhoneForm from './components/AddPhoneForm';
import PhoneListPage from './components/PhoneListPage';

const App = () => {
  useEffect(() => {
    window.addEventListener('online', syncOfflineData);

    return () => {
      window.removeEventListener('online', syncOfflineData);
    };
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-phone" element={<AddPhoneForm />} />
          <Route path="/list" element={<PhoneListPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
