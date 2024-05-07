import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { exp } from '../../../../Providers/DataProvider';

export default function ExperienceDetailSkeleton() {

    return (
        <Stack spacing={1} style={styles.container}>

            <div style={styles.flexContainer}>
                <Skeleton animation="wave" variant="rectangular" width={250} height={45} />
                <Skeleton animation="wave" variant="text" sx={styles.firstSkeletonText} width={200} />
            </div>

            {
                exp[0].desc.map(() => {
                    return <>
                        <Skeleton animation="wave" variant="text" sx={styles.skeletonText} />
                        <Skeleton animation="wave" variant="text" sx={{ ...styles.skeletonText, width: '90%' }} />
                    </>
                })
            }

        </Stack>
    );
}

const styles = {
    container: {
        marginTop: '20px'
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    skeletonText: {
        fontSize: '1rem',
        marginTop: '15px !important',
        marginLeft: '35px !important'
    },
    firstSkeletonText: {
        margin: '10px 20px 5px 20px !important',
        fontSize: '1rem'
    }
};