import React from "react";
import "../styles/OurTeam.css";

class OurTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("exec-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="team">
        <div className="title">
          <h1>Our Team</h1>
        </div>

        <div className="all-execs">
          {data.map((exec) => (
            <div className="exec">
              <img src={exec.image} alt={exec.name}></img>
              <h2>{exec.name}</h2>
              <p>{exec.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default OurTeam;
