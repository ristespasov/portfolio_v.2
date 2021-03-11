import React, { useState, useEffect } from 'react'

// Style
import './styles/global.scss'

// Context
import Context from './context/context';

// Components
import Theme from './components/theme'
import Language from './components/language'
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

// i18n
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  const handleLanguage = lang => {
    i18n.changeLanguage(lang);
  }

  const handleTheme = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    i18n.changeLanguage('en');
  }, [])

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Context.Provider value={{ t, handleLanguage, darkMode, handleTheme }}>
        <Theme />
        <Language />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
