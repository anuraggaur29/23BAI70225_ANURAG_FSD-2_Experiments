import { Container, Row, Col } from 'react-bootstrap'
import Button from '@mui/material/Button'
import { 
  KeyboardArrowDown as ArrowIcon,
  Code as CodeIcon,
  Psychology as AIIcon,
  RocketLaunch as RocketIcon
} from '@mui/icons-material'

/**
 * Hero Section with Animated Content
 * Features: Bold typography, particle effects, CTA buttons
 * Author: Anurag (23BAI70225)
 */
const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <Container className="hero-content">
        <Row className="align-items-center min-vh-100">
          <Col lg={12} className="text-center">
            <div className="hero-text-wrapper">
              <div className="hero-badge fade-in-up" style={{ animationDelay: '0.2s' }}>
                <RocketIcon className="badge-icon" />
                <span>CHANDIGARH UNIVERSITY | SECTION 23AML-6B</span>
              </div>

              <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.4s' }}>
                Hi, I'm <span className="highlight-name">ANURAG</span>
              </h1>

              <h2 className="hero-subtitle fade-in-up" style={{ animationDelay: '0.6s' }}>
                <CodeIcon className="subtitle-icon" /> Full Stack Developer
                <span className="divider-dot">•</span>
                <AIIcon className="subtitle-icon" /> AI Enthusiast
              </h2>

              <p className="hero-description fade-in-up" style={{ animationDelay: '0.8s' }}>
                UID: <span className="uid-highlight">23BAI70225</span>
                <br />
                Crafting innovative digital experiences with cutting-edge technologies.
                <br />
                Specializing in React, AI/ML, and Modern Web Development.
              </p>

              <div className="hero-cta fade-in-up" style={{ animationDelay: '1s' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToProjects}
                  className="cta-primary"
                  sx={{
                    background: 'linear-gradient(135deg, #ff006e 0%, #ff1f8f 100%)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    padding: '14px 40px',
                    borderRadius: '50px',
                    fontFamily: 'Rajdhani, sans-serif',
                    letterSpacing: '1px',
                    boxShadow: '0 0 30px rgba(255, 0, 110, 0.6)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #cc0057 0%, #ff006e 100%)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 0 50px rgba(255, 0, 110, 0.8)',
                    },
                  }}
                >
                  Explore Projects
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  className="cta-secondary"
                  sx={{
                    color: '#00d9ff',
                    borderColor: '#00d9ff',
                    borderWidth: '2px',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    padding: '14px 40px',
                    borderRadius: '50px',
                    fontFamily: 'Rajdhani, sans-serif',
                    letterSpacing: '1px',
                    marginLeft: '20px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 217, 255, 0.1)',
                      borderColor: '#00d9ff',
                      borderWidth: '2px',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
                    },
                  }}
                >
                  Download Resume
                </Button>
              </div>

              <div className="scroll-indicator fade-in-up" style={{ animationDelay: '1.2s' }}>
                <ArrowIcon className="scroll-arrow" />
                <p>Scroll to explore</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection
