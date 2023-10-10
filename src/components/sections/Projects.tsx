import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import "../../styles/sections/Projects.css"
import data from "../../assets/projects.json"

function Projects(props: { hide: boolean }) {

    const { hide } = props

    const width = window.innerWidth

    const [index, setIndex] = useState(0)
    const [display, setDisplay] = useState(false)

	const projects = data.projects
    const next = () => index < projects.length - 1 ? setIndex(index + 1) : setIndex(0)
	const previous = () => index > 0 ? setIndex(index - 1) : setIndex(projects.length -1)

    
    return (
        <section id="projects" className={hide ? "hidden" : ""}>

            <h2>My projects</h2>

            <div className="projects-list">

                <div onMouseEnter={width > 1024 ? () => setDisplay(true) : undefined} 
                onMouseLeave={width > 1024 ? () => setDisplay(false) : undefined}
                onClick={width <= 1024 ? () => setDisplay(!display) : undefined}
                key={uuidv4()} className="project" >


                    {!display ? 
                        <div className="face">
                            <img src={projects[index].image} alt={projects[index].title} className="project-image" />
                            <h3>{projects[index].title}</h3>
                        </div>
                    :
                        <div className={(display ? "revealed " :  "") + "project-description"}>
                            <p className="description">{projects[index].description}</p>                      
                            <ol className="skills">
                                {projects[index].skills.map((skill) => 
                                    <li key={uuidv4()}>
                                        <img key={uuidv4()} src={skill.image} alt="" 
										className={"skill-icon" + (skill.name === "Express" ? " white" : "")}/>
                                        <p>{skill.name}</p>
                                    </li>
                                )}
                            </ol>

							<div className="github">
								<a href={projects[index].github} target="_blank">Github</a>
							</div>
                        </div>
                    }
                </div>

				<div className="arrows">
					<svg onClick={previous} className="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
					stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
						<path d="m12 8-4 4 4 4"/>
						<path d="M16 12H8"/>
					</svg>	

					<svg onClick={next} className="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
					stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="m12 8-4 4 4 4"/>
						<path d="M16 12H8"/>
					</svg>
				</div>
            </div>
        </section>
    )
}

export default Projects