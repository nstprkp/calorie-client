import React, { useState, useEffect } from 'react';

const FoodDelete = () => {
  const [id, setId] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://calorie-count-d44y.onrender.com/api/calorie-count/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete food');
      }

      setId('');
      setIsVisible(true);
      console.log('Food deleted!');
    } catch (error) {
      console.error('Error deleting food:', error);
    }
  };

  return (
    <div>
      <h1 style={{ color: '#F08080', marginBottom: '20px' }}>Delete Food</h1>
      <input
        type="number"
        value={id}
        onChange={e => setId(e.target.value)}
        placeholder="Enter ID of food to delete"
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: '#f0f0f0',
          border: 'none',
          width: '96%'
        }}
      />
      <button
        onClick={handleDelete}
        style={{
          backgroundColor: '#f44336',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          width: '97%'
        }}
      >
        Delete Food
      </button>
      {isVisible && <div style={{ marginTop: '10px', color: 'green' }}>Food deleted!</div>}
    </div>
  );
};

export default FoodDelete;
