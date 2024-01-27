import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import Recipes from "./components/Recipes.jsx";
import Settings from "./components/Setting.jsx";
import TestRecipes from "./components/TestAPI.jsx";
import Methods from "./components/Methods.jsx";
import ChipRecipes from "./components/ChipRecipes.jsx";
import IngredientsRecipes from "./components/IngredientsRecipes.jsx";
import RecipeForm from "./components/CreateRecipe.jsx";
function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/recipes" element={<Recipes/>}/> */}
      <Route path="/recipes/:page/" element={<Recipes />} />
      <Route path="/recipes/:chip/:page/" element={<ChipRecipes />} />
      <Route path="/search/:ingredient/:page/" element={<IngredientsRecipes />} />
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/test" element={<TestRecipes/>}/>
      <Route path="/method" element={<Methods/>}/>
      <Route path="/create-recipe" element={<RecipeForm/>}/>

    </Routes>
  </BrowserRouter>
  );
};

export default App;