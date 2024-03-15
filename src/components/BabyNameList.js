import React, { useState, useEffect } from 'react';
import { getBabyNames } from '../services/api';
import './BabyNames.css';

const BabyNames = () => {
  const [babyNames, setBabyNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBabyNames = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBabyNames();
      setBabyNames(data);
    } catch (error) {
      setError('Error fetching baby names. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="baby-names">
      <h1>Baby Names</h1>
      <button onClick={fetchBabyNames} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Baby Names'}
      </button>
      {error && <p className="error">{error}</p>}
      <ul>
        {babyNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BabyNames;