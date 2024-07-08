// src/components/PhoneList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getPhoneNumbers } from '../indexedDB';

const PhoneList = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPhoneNumbers = async () => {
      try {
        let response;
        if (navigator.onLine) {
          response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/get-phone`);
          setPhoneNumbers(response.data.data.phoneNumbers);
        } else {
          response = await getPhoneNumbers();
          setPhoneNumbers(response);
        }
      } catch (error) {
        console.error('Error fetching phone numbers:', error);
        setError('Failed to fetch phone numbers.');
      } finally {
        setLoading(false);
      }
    };

    fetchPhoneNumbers();
  }, []);

  if (loading) return <p>Loading phone numbers...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Phone Numbers</h2>
      <ul>
        {phoneNumbers.map((phoneNumber) => (
          <li key={phoneNumber._id}>
            {phoneNumber.name}: {phoneNumber.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneList;
