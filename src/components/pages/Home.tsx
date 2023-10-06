import "../../styles/pages/Home.css"
import Footer from "../Footer/Footer"
import { useState } from "react"
import Nav from "../Nav"
import Profile from "../sections/Profile"
import Projects from "../sections/Projects"

function Home() {

    const [page, setPage] = useState<string>("profile")
    const [hideProfile, setHideProfile] = useState<boolean>(false)

    const togglePage = (param: string) => {

        if (page === "profile") setHideProfile(true)
        setTimeout(() => { setPage(param) }, 1000)
    }

    return (
        <main className="home">
            { page === "profile" ? <Profile hide={hideProfile} /> : null}
            { page === "projects" ? <Projects hide={false} />
            : null}

            <button onClick={() => togglePage("projects")}>Changer de section</button>
            <Nav setter={togglePage} />

            <Footer />
        </main>
    )
}

export default Home