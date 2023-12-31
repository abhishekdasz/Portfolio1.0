import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SiWebhint } from "react-icons/si";
import './Skills.css'
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum voluptatum repellendus. Debitis et harum modi rem, quae aperiam iste!</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider"> 
                        <div className="item">
                            <SiWebhint className="img"/>
                            <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <SiWebhint className="img"/>
                            <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <SiWebhint className="img"/>
                            <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <SiWebhint className="img"/>
                            <h5>Web Development</h5>
                        </div>
                    </Carousel>
                </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}

export default Skills;
