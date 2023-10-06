import "../../styles/Footer/FooterItem.css"


function FooterItem(props: { name: string, image: string, link: string }) {

    return (
        <li className="footer-item">
            <a href={props.link}>
                <img src={props.image} alt={props.name} />
            </a>
        </li>
    )
}

export default FooterItem