import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { skills } from '../../../../Providers/DataProvider';

export default function SkillsSkeleton() {

  return (
    <Stack spacing={1} style={{
        marginTop:'20px'
    }}>
      <Typography component="div" key={'h2'} variant={'h2'}>
          <Skeleton animation="wave" width={190}  sx={{margin:'10px 0px 0px'}}/> 
     </Typography>
      
      <div className='skills'>
      {
        skills.map(()=>{
           return  <Skeleton animation="wave" sx={{margin:'0px 10px 15px 0px'}} width={100} height={50} /> 
        })
      }
      </div>
     
    </Stack>
  );
}