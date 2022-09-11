import React from "react";
import ValidateEmail from "./components/ValidateEmail";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./images/exabytes-removebg-preview.png";

function App() {
  return (
    <div className="Maincontainer py-5 text-white text-center">
      <div className="mb-5">
        <h1 className="fw-bold title">
          <img src={image} width="100px" />
            <span style={{ marginLeft: "-13px" }}>mail Validator</span>
        </h1>
        <p>
          Afraid of receiving malicious emails from suspicious senders?
          <br />
          Fret not! With just a click, you will know if the email is real or not.
        </p>
      </div>
      <div className="container">
        <div>
          <ValidateEmail />
        </div>
      </div>
    </div>
  );
}

export default App;
