import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditRecord = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadRecord();
  }, []);

  const loadRecord = async () => {
    const result = await axios.get(`/api/record/${id}`);
    setName(result.data.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/record/${id}`, { name });
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Record</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button type="submit">Update Record</button>
      </form>
    </div>
  );
};

export default EditRecord;
