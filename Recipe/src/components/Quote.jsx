import { Container, Typography, Card, Box } from "@mui/material";
import React from "react";

export default function Quote(){

    const quotes = [
        {
            q: 'Life is uncertain. Eat desert first.',
            author: 'Ernestine Ulmer'
        },
        {
            q:'All happiness depends on a leisurely breakfast.',
            author: 'John Gunther'
        },
        {
            q: 'A recipe has no soul. You, as the cook, must bring soul to the recipe.',
            author: 'Thomas Keller'
        },
        {
            q: 'You do not need a silver fork to eat good food.',
            author: 'Paul Prudhomme'
        },
        {
            q:'A balanced diet is a cookie in each hand.',
            author: 'Barbara Johnson'
        },
        {
            q:'People who love to eat are always the best people.',
            author:'Julia Child'
        },
        {
            q:'To eat is a necessity, but to eat intelligently is an art.',
            author:'François de la Rochefoucauld'
        },
        {
            q:'We all eat, and it would be a sad waste of opportunity to eat badly.',
            author:'Anna Thomas'
        },
        {
            q:'Life is a combination of magic and pasta.',
            author:'Federico Fellini'
        },
        {
            q:'One cannot think well, love well, sleep well, if one not has not dined well.',
            author:'Virginia Woolf'
        },
        {
            q:'Everything you see, I owe to spaghetti.',
            author:'Sophia Loren'
        }

    ];
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  
    return(
        <Box  display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="70px"
        marginBottom="30px">
            <Card justifyContent="space-between" 
            alignItems="center" style={{
                margin:"0px", 
                padding: "20px", 
                maxWidth:"1000px", 
                minWidth: "1000px", 
                borderRadius: "20px",
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                background: "#292F36",
                color: "#E2F4E9"}}>
                <Typography variant="h4" align="center">
                    "{randomQuote.q}"
                </Typography>
                <Typography sx={{ fontStyle: 'italic', m: 1 }} variant="h6" align="right" style={{marginBottom:"20px"}}>
                    - {randomQuote.author}
                </Typography>
                
        
                </Card>
            </Box>
    )

}