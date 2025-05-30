import React from 'react'
import './Toolbar.css'

import googleIcon from '../assets/icons/google.png'
import sunoWebIcon from '../assets/icons/suno-web.png'
import solaceIcon from '../assets/icons/solace.png'
import capcutIcon from '../assets/icons/capcut.png'
import soraIcon from '../assets/icons/sora.png'

interface ToolbarProps {
  currentPath?: string
}

const iconLinks = [
  { src: googleIcon, alt: 'Google', link: 'https://www.google.com' },
  { src: sunoWebIcon, alt: 'Suno Web', link: 'https://app.suno.ai' },
  { src: solaceIcon, alt: 'Solace', link: 'https://chat.openai.com' },
  { src: capcutIcon, alt: 'CapCut', link: 'https://www.capcut.com' },
  { src: soraIcon, alt: 'Sora', link: 'https://openai.com/sora' },
]

const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <div className="toolbar">
      {iconLinks.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`icon-wrapper ${icon.alt === 'Solace' ? 'center-icon' : ''}`}
        >
          <img src={icon.src} alt={icon.alt} className="neon-icon" />
        </a>
      ))}
    </div>
  )
}

export default Toolbar
