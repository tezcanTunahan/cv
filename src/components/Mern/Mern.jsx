import "./mern.css"

function Mern(){
    return(
        <div className="mern-container">
            <h1 className="mern-h1">MERN</h1>
            <div className="mern-icon-container">
            <i class="fas fa-database"></i>
            <div className="ex-h1">
                <h1>ex</h1>
            </div>
            <i class="fab fa-react react-icon"></i>
            <i class="fab fa-node-js"></i>
            </div>
            <p>MongoDB - document database <br /> <br />
            Express(.js) - Node.js web framework <br /> <br />
            React(.js) - a client-side JavaScript framework <br /> <br />   
            Node(.js) - the premier JavaScript web server</p>
        </div>
    )
}

export default Mern