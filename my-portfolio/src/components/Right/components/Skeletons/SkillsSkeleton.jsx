import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function SkillsSkeleton() {

  const Skills = Array.from({ length: 10 }, (_, index) => {
    const id = index + 1;
    return (
      <Skeleton key={id} animation="wave" sx={{ margin: '0px 10px 15px 0px' }} width={100} height={50} />
    );
  });

  return (
    <Stack spacing={1} style={{ marginTop: '20px' }}>
      <Typography component="div" variant={'h2'}>
        <Skeleton animation="wave" width={190} sx={{ margin: '10px 0px 0px' }} />
      </Typography>

      <div className='skills'>
        {Skills}
      </div>

    </Stack>
  );
}