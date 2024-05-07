import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { edu } from '../../../../Providers/DataProvider';

export default function EducationSkeleton() {

  return (
    <Stack spacing={1}>
      <Typography component="div" key={'h2'} variant={'h2'} sx={styles.heading}>
        <Skeleton animation="wave" width={190} />
      </Typography>

      {edu.map(() => {
        return (
          <>
            <div style={styles.flexContainer}>
              <Skeleton animation="wave" variant="rectangular" sx={styles.skeletonRect} width={300} height={20} />
              <Skeleton animation="wave" variant="text" sx={styles.skeletonText} width={200} />
            </div>
            <Skeleton animation="wave" variant="rectangular" width={190} sx={styles.skeletonRect} />
          </>
        );
      })}
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