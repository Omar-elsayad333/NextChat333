import { 
  Container, 
  TextField, 
  Box, 
  Typography
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useLoginValidation from '../container/log/useloginValidation';
import AlertMessage from "../components/alertLayout/AlertMessage";
import { useAlert } from '../context/AlertContext';


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

export default function Home() {

  // import logic
  const {
    captcha,
    confirmOTP,
    showCaptcha,
    phoneInputState,
    phoneNumber,
    setPhoneNumber,
    code,
    setCode,
    loading,
  } = useLoginValidation();

  // import alert context
  const { 
    value,
    setValue,
    msg,
    error 
  } = useAlert();

  return (
    <Container maxWidth="sm">
      {showCaptcha && <div id="sign-in-button" />}
      <Box sx={styles.containerStyles} >  
        <Typography 
          variant="h4"
          component='h4'
          align='center'
          sx={{color: 'primary.main'}}
        > 
          Welcome to NextChat !
        </Typography>

        <Box sx={styles.flexStyles}>
        
        { phoneInputState ? 
          ( 
            <TextField 
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.toString())}
              id="standard-basic" 
              label="Phone Number" 
              variant="standard"
              sx={{mb: 5}}
              onKeyDown={(e) =>
                ["e", "E", "-"].includes(e.key) && e.preventDefault()
              }
            /> 
          ) : (
            <TextField 
              fullWidth
              value={code}
              onChange={(e) => setCode(e.target.value.toString())}
              id="standard-basic" 
              label="OTP" 
              variant="standard"
              sx={{mb: 5}}
              onKeyDown={(e) =>
                ["e", "E", "-"].includes(e.key) && e.preventDefault()
              }
            />
          )
        }

          <LoadingButton 
            loading={loading}
            fullWidth
            variant="contained"
            onClick={phoneInputState ? captcha : confirmOTP}
          >
            Submit
          </LoadingButton>
        </Box>
      </Box>

      <AlertMessage error={error} value={value} setValue={setValue} msg={msg} />
    </Container>
  );
};