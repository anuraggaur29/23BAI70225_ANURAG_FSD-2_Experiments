import { Container, Row, Col } from 'react-bootstrap'
import { 
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  Twitter as TwitterIcon,
  Favorite as HeartIcon
} from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

/**
 * Professional Footer Component
 * Features: Social links, copyright, modern design
 * Author: Anurag (23BAI70225)
 */
const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: GitHubIcon, url: '#', label: 'GitHub', color: '#fff' },
    { icon: LinkedInIcon, url: '#', label: 'LinkedIn', color: '#0077b5' },
    { icon: TwitterIcon, url: '#', label: 'Twitter', color: '#1da1f2' },
    { icon: EmailIcon, url: 'mailto:anurag@example.com', label: 'Email', color: '#ff0000' },
  ]

  return (
    <footer className="footer-section">
      <div className="footer-gradient"></div>
      <Container>
        <Row className="footer-content">
          <Col lg={12} className="text-center">
            {/* Social Links */}
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target={social.url !== '#' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="social-icon-button"
                  aria-label={social.label}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: social.color,
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <social.icon fontSize="large" />
                </IconButton>
              ))}
            </div>

            {/* Divider */}
            <div className="footer-divider"></div>

            {/* Copyright Section */}
            <div className="footer-copyright">
              <p className="copyright-text">
                © {currentYear} <span className="highlight">ANURAG</span> | UID: <span className="highlight">23BAI70225</span>
              </p>
              <p className="section-text">
                Section: <span className="highlight">23AML-6B</span> | Chandigarh University
              </p>
              <p className="made-with">
                Made with <HeartIcon className="heart-icon" /> for Experiment 3
              </p>
            </div>

            {/* Tech Stack Info */}
            <div className="footer-tech">
              <p className="tech-info">
                Built with <span className="tech-highlight">React</span> • 
                <span className="tech-highlight">Vite</span> • 
                <span className="tech-highlight">Bootstrap</span> • 
                <span className="tech-highlight">Material UI</span>
              </p>
            </div>

            {/* Experiment Info */}
            <div className="footer-experiment">
              <p className="experiment-badge">
                🚀 Full Stack Development | Experiment 3 | UI Component Libraries
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
