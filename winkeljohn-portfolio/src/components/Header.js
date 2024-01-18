import React from "react"
import { DiGithub } from "react-icons/di";

const Header = () => {
    return (
    <>
    <div className="header">
        <div className="git-link">
            <a href="https://github.com/EWinkeljohn">
            <button> <DiGithub/> </button>
            </a>
        </div>
        <div className="linkedin-link">
            <a href="https://www.linkedin.com/in/ewinkeljohn/">
            <button> <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Linkedin_Shiny_Icon.svg" style= {{ width: 35, height: 35 }} alt=""/>
            </button>
            </a>
        </div>
        <div>
            <h2> Welcome to Emery Winkeljohn's Portfolio! </h2>
            <p> Full-Stack Software Developer | Sustainability Enthusiast | Career Switcher </p>
        </div>
        <div className="right-buttons">
            <button className="about-me">More About Emery</button>
            <button className="project-button">Projects</button>
        </div>
    </div>
    </>
    )   
}

export default Header;