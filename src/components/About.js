import React from "react";
import "../styles/About.css";
import cover from "../images/fullsizeoutput_682b.jpeg"

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="panels">
                    <div className="picture">
                       <img src={cover} alt="cover" className="pic"></img>
                    </div>
                    <div className="description">
                        <div className="text">
                            <h1>Our Story</h1>
                            <h2>Behind the Scenes</h2>
                            <p>Here at Women in Healthcare, we’re committed to investing our<br></br> 
                                expertise and resources in order to further achieve our cause. Since<br></br> 
                                2000, we’ve been supporting our community members in a variety of<br></br> 
                                ways and measuring our success not by monetary size, but by more<br></br> 
                                qualitative measurements such as the scale and effectiveness of our<br></br> 
                                efforts. Just imagine what we can achieve together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;