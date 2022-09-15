import { 
  Container, 
  TextField, 
  Grid, 
  Box, 
  Typography, 
  Button 
} from '@mui/material';
import Link from 'next/link';

export default function Home() {

  return (
    // <Layout pageName='login page'>
      <Container maxWidth="sm">
        <Grid 
          sx={{height: '100vh'}}
          container
          direction="column"
          alignItems='center' 
          justifyContent="center"
          gap={15}
        >

          <Typography 
            variant="h3"
            align='center'
            sx={{color: 'primary.main'}}
          > 
            Welcome to sadma chat !
          </Typography>

          <Box sx={{width: '100%'}}>
            <TextField 
              fullWidth
              id="standard-basic" 
              label="Phone Number" 
              variant="standard"
              sx={{mb: 5}}
            />
            
            <Link href='/landing'>
              <Button fullWidth variant="contained">Submit</Button>
            </Link>
          </Box>
        </Grid>
      </Container>
    // </Layout>
  );
};