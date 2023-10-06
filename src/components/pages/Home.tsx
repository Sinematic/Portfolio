import "../../styles/pages/Home.css"
import Footer from "../Footer/Footer"
import { useState } from "react"
import Nav from "../Nav/Nav"
import Profile from "../sections/Profile"
import Projects from "../sections/Projects"
import Stack from "../sections/Stack"

function Home() {

    const [page, setPage] = useState<string>("profile")
    const [hideProfile, setHideProfile] = useState<boolean>(false)
    const [hideProjects, setHideProjects] = useState<boolean>(true)
    const [hideStack, setHideStack] = useState<boolean>(true)
    window.location.hash = "profile"

    const togglePage = (param: string) => {

        if (page === "profile") {
            setHideProfile(true)
            param === "projects" ? setHideProjects(false) : setHideStack(false)
        }
        if (page === "projects") {
            setHideProjects(true)
            param === "stack" ? setHideStack(false) : setHideProfile(false)
        }
        if (page === "stack") {
            setHideStack(true)
            param === "profile" ? setHideProfile(false) : setHideProjects(false)
        }
        
        setTimeout(() => { setPage(param) }, 1000)
    }

    return (
        <main className="home">
            <Profile hide={hideProfile} />
            <Projects hide={hideProjects} />
            <Stack hide={hideStack} />

            <Nav toggle={togglePage} page={page} />
            <Footer />
        </main>
    )
}

export default Home