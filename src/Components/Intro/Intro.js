import './Intro.css';
function Intro(){
    return(
        <div className="intro-page">
            <div className="intro-text">
                <h1 className="intro-content-header">Brief <b>introduction</b></h1>
                <p className="intro-content"> I am a Full Stack Developer. I am passionate about web development and programming. I love to learn new technologies and frameworks. I am always ready to take new challenges and solve problems.</p>
                <p className="intro-content"> I have experience in developing web applications using React, Node.js, Express.js, and MongoDB. I have also worked on projects using Python, Django, and Flask.</p>
                <p className="intro-content">Also, I love coffee</p>
            </div>
            <div className="intro-image">
                <img className="coffee-img" src="https://portfolio-devanshsahni.vercel.app/static/media/Avatar.fa312ccf8f85946c64d0.png"/>
            </div>
        </div>
    )
}
export default Intro;