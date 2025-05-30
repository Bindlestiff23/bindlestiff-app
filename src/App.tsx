import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import SplashScreen from './components/SplashScreen'
import BindleverseHeader from './components/BindleverseHeader'
import HomePage from './components/HomePage'
import CreatePage from './components/CreatePage'
import ExplorePage from './components/ExplorePage'
import NotificationsPage from './components/NotificationsPage'
import ProfilePage from './components/ProfilePage'
import Toolbar from './components/Toolbar'

const MainLayout = () => {
  const location = useLocation()

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
      <Toolbar currentPath={location.pathname} />
    </>
  )
}

function App() {
  const [isSplashVisible, setSplashVisible] = useState(true)

  return (
    <div className="App">
      <BrowserRouter basename={import.meta.env.MODE === 'development' ? '/' : '/bindlestiff-app'}>
        {isSplashVisible ? (
          <SplashScreen onFinish={() => setSplashVisible(false)} />
        ) : (
          <MainLayout />
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
