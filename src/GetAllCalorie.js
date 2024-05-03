import './GetAllCalorie.css'
import React, { useState } from 'react';

const CalorieCounter = () => {
    const [foods, setFoods] = useState([]);

    const fetchFoods = () => {
        fetch('https://calorie-count-d44y.onrender.com/api/calorie-count')
        .then(response => response.json())
        .then(data => {
            setFoods(data);
        })
        .catch(error => {
            console.error(error);
        })
    };

  return (
    <div>
        <h1 className="get-all-header">
            Food List
        </h1>
        <button className="botton-style" onClick={() => fetchFoods()}>
            Get all Food
        </button>
        <ul>
        {foods.map(food => (
          <li key={food.id} className="key-style">
            <strong>ID:</strong> {food.id}<br />
            <strong>Daily amount:</strong> {food.dailyAmount}<br />
            <strong>Food:</strong> {food.food}<br />
            <strong>Calorie:</strong> {food.calorie}<br />
            <strong>Type Product:</strong> {food.typeProduct}<br />
            {food.vitamins && food.vitamins.length > 0 && (
              <React.Fragment>
                <strong>Vitamins:</strong> {food.vitamins.join(', ')}
              </React.Fragment>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalorieCounter;
