import "./navbar.css"


function Navbar(){

    return(
        <nav>
            <h1><a className="logo" href="https://tunahantezcan.netlify.app/">Tunahan</a></h1>
            <p>web developer</p>
            <ul className="nav-ul">
                <li className="nav-li"><a className="nav-a" href="#About">About</a></li>
                <hr className="nav-hr"/>
                <li className="nav-li"><a className="nav-a" href="#Skills">My Skills</a></li>
                <hr className="nav-hr"/>
                <li className="nav-li"><a className="nav-a" href="#Projects">Projects</a></li>
                <hr className="nav-hr"/>
                <li className="nav-li"><a className="nav-a" href="#Contact">Contact</a></li>
            </ul>
        </nav>
        )


    
}

export default Navbar