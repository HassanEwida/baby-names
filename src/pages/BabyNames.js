import React, { useState } from 'react';
import { getBabyNames } from '../services/api';
import { useNavigate } from 'react-router-dom';

const BabyNames = () => {
  const [babyNames, setBabyNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchBabyNames = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getBabyNames(searchTerm);
      setBabyNames(data);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'gender parameter must be boy, girl, or neutral.';
      navigate('/NotFound', { state: { errorMessage } });

      console.error('Error fetching baby names:', error.response.data);
      setError('Error fetching baby names. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Baby Names</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="neutral"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary" onClick={fetchBabyNames} disabled={loading}>
              {loading ? 'Loading...' : 'Fetch Baby Names'}
            </button>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <ul className="list-group">
            {babyNames.map((name, index) => (
              <li key={index} className="list-group-item">{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BabyNames;