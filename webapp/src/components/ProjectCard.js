import '../styles/ProjectCard.css';
import { Link } from 'react-router-dom';

const ProjectCard = ({id, image_src, title, subtitle, summary}) => {

    return (
        <div className="project-card">
            <div className="image-container">
                <img src={image_src} />
            </div>
            <div className="card-info">
                <h1>{title}</h1>
                <h2 >{subtitle}</h2>
                <p>{summary}</p>
            </div>
            <div className="details-container">
                <Link to={`/projects/${id}`}>Read More</Link>
                {/* <button onClick={() => {console.log("hello")}} className="primary-btn">Read More &gt;</button> */}
            </div>
        </div>

    );
}

export default ProjectCard;