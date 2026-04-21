import { Container, Row, Col } from 'react-bootstrap'
import NavbarComponent from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CardComponent from '../components/CardComponent'
import Footer from '../components/Footer'
import ExperimentModal from '../components/ExperimentModal'
import {
  Psychology as AIIcon,
  Web as WebIcon,
  Storage as DatabaseIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  TrendingUp as TrendingIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  EmojiEvents as AwardIcon
} from '@mui/icons-material'

/**
 * Home Page - Main Landing Page
 * Combines all components and sections
 * Author: Anurag (23BAI70225)
 */
const Home = () => {
  // Projects Data
  const projects = [
    {
      title: 'AI ChatBot Platform',
      description: 'Intelligent conversational AI with NLP capabilities, sentiment analysis, and multi-language support. Built with TensorFlow and React.',
      icon: AIIcon,
      technologies: ['React', 'TensorFlow', 'Node.js', 'MongoDB'],
      link: '#',
      variant: 'featured'
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Modern admin dashboard with real-time analytics, inventory management, and sales tracking. Responsive and feature-rich.',
      icon: TrendingIcon,
      technologies: ['React', 'Material UI', 'Chart.js', 'Firebase'],
      link: '#'
    },
    {
      title: 'Cloud Storage App',
      description: 'Secure file storage solution with encryption, sharing capabilities, and automatic backups. Scalable architecture.',
      icon: CloudIcon,
      technologies: ['React', 'AWS S3', 'Express', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Powerful analytics platform for tracking engagement, reach, and sentiment across multiple social platforms.',
      icon: WebIcon,
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      link: '#'
    }
  ]

  // Skills Data
  const skills = [
    {
      title: 'Frontend Development',
      description: 'Expert in React, Vue.js, Next.js with modern CSS frameworks like Tailwind, Bootstrap, and Material UI.',
      icon: WebIcon,
      technologies: ['React', 'Vue.js', 'Next.js', 'TypeScript']
    },
    {
      title: 'Backend Development',
      description: 'Proficient in Node.js, Express, Django, and FastAPI with RESTful and GraphQL API design.',
      icon: DatabaseIcon,
      technologies: ['Node.js', 'Python', 'Django', 'GraphQL']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Experience with TensorFlow, PyTorch, NLP, Computer Vision, and Deep Learning models.',
      icon: AIIcon,
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras']
    },
    {
      title: 'Cloud & DevOps',
      description: 'Skilled in AWS, Azure, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation.',
      icon: CloudIcon,
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins']
    },
    {
      title: 'Database Management',
      description: 'Strong knowledge of SQL and NoSQL databases including MongoDB, PostgreSQL, MySQL, and Redis.',
      icon: DatabaseIcon,
      technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL']
    },
    {
      title: 'Security & Performance',
      description: 'Implementing secure authentication, authorization, encryption, and optimizing application performance.',
      icon: SecurityIcon,
      technologies: ['JWT', 'OAuth', 'SSL/TLS', 'Web Security']
    }
  ]

  // About Stats
  const stats = [
    { icon: CodeIcon, value: '50+', label: 'Projects Completed' },
    { icon: SpeedIcon, value: '3+', label: 'Years Experience' },
    { icon: AwardIcon, value: '10+', label: 'Certifications' },
    { icon: SchoolIcon, value: '4.0', label: 'Academic GPA' }
  ]

  return (
    <>
      {/* Experiment Modal */}
      <ExperimentModal />

      {/* Navigation Bar */}
      <NavbarComponent />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="about-section">
        <Container>
          <Row className="section-header">
            <Col lg={12} className="text-center">
              <h2 className="section-title">
                <span className="section-number">01.</span> About Me
              </h2>
              <p className="section-subtitle">
                Passionate Developer & Innovator
              </p>
            </Col>
          </Row>

          <Row className="about-content">
            <Col lg={6} className="about-text-col fade-in-up">
              <div className="about-text-wrapper">
                <PersonIcon className="about-icon" />
                <h3 className="about-heading">Hello! I'm Anurag</h3>
                <p className="about-paragraph">
                  I'm a <span className="highlight">Full Stack Developer</span> and <span className="highlight">AI Enthusiast</span> currently 
                  pursuing my degree at <span className="highlight">Chandigarh University</span>. My journey in technology 
                  started with a curiosity about how things work, and has evolved into a passion for creating innovative 
                  solutions that make a difference.
                </p>
                <p className="about-paragraph">
                  I specialize in building exceptional digital experiences using modern web technologies. 
                  My focus is on creating <span className="highlight">scalable</span>, <span className="highlight">performant</span>, 
                  and <span className="highlight">user-friendly</span> applications that solve real-world problems.
                </p>
                <p className="about-paragraph">
                  <strong>UID:</strong> <span className="highlight">23BAI70225</span><br />
                  <strong>Section:</strong> <span className="highlight">23AML-6B</span><br />
                  <strong>Specialization:</strong> <span className="highlight">AI & Full Stack Development</span>
                </p>
              </div>
            </Col>

            <Col lg={6} className="about-stats-col">
              <Row>
                {stats.map((stat, index) => (
                  <Col md={6} key={index} className="mb-4">
                    <div className="stat-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <stat.icon className="stat-icon" />
                      <h3 className="stat-value">{stat.value}</h3>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <Container>
          <Row className="section-header">
            <Col lg={12} className="text-center">
              <h2 className="section-title">
                <span className="section-number">02.</span> Featured Projects
              </h2>
              <p className="section-subtitle">
                Building the Future, One Project at a Time
              </p>
            </Col>
          </Row>

          <Row>
            {projects.map((project, index) => (
              <Col lg={6} md={6} key={index} className="mb-4">
                <CardComponent
                  title={project.title}
                  description={project.description}
                  icon={project.icon}
                  technologies={project.technologies}
                  link={project.link}
                  variant={project.variant}
                  delay={`${index * 0.1}s`}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <Container>
          <Row className="section-header">
            <Col lg={12} className="text-center">
              <h2 className="section-title">
                <span className="section-number">03.</span> Skills & Expertise
              </h2>
              <p className="section-subtitle">
                Technologies I Work With
              </p>
            </Col>
          </Row>

          <Row>
            {skills.map((skill, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <CardComponent
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                  technologies={skill.technologies}
                  delay={`${index * 0.1}s`}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <Container>
          <Row className="section-header">
            <Col lg={12} className="text-center">
              <h2 className="section-title">
                <span className="section-number">04.</span> Get In Touch
              </h2>
              <p className="section-subtitle">
                Let's Build Something Amazing Together
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="contact-card fade-in-up">
                <h3 className="contact-heading">Have a Project in Mind?</h3>
                <p className="contact-text">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                  Whether you need a full-stack application, AI integration, or just want to say hello, feel free to reach out!
                </p>
                <div className="contact-info">
                  <p className="contact-detail">
                    <strong>Email:</strong> <a href="mailto:anurag@example.com" className="contact-link">anurag@example.com</a>
                  </p>
                  <p className="contact-detail">
                    <strong>UID:</strong> <span className="highlight">23BAI70225</span>
                  </p>
                  <p className="contact-detail">
                    <strong>Section:</strong> <span className="highlight">23AML-6B</span>
                  </p>
                </div>
                <button className="contact-button">
                  Send Message
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home
