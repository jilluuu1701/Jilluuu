import React, { useState } from 'react'
import Welcome from './pages/Welcome'
import LovePage from './pages/LovePage'
import CalendarPage from './pages/CalendarPage'
import LoveLetterPage from './pages/LoveLetterPage'
import ReasonsPage from './pages/ReasonsPage'
import SorryPage from './pages/SorryPage'
import RomanticEffects from './components/RomanticEffects'
import './styles/themes.css'
import './App.css'

function App() {
  const [page, setPage] = useState('welcome')
  const [theme, setTheme] = useState('night')

  const renderPage = () => {
    switch(page) {
      case 'welcome':
        return <Welcome onEnter={() => setPage('love')} theme={theme} onThemeChange={setTheme} />;
      case 'love':
        return (
          <LovePage 
            onBack={() => setPage('welcome')} 
            onCalendar={() => setPage('calendar')} 
            onLetter={() => setPage('letter')}
            onReasons={() => setPage('reasons')}
            onSorry={() => setPage('sorry')}
            theme={theme} 
          />
        );
      case 'calendar':
        return <CalendarPage onBack={() => setPage('love')} theme={theme} />;
      case 'letter':
        return <LoveLetterPage onBack={() => setPage('love')} theme={theme} />;
      case 'reasons':
        return <ReasonsPage onBack={() => setPage('love')} theme={theme} />;
      case 'sorry':
        return <SorryPage onBack={() => setPage('love')} theme={theme} />;
      default:
        return <Welcome onEnter={() => setPage('love')} theme={theme} />;
    }
  }

  return (
    <div className={`App ${theme}-theme`}>
      <RomanticEffects theme={theme} />
      {renderPage()}
    </div>
  )
}

export default App
