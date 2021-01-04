import React from "react";
import "../styles/Tabs.css";
import logo from "../images/IMG_7464.PNG";

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: this.props.tab
        }
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab = (tabValue) => {
        this.setState({
            tab: tabValue
        }, () => {
            this.props.onTabChange(this.state.tab);
        });
    }
    
    render() {
        return (
            <div className="tabs">
                <div className="title">
                    <img src={logo} alt="Logo"></img>
                    <h1>Women in Healthcare</h1>
                </div>
                <div className="list">
                    <ul>
                        <li><a href="#0" onClick={() => this.changeTab('home')}>Home</a></li>
                        <li><a href="#0" onClick={() => this.changeTab('about')}>About</a></li>
                        <li><a href="#0" onClick={() => this.changeTab('sponsorship')}>Sponsorship</a></li>
                        <li><a href="#0" onClick={() => this.changeTab('our-team')}>Our Team</a></li>
                        <li><a href="#0" onClick={() => this.changeTab('events')}>Events</a></li>
                        <li><a href="#0" onClick={() => this.changeTab('blog')}>Blog</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tab;
