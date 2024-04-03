import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Slide } from '@mui/material';

export default function CustomizedSnackbars({theme, showAlert}) {
  const [open, setOpen] = React.useState(false);

  function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
  }

  React.useEffect(()=>{
    if(showAlert!==null)setOpen(true);
  }, [showAlert])

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={6000} onClose={handleClose} TransitionComponent={SlideTransition} >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
          style={{
            backgroundColor:'var(--btn-color-light)',
            color:'var(--text-color-light)'
          }}
        >
          Changed theme to {theme=="dark-theme"?"Dark Mode":"Light Mode"}!
        </Alert>
      </Snackbar>
    </div>
  );
}