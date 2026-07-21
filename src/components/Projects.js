import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/project-porsanj-order-1.webp";
import projImg5 from "../assets/img/project-porsanj-order-1.webp";
import projImg6 from "../assets/img/project-porsanj-order-1.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "وب سایت پرسنج",
      description: "طراحی و پیاده سازی وب سایت",
      imgUrl: projImg4,
      buttonUrl: "https://porsanj.com",
    },
    {
      title: "وب سایت باینال",
      description: "طراحی و پیاده سازی وب سایت",
      imgUrl: projImg5,
      buttonUrl: "https://binaal.com",
    },
    {
      title: "وب سایت Rodahealth",
      description: "طراحی و پیاده سازی وب سایت",
      imgUrl: projImg4,
      buttonUrl: "https://rodahealth.com/",
    },
    {
      title: "وب سایت ریزآموز",
      description: "طراحی و پیاده سازی وب سایت",
      imgUrl: projImg4,
      buttonUrl: "https://binaal.com",
    },
    {
      title: "وب سایت دکترکانکت",
      description: "طراحی و پیاده سازی وب سایت",
      imgUrl: projImg5,
      buttonUrl: "#",
    },
    {
      title: "Business Startup",
      description: "طراحی و پیاده سازی وب سایت",
      imgUrl: projImg6,
      buttonUrl: "#",
    },
  ];

  return (
    <section className="project" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 id="projects">نمونه کار</h2>
                <p>برای دیدن نمونه کارها و جزئیات بیشتر در زمینه طراحی و ساخت وب سایت با ما تماس بگیرید.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">سایت</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">اپلیکیشن</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">هویت بصری</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>به زودی...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"/>
    </section>
  )
}
