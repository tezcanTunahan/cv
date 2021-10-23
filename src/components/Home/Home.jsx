import "./home.css"

function Home(){

    return(
        <div className="home-container" id="About">
            <h1 className="home-h1">Hi, <br />I'm Tunahan, <br /> I’m full stack web developer</h1>
            <button className="home-btn" onClick={()=>window.scrollTo(0,document.body.scrollHeight)}>Contact me</button>
        </div>
    )
}

export default Home