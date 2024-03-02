import React, { useState } from 'react';
import { TextField, Stack, TextareaAutosize, Button, Typography } from '@mui/material';
import TopBar from "./TopBar";

export default function RecipeForm() {
  const [recipeData, setRecipeData] = useState({
    id: '',
    title: '',
    ingredients: '',
    steps: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:5000/add-recipe', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipeData),
    })
      .then((response) => response.json())
      .then((data) => {
        const recipesArray = Object.values(data);
        console.log(data)
        console.log('Recipe created successfully:', data);
      })
      .catch((error) => {
        console.error('Error creating recipe:', error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <TopBar></TopBar>
      <Stack direction={"column"}
        style={{ marginTop: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography style={{ marginBottom: "20px" }}>Create a Recipe</Typography>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: '600px', margin: 'auto' }}>
          <TextField
            fullWidth
            label="Recipe Title"
            name="title"
            value={recipeData.title}
            onChange={handleChange}
            variant="outlined" />
          <TextField
            fullWidth
            label="Ingredients"
            name="ingredients"
            value={recipeData.ingredients}
            onChange={handleChange}
            variant="outlined" />
          <TextareaAutosize
            aria-label="Steps"
            placeholder="Steps"
            name="steps"
            value={recipeData.steps}
            onChange={handleChange}
            style={{ width: '100%', margin: '10px 0', padding: '8px', borderRadius: '4px', border: '1px solid #ced4da' }} />
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <Button type="submit" variant="contained" style={{ background: "#4F9D69", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              Create Recipe
            </Button>
          </div>
        </form>
      </Stack>
    </>
  );
}
