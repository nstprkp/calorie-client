import React, { useState, useEffect } from 'react';

const CreateFood = () => {
    const [foods, setFoods] = useState([]);
    const [dailyAmount, setDaiyAmount] = useState('');
    const [food, setFood] = useState('');
    const [calorie, setCalorie] = useState('');
    const [typeProduct, setTypeProduct] = useState('');
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

    const handleCreateFood = () => {
        const newFood = {
            dailyAmount: dailyAmount,
            food: food,
            calorie: calorie,
            typeProduct: typeProduct
        };
      
        fetch('http://localhost:8080/api/calorie-count', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify([newFood])
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error creating food');
            }
        })
        .then(data => {
            setIsVisible(true);
            console.log('Food created:', data);
            setDaiyAmount('');
            setFood('');
            setCalorie('');
            setTypeProduct('');
            setFoods([...foods, data]);
            setError('');
        })
        .catch(error => {
            console.error('Error creating food:', error);
            setError('Error creating food');
        });
    };

    return (
        <div>
        <h1 style={{ color: '#7B68EE', marginBottom: '10px'} }>Create Food</h1>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '0 15px' }}>
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
              onClick={() => {
                handleCreateFood();
              }}
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Create Food
            </button>
          </div>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          {isVisible && <p style={{ color: 'green', marginTop: '10px' }}>New Food created!</p>}
        </div>
      );
};

export default CreateFood;