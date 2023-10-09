import "../../styles/pages/Home.css"
import Footer from "../Footer/Footer"
import { useEffect, useState } from "react"
import Nav from "../Nav/Nav"
import Profile from "../sections/Profile"
import Projects from "../sections/Projects"
import Stack from "../sections/Stack"

function Home() {

    const auto = localStorage.getItem("auto") !== null ? JSON.parse(localStorage.getItem("auto")) : true
    const [page, setPage] = useState<string>("profile")
    const [hideProfile, setHideProfile] = useState<boolean>(false)
    const [hideProjects, setHideProjects] = useState<boolean>(true)
    const [hideStack, setHideStack] = useState<boolean>(true)
    const [automatic, setAutomatic] = useState<boolean>(auto)
    const [showOptionDetails, setShowOptionDetails] = useState<boolean>(false)
    
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

    const playAutomatically = () => {

        if (automatic) {
            if (page === "profile") {
                setTimeout(() => {   
                    if (automatic) togglePage("projects")
                }, 3000)
            }
        
            if (page === "projects") {
                setTimeout(() => {    
                    if (automatic) togglePage("stack")
                }, 3000)
            }
        
            if (page === "stack") {
                setTimeout(() => {  
                    if (automatic) {
                        togglePage("profile")
                        setAutomatic(false)
                    }
                }, 3000)
            }
        }
    }
    
    const handleDetails = () => {

        if (showOptionDetails) setShowOptionDetails(false)
        
        if (showOptionDetails === false) {

            setShowOptionDetails(true) 
            const id = setTimeout(() => {
                if (showOptionDetails) setShowOptionDetails(false)
                else clearTimeout(id)
            }, 3000)
        }
    }

    useEffect(() => {
        localStorage.setItem("auto", automatic.toString())
        if(automatic) playAutomatically()
    }, [page, automatic])


    return (
        <main className="home">

            <div className="options">

                <div className="details" onClick={handleDetails}>
                    <p className={showOptionDetails ? "revealed" : ""}>Discovery mode (automatically guides you through the website)</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                        <path d="M12 17h.01"/>
                    </svg>
                </div>

                <div className="toggle" onClick={() => setAutomatic(!automatic)}>
                    <div className={(automatic ?  "toggled " : "") + "round"}></div>
                </div>
            </div>

            
            <Profile hide={hideProfile} />
            <Projects hide={hideProjects} />
            <Stack hide={hideStack} />

            <Nav toggle={togglePage} page={page} />
            <Footer />
        </main>
    )
}

export default Home