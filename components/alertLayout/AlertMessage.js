import React from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertMessage = ({ msg = "", value, setValue, error }) => {
  
  const handleClose = () => {
    setValue(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={value}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        sx={{ width: "100%", wordBreak: "break-all" }}
        onClose={handleClose}
        severity={error ? "error" : "success"}
      >
        {msg}
      </Alert>
    </Snackbar> 
  );
};

export default AlertMessage;
