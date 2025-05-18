import { useNavigate } from 'react-router-dom';
import './BindleverseHeader.css';
import tagline from '../assets/tagline_neon_dreams.png';
import bindleverseMVP from '../assets/bindleverse_mvp_stacked_tight.png';

const BindleverseHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="header-wrapper">
      <div
        className="glitch clickable-logo"
        style={{
          backgroundImage: `url(${bindleverseMVP})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          height: '200px',
        }}
        onClick={() => navigate('/create')}
        title="Tap to Create"
      />
      <div className="scanlines" />
      <img
        src={tagline}
        alt="Neon Dreams Digital Themes"
        className="glow"
      />
    </div>
  );
};

export default BindleverseHeader;
