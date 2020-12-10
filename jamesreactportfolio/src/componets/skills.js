import React from "react";
import Wrapper from './Wrapper';

function Skills() {
    return (
      <Wrapper>
      <div className="table-responsive">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <th>HTML</th>
                <th>MySQL</th>
                <th>jQuery</th>
                <th>APIs</th>
              </tr>
              <tr>
                <th>CSS</th>
                <th>SQL</th>
                <th>Node.JS</th>
              </tr>
              <tr>
                <th>JavaScript</th>
                <th>MongoDB</th>
                <th>React</th>
              </tr>
            </tbody>
          </table>
      

      <div className="resumeWrapper">
          <a
            type="submit"
            className="Resume"
            // onClick={(event) => (window.location.href = "contact")}
            href="https://docs.google.com/document/d/1H7P2VIOMqsinM3f1kqHHpJC2rnTY5X0FO7ohDsfUFL0/edit?usp=sharing" 
            rel="noopener noreferrer" 
            target="_blank"
            >
            Resume
            </a>
      </div>
      </div> 
      </Wrapper>
    );
  }
 
