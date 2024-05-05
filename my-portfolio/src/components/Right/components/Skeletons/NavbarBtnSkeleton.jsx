import { Skeleton } from "@mui/material"

export default function NavBarBtnSkeleton() {

    return (
        <Skeleton animation="wave" sx={{
            width: '90px',
            height: '55px',
            borderRadius: '15px',
            margin: '0px 10px'
        }} />
    )
}