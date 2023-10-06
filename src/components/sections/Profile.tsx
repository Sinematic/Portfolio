import { useState } from "react"
import ProfilePicture from "../../assets/maxime-rache-web-developer.png"
import "../../styles/sections/Profile.css"

function Profile(props: { hide: boolean }) {

    const { hide } = props

    const [displayBio, setDisplayBio] = useState(false)
    const toggleBio = ()  => setDisplayBio(!displayBio)

    return (
        <section id="profile" className={hide ? "hidden" : ""} >
            <div className="picture-container">
                <img src={ProfilePicture} alt="" />
                <div className={(displayBio ? "revealed " : "") + "bio"}>
                    <p>I love to sip on a cup of coffee as the leaves change color in the fall.</p>
                    <p>I am equally interested in the code as in the creative aspects of being a developer.</p>
                </div>
            </div>
            <div className="profile-info">                
                <h1>Maxime Rache</h1>
                <p>Web Developer</p>
                <button onClick={toggleBio} className={displayBio ? "revealed" : ""}>
                    {displayBio ? "See less 😌" : "See more ✨"}</button>
            </div>
        </section>
    )
}

export default Profile