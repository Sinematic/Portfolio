import { useEffect, useState } from "react"
import ProfilePicture from "../../assets/maxime-rache-web-developer.webp"
import "../../styles/sections/Profile.css"

function Profile(props: { hide: boolean }) {

    const { hide } = props

    const [displayBio, setDisplayBio] = useState(false)
    const toggleBio = ()  => setDisplayBio(!displayBio)

    useEffect(() => {
        setDisplayBio(false)
    }, [hide])
    

    return (
        <section id="profile" className={hide ? "hidden" : ""} >

            <div className="picture-container">
                <img rel="preload" src={ProfilePicture} alt="" />
                <div className={(displayBio ? "revealed " : "") + "bio"}>
                    <p>I love to sip on a cup of coffee as the leaves change color in the fall.</p>
                    <p>I am equally interested in the code as in the creative aspects of being a developer.</p>
                </div>
            </div>

            <div className="profile-info">    

                <h1>Maxime Rache</h1>
                <p>Web Developer</p>

                <button onClick={toggleBio} className={"dark-button" + (displayBio ? " revealed" : "")}>
                    {displayBio ? "See less 😌" : "See more ✨"}
                </button>

            </div>

            <div>
                
            </div>

        </section>
    )
}

export default Profile