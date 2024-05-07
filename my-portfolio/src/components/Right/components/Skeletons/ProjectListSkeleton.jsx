import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function ProjectListSkeleton() {

    return (
        <Stack spacing={1} style={styles.container}>

            <div style={styles.flexContainer}>
                <Skeleton animation="wave" variant="rectangular" width={250} height={40} />
                <Skeleton animation="wave" variant="text" sx={styles.firstSkeletonRect} width={200} />
            </div>

            <Skeleton animation="wave" variant="text" sx={styles.skeletonText} />
            <Skeleton animation="wave" variant="text" sx={styles.skeletonText} />
            <Skeleton animation="wave" width={'90%'} variant="text" sx={styles.skeletonText} />

        </Stack>
    );
}

const styles = {
    container: {
        backgroundColor: 'var(--btn-color-light)',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'left',
        margin: '10px',
    },
    flexContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center'
    },
    skeletonText: {
        fontSize: '1rem'
    },
    firstSkeletonRect: {
        margin: '10px 20px 5px 20px !important',
        fontSize: '1rem'
    }
};