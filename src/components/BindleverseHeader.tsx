import tagline from '../assets/tagline_neon_dreams.png';
import bindleverseMVP from '../assets/bindleverse_mvp_stacked_tight.png';
import './BindleverseHeader.css';

const BindleverseHeader = () => {
  return (
    <div className="header-wrapper">
      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <div
          className="glitch"
          style={{
            backgroundImage: `url(${bindleverseMVP})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
        <div className="scanlines" />
        <div className="grain" />
      </div>

      <img
        src={tagline}
        alt="Neon Dreams Digital Themes"
        className="glow"
      />
    </div>
  );
};

export default BindleverseHeader;
