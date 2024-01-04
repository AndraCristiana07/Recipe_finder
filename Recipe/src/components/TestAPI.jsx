import React, { useState, useEffect } from 'react';

const TestRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api_id = '4575f70d';
      const api_key = '3feb6560dca5b62dc1a3416165232c40';
      const url = `https://api.edamam.com/search?q=&app_id=${api_id}&app_key=${api_key}`;

      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setRecipes(data.hits || []); 
        } else {
          console.error('Failed to fetch recipes');
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Recipes</h1>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ maxWidth: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestRecipes;
