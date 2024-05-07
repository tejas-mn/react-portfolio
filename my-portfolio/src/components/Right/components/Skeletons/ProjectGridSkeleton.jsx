import ProjectBoxSkeleton from "./ProjectBoxSkeleton"

export default function ProjectGridSkeleton() {
    return (
        <>
            {
                [1, 2, 3, 4, 5, 6, 7].map((val) => {
                    return <ProjectBoxSkeleton key={val} />
                })
            }
        </>

    )
}