import { auth } from '../../config/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import { useState } from 'react';
import { useAlert } from '../../context/AlertContext';
import { USER_COLLECTION } from '../../constant/dbCollectinos';
import useReadData from '../../hooks/useReadData';
import { useRouter } from 'next/router';

const useLoginValidation = () => {

    // variables
    let captchaVrifier;
    const { setErrorMessage, setSuccessMessage } = useAlert();
    const router = useRouter();

    // states
    const [ phoneNumber, setPhoneNumber] = useState('');
    const [ code, setCode] = useState('');
    const [ confirmationResult , setConfirmationResult] = useState('');
    const [ showCaptcha, setShowCaptcha] = useState(true);
    const [ loading, setLoading] = useState(false);
    const [ phoneInputState, setPhoneInputState] = useState(true);

    // show the captcha
    const captcha = async () => {
        setLoading(true);
        captchaVrifier = new RecaptchaVerifier(
            "sign-in-button",
            { size: "invisible" },
            auth
        ); 
        sendVerificatino();
    };

    // send the verificatino code to the user phone
    const sendVerificatino = async () => {
        try {
            const resault = await signInWithPhoneNumber(auth, phoneNumber, captchaVrifier)
            setConfirmationResult(resault);
            setPhoneInputState(false);
        } catch(error) { 
            setErrorMessage('This number is not valid')
        } finally {
            setShowCaptcha(false);
            setLoading(false);
            setShowCaptcha(true);
        }
    };

    // confirm the OTP that the user input
    const confirmOTP = async () => {
        setLoading(true);
        try {
            const result = await confirmationResult.confirm(code)
            const user = result.user.phoneNumber;
            const state = await useReadData( USER_COLLECTION, 'phoneNumber', '==', user)
            if(state) {
                router.push('/landing');
                setSuccessMessage('You have loggedin successfully');
            }else {
                router.push('/signup');
            }
        } catch(error) {
            setErrorMessage('Enter the correct code');
        } finally {
            setLoading(false);
        }   
    };

    return (
        {
            captcha,
            confirmOTP,
            showCaptcha,
            phoneInputState,
            phoneNumber,
            setPhoneNumber,
            code,
            setCode,
            loading
        }
    );
}
 
export default useLoginValidation;
