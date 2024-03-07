import '../styles/ProjectCard.css';

const ProjectCard = (/*image_path, title, summary, tech_stacks*/) => {

    const image_path = "/images/cat1.png";
    const title = "Cat"
    const summary = "Summary"
    const tech_stacks = []
    
    return (
        <div className="project-card">
            <img className="card-image" src={image_path} alt="card-image" />
            <div className="card-info">
                <h4><b>{title}</b></h4>
                <p>{summary}</p>
            </div>
        </div>

    );
}

export default ProjectCard;