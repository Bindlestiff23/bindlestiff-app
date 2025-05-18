import { useEffect, useState } from 'react';
import './SplashScreen.css';
import bindleverseLogo from '../assets/Bindleverse_Transparant.png';

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const endTimer = setTimeout(() => onFinish(), 2600);

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
