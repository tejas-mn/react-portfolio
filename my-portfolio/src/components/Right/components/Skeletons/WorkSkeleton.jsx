import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import ProjectListSkeleton from './ProjectListSkeleton';

export default function WorkSkeleton() {
  return (
    <Stack spacing={1}>
      <Typography component="div" key={'h2'} variant={'h2'}>
          <Skeleton animation="wave" width={190}  sx={{margin:'10px 0px 0px'}}/> 
     </Typography>
     <ProjectListSkeleton/>
     <ProjectListSkeleton/>
     <ProjectListSkeleton/>
     <ProjectListSkeleton/>
    </Stack>
  );
}