import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";

const ProjectDetails = () => {
    const [data, setData] = useState(null);
    const [project, setProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/projects/')
            .then(res => {
                if (!res.ok) {
                    navigate("/404");
                    throw Error("Could not fetch data");    
                }
                else {
                    return res.json();
                }
            }
            )
            .then(data => {
                setData(data);
                setProject(data.find(obj => obj.id == id));
                setCurrentIndex(data.findIndex(obj => obj.id == id));
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:8000/projects/' + id)
            .then(res => {
                if (!res.ok) {
                    navigate("/404");
                    throw Error("Could not fetch data");
                }
                else {
                    return res.json();
                }
            }
            )
            .then(data => {
                setProject(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    useEffect(() => {
        if (data != null) {
            navigate("/projects/" + data[currentIndex]?.id);
        }
    }, [currentIndex]);

    function handlePrevious() {
        if (currentIndex > 0) { setCurrentIndex(currentIndex - 1); }
        else { setCurrentIndex(data.length - 1); }

    }
    function handleNext() {
        if (currentIndex < data.length - 1) { setCurrentIndex(currentIndex + 1); }
        else { setCurrentIndex(0); }
    }

    return (project &&
        <div className="project-details">
            <Slideshow />
            {project && (
                <article>
                    <h1>{project.title}</h1>
                    <button onClick={handlePrevious}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                    <p>{project.body}</p>
                </article>
            )}

        </div>
    );
}

export default ProjectDetails;