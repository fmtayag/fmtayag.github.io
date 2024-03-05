const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <div className="introduction">
                <h1>Hi, I'm Francis</h1>
                <h2>Full-stack web developer</h2>
                <a href="https://github.com/zyenapz" target="_">GitHub</a>
                <a href="https://www.linkedin.com/in/francistayag/" target="_">LinkedIn</a>
            </div>
            {/* <div className="image-container">
                <img src={process.env.PUBLIC_URL + "/images/jumbotron-image.svg"} alt="" className="jumbotron-image"/>
            </div> */}
        </div>
    );
}

export default Jumbotron;