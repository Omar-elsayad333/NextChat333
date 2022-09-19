import { collection, query, where, onSnapshot} from "firebase/firestore";
import { db } from '../config/firebase';

const useReadData = (collectionName, firstComparer, comparerType, secondComparer) => {
    return new Promise ((resolved) => {
        // variables
        const userState = false;

        // Create a reference to the cities collection
        const colRef = collection(db, collectionName);

        // Create a query against the collection.
        const q =  query(colRef, where(firstComparer, comparerType, secondComparer));

        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                userState = true;
            });
            resolved(userState);
        });
    });
};

export default useReadData;