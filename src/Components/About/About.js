import './About.css';
function About(){
    return (
        <div>
            <div className="About">
                <div className='AboutText'>
                    <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
                    <p>
                        Hi, my name is <b>Harsh Kumar</b> and I am from Patna, India.
                        I'm a <b>Full stack web developer</b> and a first year college student pursuing <b>BTech in CSE</b>. <br/><br/>
                        I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
                        I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
                        Apart from coding I love to play Badmintion & Table Tennis.
                    </p>
                </div>
                <div className="coder-img">
                    <img src="/assests/coder.png" alt="coder" style={{ width: "350px", height: "400px" }} />
                </div>
            </div>
        </div>
    )
}
export default About;