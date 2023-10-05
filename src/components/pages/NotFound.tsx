import { useNavigate } from "react-router"
import "../../styles/pages/NotFound.css"

function NotFound() {

    const navigate = useNavigate()

    setTimeout(() => {
        navigate("/")
    }, 5000)

    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Page not found ! 🫣</p>
            <p onClick={() => navigate("/")} className="redirect">Back to the homepage</p>
        </div>
    )
}

export default NotFound