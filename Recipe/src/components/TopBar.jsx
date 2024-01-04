import React from "react";
import {AppBar,Toolbar,Typography, TextField, IconButton, Stack, Box} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import SearchField from "./Search";

const filter = createFilterOptions();

function TopBar(){

    const navigate = useNavigate();
    const [value, setValue] = React.useState(null);
    const handleSearch = (value) => {   
        // TODO
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{background: "#4F9D69"}}>
                <Toolbar>
                <IconButton
                    style={{color:"#0d2e17"}}
                    size="large"
                    edge="start"
                    // color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <MenuBookIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    style={{color:"#0d2e17"}}
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Pantry Wizard
                </Typography>
                <SearchField onSearch={handleSearch}/>
                 
                <IconButton  onClick={() => navigate("/")}> HOME</IconButton>
                <IconButton  onClick={() => navigate("/recipes")}> RECIPES</IconButton>
                <IconButton  onClick={() => navigate("/settings")}> SETTINGS</IconButton>

            </Toolbar>
        </AppBar>
    </Box>
        
    )
}

export default TopBar;