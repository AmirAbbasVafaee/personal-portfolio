import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.webp';
import navSocial1 from '../assets/img/icons-telegram.svg';
import navSocial2 from '../assets/img/icons-whatsapp.svg';
import navSocial3 from '../assets/img/icons-instagram.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect( () => {
    const onScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true);
      } else{
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img className="logo-header" src={logo} alt="logo" title="Peranull"/>
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>خانه</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>خدمات</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>نمونه کار</Nav.Link>
            <Nav.Link href="#pricing-plan" className={activeLink === 'pricing-plan' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('pricing-plan')}>لیست قیمت</Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://t.me/peranull" target="_blank" rel="noopener noreferrer"><img src={navSocial1} alt="Telegram"/></a>
              <a href="https://wa.me/989385390844?text=peranull.ir" target="_blank" rel="noopener noreferrer"><img src={navSocial2} alt="Whatsapp" /></a>
              <a href="https://www.instagram.com/peranull/" target="_blank" rel="noopener noreferrer"><img src={navSocial3} alt="Instagram" /></a>
            </div>
            <a href="#connect">
            <button className="vvd"><span>درخواست مشاوره</span></button>
            </a>
          </span> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
