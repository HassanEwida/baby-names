import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  const errorMessage = location.state?.errorMessage || 'An error occurred. Please try again later.';

  return (
    <div className="container text-center">
      <h1 className="mb-4">404 - Page Not Found</h1>
      <p className="text-danger">{errorMessage}</p>
      <p>The requested page could not be found.</p>
    </div>
  );
};

export default NotFound;