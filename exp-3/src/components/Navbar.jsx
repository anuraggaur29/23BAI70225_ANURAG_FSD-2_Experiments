import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

/**
 * Modern Animated Navbar Component
 * Features: Glassmorphism, scroll effects, responsive design
 * Author: Anurag (23BAI70225)
 */
const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setExpanded(false)
    }
  }

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          <span className="brand-text">
            <span className="brand-name">ANURAG</span>
            <span className="brand-divider">|</span>
            <span className="brand-uid">23BAI70225</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
          <IconButton
            className="toggle-icon"
            size="large"
            sx={{ color: '#00d9ff' }}
          >
            {expanded ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link onClick={() => scrollToSection('home')} className="nav-link-custom">
              <span className="nav-number">01.</span> Home
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')} className="nav-link-custom">
              <span className="nav-number">02.</span> About
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')} className="nav-link-custom">
              <span className="nav-number">03.</span> Projects
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('skills')} className="nav-link-custom">
              <span className="nav-number">04.</span> Skills
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')} className="nav-link-custom">
              <span className="nav-number">05.</span> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
