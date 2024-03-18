import ProjectCard from "./ProjectCard";
import '../styles/ProjectsList.css';

const ProjectsList = () => {

    return (
        <div className="projects-list">
            <h1>My Projects</h1>

            <div className="container">
                <ProjectCard id="1" image_src="/images/placeholder-1.png" title="Title 1" subtitle="Subtitle 1" body="Lorem ipsum dolor sit amet tutor carthago delenda" />
                <ProjectCard id="2" image_src="/images/placeholder-2.png" title="Title 2" subtitle="Subtitle 2" body="Lorem ipsum dolor sit amet tutor carthLorem ipsum dolor sit amet tutor ago delenda" />
                <ProjectCard id="3" image_src="/images/placeholder-3.png" title="Title 3" subtitle="Subtitle 3" body="Lorem ipsum dolor sit amet tutor carthago delenda Lorem ipsum dolor sit amet tutor carthago delenda Lorem ipsum dolor sit amet tutor carthago delenda" />
                <ProjectCard id="4" image_src="/images/placeholder-2.png" title="Title 4" subtitle="Subtitle 4" body="Lorem ipsum dolor sit amet tutor carthago delenda " />
            </div>
        </div>
    );
}

export default ProjectsList;