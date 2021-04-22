import React from "react";
import "../styles/Sponsorship.css";

class Sponsorship extends React.Component {
    render() {
        return (
            <div className="sponsorship">
                <div className="title">
                    <h1>Sponsorship Levels</h1>
                    <h2>Make Your Mark</h2>
                </div>
                <div className="levels">
                    <div className="bronze level">
                        <h3>Bronze Level</h3>
                        <ul>
                            <li>Social Media Recognition</li>
                            <li>Honorary Mentions During Events</li>
                        </ul>
                    </div>
                    <div className="silver level">
                        <h3>Silver Level</h3>
                        <ul>
                            <li>Social Media Recognition</li>
                            <li>Honorary Mentions During Events</li>
                            <li>Promotional Video Show at Events</li>
                        </ul>
                    </div>
                    <div className="gold level">
                        <h3>Gold Level</h3>
                        <ul>
                            <li>Social Media Recognition</li>
                            <li>Honorary Mentions During Events</li>
                            <li>Promotional Video Show at Events</li>
                            <li>Events Mentorship and Speaker Opportunity</li>
                        </ul>
                    </div>
                </div>
                <div className="title contact-us">
                    <h2 className="white">Contact Women in Healthcare about Sponsorships at womeninhealthcare@clubs.wusa.ca!</h2>
                </div>
                {/* <div className="form-panels">
                    <div className="image">

                    </div>
                    <div className="form">
                        <h1 className="form-title">Contact Women in Healthcare about Sponsorships!</h1>
                        <form>
                            <input placeholder="Name"></input>
                            <input placeholder="Email"></input>
                            <input placeholder="Company"></input>
                            <textarea placeholder="Type your message here..." rows="5"></textarea>
                            <button type="submit"><h1>Submit</h1></button>
                        </form>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Sponsorship;