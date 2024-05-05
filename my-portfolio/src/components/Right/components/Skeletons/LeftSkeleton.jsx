import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function LeftSkeleton() {
    return (
        <Stack spacing={1} className="left-01" style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Skeleton variant="circular" width={100} height={100} />

            <div style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Typography component="div" key={'h2'} variant={'h2'}>
                    <Skeleton animation="wave" width={190} />
                </Typography>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '10px'
                }}>
                    <Skeleton animation="wave" width={'100%'} />
                    <Skeleton animation="wave" width={'100%'} />
                    <Skeleton animation="wave" width={'100%'} />
                    <Skeleton animation="wave" width={'100%'} />
                    <Skeleton animation="wave" width={'100%'} />

                </div>
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '30px'
            }}>
                <Skeleton animation="wave" variant="rectangular" width={'100%'} height={45} />
                <Skeleton animation="wave" variant="rectangular" width={'100%'} height={45} />
                <Skeleton animation="wave" variant="rectangular" width={'100%'} height={45} />

            </div>




            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
                gap: '20px'
            }}>
                <Skeleton variant="circular" width={50} height={50} />
                <Skeleton variant="circular" width={50} height={50} />
                <Skeleton variant="circular" width={50} height={50} />

            </div>


            <Typography component="div" key={'h2'} variant={'h2'}>
                <Skeleton animation="wave" sx={{
                    width: '90px',
                    height: '55px',
                    borderRadius: '15px',

                }} />
            </Typography>

        </Stack>
    );
}