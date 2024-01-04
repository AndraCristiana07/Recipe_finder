import Footer from "./Footer"
import TopBar from "./TopBar"
import React, { useEffect } from "react"
import RecipeCard from "./RecipeCard"
import { Button, Box, Stack, FormControl, Container, Typography, Chip, Select, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import InputLabel from '@mui/material/InputLabel';


export default function Recipes() {
 
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const chips = ['pizza', 'burger', 'cookies'];
    const [search, setSearch] = React.useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const handleSearch = (event) => {
        setSearch(event);
        // filteredRecipes(event);
    };
    const [recipes, setRecipes] = useState([]);

    // const [offset, setOffset] = useState(1); 
    // const [perPage, setPerPage] = useState(25); 
    const [page, setPage] = useState(1); 
    // const perPage = 16; 
    const [perPage, setPerPage] = useState(20);
  
    const handleNextPage = () => {
        setPage(page + 1); 
    };
    
    const handlePrevPage = () => {
        if (page > 1) {
          setPage(page - 1); 
        }
    };

    const handlePerPageChange = (event) => {
        setPerPage(event.target.value);
    };

    useEffect(() => {
        // fetch("http://localhost:5000//get-some-recipes/1/25", {
        fetch(`http://localhost:5000/get-all-recipes/${page}/${perPage}`, {
            //TODO nr pag in URl
          method: 'GET',
          mode: 'cors',
        })
        .then((response) => response.json())
        .then((data) => {
          const recipesArray = Object.keys(data).map((key) => {
            const ingredientsArray = data[key].ingredients
            //   .slice(1, -1) 
            //   .split(', ')  
              .match(/'([^']+)'/g).map(match => match.slice(1, -1));
      
            return { ...data[key], ingredients: ingredientsArray };
          }); 
      
          setRecipes(recipesArray);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, [page, perPage]);
      

    // const filterRecipes = (event) => {
    //     const filtered = recipes.filter((recipe) => {
    //         return recipe.title.toLowerCase().includes(event.toLowerCase());
    //     });
    //     setFilteredRecipes(filtered);
    // };

    // const [search, setSearch] = useState('');
    // const [recipes, setRecipes] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     // Replace 'YOUR_APP_ID' and 'YOUR_API_KEY' with your actual credentials
    //     const api_id = '4575f70d';
    //     const api_key = '3feb6560dca5b62dc1a3416165232c40';
    //     const url = `https://api.edamam.com/search?q=${search}&app_id=${api_id}&app_key=${api_key}`;

    //     try {
    //       const response = await fetch(url);
    //       if (response.ok) {
    //         const data = await response.json();
    //         setRecipes(data.hits || []); // Assuming 'hits' contains the recipe data
    //       } else {
    //         console.error('Failed to fetch recipes');
    //       }
    //     } catch (error) {
    //       console.error('Error fetching recipes:', error);
    //     }
    //   };

    //   if (search !== '') {
    //     fetchData();
    //   }
    // }, [search]);

    // const handleSearch = (event) => {
    //   setSearch(event);
    // };


    return (
        <><div>
            <TopBar></TopBar>
            {/* <div style={{ padding: "20px" }}> */}
                <Typography style={{marginTop:"20px"}} variant="h4">Searches</Typography>
                <div style={{ margin: '20px 0' }}>
            <Stack direction={"row"} spacing={"10px"}>
                <Typography>Recipes Per Page:</Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl >
                        <InputLabel>Pages</InputLabel>
                        <Select
                            label="Recipes Per Page"
                            value={perPage}
                            onChange={handlePerPageChange}
                            style={{ minWidth: 100 }}
                            >
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
      </div>
                {/* <div>
                    {chips.map((chip) => (<Chip style={{margin:"10px"}} key={chip} label={chip} onClick={() => handleSearch(search)} />))}
                </div> */}
                {/* <RecipeCard recipes={search ? filteredRecipes : recipes}></RecipeCard>                 */}
                <div
                    style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "100px",
                    padding: "20px",
                    marginBottom:"400px",
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: "25px",
                    
                    }}
                >
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} index={index} />
                ))}
                </div>
                {/* <RecipeCard recipes={recipes} 
                // search={search}
                ></RecipeCard> */}
            {/* </div> */}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom:"300px"}}>
        <Button onClick={handlePrevPage} variant="outlined" disabled={page === 1} style={{background:"#4F9D69", borderRadius: "15px"}}>
          Previous Page
        </Button>
        <Typography variant="body1" style={{ margin: "0 20px"}}>
          Page: {page}
        </Typography>
        <Button onClick={handleNextPage} variant="outlined" style={{background:"#4F9D69", borderRadius: "15px", color:"#FFFFFF"}}>
          Next Page
        </Button>
      </div>
        
        <div
            style={{
                position: "fixed",
                marginTop: "100px",
                bottom: "0",
                width: "100%",
                backgroundColor: "white",
                padding: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}>

                <Footer></Footer>
            </div>
            </>
    )

}