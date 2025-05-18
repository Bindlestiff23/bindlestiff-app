import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import SplashScreen from './components/SplashScreen';
import BindleverseHeader from './components/BindleverseHeader';
import HomePage from './components/HomePage';
import CreatePage from './components/CreatePage';
import ExplorePage from './components/ExplorePage';
import NotificationsPage from './components/NotificationsPage';
import ProfilePage from './components/ProfilePage';
import Toolbar from './components/Toolbar';

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <BindleverseHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      {!isHome && <Toolbar currentPath={location.pathname} />}
    </>
  );
};

function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSplashVisible(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        {isSplashVisible ? (
          <SplashScreen onFinish={() => setSplashVisible(false)} />
        ) : (
          <MainLayout />
        )}
      </Router>
    </div>
  );
}

export default App;
