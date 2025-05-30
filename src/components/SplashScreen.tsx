import { useEffect, useState } from 'react';
import './SplashScreen.css';
import bindleverseLogo from '../assets/Bindleverse_Transparant.png';

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3600); // fade after glow peaks
    const endTimer = setTimeout(() => onFinish(), 4200);        // finish after soft glow settles

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
      <img src={bindleverseLogo} alt="Bindleverse Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
