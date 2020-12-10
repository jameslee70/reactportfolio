import React from "react";
import james from "../images/james.PNG";

function About() {
    return (
    <div className="App">
      <div className="App-header">
        <span className="about-container">
          <div className="row">
            <div className="col-sm-3">
              <img src={james} className="James-Image" alt="James headshot" />
            </div>   

            <div className="col-sm-9">
              <div className="about-container-text">
                <h2 id="about-header">Hello!</h2>
                <p id="about-text">
                My name is James Lee! I am a Full Stack Web Developer in training. I am seeking certification in this field. I am also certified in Microsoft Word, Powerpoint, Excel and Access.</p>
            
                <p id="about-text">
                I have always found technology and software fascinating. Everyone around me always tells me that I am very good with technology and that I could make money from it. I did not have any prior knowledge to coding other and I computer programming class I took in high school.</p>
              
                <p id="about-text">
                I would like to consider myself a better front-end developer than a back-end developer, as I find the front-end comes easier to me.</p>

                <p id="about-text">
                All projects and cool homework assignments can be see here.
                </p>
              </div>
            </div>

          </div>
        </span>
      </div>
    </div>
  );
}

export default About