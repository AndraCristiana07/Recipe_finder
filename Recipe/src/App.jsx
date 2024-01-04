import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home.jsx";
import Recipes from "./components/Recipes.jsx";
import Settings from "./components/Setting.jsx";
import TestRecipes from "./components/TestAPI.jsx";
import Methods from "./components/Methods.jsx";

function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/test" element={<TestRecipes/>}/>
      <Route path="/method" element={<Methods/>}/>

    </Routes>
  </BrowserRouter>
  );
};

export default App;