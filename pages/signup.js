import { 
  Container, 
  TextField, 
  Box, 
  Typography,
  Button,
  Avatar
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useSignupValidation from '../container/log/useSignupValidation';
import AlertMessage from "../components/alertLayout/AlertMessage";
import { useAlert } from '../context/AlertContext';
import { useFormik } from 'formik';
import * as yup from 'yup';

// component styles
const styles = {
    containerStyles: {
      height: "100vh",
      gap: '100px',
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center', 
      justifyContent: 'center',
    },
    flexStyles: {
      width: '100%',
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center', 
      justifyContent: 'center',
    }
}
// form validations
const validationSchema = yup.object({
  userName: yup
    .string('Enter your user name')
    .required('User name is required')
});

const Signup = () => {

  // import logic
  const {
    loading,
    signUpUser,
    image,
    setImage,
    uplodeImage
  } = useSignupValidation();

  // import alert context
  const { 
    value,
    setValue,
    msg,
    error 
  } = useAlert();
  
  // form handler
  const formik = useFormik({
    initialValues: {
      userName: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUpUser(values);
    }
  });

  return (
    <Container maxWidth="sm">
      <Box sx={styles.containerStyles} > 
       
        <Typography 
          variant="h4"
          component='h4'
          align='center'
          sx={{color: 'primary.main'}}
        > 
          Sign Up To NextChat !
        </Typography>

        <Box sx={styles.flexStyles}>

          <Avatar 
            alt="Remy Sharp"
            src=''
            sx={{mb: 4, width: 100, height: 100}}
            id="contained-button-file"
          />

          <Button sx={{mb: 5, width: '50%'}} variant="contained" component="label">
            Upload image
            <input 
              accept="image/*"
              hidden
              type="file"
              value={image}
              onChange={(e) => uplodeImage(e.target.files[0])}
            />
          </Button>
        
          <form style={{width: '100%'}} onSubmit={formik.handleSubmit}>
            <TextField 
              fullWidth
              name='userName'
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
              id="standard-basic" 
              label="User Name" 
              variant="standard"
              sx={{mb: 5}}
            />
        
            <LoadingButton 
              loading={loading}
              // disabled={!userName || !userImage}
              fullWidth
              variant="contained"
              type='submit'
            >
              Sign Up 
            </LoadingButton>
          </form>
        </Box>
      </Box>

      <AlertMessage error={error} value={value} setValue={setValue} msg={msg} />
    </Container>
  );
}
 
export default Signup;