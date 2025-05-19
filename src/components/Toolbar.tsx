import { useNavigate } from 'react-router-dom';
import './Toolbar.css';

import libraryIcon from '../assets/icons/library.png';
import exploreIcon from '../assets/icons/explore.png';
import createIcon from '../assets/icons/create.png';
import notificationsIcon from '../assets/icons/notifications.png';
import profileIcon from '../assets/icons/profile.png';

const Toolbar = ({ currentPath }: { currentPath: string }) => {
  const navigate = useNavigate();
  const isHome = currentPath === '/';

  return (
    <footer className="toolbar">
      {/* Left side icons */}
      <div className="toolbar-side">
        <img
          src={exploreIcon}
          alt="Explore"
          title="Scout the Soundscape."
          className={`neon-icon ${currentPath === '/explore' ? 'active' : ''}`}
          onClick={() => navigate('/explore')}
        />
        <img
          src={libraryIcon}
          alt="Library"
          title="Your Resonance, Recorded."
          className={`neon-icon ${isHome ? 'active' : ''}`}
          onClick={() => navigate('/')}
        />
      </div>

      {/* Center generate icon */}
      {!isHome && (
        <div className="toolbar-center">
          <img
            src={createIcon}
            alt="Create"
            title="Your Singularity."
            className="neon-icon center-logo"
            onClick={() => navigate('/create')}
          />
        </div>
      )}

      {/* Right side icons */}
      <div className="toolbar-side">
        <img
          src={notificationsIcon}
          alt="Notifications"
          title="Word on the Wire."
          className={`neon-icon ${currentPath === '/notifications' ? 'active' : ''}`}
          onClick={() => navigate('/notifications')}
        />
        <img
          src={profileIcon}
          alt="Profile"
          title="Your Frequency."
          className={`neon-icon ${currentPath === '/profile' ? 'active' : ''}`}
          onClick={() => navigate('/profile')}
        />
      </div>
    </footer>
  );
};

export default Toolbar;
