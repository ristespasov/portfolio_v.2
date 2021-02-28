import React, { useEffect } from 'react'

// Style
import './styles/global.scss'

// Context
import Context from './context/context';

// Components
import Language from "./components/language";
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

// i18n
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t, i18n } = useTranslation();

  const handleSelect = lang => {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    i18n.changeLanguage('en');
  }, [])

  return (
    <div className="App">
      <Context.Provider value={{ t, handleSelect }}>
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
