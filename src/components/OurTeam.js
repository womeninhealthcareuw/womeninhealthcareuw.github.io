import React from "react";
import "../styles/OurTeam.css";
import logo from "../images/IMG_7464.PNG";


class OurTeam extends React.Component {
    render() {

        const execs = [
            {
                'name': 'Marina Zheng',
                'role': 'President',
                'logo': logo
            },
            {
                'name': 'Janice Ng',
                'role': 'VP Finance',
                'logo': logo
            },
            {
                'name': 'Tiantian Li',
                'role': 'VP Admin',
                'logo': logo
            },
            {
                'name': 'Katie Szajbely',
                'role': 'Head of Administration',
                'logo': logo
            },
            {
                'name': 'Nadine Ghanem',
                'role': 'Head of Events',
                'logo': logo
            },
            {
                'name': 'Sophia Wong',
                'role': 'Head of Marketing',
                'logo': logo
            },
            {
                'name': 'Tanveer Randhawa',
                'role': 'Head of Sponsorship',
                'logo': logo
            },
            {
                'name': 'Bonnie Peng',
                'role': 'Web Design Director',
                'logo': logo
            },
            {
                'name': 'Aida Zaheer',
                'role': 'Events Director',
                'logo': logo
            },
            {
                'name': 'Anique Singh',
                'role': 'Events Director',
                'logo': logo
            },
            {
                'name': 'Anna Kandias',
                'role': 'Events Director',
                'logo': logo
            },
            {
                'name': 'Hailey Granger',
                'role': 'Events Director',
                'logo': logo
            },
            {
                'name': 'Shereen Akkila',
                'role': 'Events Director',
                'logo': logo
            },
            {
                'name': 'Amy Chung',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Elina Ho',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Krishna Arunkumar',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Mannat Kapoor',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Meagan Taylor',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Navreet Bhandal',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Parmpreet Mangat',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Sara Sennaoui',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Sarah Ismail',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Savera Lodhy',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Sukhman Garcha',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Victoria Lee',
                'role': 'Sponsorship Director',
                'logo': logo
            },
            {
                'name': 'Breanna Quan',
                'role': 'Marketing Director',
                'logo': logo
            },
            {
                'name': 'Hetvi Mahida',
                'role': 'Marketing Director',
                'logo': logo
            },
            {
                'name': 'Hishany Kulenthiran',
                'role': 'Marketing Director',
                'logo': logo
            },
            {
                'name': 'Eesha Mariam',
                'role': 'Marketing Director',
                'logo': logo
            },
            {
                'name': 'Nina Doad',
                'role': 'Marketing Director',
                'logo': logo
            },
            {
                'name': 'Sarch Darch',
                'role': 'Marketing Director',
                'logo': logo
            },
            {
                'name': 'Maira Khan',
                'role': 'Finance Director',
                'logo': logo
            },
            {
                'name': 'Victoria Thai',
                'role': 'Finance Director',
                'logo': logo
            },
            {
                'name': 'Michelle Wong',
                'role': 'Administrative  Director',
                'logo': logo
            },
            {
                'name': 'Tonia Hart',
                'role': 'Administrative  Director',
                'logo': logo
            }

        ];

        const html_code = [];
        console.log(execs.length);
        for (let i = 0; i < execs.length; i++) {
            html_code.push(<div className="exec">
                <img src={execs[i]['logo']} alt={execs[i]['name']}></img>
                <h2>{execs[i]['name']}</h2>
                <p>{execs[i]['role']}</p>
            </div>)
        }

        return (
            <div className="team">
                <div className="title">
                    <h1>Our Team</h1>
                </div>
                <div className="all-execs">

                { html_code }

                </div>
            </div>
        );
    }
}

export default OurTeam;