// src/components/AddPhoneForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { addPhoneNumber } from '../indexedDB';

const AddPhoneForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    const newPhone = { name, phone, _id: Date.now().toString() };
    try {
      if (navigator.onLine) {
        await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/add-phone`, { name, phone });
      } else {
        await addPhoneNumber(newPhone);
      }
      setSuccess('Phone added successfully!');
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Error adding phone:', error);
      setError('Failed to add phone. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Phone Number" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Phone Number'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default AddPhoneForm;
