import "./navbar.css"

function Navbar(){
    return(
        <div className="navbar-container">
            <nav>
                <h1 className="sliding-text">Tunahan Tezcan  <br /> fullstack developer </h1>
                <ul>
                    <li><a href="/">contact</a></li>
                    <li><a href="/">projects</a></li>
                    <li><a href="/">Abuout me</a></li>
                </ul>
            </nav>
            <h1 className="logo">Tunahan Tezcan</h1>
        </div>

    )
}

export default Navbar