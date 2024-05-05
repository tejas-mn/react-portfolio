import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function ProjectBoxSkeleton() {
  return (
    <Stack spacing={1} className='project-box' >
        <Skeleton variant="rectangular" height={160} />
        <Skeleton width="60%" />
    </Stack>
  );
}

