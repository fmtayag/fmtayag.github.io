import ProjectCard from "./ProjectCard";
import '../styles/ProjectsList.css';

const ProjectsList = () => {
    return (
        <div className="projects-list">
            <h1>My Projects</h1>

            <div className="container">
                <ProjectCard body="Lorem ipsum dolor sit amet tutor carthago delenda" />
                <ProjectCard body="Lorem ipsum dolor sit amet tutor carthago delenda" />
                <ProjectCard body="Lorem ipsum dolor sit amet tutor carthago delenda" />
                <ProjectCard body="Lorem ipsum dolor sit amet tutor carthago delenda" />
                <ProjectCard body="Lorem ipsum dolor sit amet tutor carthago delenda" />
                {/* <ProjectCard body="Lorem ipsum dolor sit amet tutor carthago delenda" />
                <ProjectCard body="Lorem ipsum dolor sit amet tutor carthago delenda" />
                <ProjectCard body="Lorem ipsum dolor sit amet tutor carthago delenda" />
                <ProjectCard body="Lorem ipsum dolor sit amet tutor carthago delenda est veni vidi viciLorem ipsum dolorveni vidi viciLorem ipsum dolor sit amet tutor carthago delenda est veni vidi viciLorem ipsum dolor sit amet tutor carthago delenda est veni vidi vici" /> */}
            </div>
        </div>
    );
}

export default ProjectsList;