import { useState, createContext, useContext } from "react";

const UserContext = createContext();

const UserInfoProvider = ({ children }) => {

    // states
    const [ userImage, setUserImage] = useState(localStorage.getItem('nextChat-userImage' || ''));
    const [ userPhone, setUserPhone] = useState(localStorage.getItem('nextChat-userPhone' || ''));
    const [ userName, setUserName] = useState(localStorage.getItem('nextChat-userName' || ''));
    const [ userToken, setUserToken] = useState(localStorage.getItem('nextChat-userToken' || ''));
    const [ userRefreshToken, setUserRefreshToken] = useState(localStorage.getItem('nextChat-userRefreshToken' || ''));

    // save or update user image handller
    const setImage = (image) => {
        setUserImage(image);
    }

    // save or update user phone handller
    const setPhone = (phone) => {
        setUserPhone(phone);
    }

    // save or update user name handller 
    const setName = (name) => {
        setUserName(name);
    }

    // save or update user token handller  
    const setToken = (token) => {
        setUserToken(token);
    }

    // save or update user refresh token handller  
    const setRefreshToken = (refreshToken) => {
        setUserRefreshToken(refreshToken);
    }

    // logout the user handller 
    const logout = () => {
        setUserImage('');
        setUserPhone('');
        setUserName('');
        setUserToken('');
        setUserRefreshToken('');
        localStorage.clear();
    }

    // collect all these handlers
    contextValue={
        setImage,
        setPhone,
        setName,
        setToken,
        setRefreshToken,
        logout
    }

    return (
        <UserContext.Provider value={contextValue}>
            { children }
        </UserContext.Provider>
    )
}
    
export default useInfo = () => useContext(UserContext);