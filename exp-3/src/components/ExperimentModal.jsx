import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { 
  Science as ScienceIcon,
  CheckCircle as CheckIcon,
  Close as CloseIcon
} from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'

/**
 * Experiment 3 Modal - Displays Aim & Objectives
 * Shows on page load with experiment details
 * Author: Anurag (23BAI70225)
 */
const ExperimentModal = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Show modal after a short delay (after loading screen)
    const timer = setTimeout(() => {
      setShow(true)
    }, 2000) // 2 seconds after page load

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => setShow(false)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="experiment-modal"
      backdrop="static"
      keyboard={true}
    >
      <div className="modal-content-custom">
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          className="modal-close-btn"
          sx={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            color: '#00d9ff',
            zIndex: 10,
            '&:hover': {
              color: '#ff006e',
              transform: 'rotate(90deg)',
            },
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        {/* Modal Header */}
        <div className="modal-header-custom">
          <ScienceIcon className="modal-icon" />
          <h2 className="modal-title">EXPERIMENT 3</h2>
          <p className="modal-subtitle">Full Stack Development | UI Component Libraries</p>
          <div className="modal-divider"></div>
        </div>

        {/* Modal Body */}
        <div className="modal-body-custom">
          {/* Aim Section */}
          <div className="modal-section">
            <h3 className="section-heading">
              <span className="heading-icon">🎯</span> AIM
            </h3>
            <p className="section-content">
              Design a modern, sleek, and visually appealing web page using UI component 
              libraries (Bootstrap & Material UI) to learn component-based UI design, 
              understand folder structuring in React, and build meaningful, real-world webpages 
              applying modern UI/UX principles.
            </p>
          </div>

          {/* Objectives Section */}
          <div className="modal-section">
            <h3 className="section-heading">
              <span className="heading-icon">🎓</span> OBJECTIVES
            </h3>
            <ul className="objectives-list">
              <li className="objective-item">
                <CheckIcon className="check-icon" />
                <span>Learn component-based UI design architecture</span>
              </li>
              <li className="objective-item">
                <CheckIcon className="check-icon" />
                <span>Understand proper folder structuring in React applications</span>
              </li>
              <li className="objective-item">
                <CheckIcon className="check-icon" />
                <span>Build meaningful, real-world responsive webpages</span>
              </li>
              <li className="objective-item">
                <CheckIcon className="check-icon" />
                <span>Apply modern UI/UX design principles effectively</span>
              </li>
              <li className="objective-item">
                <CheckIcon className="check-icon" />
                <span>Master Bootstrap & Material UI component libraries</span>
              </li>
              <li className="objective-item">
                <CheckIcon className="check-icon" />
                <span>Create clean, modern layouts with proper spacing</span>
              </li>
            </ul>
          </div>

          {/* Student Info */}
          <div className="modal-footer-info">
            <div className="info-row">
              <span className="info-label">Student:</span>
              <span className="info-value">Anurag</span>
            </div>
            <div className="info-row">
              <span className="info-label">UID:</span>
              <span className="info-value">23BAI70225</span>
            </div>
            <div className="info-row">
              <span className="info-label">Section:</span>
              <span className="info-value">23AML-6B</span>
            </div>
            <div className="info-row">
              <span className="info-label">University:</span>
              <span className="info-value">Chandigarh University</span>
            </div>
          </div>

          {/* CTA Button */}
          <button onClick={handleClose} className="modal-cta-btn">
            Let's Explore! 🚀
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ExperimentModal
