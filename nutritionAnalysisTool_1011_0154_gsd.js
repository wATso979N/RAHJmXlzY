// 代码生成时间: 2025-10-11 01:54:23
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the function for the component
const NutritionAnalysisTool = ({ initialNutritionData }) => {
  // State to manage nutrition data
  const [nutritionData, setNutritionData] = useState(initialNutritionData);

  // Handle changes to the nutrition data
  const handleNutritionChange = (event) => {
    const { name, value } = event.target;
    setNutritionData(prevNutritionData => ({
      ...prevNutritionData,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Nutrition Analysis Tool</h1>
      <form>
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={nutritionData.calories || ''}
            onChange={handleNutritionChange}
          />
        </label>
        <label>
          Protein:
          <input
            type="number"
            name="protein"
            value={nutritionData.protein || ''}
            onChange={handleNutritionChange}
          />
        </label>
        <label>
          Carbohydrates:
          <input
            type="number"
            name="carbohydrates"
            value={nutritionData.carbohydrates || ''}
            onChange={handleNutritionChange}
          />
        <label>
          Fat:
          <input
            type="number"
            name="fat"
            value={nutritionData.fat || ''}
            onChange={handleNutritionChange}
          />
        </label>
      </form>
      <button
        onClick={() => console.log('Nutrition Data:', nutritionData)}
      >
        Analyze
      </button>
    </div>
  );
};

// PropTypes validation
NutritionAnalysisTool.propTypes = {
  initialNutritionData: PropTypes.shape({
    calories: PropTypes.number,
    protein: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
  }).isRequired,
};

// Export the component
export default NutritionAnalysisTool;