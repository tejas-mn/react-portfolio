import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function EducationSkeleton() {

  const educationSkeletons = Array.from({ length: 3 }, (_, index) => {
    const itemId = index + 1;
    return (
      <React.Fragment key={itemId}>
        <div style={styles.flexContainer}>
          <Skeleton animation="wave" variant="rectangular" sx={styles.skeletonRect} width={300} height={20} />
          <Skeleton animation="wave" variant="text" sx={styles.skeletonText} width={200} />
        </div>
        <Skeleton animation="wave" variant="rectangular" width={190} sx={styles.skeletonRect} />
      </React.Fragment>
    );
  });

  return (
    <Stack spacing={1}>
      <Typography component="div" variant={'h2'} sx={styles.heading}>
        <Skeleton animation="wave" width={190} />
      </Typography>
      {educationSkeletons}
    </Stack>
  );
}

const styles = {
  heading: {
    margin: '10px 0px 0px'
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  skeletonRect: {
    margin: '10px 20px 5px 20px !important'
  },
  skeletonText: {
    margin: '10px 20px 5px 20px !important',
    fontSize: '1rem'
  }
};