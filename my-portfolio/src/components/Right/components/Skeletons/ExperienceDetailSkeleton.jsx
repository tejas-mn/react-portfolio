import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { exp } from '../../../../Providers/DataProvider';

export default function ExperienceDetailSkeleton() {

    return (
        <Stack spacing={1} style={{
            marginTop: '20px'
        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Skeleton animation="wave" variant="rectangular" sx={{}} width={250} height={45} />
                <Skeleton animation="wave" variant="text" sx={{ margin: '10px 20px 5px 20px !important', fontSize: '1rem' }} width={200} />
            </div>

            {
                exp[0].desc.map(() => {
                    return <>
                        <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem', marginTop: '15px !important', marginLeft: '35px !important' }} />
                        <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem', marginLeft: '35px !important' }} width={'90%'} />

                    </>
                })
            }

        </Stack>
    );
}