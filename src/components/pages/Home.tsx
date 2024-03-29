import "../../styles/pages/Home.css"
import Footer from "../Footer/Footer"
import { useEffect, useRef, useState } from "react"
import Nav from "../Nav/Nav"
import Profile from "../sections/Profile"
import Projects from "../sections/Projects"
import Stack from "../sections/Stack"

function Home() {

    const width = window.innerWidth

    const storageItem = localStorage.getItem("auto")
    const auto = storageItem !== null ? JSON.parse(storageItem) : false

    const redirectionRef = useRef<number | undefined>(undefined)

    const [page, setPage] = useState<string>("profile")
    const [hideProfile, setHideProfile] = useState<boolean>(false)
    const [hideProjects, setHideProjects] = useState<boolean>(true)
    const [hideStack, setHideStack] = useState<boolean>(true)
    const [automatic, setAutomatic] = useState<boolean>(auto)
    const [showOptionDetails, setShowOptionDetails] = useState<boolean>(false)
    const [transitioning, setTransitioning] = useState<boolean>(false);

    
    const togglePage = (param: string) => {

        if (transitioning === false) {

            setTransitioning(true)

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
    
            setTimeout(() => { 
                setPage(param) 
                setTransitioning(false)
            }, 1000)
        }
    }

    const playAutomatically = () => {

        if (automatic) {

            if (page === "profile") togglePage("projects")
            if (page === "projects") togglePage("stack")
            if (page === "stack") {
                togglePage("profile")
                setAutomatic(false)
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

        if (automatic) redirectionRef.current = setTimeout(() => { playAutomatically() }, 2000)

        return () => {
            clearTimeout(redirectionRef.current)
        }

    }, [page, automatic])


    return (
        <main className="home">

            <div className="options">

                <div className="details" onClick={handleDetails}>
                    <p className={showOptionDetails ? "revealed" : ""}>
                        Discovery mode{width > 1024 ? "(automatically guides you through the website)" : null}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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