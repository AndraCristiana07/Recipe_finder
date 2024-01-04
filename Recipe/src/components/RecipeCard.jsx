import { Box, Card, Grid,  CardActions, CardContent, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function RecipeCard( {recipe, index}){

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      

      const stepsArray = recipe.steps.split('\n');

      console.log(typeof recipe.ingredients);
    return(
            <div>   
            <Card
              onClick={handleClickOpen}
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
              key={index}
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
                />
              </CardContent>
            </Card>
           
           
            <Dialog
                fullScreen
                open={open}
                
            >
        <AppBar sx={{ position: 'relative' }} style={{background: "#4F9D69"}}>
        <Toolbar >
            <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
            >
                <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {recipe.title}
            </Typography>
        </Toolbar>
        
        </AppBar>
        <div style={{marginTop:"100px", display:"flex", justifyContent:"center",  alignItems:"center"}} >
            <Card 
            style={{
                background:"#b7d6c1",
                display:"flex", 
                alignItems:"center", 
                justifyContent:"center",
                maxWidth:"700px",
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                marginBottom: "50px"
               }}>
                
                <Stack direction={"column"} style={{marginTop:"20px",justifyContent:"center", alignItems:"center"}}>
                <img 
                    src={
                      'data:image/jpeg;charset=utf-8;base64, ' +
                      recipe.image.slice(2, recipe.image.length - 1)
                    }
                    alt={recipe.title}
                    height="200px"
                    
                    width={"300px"}
                  />
                    <div>
                        <Typography fontFamily={"cursive"} fontSize={"large"} style={{marginTop:"20px", display:"flex", justifyContent:"center",}}>Ingredients:</Typography>
                        <div style={{ padding: "20px" }}>
                            <List>
                                {recipe.ingredients.map((ingredient, index) => (
                                
                                <ListItem key={index}>
                                    <FiberManualRecordIcon fontSize="small"/>
                                    <ListItemText primary={ingredient} />
                                </ListItem>
                                ))}
                            </List>
                        </div>
                        

                    </div>
                        <div >
                        <Typography fontFamily={"cursive"} fontSize={"large"} style={{display:"flex", justifyContent:"center",}}>How you cook it:</Typography>
                        <div style={{padding:"20px"}}>
                        {stepsArray.map((step, index) => (
                          <div key={index}>
                            <li style={{ fontWeight: 'bold' }}>Step {index + 1}:</li> {step}
                          </div>
                        ))}


                        </div>
                        </div>
                </Stack>
            </Card>
        </div>
      </Dialog>
      </div>
    )

}