import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewRecord = () => {
  const { id } = useParams();
  const [record, setRecord] = useState({});

  useEffect(() => {
    loadRecord();
  }, []);

  const loadRecord = async () => {
    const result = await axios.get(`/api/record/${id}`);
    setRecord(result.data);
  };

  return (
    <div>
      <h2>Record Details</h2>
      <p>ID: {record.id}</p>
      <p>Name: {record.name}</p>
    </div>
  );
};

export default ViewRecord;
