const Profile = () => {
    return (
        <div className="profile">
            <div className="introduction">
                <h1>Hi, I'm Francis.</h1>
                <p className="blurb">I'm a full-stack web developer, pixel artist, and writer.</p>
                <div className="socials">
                    <a href="https://github.com/zyenapz" target="_">GitHub</a>
                    <a href="https://www.linkedin.com/in/francistayag/" target="_">LinkedIn</a>
                    <a href="" target="_">Twitter</a>
                    <a href="" target="_">Upwork</a>
                </div>

            </div>
            <div className="picture">
                <img src={process.env.PUBLIC_URL + "/images/Project_76-01.jpg"} alt="profile-pic" />
            </div>
        </div>
    );
}

export default Profile;