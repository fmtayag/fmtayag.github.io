import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
    return (
        <div className="projects-list">
            <h1>My Projects</h1>

            <div className="container">
                <ProjectCard />
                
            </div>
        </div>
    );
}

export default ProjectsList;