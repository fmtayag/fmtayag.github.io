import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const { id } = useParams();
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
            setData(data);
        })
        .catch(err => {
            console.log(err);
        });


    return (
        <div className="project-details">
            {data && (
                <article>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                </article>
            )}

        </div>
    );
}

export default ProjectDetails;