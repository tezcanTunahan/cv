import "./navbar.css"


function Navbar(){

    return(
        <nav>
            <h1>Tunahan</h1>
            <p>web developer</p>
            <ul className="nav-ul">
                <li className="nav-li">About</li>
                <hr className="nav-hr"/>
                <li className="nav-li">My Skills</li>
                <hr className="nav-hr"/>
                <li className="nav-li">Projects</li>
                <hr className="nav-hr"/>
                <li className="nav-li">Contact</li>
            </ul>
        </nav>
        )


    
}

export default Navbar