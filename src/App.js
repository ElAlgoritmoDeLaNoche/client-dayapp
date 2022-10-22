import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from './Components/Authentication/Signup/Signup'
import Login from './Components/Authentication/Login/Login'
import Home from './Components/Home/Home'
import AddNote from './Components/AddNote/AddNote'
import DetailNote from './Components/Home/DetailNote/DetailNote'
import Olas from './Themes/Olas'

import Nav from './Components/Nav/Nav'
import { useDarkMode } from './Themes/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from './Themes/globalStyles'
import { ThemeProvider } from 'styled-components'

import './css/App.css'

const App = () => {

  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Nav theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/add-note' element={<AddNote />} />
          <Route path='/detail-note/:id/:title/:description/:tags/:color/:postDate' element={<DetailNote />} />
        </Routes>
        <Olas />
      </ThemeProvider>
    </BrowserRouter >
  )
}

export default App
