import "./app.css"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"

function App(){
    return(
        <div className="container-all">
            <Navbar/>
            <div className="container-sub">
                <Home/>
                <Projects/>
                <Footer/>
            </div>
        </div>
    )
}

export default App