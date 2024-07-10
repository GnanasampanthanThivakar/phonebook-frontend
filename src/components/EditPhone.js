import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditPhone = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchPhone();
  }, []);

  const fetchPhone = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/get-phone/${id}`);
      setName(response.data.data.phoneBookEntry.name);
      setPhone(response.data.data.phoneBookEntry.phone);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/update-phone/${id}`, { name, phone });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Edit Phone</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Phone</button>
      </form>
    </div>
  );
};

export default EditPhone;
