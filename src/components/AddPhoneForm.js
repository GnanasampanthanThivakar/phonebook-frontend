// src/components/AddPhoneForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { addPhoneOffline } from '../indexedDB';

const AddPhoneForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (navigator.onLine) {
      try {
        const response = await axios.post('http://localhost:8080/api/add-phone', { name, phone });
        console.log('Phone book entry added:', response.data);
        setName('');
        setPhone('');
      } catch (err) {
        console.error('Error adding phone book entry:', err);
        setError(err.message);
      }
    } else {
      try {
        await addPhoneOffline(name, phone);
        console.log('Phone book entry added offline');
        setName('');
        setPhone('');
      } catch (err) {
        console.error('Error adding phone book entry offline:', err);
        setError(err.message);
      }
    }
  };

  return (
    <div>
      <h2>Add New Phone Book Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label>Phone Number:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <br />
        <button type="submit">Add Entry</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddPhoneForm;
