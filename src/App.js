import React from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import Home from "./components/Home";
import About from "./components/About";
import Sponsorship from "./components/Sponsorship";
import OurTeam from "./components/OurTeam";
import Events from "./components/Events";
import EmailForm from "./components/EmailForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'home'
        }
        this.changeTabComponent = this.changeTabComponent.bind(this)
    }

    changeTabComponent = (tabValue) => {
        this.setState({tab: tabValue});
    } 

    render() {
        return (
            <div className="App">
                <Tabs tab={this.state.tab} onTabChange={this.changeTabComponent} />
                {this.state.tab === 'home' && <Home />}
                {this.state.tab === 'about' && <About />}
                {this.state.tab === 'sponsorship' && <Sponsorship />}
                {this.state.tab === 'our-team' && <OurTeam />}
                {this.state.tab === 'events' && <Events />}
                <EmailForm />
            </div>
        );
    }
}

export default App;
