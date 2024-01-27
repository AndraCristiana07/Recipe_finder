import { Container, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import TopBar from './TopBar';
import TopSection from './TopSection';
import Improve from './Improve';
import Footer from './Footer';
import Quote from './Quote';
import logo from '../assets/logo.png';
import { useEffect } from 'react';
import ScrollToTop from './ScrollToTop';
import { useState } from 'react';
import RecipeCard from './RecipeCard';
import IngredientSearchField from './SearchByIngredients';

export default function Home() {

    const navigate = useNavigate();
    const [randomRecipe, setRandomRecipe] = useState(null);
    const [mostClickedRecipe, setMostClickedRecipe] = useState(null);

    
    useEffect(() => {
        fetch('http://localhost:5000/get-random-recipe', {
          method: 'GET',
          mode: 'cors',
        })
          .then((response) => response.json())
          .then((data) => {
            setRandomRecipe(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }, []);
    
      const handleRecipeCardClick = (recipeId) => {
        navigate(`/recipe/${recipeId}`);
      };


      // useEffect(() => {
      //   fetch('http://localhost:5000/get-most-clicked', {
      //     method: 'GET',
      //     mode: 'cors',
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       setMostClickedRecipe(data);
      //     })
      //     .catch((error) => {
      //       console.error('Error fetching most clicked recipe:', error);
      //     });
      // }, []);
      useEffect(() => {
        fetch('http://localhost:5000/get-most-clicked', {
          method: 'GET',
          mode: 'cors',
        })
          .then((response) => response.json())
          .then((data) => {
            setMostClickedRecipe(data);
          })
          .catch((error) => {
            console.error('Error fetching most clicked recipe:', error);
          });
      }, []);


      // const handleSearchIngredients = (searchIng) => {
      //   const filteredIngredients = 
      // }
      
    return (
       <><div>
            <TopBar onSearch={() => {}}></TopBar>
            <TopSection></TopSection>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
            <div style={{
                margin:"20px",
                 }}>
                <img  src={logo} alt="logo" width="1400px" height={"400px" } />
            </div>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Quote />
            </div>

        </div>

      
        <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                marginTop: "30px"
            }}>
                <Typography fontFamily={"cursive"} fontSize={"large"}  > Most Clicked recipe: </Typography>
                
        </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: "30px"
        }}
      >
      {mostClickedRecipe && (
        <RecipeCard
          key={mostClickedRecipe.id}
          recipe={mostClickedRecipe}
          onClick={() => handleRecipeCardClick(mostClickedRecipe.id)}
        />
      )}
    </div>
        <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                marginTop: "30px"
            }}>
                <Typography fontFamily={"cursive"} fontSize={"large"}  > Try something new: </Typography>
                
        </div>
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: "30px"
        }}
      >
        {randomRecipe && (
          <RecipeCard
            key={randomRecipe.id}
            recipe={randomRecipe}
            onClick={() => handleRecipeCardClick(randomRecipe.id)}
          />
        )}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '30px',
        }}
      >
        <IngredientSearchField recipes={[]} onSearch={(value) => console.log(value)} />
      </div>
      
        <div
        style={{  
          display:"flex", 
          justifyContent:"end",}}>
          <ScrollToTop />
        </div>

        <div
            style={{
                marginTop: "50px",
                // position: "fixed",
                bottom: "0",
                width: "100%",
                backgroundColor: "white",
                padding: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}>
                <Footer></Footer>
            </div></>
            
    )
}