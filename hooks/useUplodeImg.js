import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


const useUplodeImg = (fileName) => {
    return new Promise ((resolved, rejected) => {
        // create the file refrance
        const imageRef = ref(storage, `userImages/${fileName.name}`);

        // upload the file
        uploadBytes(imageRef, fileName)
        .then((snapshot) => { 
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                resolved(downloadURL);
            }); 
        }).catch (() => {
            rejected('image not uploaded');
        })
    });
};
 
export default useUplodeImg;