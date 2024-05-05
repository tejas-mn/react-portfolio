import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function AboutMeSkeleton() {
  return (
    <Stack spacing={1}>
      <Typography component="div" key={'h2'} variant={'h2'}>
          <Skeleton animation="wave" width={190}  sx={{margin:'10px 0px 0px'}}/> 
     </Typography>
      <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton animation="wave" variant="text" width={'90%'}  sx={{ fontSize: '1rem' }} />
    </Stack>
  );
}