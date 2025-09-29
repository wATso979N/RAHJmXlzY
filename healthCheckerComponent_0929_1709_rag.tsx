// 代码生成时间: 2025-09-29 17:09:49
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define PropTypes or TypeScript Types
const propTypes = {
  url: PropTypes.string.isRequired,
  interval: PropTypes.number,
};

// HealthChecker Component
const HealthChecker = ({ url, interval = 5000 }) => {
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);

  // Function to perform health check
  const checkHealth = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setStatus('Service is up and running!');
      } else {
        setStatus(`Service failed with status: ${response.status}`);
      }
    } catch (err) {
      setError(err);
      setStatus('Service health check failed');
    }
  };

  useEffect(() => {
    // Call health check function immediately on mount
    checkHealth();
    
    // Set interval for health check
    const healthCheckInterval = setInterval(checkHealth, interval);
    
    // Clear interval on unmount
    return () => clearInterval(healthCheckInterval);
  }, [url, interval]);

  return (
    <div>
      <h1>Service Health Check</h1>
      <p>Status: {status}</p>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

// Set propTypes
HealthChecker.propTypes = propTypes;

export default HealthChecker;