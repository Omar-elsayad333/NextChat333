import React, { useContext, createContext, useState } from "react";

export const AlertContext = createContext({
    msg: "",
    value: false,
    setValue: () => {},
    setErrorMessage: () => {},
    setSuccessMessage: () => {},
    error: false,
});
    

export const AlertProvider = ({ children }) => {
    const [value, setValue] = useState(false);
    const [msg, setMsg] = useState("");
    const [error, setError] = useState(true);

    const setErrorMessage = (message) => {
        setMsg(message);
        setError(true);
        setValue(true);
    };

    const setSuccessMessage = (x) => {
        setMsg(x);
        setError(false);
        setValue(true);
    };

    const contextValue = {
        msg,
        setErrorMessage,
        setSuccessMessage,
        error,
        value,
        setValue,
    };

    return (
        <AlertContext.Provider value={contextValue}>
          {children}
        </AlertContext.Provider>
    );
};

export const useAlert = () => useContext(AlertContext);
