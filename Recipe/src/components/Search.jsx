import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    fetch(`http://localhost:5000/get-recipe/all`, {
      method: 'GET',
      mode: 'cors',
    })
    .then((response) => response.json())
    .then((data) => {
      const recipesArray = Object.keys(data).map((key));
      setRecipes(data);
    })
    .catch((error) => {
      console.error('Error fetching recipes:', error);
    });
}, []);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      
      <Autocomplete
        fullWidth
        freeSolo
        disableClearable
        options={recipes.map((option) => option.title)}
        renderInput={(params) => {
          return <StyledInputBase
            {...params.InputProps}
            fullWidth
            placeholder="Search…"
            onChange={(e) => {
              onSearch(e.target.value)
            }}
            inputProps={{ ...params.inputProps, 'aria-label': 'search' }}
          />
        }
        }
      />
    </Search>

  );
}

