import React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { withStyles } from "@material-ui/core";
import { Box, Card, Grid,  CardActions, CardContent, Stack, Button } from "@mui/material"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {useState} from 'react';

const RecipeDialog = ({ recipe, open, handleClose, handleClickOpen }) => {
  if (!recipe) {
    return null; 
  }
  const styles = {
    dialog: {
      backgroundImage: `url(data:image/jpeg;charset=utf-8;base64,${recipe.image.slice(2, recipe.image.length - 1)})`,
      backgroundSize: 'cover',
      backdropFilter: 'blur(10px)',
      backgroundPosition: 'center',
    }
  };
  const [loader, setLoader] = useState(false);
  const download = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = (pdfHeight - imgHeight * ratio) / 2;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('recipe.pdf');
    })
  };
  // const download = () =>{
  //   const capture = document.querySelector('.actual-receipt');
  //   setLoader(true);
  //   html2canvas(capture).then((canvas)=>{
  //     const imgData = canvas.toDataURL('img/png');
  //     const doc = new jsPDF('p', 'mm', 'a4');
  //     const componentWidth = doc.internal.pageSize.getWidth();
  //     const componentHeight = doc.internal.pageSize.getHeight();
  //     doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
  //     setLoader(false);
  //     doc.save('receipt.pdf');
  //   })
  // }

  const stepsArray = recipe.steps.split('\n');
  const pdfRef = React.useRef();

  const DialogWithBackgroundImage = withStyles(styles)(({ classes }) => (
    <Dialog 
    fullScreen
    open={open}
    classes={{paper: classes.dialog}}
    
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
<Card ref={pdfRef}
style={{
    background:"#b7d6c1",
    display:"flex", 
    alignItems:"center", 
    justifyContent:"center",
    maxWidth:"700px",
    borderRadius: '10px',
    // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
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
                        {/* <FiberManualRecordIcon fontSize="small"/> */}
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
<div style={{display: "flex", justifyContent: "center", marginBottom: "10px"}}>
  <Button onClick={download}  disabled={!(loader===false)} >
      {loader?(
        <span>Downloading</span>
      ):(
        <span>Download Recipe</span>
      )}
  </Button>
</div>

</Dialog>
  ));

  return <DialogWithBackgroundImage />;
};

export default RecipeDialog;
