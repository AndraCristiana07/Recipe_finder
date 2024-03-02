import { Box, Card, Grid,  CardActions, CardContent, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { withStyles } from "@material-ui/core";
import RecipeDialog from "./RecipeDialog";
import { useState } from "react";
export default function RecipeCard( {recipe, index, handleRecipeCardClick}){

  
 
    // const Transition = React.forwardRef(function Transition(props, ref) {
    //     return <Slide direction="up" ref={ref} {...props} />;
    //   });
    const [clickCount, setClickCount] = useState(recipe.clicks);

      const [open, setOpen] = React.useState(false);

      // const handleClickOpen = () => {
      //   setOpen(true);
      //   // updateClickCount(recipe.id);
      //   if (handleRecipeCardClick) {
      //     updateClickCount(recipe.id);
      //   }
      // };
    
      const handleClickOpen = () => {
        setOpen(true);
        // updateClickCount(recipe.id);
        // if (handleClickOpen) {
        //   handleRecipeCardClick(recipe.id);
        // }
      };
      const handleClose = () => {
        setOpen(false);
      };
    //   const updateClickCount = (recipeId) => {
    //     fetch(`http://localhost:5000/update-click-count/${recipeId}`, {
    //         method: "POST",
    //         body: JSON.stringify({}),
    //         mode: 'cors',
    //     })
    //     .then((response) => {
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log("Click count updated:", data);
    //         console.log("Current clicks:", data.recipe.clicks);
    //     })
    //     .catch((error) => {
    //         console.error("Error updating click count:", error);
    //     });
    // };
    
      // const handleClick = () => {
      //   console.log("Recipe ID:", recipe.id);
      
      //   fetch(`http://localhost:5000/update-click-count/${recipe.id}`, {
      //     method: "POST",
      //     mode: 'cors',
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       setClickCount(data.recipe.clicks);
      //     })
      //     .catch((error) => {
      //       console.error("Error updating click count:", error);
      //     });
      
      //   setOpen(true);
      // };
      
    
      const stepsArray = recipe.steps.split('\n');

      // console.log(typeof recipe.ingredients);
    return(
            <div>   
            <Card 
              onClick={handleClickOpen}
              // onClick={handleClick}
              sx={{
                minWidth: 330,
                maxWidth: 330,
                minHeight: 300,
                maxHeight: 300,
                marginTop: '10px',
                backgroundColor: '#F5F5F5',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
                  cursor: 'pointer',
                },
                '&:active': {
                  transform: 'scale(1.05)',
                },
              }}
              // key={index}
              key={recipe.id}
              label={recipe}
            >
              <CardContent
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center', 
                }}>
                <Typography fontFamily={'cursive'} style={{ marginBottom: '10px' }}>
                  {recipe.title}
                </Typography>
                <img
                  src={
                    'data:image/jpeg;charset=utf-8;base64, ' +
                    recipe.image.slice(2, recipe.image.length - 1)
                  }
                  alt={recipe.title}
                  height="200px"
                  width="300px"
                />
              </CardContent>
            </Card>
           <RecipeDialog
           
            recipe={recipe}
            open={open}
            handleClose={handleClose}
            handleClickOpen={handleClickOpen}
          />
           
      </div>
    )

}