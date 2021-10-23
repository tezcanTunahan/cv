import "./app.css"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Mern from "./components/Mern/Mern"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"

function App(){
    return(
        <div className="container-all">
            <Navbar/>
            <div className="container-sub">
                <Home/>
                <Mern/>
                <Projects/>
                <Footer/>
            </div>
        </div>
    )
}

export default App