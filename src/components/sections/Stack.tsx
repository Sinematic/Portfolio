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
            <div className="stack-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                    <path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/>
                    <path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/>
                </svg>
            </div>

            <ol>
                {skills.map((skill) => 
                    <li key={skill.name}>
                        <img src={skill.image} alt="" className="stack-img" />
                        <p className="stack-name">{skill.name}</p>
                    </li>
                )}
            </ol>
            
        </section>
    )
}

export default Stack