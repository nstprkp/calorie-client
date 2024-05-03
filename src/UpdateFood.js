import React, { useState, useEffect } from 'react';

const FoodUpdate = () => {
  const [id, setId] = useState('');
  const [dailyAmount, setDaiyAmount] = useState('');
  const [food, setFood] = useState('');
  const [calorie, setCalorie] = useState('');
  const [typeProduct, setTypeProduct] = useState('');
  const [vitamins, setVitamins] = useState([]);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleUpdate = async () => {
    try {
      const foodParameters = {
        dailyAmount,
        food,
        calorie,
        typeProduct,
        vitamins // Добавляем поле vitamins в объект запроса
      };

      const response = await fetch(`https://calorie-count-d44y.onrender.com/api/calorie-count/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(foodParameters)
      });

      if (!response.ok) {
        throw new Error('Failed to update food');
      }

      setError('');
      setIsVisible(true);
      setId('');
      setDaiyAmount('');
      setFood('');
      setCalorie('');
      setTypeProduct('');
      setVitamins([]);
      console.log('Food updated!');
    } catch (error) {
      setError('Error updating food');
      console.error('Error updating food:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 10px',
        maxHeight: '50px',
        backgroundColor: '#b6e7ff',
      }}
    >
      <h1 style={{ color: '#7B68EE', marginBottom: '10px', backgroundColor: '#b6e7ff', } }>Food Update</h1>
      <input
        type="number"
        value={id}
        onChange={e => setId(e.target.value)}
        placeholder="ID"
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#f0f0f0'
        }}
      />
      <input
        type="text"
        value={dailyAmount}
        onChange={e => setDaiyAmount(e.target.value)}
        placeholder="Daily Amount"
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#f0f0f0'
        }}
      />
      <input
        type="text"
        value={food}
        onChange={e => setFood(e.target.value)}
        placeholder="Food"
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#f0f0f0'
        }}
      />
      <input
        type="number"
        value={calorie}
        onChange={e => setCalorie(e.target.value)}
        placeholder="Calorie"
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#f0f0f0'
        }}
      />
      <input
        type="text"
        value={typeProduct}
        onChange={e => setTypeProduct(e.target.value)}
        placeholder="Type Product"
        style={{
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#f0f0f0'
        }}
      />

      <button
        onClick={handleUpdate}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Update Food
      </button>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {isVisible && <p style={{ color: 'green', marginTop: '10px' }}>Food updated!</p>}
    </div>
  );
};

export default FoodUpdate;
