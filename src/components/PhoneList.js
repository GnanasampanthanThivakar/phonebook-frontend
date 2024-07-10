import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhoneList = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  useEffect(() => {
    const fetchPhoneNumbers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/get-phone');
        setPhoneNumbers(response.data.data.phoneNumbers);
      } catch (error) {
        console.error('Error fetching phone numbers:', error);
      }
    };

    fetchPhoneNumbers();
  }, []);

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
