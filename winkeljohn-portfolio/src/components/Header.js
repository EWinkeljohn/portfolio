import React from "react"

const Header = () => {
    return (
    <>
    <div className="header">
        <div className="git-link">
            <button> <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" style= {{ width: 35, height: 35 }} />
            </button>

        </div>
            <div className="linkedin-link">
            <button> <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Linkedin_Shiny_Icon.svg" style= {{ width: 35, height: 35 }} />
            </button>
        </div>

        Hey There! Welcome to Emery's Portfolio

        <button className="about-me">More About Emery!</button>
    </div>
    </>
    )   
}

export default Header;