import { useState } from "react";
import useAddData from "../../hooks/useAddData";
import { USER_COLLECTION } from "../../constant/dbCollectinos";
import { useRouter } from "next/router";
import useUplodeImg from '../../hooks/useUplodeImg';

const useSignupValidation = () => {
    
    // variables
    const router = useRouter();

    // states
    const [ loading, setLoading] = useState(false);
    const [ image, setImage] = useState('')

    // sign up the user
    const signUpUser = async (userData) => {
        setLoading(true);
        const userId = await useAddData(USER_COLLECTION, userData);
        router.push('/landing')
        setLoading(false);
    };  

    const uplodeImage = async (file) => {
        setLoading(true)
        try {
            const result = await useUplodeImg(file);
            console.log(result);
        } catch(error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return( 
        {
            loading,
            signUpUser,
            image,
            setImage,
            uplodeImage
        }
    );
};
 
export default useSignupValidation;