import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './components'
import { GlobalStyle, Theme } from './styles'
import { ThemeProvider } from 'styled-components'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
)
