import { ThemeProvider } from "@mui/material"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { theme } from "./constants/theme"
import GlobalState from "./global/GlobalState"
import Router from "./routes/router"
import "./styles.css"

export default function App() {
  return (
    <div className="app">
      <GlobalState>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
          aaaaaa
            <Router/>
          </BrowserRouter>
        </ThemeProvider>
      </GlobalState>
    </div>
  )
}
