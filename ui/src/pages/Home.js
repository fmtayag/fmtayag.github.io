import Profile from "../components/Profile";
import ProjectsList from "../components/ProjectsList";

const Home = () => {
    return (
        <div className="home">
            <Profile />
            <ProjectsList />
        </div>
    );
}

export default Home;