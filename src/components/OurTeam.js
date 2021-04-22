import React from "react";
import "../styles/OurTeam.css";
import { data } from "../exec-data";
import logo from "../images/IMG_7464.PNG";

class OurTeam extends React.Component {
  render() {
    return (
      <div className="team">
        <div className="title">
          <h1>Our Team</h1>
        </div>

        <div className="all-execs">
          {data.map((exec) => (
            <div key={exec.id} className="exec">
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
