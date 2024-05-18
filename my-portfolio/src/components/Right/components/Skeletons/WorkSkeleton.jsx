import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import ProjectGridSkeleton from './ProjectGridSkeleton';
import '../../../Right/styles/projects.css'

export default function WorkSkeleton() {
  return (
    <Stack spacing={1} className='right-01'>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0px 15px',
        padding: '0'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '0'
        }}>
          <Skeleton animation="wave" height={60} width={130} />
          <Skeleton animation="wave" height={60} width={130} />
        </div>
      </div>
      <div className='project-grid'>
        <ProjectGridSkeleton />
      </div>
    </Stack>
  );
}