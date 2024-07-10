// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddPhoneForm from './components/AddPhoneForm';
import PhoneListPage from './components/PhoneListPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>PhoneBook App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-phone" element={<AddPhoneForm />} />
            <Route path="/phone-list" element={<PhoneListPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <footer className="App-footer">
          <p>PhoneBook App &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
