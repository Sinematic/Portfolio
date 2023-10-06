import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import "../../styles/sections/Projects.css"

function Projects(props: { hide: boolean }) {

    const { hide } = props

    const projects = [
        {
          "title": "Pokédex⚡",
          "category": ["Front-end"],
          "skills": [
            {
              "name": "React", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            }, {
              "name": "Sass", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            }
          ],
          "description": "Explore the world of Pokémon with this interactive Pokédex application, powered by the public Pokébuild API. I've crafted a user-friendly experience using React and functional components, ensuring modular and efficient code.",
          "image": "https://github.com/Sinematic/Pokedex-React/blob/main/src/assets/images/pokedex-react-presentation.png?raw=true"
        }, {
          "title": "Book API 📕",
          "category": ["Back-end"],
          "skills": [
            {
              "name": "Node.js", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            }, {
              "name": "Express", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            }, {
              "name": "MongoDB", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            }, {
              "name": "Postman", "image": "https://www.svgrepo.com/show/354202/postman-icon.svg"
            }
          ],
          "description": "For this project, I created an API with MongoDB, Mongoose, Node.js, Express, Postman, as well as Sharp and Multer to allow users to add optimized images to the site.",
          "image": "https://www.payoda.com/wp-content/uploads/2021/05/1_mbP4Bjrs8Hshx7IgjsUNSg.jpeg"
        }, {
          "title": "CuisineFiesta App",
          "category": ["Back-end", "Front-end"],
          "skills": [
            {
              "name": "React", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            }, {
              "name": "TypeScript", "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            }, {
              "name": "Vite", "image": "https://www.svgrepo.com/show/374167/vite.svg"
            },
          ],
          "description": "Discover the ultimate Full-Stack, All-in-JS application! CuisineFiesta offers secure authentication and seamless CRUD operations on a comprehensive recipe API. Unleash your inner chef and explore a world of culinary delights.",
          "image": "https://github.com/Sinematic/CuisineFiesta-F/raw/main/src/assets/readme-images/search.png"
        }
    ]

    const [index, setIndex] = useState(0)
    const [display, setDisplay] = useState(false)
    const handleIndex = () => index < projects.length - 1 ? setIndex(index + 1) : setIndex(0)
    
    
    return (
        <section id="projects" className={hide ? "hidden" : ""}>

            <h2>My projects</h2>

            <div className="projects-list">

                <div onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}
                key={uuidv4()} className="project" >

                    {!display ? 
                        <div className="face">
                            <img src={projects[index].image} alt={projects[index].title} className="project-image" />
                            <h3>{projects[index].title}</h3>
                        </div>
                    :
                        <div className={(display ? "revealed " :  "") + "hover"}>
                            <p className="description">{projects[index].description}</p>                      
                            <ol className="skills">
                                {projects[index].skills.map((skill) => 
                                    <li key={uuidv4()}>
                                        <img src={skill.image} alt="" className={"skill-icon" + (skill.name === "Express" ? " white" : "")}/>
                                        <p>{skill.name}</p>
                                    </li>
                                )}
                            </ol>
                        </div>
                    }
                </div>
            </div>

            <button onClick={handleIndex}>Switch project</button>
        </section>
    )
}

export default Projects