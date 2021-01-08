import React from "react";
import "../styles/EmailForm.css";

class EmailForm extends React.Component {
    handleSubmit = event => {
        alert(event);
    }

    render() {
        return (
            <div className="email-form">
                <h1>Subscribe Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Email Address"></input>
                    <br></br>
                    <button type="submit">
                        <h1>Submit</h1>
                    </button>
                </form>
            </div>
        );
    }
}

export default EmailForm;

// <iframe title="googleform" src="https://docs.google.com/forms/d/e/1FAIpQLSfqNUuPLLGMpf81jk2aSMZmRMLqlSr81TjZs-nY4dvcsGYjMQ/viewform?embedded=true" width="640" height="1308" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>