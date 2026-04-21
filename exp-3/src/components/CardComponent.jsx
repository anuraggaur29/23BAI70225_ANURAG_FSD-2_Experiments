import { Card } from 'react-bootstrap'
import { 
  Code as CodeIcon,
  OpenInNew as LinkIcon 
} from '@mui/icons-material'

/**
 * Reusable Card Component with Glassmorphism Effect
 * Used for Projects, Skills, and other sections
 * Author: Anurag (23BAI70225)
 */
const CardComponent = ({ 
  title, 
  description, 
  icon: Icon, 
  technologies = [], 
  link = null,
  delay = '0s',
  variant = 'default' 
}) => {
  return (
    <div className={`custom-card-wrapper fade-in-up`} style={{ animationDelay: delay }}>
      <Card className={`custom-card ${variant}`}>
        <Card.Body className="card-body-custom">
          <div className="card-icon-wrapper">
            {Icon ? <Icon className="card-icon" /> : <CodeIcon className="card-icon" />}
          </div>

          <Card.Title className="card-title-custom">
            {title}
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-link"
                aria-label={`Open ${title}`}
              >
                <LinkIcon className="link-icon" />
              </a>
            )}
          </Card.Title>

          <Card.Text className="card-description">
            {description}
          </Card.Text>

          {technologies.length > 0 && (
            <div className="card-tech-stack">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="card-glow"></div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardComponent
