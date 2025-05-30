import './BindleverseHeader.css';

const BindleverseHeader = () => {
  return (
    <div className="bindleverse-header">
      <div className="logo-wrapper">

        {/* 🔵 Bindle Pair */}
        <div className="logo-pair">
          <div className="logo-text primary bindle">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-link"
            >
              Bindle
            </a>
          </div>
          <div className="logo-text ghost">
            <span className="ghost-text">Bindle</span>
          </div>
        </div>

        {/* 🔴 Verse Pair */}
        <div className="logo-pair">
          <div className="logo-text primary verse">
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-link"
            >
              verse
            </a>
          </div>
          <div className="logo-text ghost">
            <span className="ghost-text">verse</span>
          </div>
        </div>

      </div>

      {/* ✨ Tagline */}
      <a
        href="https://drive.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="tagline-link"
      >
        <div className="tagline glow">Neon Dreams, Digital Themes</div>
      </a>
    </div>
  );
};

export default BindleverseHeader;
