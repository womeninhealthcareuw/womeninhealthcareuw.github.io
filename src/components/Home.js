import React from "react";
import "../styles/Home.css";
import titlePicture from "../images/WiH FB Cover.PNG";
import logo from "../images/WiH Logo.JPG"
import coverImage from "../images/thumbnail_Image.jpg"

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="title">
                    <img src={titlePicture} alt="Title"></img>
                </div>
                <div className="second-layer">
                    <div className="logo">
                        <img src={logo} alt="Logo"></img>
                    </div>
                    <div className="description">
                        <div className="text">
                            <h1>Women in Healthcare at<br></br> a Glance</h1>
                            <h2>Started in 2020</h2>
                            <p>Women in Healthcare focuses on creating a safe space for female<br></br>
                                students interested in pursuing healthcare related professions. We<br></br>
                                plan to discuss unique opportunities and challenges, all while<br></br>
                                promoting the well being of our fellow colleagues.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="third-layer">
                    <div className="education">
                        <h3>Education</h3>
                        <p>Helping The Community</p>
                    </div>
                    <div className="advocacy">
                        <h3>Advocacy</h3>
                        <p>Reinforcing our Commitment</p>
                    </div>
                    <div className="support">
                        <h3>Support</h3>
                        <p>One Step at a Time</p>
                    </div>
                </div>
                {/* <div className="fourth-layer">
                    <img src={coverImage} alt="Cover"></img>
                </div> */}
            </div>
        );
    }
}

export default Home;