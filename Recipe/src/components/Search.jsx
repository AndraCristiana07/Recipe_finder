import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Dialog } from '@mui/material';
import RecipeDialog from './RecipeDialog';
import { useNavigate, useParams } from "react-router-dom"
import Recipes from './Recipes';

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
    // vertical padding + font size from searchIcon
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


export default function SearchField({onSearch}) {

  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [open, setOpenDialog] = useState(false);

  
  const { page, urlPerPage } = useParams();
  const navigate = useNavigate();

  const [page_, setPage] = useState(parseInt(page) || 1);
  const [perPage, setPerPage] = useState(parseInt(urlPerPage) || 20);

  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (_, value) => {
    setPage(value);
    navigate(`/recipes/${value}`);
  };

  const handlePerPageChange = (event) => {
    setPerPage(event.target.value);
    navigate(`/recipes/${page_}`);
  };

const handleOpenDialog = () => {
  setOpenDialog(true);
};

const handleCloseDialog = () => {
  setOpenDialog(false);
};

useEffect(() => {
  if (searchValue.length >= 2) {
    fetch(`http://localhost:5000/get-recipe/all`, {
      method: 'GET',
      mode: 'cors',
    })
    .then((response) => response.json())
    .then((data) => {
      const recipesArray = Object.keys(data).map((key) => {
        const recipe = data[key];
        return {
          ...recipe,
          id: recipe.id, 
          
        };
      });
      setRecipes(recipesArray);
    })
    .catch((error) => {
      console.error('Error fetching recipes:', error);
    });
  } else {
    setRecipes([]);
  }
}, [searchValue]);

useEffect(() => {
  // fetch("http://localhost:5000//get-some-recipes/1/25", {
  fetch(`http://localhost:5000/get-all-recipes/${page_}/${perPage}`, {
    method: 'GET',
    mode: 'cors',
  })
    .then((response) => response.json())
    .then((data) => {
      const recipesArray = Object.values(data);
      setRecipes(recipesArray);
      })
    .catch((error) => {
      console.error("Error:", error);
    });
}, [page_, perPage]);

  const handleSearch = (value) => {
    setSearchValue(value);
    onSearch(value);
  };

  const handleTitleSelect = (id) => {
    const selected = recipes.find((recipe) => recipe.id === id);
    // const selected = recipes[index];
    setSelectedRecipe(selected);
    // setOpenDialog(true);
  }; 

  let filteredRecipes = [];
  if (searchValue.length >= 2) {
    filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      
      <Autocomplete
        fullWidth
        freeSolo
        disableClearable
        getOptionLabel={(option) => option.title || ''}
        options={filteredRecipes.map((recipe) => ({
          title: recipe.title,
          id: recipe.id, 
        }))}
        renderInput={(params, recipe) => {
          return (
            <StyledInputBase
              {...params.InputProps}
              // key={recipe.id}
              fullWidth
              placeholder="Search…"
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              inputProps={{ ...params.inputProps, 'aria-label': 'search' }}
            />
          );
        }}
        onChange={(event, value) => {
          handleTitleSelect(value.id);
          handleOpenDialog();
        }}
      />
      <RecipeDialog
      
        recipe={selectedRecipe}
        open={open}
        handleClose={handleCloseDialog}
        handleClickOpen={handleOpenDialog}
/>
      
    </Search>

  );
}

