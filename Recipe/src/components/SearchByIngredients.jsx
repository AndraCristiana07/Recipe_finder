import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';
import { Dialog } from '@mui/material';
import RecipeDialog from './RecipeDialog';
import { useNavigate, useParams } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function IngredientSearchField({recipes, onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [open, setOpenDialog] = useState(false);
  const { page, urlPerPage } = useParams();
  const navigate = useNavigate();

  const [page_, setPage] = useState(parseInt(page) || 1);
  const [perPage, setPerPage] = useState(parseInt(urlPerPage) || 20);


  const handleIngredientSelect = (ingredient) => {
    fetch(`http://localhost:5000/get-all-recipes-by-ingredients/${ingredient}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Recipes for ingredient:', ingredient, data);
      })
      .catch((error) => {
        console.error('Error fetching recipes by ingredient:', error);
      });
  };

  const allIngredients = Array.from(
    new Set(
      recipes.reduce((acc, recipe) => {
        const ingredientsList = recipe.ingredients.map((ingredient) => ingredient.toLowerCase().trim());
        return acc.concat(ingredientsList);
      }, [])
    )
  );

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSearch = (value, event) => {
    setSearchValue(value);
    onSearch(value);
    if (value && event  && event.key === 'Enter') {
      navigate(`/search/${value}/${page_}`);
    }
  };
  // const handleSearch = (value, event) => {
  //   setSearchValue(value);
  //   onSearch(value);
  //   if (value && event.key === 'Enter') {
  //     fetch(`http://localhost:5000/get-recipes-by-ingredients/${value}`, {
  //       method: 'GET',
  //       mode: 'cors',
  //     })
  //      .then((response) => response.json())
  //         .then((data) => {
  //           console.log('Recipes for ingredient:', value, data);
  //           navigate(`/search/${value}`);
  //         })
  //         .catch((error) => {
  //           console.error('Error fetching recipes by ingredient:', error);
  //         });
  //   }
  // };


  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Autocomplete
        fullWidth
        freeSolo
        disableClearable
        options={allIngredients}
        renderInput={(params, ingredient) => (
          <StyledInputBase
            {...params.InputProps}
            fullWidth
            placeholder="Search Ingredients…"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            inputProps={{ ...params.inputProps, 'aria-label': 'search' }}
          />
        )}
        onChange={(event, value) => {
          handleIngredientSelect(value);
          handleSearch(value, event);
          // handleOpenDialog();  
        }}
      />
      {/* <RecipeDialog
        recipe={selectedRecipe}
        open={open}
        handleClose={handleCloseDialog}
        handleClickOpen={handleOpenDialog}
      /> */}
    </Search>
  );
}
