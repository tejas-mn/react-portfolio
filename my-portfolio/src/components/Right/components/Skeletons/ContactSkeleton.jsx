import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function ContactSkeleton() {
    return (
        <Stack spacing={1}>
            <Typography component="div" key={'h2'} variant={'h2'}>
                <Skeleton animation="wave" width={190} sx={{ margin: '10px 0px 0px' }} />
            </Typography>

            <Skeleton variant='rectangular' height={'380px'} />

            <Typography component="div" key={'h2'} variant={'h2'}>
                <Skeleton animation="wave" width={190} sx={{ margin: '10px 0px 0px' }} />
            </Typography>

            <div>
                <div style={styles.input}>
                    <Skeleton animation="wave" width={'100%'} height={60} />
                    <Skeleton animation="wave" width={'100%'} height={60} />
                </div>
                <Skeleton animation="wave" width={'100%'} height={80} />

                <Skeleton animation="wave" width={100} height={60} sx={
                    styles.btn
                } />
            </div>
        </Stack>
    );
}

const styles = {
    btn: {
        marginLeft: 'auto',
        display: 'flex',
        marginTop: '20px',
    },
    input: {
        display: 'flex',
        gap: '25px'
    }
}