import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function LeftSkeleton() {

    return (
        <Stack spacing={1} className="left-01" style={styles.container}>

            <Skeleton variant="circular" width={100} height={100} />

            <div style={styles.innerContainer}>
                <Typography component="div" key={'h2'} variant={'h2'}>
                    <Skeleton animation="wave" width={190} />
                </Typography>
                <div style={styles.columnContainer}>
                    <Skeleton animation="wave" width={'100%'} />
                    <Skeleton animation="wave" width={'100%'} />
                    <Skeleton animation="wave" width={'100%'} />
                    <Skeleton animation="wave" width={'100%'} />
                    <Skeleton animation="wave" width={'100%'} />
                </div>
            </div>

            <div style={styles.gapContainer}>
                <Skeleton animation="wave" variant="rectangular" width={'100%'} height={45} />
                <Skeleton animation="wave" variant="rectangular" width={'100%'} height={45} />
                <Skeleton animation="wave" variant="rectangular" width={'100%'} height={45} />
            </div>

            <div style={styles.rowContainer}>
                <Skeleton variant="circular" width={50} height={50} />
                <Skeleton variant="circular" width={50} height={50} />
                <Skeleton variant="circular" width={50} height={50} />
            </div>

            <Typography component="div" key={'h2'} variant={'h2'}>
                <Skeleton animation="wave" sx={styles.lastTypography} />
            </Typography>

        </Stack>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    columnContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10px'
    },
    gapContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '30px'
    },
    rowContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        gap: '20px'
    },
    lastTypography: {
        width: '90px',
        height: '55px',
        borderRadius: '15px',
    }
}