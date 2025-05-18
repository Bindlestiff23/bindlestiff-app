import { useNavigate } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = ({ currentPath }: { currentPath: string }) => {
  const navigate = useNavigate();
  const isHome = currentPath === '/';

  return (
    <footer className="toolbar">
      <span
        className={`icon ${isHome ? 'active' : ''}`}
        title="Library"
        onClick={() => navigate('/')}
      >
        📚
      </span>
      <span
        className={`icon ${currentPath === '/explore' ? 'active' : ''}`}
        title="Explore"
        onClick={() => navigate('/explore')}
      >
        🧭
      </span>

      {!isHome && (
        <span
          className="icon center-logo"
          title="Create"
          onClick={() => navigate('/create')}
        >
          🎵
        </span>
      )}

      <span
        className={`icon ${currentPath === '/notifications' ? 'active' : ''}`}
        title="Notifications"
        onClick={() => navigate('/notifications')}
      >
        🔔
      </span>
      <span
        className={`icon ${currentPath === '/profile' ? 'active' : ''}`}
        title="Profile"
        onClick={() => navigate('/profile')}
      >
        👤
      </span>
    </footer>
  );
};

export default Toolbar;
