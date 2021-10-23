import "./projects.css"
import residue from "../../img/residue.png"
import blogT from "../../img/blogT.png"
import todo from "../../img/todo.png"



function Projects(){

    function openResidue(){
        window.location.replace("https://residue.netlify.app/");
    }
    function openBlogT(){
        window.location.replace("https://blogt.netlify.app/");
    } 
    function openTodo(){
        window.location.replace("https://todowithtimer.netlify.app/");
    }

    return(
        <div className="projects-container">
            <div onClick={openResidue} class="flip-card">
            <div  class="flip-card-inner">
                <div class="flip-card-front">
                <img className="proje-img" alt="proje-img" src={residue} />
                </div>
                <div class="flip-card-back">
                <h1>Residue</h1> 
                <p>It's MERN stack app</p> 
                <p>I used mapbox for this one</p>
                </div>
            </div>
            </div>
            <div onClick={openBlogT} class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img className="proje-img" alt="proje-img" src={blogT} />
                </div>
                <div class="flip-card-back">
                <h1>BlogT</h1> 
                <p>It's my first MERN Stack proje</p> 
                <p>This one teach me how to use frontend and backand together</p>
                </div>
            </div>
            </div>
            <div onClick={openTodo} class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img className="proje-img" alt="proje-img" src={todo} />
                </div>
                <div class="flip-card-back">
                <h1>Todo-Timer</h1> 
                <p>It's my first 'react' proje</p> 
                <p>It's pretty ugly</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects