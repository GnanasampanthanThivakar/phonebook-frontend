// src/components/PhoneListPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhoneListPage = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhoneNumbers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/get-phone');
        setPhoneNumbers(response.data.data.phoneNumbers);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPhoneNumbers();
  }, []);

  return (
    <div>
      <h2>Phone Numbers</h2>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {phoneNumbers.map((phoneNumber) => (
          <li key={phoneNumber._id}>
            <strong>Name:</strong> {phoneNumber.name}, <strong>Phone:</strong> {phoneNumber.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneListPage;
