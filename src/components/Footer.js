import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.webp";
import navIcon1 from "../assets/img/icons-telegram.svg";
import navIcon2 from "../assets/img/icons-whatsapp.svg";
import navIcon3 from "../assets/img/icons-instagram.svg";
import imgContact from "../assets/img/contact_img.webp";
import ctEmail from "../assets/img/icons-email.svg";
import ctPhone from "../assets/img/icons-phone.svg";
import ctGithub from "../assets/img/icons-github1.svg";
import ctDribbble from "../assets/img/icons-dribbble.svg";
import ctImg from "../assets/img/ct-img.webp";

export const Footer = () => {
  return (
    <footer className="footer">
  
      
      <Container>
        <Row className="align-items-center">
        <section className="contact-box">
        
        <div className="contact-section">
          
        <div className="contact-input">
          <img draggable="false" className="ctimg" src={ctImg} alt="Contact"/>
          <img draggable="false" className="ctimg2" src={imgContact} alt="Contact"/>
          <div className="something-new">
          <div className="contact-buttton">
            <a className="contact-b" href="tel:09385390844"><img className="ftimg" src={ctPhone} alt="Phone"/></a>
            <a className="contact-b" href="mailto:info@peranull.ir"><img className="ftimg" src={ctEmail} alt="Email"/></a>
          </div>
          {/* this one gets hidden */}

          <div className="contact-buttton2">
            <a className="contact-c" href="https://github.com/AmirAbbasVafaee/" target="_blank" rel="noopener noreferrer"><img className="ftimg" src={ctGithub} alt="Github"/></a>
            <a className="contact-c" href="https://dribbble.com/peranull" target="_blank" rel="noopener noreferrer"><img className="ftimg" src={ctDribbble} alt="Dribbble"/></a>
          </div>
          </div>
          </div>
        </div>
        </section>

      {/* footer stuff */}

           <div className="logo-ft-small">
          <img className="logo-ft-small-size" src={logo} alt="Logo" />
          </div>

          <Col className="logo-ft" size={12} sm={6}>
            <img src={logo} alt="Logo" draggable="false" title="Peranull" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://t.me/peranull" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Telegram" /></a>
              <a href="https://wa.me/989385390844?text=peranull.ir" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Whatsapp" /></a>
              <a href="https://www.instagram.com/peranull/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>کپی رایت ۲۰۲۲ – تمامی حقوق برای <a href="#connect"> امیرعباس وفایی </a> محفوظ است.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
