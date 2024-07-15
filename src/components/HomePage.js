import React from 'react';
import { Link } from 'react-router-dom';
import heroImage1 from '../images/back.jpg'; // Adjust the path as needed

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to PhoneBook App</h2>
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${heroImage1})`, height: '300px', backgroundSize: 'cover' }}
      ></div>
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
