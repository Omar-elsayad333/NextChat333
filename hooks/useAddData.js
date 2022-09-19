import { addDoc, collection } from "firebase/firestore";
import { db } from '../config/firebase';

const useAddData = async (collectionName, data) => {

    // variables
    const docRef = '';

    try {
        docRef = await addDoc(collection(db, collectionName), data);
    } catch (e) {
        console.error("Add the correct data");
    }

    return docRef.id;
};
 
export default useAddData;