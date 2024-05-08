import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Slide } from '@mui/material';

const CustomizedSnackbars = ({ showAlert, message }) => {
  const [open, setOpen] = React.useState(false);

  function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
  }

  React.useEffect(() => {
    if (showAlert !== null) setOpen(true);
  }, [showAlert])

  React.useEffect(() => {
    if (open) document.querySelector('.MuiSnackbar-root').style.display = 'flex';
  }, [open])

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    document.querySelector('.MuiSnackbar-root').style.display = 'none';
    setOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={6000} onClose={handleClose} TransitionComponent={SlideTransition} >
        <Alert
          onClose={handleClose}
          id='mui-alert'
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
          style={{
            backgroundColor: 'var(--btn-color-light)',
            color: 'var(--text-color-light)',
            display: 'inherit'
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CustomizedSnackbars;
