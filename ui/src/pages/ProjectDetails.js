import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";

const ProjectDetails = () => {
    const [data, setData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(1);
    const initialId = useParams().id;
    const navigate = useNavigate();
    let projectNotFound = currentIndex == -1;

    // This was done to fix the component not re-rendering properly when the browser's back and next buttons are clicked
    useEffect(() => {
        if (data != null) {
            setCurrentIndex(data.findIndex(x => x.id == initialId));
        }
    }, [initialId]);

    // Fetch data
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
                setCurrentIndex(data.findIndex(obj => obj.id == initialId)); // Will return -1 if findIndex fails
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    function handlePrevious() {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            navigate("/projects/" + data[currentIndex - 1].id);
        }
        else {
            setCurrentIndex(data.length - 1);
            navigate("/projects/" + data[0].id);
        }

    }
    function handleNext() {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
            navigate("/projects/" + data[currentIndex + 1].id);
        }
        else {
            setCurrentIndex(0);
            navigate("/projects/" + data[data.length - 1].id);
        }
    }

    if (projectNotFound) {
        navigate("/404");
    }
    else {
        return (
            <div className="project-details">
                <Slideshow />
                {data && (
                    <article>
                        <h1>{data[currentIndex].title}</h1>
                        <button onClick={handlePrevious}>Previous</button>
                        <button onClick={handleNext}>Next</button>
                        <p>{data[currentIndex].body}</p>
                    </article>
                )}

            </div>
        );
    }

}

export default ProjectDetails;