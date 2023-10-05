function Nav(props: { setter: (param: string) => void }) {

    const links = [
        {
            content: "About",
            to: "#about"
        }, {
            content: "Projects",
            to: "#projects"
        }, {
            content: "Stack",
            to: "#stack"
        }, 
    ]

    return (
        <nav>
            <ul>
                {links ? links.map((link) => 
                    <li key={link.to} onClick={() => props.setter}>{link.content}</li>) 
                : null}
            </ul>
        </nav>
    )
}

export default Nav