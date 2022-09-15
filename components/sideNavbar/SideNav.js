import { Container, Grid, Typography } from "@mui/material";
import RoundedImg from '../../components/imageComponent/RoundedImg';

export default function SideNav() {
    return (
        <Container style={{height: '100vh'}}>
            <Grid 
                container
                direction='column'
                gap={3} 
                justifyContent='center'
                alignItems='center' 
                width='100%' 
                py={5}
            >
                <RoundedImg 
                    src={'/images/profile.jpg'}
                    height={120}
                    width={120}
                    alt={''}
                />
                <Typography variant="h5" sx={{color: 'primary.main'}}>
                    Omar Elsayad
                </Typography>
                <Typography variant="h5" sx={{color: 'primary.main'}}>
                    01154688380
                </Typography>
            </Grid>
        </Container>
    )
};