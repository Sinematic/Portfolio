import "../../styles/sections/Stack.css"

function Stack(props: { hide: boolean }) {

    const { hide } = props

    const skills = [
        {
            "name": "React.js",
            "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },{
            "name": "TypeScript",
            "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },{
            "name": "Node.js",
            "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },{
            "name": "Express",
            "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },{
            "name": "MongoDB",
            "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        } 
    ]

    return (
        <section id="stack" className={hide ? "hidden" : ""}>

            <h2>Stack</h2>

            <ol>
                {skills.map((skill) => 
                    <li key={skill.name}>
                        <img src={skill.image} alt={skill.name} className="stack-icon" />
                        <p>{skill.name}</p>
                    </li>
                )}
            </ol>

        </section>
    )
}

export default Stack