import { Grid } from '@mui/material';
import SideNav from '../components/sideNavbar/SideNav';

export default function Landing() {
    return (
        <Grid container direction="row">
            <Grid item xs={1.7} sx={{backgroundColor: 'secondary.main'}}>
                <SideNav />
            </Grid>
            <Grid item xs style={{backgroundColor: 'white', borderRadius: '50px'}} m={5}>
                <h1>ahmed</h1>
            </Grid>
        </Grid>
    );
};