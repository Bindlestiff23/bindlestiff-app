import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="library-section">
        <h2>Your Library</h2>
        <p>This is where your saved tracks and creations will live.</p>
      </div>

      <footer className="toolbar">
        <span className="icon active" title="Home">🏠</span>
        <span className="icon" title="Explore">🧭</span>
        <span className="icon center-logo" title="Create">🎵</span>
        <span className="icon" title="Notifications">🔔</span>
        <span className="icon" title="Profile">👤</span>
      </footer>
    </div>
  );
};

export default HomePage;
