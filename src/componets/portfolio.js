import React from "react";
import {Card, Button, CardImg, CardTitle, CardText,CardBody
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Wrapper from './wrapper';

function Projects(props) {
  return (

    <Wrapper>
    <div className="card">
      <div className="img-container">
        <Card>
          <Button id="project-button" block>{props.name}</Button>
          <CardImg top width="100%" src={props.picture} alt="website image"/>
            <CardBody className="content">

              <CardTitle 
                style={{fontSize: "18px", fontWeight: "bold"}}>
                Desc:
              </CardTitle>

              <CardText 
                style={{fontSize:"18px"}}> 
                {props.description} 
              </CardText>

              <CardTitle 
                style={{fontSize: "18px", fontWeight: "bold"}}>
                Tech:
              </CardTitle>

              <CardText> 
                {props.tech }
              </CardText>

              <div className="portfolio-link">
                <a
                  className="external-links"
                  id="github"
                  style={{fontSize: "18px", fontWeight: "bold", color:"#1F8832",textAlign:"center"}}
                  tag={Link} href={`${props.github}`}
                  rel="noopener noreferrer" 
                  target="_blank"
                > 
                   Github: 
                </a>
                |
                <a
                  className="external-links"
                  id="website"
                  style={{fontSize: "18px", fontWeight: "bold", color:"#1F8832", textAlign:"center"}}
                  tag={Link} 
                  href={`${props.site}`}
                  rel="noopener noreferrer" 
                  target="_blank"
                  > 
                   Deployed Site:
                </a>
              </div>

            </CardBody>
        </Card>
      </div>
    </div> 

    </Wrapper>
  );
};
  
  export default Projects