import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    const result = await axios.get('/api/records');
    setRecords(result.data);
  };

  const deleteRecord = async (id) => {
    await axios.delete(`/api/record/${id}`);
    loadRecords();
  };

  return (
    <div>
      <h2>Record List</h2>
      <Link to="/add">Add New Record</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>
                <Link to={`/view/${record.id}`}>View</Link>
                <Link to={`/edit/${record.id}`}>Edit</Link>
                <button onClick={() => deleteRecord(record.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
