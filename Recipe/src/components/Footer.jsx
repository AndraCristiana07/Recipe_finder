import { Container, Typography, Stack, Button} from '@mui/material';

export default function Footer(){
    return(
        <Container>
            
                <Stack direction="column" padding="15px">
                    <Typography variant='h5'><strong>PantryWizard.com</strong> </Typography>
                    <Typography><strong>Pantry Wizard:</strong> Your Culinary Companion for Creative Cooking! Turn your ingredients into delightful dishes with ease</Typography>
                </Stack>
                <Stack direction="column"  padding="15px">
                    <Typography  variant='h5'><strong>Contact us:</strong></Typography>
                    <Typography><strong>Phone Number:</strong> +353 342 431 345</Typography>
                    <Typography><strong>Email:</strong> pantrywizard@wiz.com</Typography>
                    <Typography><strong>Address:</strong> 123 Main St, City, Country</Typography>
                </Stack>

                <Typography><strong>@2023 | All Rights Reserved</strong></Typography>
            
        </Container>
    )
}