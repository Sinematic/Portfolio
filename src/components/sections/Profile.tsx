import { useEffect, useState } from "react"
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
                <img src={`https://media.discordapp.net/attachments/1046509338556121128/1159956326051500132/moi-pro.png?ex=6532e883&is=65207383&hm=0b594044256927efce7e30d1cd5cb903a0242cd406ed834f459321969fa87b64&=&width=782&height=671`} alt="" />
                <div className={(displayBio ? "revealed " : "") + "bio"}>
                    <p>I love to sip on a cup of coffee as the leaves change color in the fall.</p>
                    <p>I am equally interested in the code as in the creative aspects of being a developer.</p>
                </div>
            </div>
            <div className="profile-info">                
                <h1>Maxime Rache</h1>
                <p>Web Developer</p>
                <button onClick={toggleBio} className={"dark-button" + (displayBio ? " revealed" : "")}>
                    {displayBio ? "See less 😌" : "See more ✨"}</button>
            </div>

            <div>
                
            </div>

        </section>
    )
}

export default Profile