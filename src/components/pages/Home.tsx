import "../../styles/pages/Home.css"
import Footer from "../Footer/Footer"
import ProfilePicture from "../../assets/maxime-rache-web-developer.png"
import { useState } from "react"
import Nav from "../Nav"

function Home() {

    const [page, setPage] = useState<string>("profile")
    const [display, setDisplay] = useState(false)
    
    const handlePage = (param: string): void => setPage(param)
    const toggleBio = ()  => setDisplay(!display)

    return (
        <main className="home">
            { page === "profile" ?
                <section id="profile">
                    <div className="picture-container">
                        <img src={ProfilePicture} alt="" />
                        <div className={display ? "bio revealed" : "bio"}>
                            Let me tell you a bit about myself ! 
                        </div>
                    </div>
                    <div className="profile-info">                
                        <h1>Maxime Rache</h1>
                        <p>Web Developer</p>
                        <button onClick={() => toggleBio()}>See more</button>
                    </div>
                </section>
            : null}
            { page === "projects" ? 
                <section id="profile">
                    <div className="profile-info">                
                        <h1>Maxime Rache</h1>
                        <p>Développeur Web</p>
                        <button onClick={() => setPage("profile")}>En voir plus</button>
                    </div>
                </section>
            : null}
            <Nav setter={handlePage} />

            <Footer />
        </main>
    )
}

export default Home