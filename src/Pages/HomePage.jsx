import NavBar from "../Components/NavBar";


function HomePage( ) {
return(
    <>
    <NavBar />
    <div className="home">
        <div className="fidelsworldwide">
            <a href="https://www.fidelsworldwide.com/">
            <img className="first-logo" src="https://i.imgur.com/ZOtNmNH.jpg" width="600px" height="400"/> 
            </a>    
        </div>
        <br></br>
        
        <div className="bakedbodega">
            <a href= "https://bakedbodega.com/">
            <img className="second-logo" src="https://i.imgur.com/2J4asz7.jpg" width="600px" height="600"/> 
            </a>
        </div>
        <br></br>
        
        <div className="pixiestix">
                <a href="https://www.instagram.com/pixie_stix_official/?hl=en">
                <img className="third-logo" src="https://i.imgur.com/m2ykaWJ.jpg" width="600px" height="550"/>
                </a>
        </div>
        <br></br>


        <div className="smokeup">
            <a href="https://www.instagram.com/smokeupofficial1/">
            <img className="fourth-logo" src="https://i.imgur.com/o77MNfi.jpg" width="600px" height="550"/>
            </a>
        </div>
  
    </div>
    </>
    
)
}

export default HomePage;

