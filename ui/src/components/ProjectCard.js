import '../styles/ProjectCard.css';

const ProjectCard = ({body} /*image_path, title, body, tech_stacks*/) => {

    const image_path = "/images/placeholder.png";
    const title = "Cat"
    const tech_stacks = []

    return (
        <div className="project-card">
            <div className="image-container">
                <img src={image_path} />
            </div>
            <div className="card-info">
                <h1 className="heading">Lorem Ipsum</h1>
                <h2 className="subtitle">Veni Vidi Vici</h2>
                <p className="body">{body}</p>
            </div>
            <div className="buttons-container">
                <button onClick={() => {console.log("hello")}} className="primary-btn">Read More &gt;</button>

            </div>
        </div>

    );
}

export default ProjectCard;