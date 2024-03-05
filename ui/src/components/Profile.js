const Profile = () => {
    return (
        <div className="profile">
            <div className="picture">
                <img src={process.env.PUBLIC_URL + "/images/cat1.png"} alt="profile-pic" />
            </div>
            <div className="introduction">
                <h1>Hi, I'm Francis.</h1>
                <h2 className="blurb">I'm a full-stack web developer, and pixel artist.</h2>
                <div className="socials">
                    <a href="https://github.com/zyenapz" target="_">GitHub</a>
                    <a href="https://www.linkedin.com/in/francistayag/" target="_">LinkedIn</a>
                    <a href="" target="_">Twitter</a>
                    <a href="" target="_">Upwork</a>
                </div>
            </div>
        </div>
    );
}

export default Profile;