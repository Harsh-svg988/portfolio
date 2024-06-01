import Intro from "./Components/Intro/Intro";
import Typing from "./Components/Typewriter/Typing";
function HomePage(){
    return (
        <section className="container">
        <div className = "home-page">
            <div id="texts" className="">
                <div id = "greetings">Hi There!</div>
                <div id = "name">I'M 
                    <b> HARSH KUMAR</b>
                </div>
                <div id = "profession">
                    <Typing
                    text={[
                    "FULL Stack Developer",
                    "React Developer"
                    ]}
                    typingSpeed = {100}
                    deletingSpeed = {50}
                    duration = {1000}
                    />
                </div>
            </div>
            <div id="coder-img">
                <img className = "first-img" src="/assests/first-page-image.png" alt="coder" style={{ width: "350px", height: "400px" }} />
            </div>
        </div>
        <Intro/>
        </section>
        
    );
}
export default HomePage;