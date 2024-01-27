import Footer from "./Footer"
import TopBar from "./TopBar"
import React, { useEffect } from "react"
import RecipeCard from "./RecipeCard"
import { Button, Box, Stack, FormControl, Typography, Chip, Select, Menu, MenuItem, Pagination } from "@mui/material"
import { useState } from "react"
import InputLabel from '@mui/material/InputLabel';
import { useNavigate, useParams } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"

export default function ChipRecipes() {
    // const chips = ["burger", "pizza", "beef", "chicken", "pasta", "rice", "salad"];
    const navigate = useNavigate();
    const { chip, page, urlPerPage } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [page_, setPage] = useState(parseInt(page) || 1);
    const [perPage, setPerPage] = useState(parseInt(urlPerPage) || 20);
    const [search, setSearch] = React.useState('');
  
    // const handleClick = (chip) => {
    //     setSearch(chip);
    
    //     navigate(`/recipes/${chip}/${page_}`);
    // };
    
    const handlePageChange = (_, value) => {
        setPage(value);
        navigate(`/recipes/${chip}/${value}`);
      };
    
      const handlePerPageChange = (event) => {
        setPerPage(event.target.value);
        navigate(`/recipes/${chip}/${page_}`);
      };


useEffect(() => {
    fetch(`http://localhost:5000/get-recipes-by-label/${chip}/${page}/${perPage}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response (Recipes by Chips):', data);
        const recipesArray = Object.values(data);
        setRecipes(recipesArray);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [chip, page, perPage]);

  useEffect(() => {
    fetch(`http://localhost:5000/get-chips-count/${chip}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        const total = Math.ceil(data / perPage);
        setTotalPages(total);
      })

      .catch((error) => {
        console.error("Error fetching ", error);
      });
  }, [chip, perPage]);

      return (
        <><div>
          <TopBar recipes={recipes}></TopBar>
          <Typography style={{ marginTop: "20px" }} variant="h4">Searches</Typography>
          {/* <div>
            {chips.map((chip) => (
            <Chip
                style={{ margin: "10px" }}
                key={chip}
                label={chip}
                onClick={() => handleClick(chip)}
            />
            ))}
        </div> */}
          
          {/* <RecipeCard recipes={search ? filteredRecipes : recipes}></RecipeCard>                 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "100px",
              padding: "20px",
              marginBottom: "100px",
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: "25px",
    
            }}
          >
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} index={index} />
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "50px", marginTop: "100px"}}>

    <Stack direction={"row"} spacing={"10px"}>
          <Typography>Recipes Per Page:</Typography>
          {/* <Box sx={{ minWidth: 120 }}> */}
            <FormControl >
              <Select
                value={perPage}
                onChange={handlePerPageChange}
                style={{ minWidth: 70, maxHeight: 30}}
              >
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            </FormControl>
          {/* </Box> */}
        </Stack>
      
        <div >
          <Pagination count={totalPages} 
          // classes={{pagination: classes.pagination}} 
          page={page_}
            onChange={handlePageChange}
          />
        </div>
        <div
        style={{  
          display:"flex", 
          justifyContent:"end",}}>
          <ScrollToTop />
        </div>
      </div>
    
          <div
            style={{
              // position: "fixed",
              // marginTop: "50px",
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