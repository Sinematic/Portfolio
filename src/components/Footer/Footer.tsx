import { v4 as uuidv4 } from "uuid"
import FooterItem from "./FooterItem"
import "../../styles/Footer/Footer.css"

function Footer() {

    const items = [
        {
            "name": "GitHub", 
            "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            "link": "https://github.com/Sinematic"
        }, {
            "name": "Twitter", 
            "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
            "link": "https://twitter.com/SineDev"
        }, {
            "name": "Malt", 
            "image": "https://www.svgrepo.com/show/349444/malt.svg",
            "link": "https://www.malt.fr/profile/maximerache"
        }, {
            "name": "Linkedin",
            "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
            "link": "https://www.linkedin.com/in/maxime-rache/"
        }
    ]


    return (
        <> 
            {items ? 
                <footer>
                    <ul>
                        {items.map((item) => 
                            <FooterItem key={uuidv4()} name={item.name} image={item.image} link={item.link} />
                        )}
                    </ul>
                </footer> 
            : null}
        </>
    )
}

export default Footer