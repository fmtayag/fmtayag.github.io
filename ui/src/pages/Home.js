import Jumbotron from "../components/Jumbotron";
import ProjectsList from "../components/ProjectsList";

const Home = () => {
    return (
        <div className="home">
            <Jumbotron />
            <ProjectsList />
        </div>
    );
}

export default Home;