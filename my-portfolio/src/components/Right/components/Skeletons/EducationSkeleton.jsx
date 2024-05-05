import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { edu } from '../../../../Providers/DataProvider';

export default function EducationSkeleton() {

  return (
    <Stack spacing={1}>
      <Typography component="div" key={'h2'} variant={'h2'}>
          <Skeleton animation="wave" width={190}  sx={{margin:'10px 0px 0px'}}/> 
     </Typography>

     {
        edu.map(()=>{
            return <>
             <div style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Skeleton animation="wave" variant="rectangular" sx={{margin:'10px 20px 5px 20px !important'}} width={300} height={20}   />
        <Skeleton animation="wave" variant="text" sx={{ margin:'10px 20px 5px 20px !important', fontSize: '1rem' }} width={200}/>
      </div>
      <Skeleton animation="wave" variant="rectangular" width={190}  sx={{ margin:'0px 20px 5px 20px !important' }} />
            </>
        })
     }

    </Stack>
  );
}