import { Container, Typography, Stack, Button} from '@mui/material';
import Images from './Images';
import SimpleGrow from './Test';
import { useNavigate } from 'react-router-dom';

export default function TopSection(){

    const navigate = useNavigate();
    return(
        <Container>
            <Stack 
            direction="row" justifyContent="space-between" 
            alignItems="center"
            style={{margin: "20px"}}
            >
                <Stack direction="column"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width:"400px"
                }}>
                    <Typography variant="h4">
                        Welcome to Pantry Wizard!
                    </Typography>
                    <Typography
                        style={{marginTop: "20px"}}>
                        At Pantry Wizard, we're passionate about simplifying the cooking experience and empowering you to create delicious meals with ease. We understand the joy of cooking and the occasional challenge of staring at a limited pantry, wondering what to make. That's why we've created a platform that turns your ingredients into culinary inspiration.
                    </Typography>
                    
                    <Typography>
                    How does it work? It's effortless! Simply input the ingredients you have on hand, and our intelligent algorithm will work its magic, providing you with a curated selection of recipes tailored to your available ingredients. No more last-minute grocery runs or wasted food—just simple, creative, and delicious meals made from what you already have.
                    </Typography>
                    
                    <Button 
                    onClick={() => navigate("/recipes")}
                    variant="contained" style={{background:"#4F9D69", borderRadius: "15px",
							width: "200px", marginTop: "20px"}}>
                        Explore
                    </Button>
                </Stack>
                
                <Images/>
                {/* <SimpleGrow></SimpleGrow> */}
                
            </Stack>

        </Container>
    )
}