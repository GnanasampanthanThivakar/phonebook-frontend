// phonebook-frontend/src/App.js

import React from 'react';
import './App.css';
import AddPhoneForm from './components/AddPhoneForm';
import PhoneList from './components/PhoneList';

function App() {
  return (
    <div className="App">
      <h1>Phone Book App</h1>
      <AddPhoneForm />
      <PhoneList />
    </div>
  );
}

export default App;
