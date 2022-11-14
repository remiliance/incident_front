import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results'
import Cmdbci from './pages/Cmdbci'
import Footer from './components/Footer'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider, SurveyProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'


ReactDOM.render(


  <React.StrictMode>
    <Router>
    <ThemeProvider>
    <SurveyProvider>
     <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/survey/:questionNumber" element={<Survey/>}/>
        <Route path="/cmdbci" element={<Cmdbci/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/cmdbci" element={<Cmdbci/>}/>
      </Routes>
     <Footer />
    </SurveyProvider>
     </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
