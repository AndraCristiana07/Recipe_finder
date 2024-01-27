import { Button } from "@mui/material";
import React, { useState } from "react";
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

export default function ScrollToTop(){
    const [visible, setVisible] = useState();

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
      }; 

      const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
        }); 
      }; 
      window.addEventListener('scroll', toggleVisible); 

      return (
        <Button>
            <ArrowCircleUpTwoToneIcon fontSize="large" onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none', color:"#4F9D69"}}
            />

        </Button>
      )
}