function HomePage(){
    return (
        <div className = "home-page">
            <div id="texts" className="">
                <div id = "greetings">Hi There!</div>
                <div id = "name">I'M 
                    <b> HARSH KUMAR</b>
                </div>
                <div id = "profession">FULL Stack Developer</div>
            </div>
            <div id="coder-img">
                <img className = "first-img" src="/assests/first-page-image.png" alt="coder" style={{ width: "350px", height: "400px" }} />
            </div>
        </div>
        
    );
}
export default HomePage;