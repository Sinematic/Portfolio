import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home.tsx"
import './App.css'
import NotFound from "./components/pages/NotFound.tsx"

function App() {

    return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
    )
}

export default App
