import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function ProjectListSkeleton() {
    return (
        <Stack spacing={1} style={{
            backgroundColor: 'var(--btn-color-light)',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'left',
            margin: '10px',
          }}>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignContent:'center'
            }}>
                <Skeleton animation="wave" variant="rectangular" width={250} height={40} />
                <Skeleton animation="wave" variant="text" sx={{ margin: '10px 20px 5px 20px !important', fontSize: '1rem' }} width={200} />
            </div>

            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton animation="wave"  width={'90%'}  variant="text" sx={{ fontSize: '1rem' }} />

        </Stack>
    );
}