// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to PhoneBook App</h2>
      <p>This is the homepage content.</p>
      <Link to="/add-phone">
        <button>Add Phone Number</button>
      </Link>
      <br />
      <Link to="/phone-list">
        <button>View Phone List</button>
      </Link>
    </div>
  );
};

export default HomePage;
