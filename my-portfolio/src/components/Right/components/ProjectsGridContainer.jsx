import { useState, lazy, useEffect } from "react";
import useOnScreen from "../../../hooks/useOnScreen";
import ProjectBoxSkeleton from "./Skeletons/ProjectBoxSkeleton";
import ProjectModal from "./ProjectModal";
import Modal from "../../utils/components/Modal";

const ProjectBox = lazy(() => import('./ProjectBox'));

export default function ProjectsGridContainer({ filteredProjects, tagsState, setTags, isVisible, hasMore, isLoading, loadMore }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState({
        id: "",
        title: "",
        techStack: "",
        timeline: "",
        description: "",
        imageUrl: "",
    });

    const { measureRef, isIntersecting, observer } = useOnScreen();

    useEffect(() => {
        if (isIntersecting && hasMore && tagsState.size == 0) { //load only when there are no tags set (user is not searching)
            loadMore();
            observer.disconnect();
        }
    }, [isIntersecting, hasMore, loadMore]);

    const openModal = () => {
        document.querySelector(".project-grid").scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={`project-grid ${isVisible ? " fade-in" : ""}`}>
            {filteredProjects.map((project) =>
                <ProjectBox
                    mesureRef={measureRef}
                    key={project.id}
                    project={project}
                    openModal={openModal}
                    setCurrentProject={setCurrentProject}
                />
            )}

            {isLoading && <div><ProjectBoxSkeleton /></div>}

            <Modal isOpen={modalOpen} onClose={closeModal}>
                <ProjectModal
                    setTags={setTags}
                    tagsState={tagsState}
                    key={currentProject.id}
                    title={currentProject.title}
                    imageUrl={currentProject.imageUrl}
                    githubUrl={currentProject.githubUrl}
                    liveUrl={currentProject.liveUrl}
                    tags={currentProject.techStackList}
                    description={currentProject.description}
                />
            </Modal>
        </div>
    );
}