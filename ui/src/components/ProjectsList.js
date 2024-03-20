import ProjectCard from "./ProjectCard";
import '../styles/ProjectsList.css';
import { useState, useEffect } from "react";

const ProjectsList = () => {

    const [data, setData] = useState(null);
    const url = "http://localhost:8000/projects/"

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) { throw Error("Could not fetch data"); }
                else { return res.json(); }
            })
            .then(data => { setData(data); })
            .catch(err => { console.log(err); });
    }, [url])


    return (
        <div className="projects-list">
            <h1>My Projects</h1>
            <div className="container">
                {data && (
                    data.map((object) => {
                        return (
                            <ProjectCard
                                id={object.id}
                                image_src={object.thumbnail}
                                title={object.title}
                                subtitle={object.subtitle}
                                summary={object.summary}
                            />
                        );
                    })
                )}
            </div>


        </div>
    );
}

export default ProjectsList;