import "../../styles/Nav/Nav.css"

function Nav(props: { toggle: (param: string) => void, page: string }) {

    const links = [
        {
            content: "About",
            name: "profile",
            to: "#about"
        }, {
            content: "Projects",
            name: "projects",
            to: "#projects"
        }, {
            content: "Stack",
            name: "stack",
            to: "#stack"
        }, 
    ]

    return (
        <nav>
            <ul>
                {links ? links.map((link) => 
                    <li key={link.to} className={props.page === link.name ? "current" : ""}
                    onClick={props.page !== link.name ? () => props.toggle(link.name) : undefined}>{link.content}</li>) 
                : null}
            </ul>
        </nav>
    )
}

export default Nav