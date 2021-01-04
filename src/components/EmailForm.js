import React from "react";
import "../styles/EmailForm.css";

class EmailForm extends React.Component {
    render() {
        return (
            <div className="email-form">
                <h1>Subscribe Form</h1>
                <form>
                    <input placeholder="Email Address"></input>
                    <br></br>
                    <button>
                        <h1>Submit</h1>
                    </button>
                </form>
            </div>
        );
    }
}

export default EmailForm;