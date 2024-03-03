import ProjectsList from "../components/ProjectsList";

const Home = () => {
    return (
        <div className="home">
            <h2>Hi, I'm Francis. I'm a freelance software developer</h2>
            <a href="https://github.com/zyenapz" target="_">GitHub</a>
            <a href="https://www.linkedin.com/in/francistayag/" target="_">LinkedIn</a>
            <ProjectsList />
        </div>
    );
}

export default Home;