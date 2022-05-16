import { ThemeProvider } from "@mui/material"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { theme } from "./constants/theme"
import GlobalState from "./global/GlobalState"
import Router from "./routes/router"
import "./styles.css"
import logo from "./assets/naturaandco.svg"

export default function App() {
  return (
    <div className="app">
      <GlobalState>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <img
              src={logo}
              alt="natura andco logo"
              style={{ width: "100px", margin: "16px", position: "absolute" }}
            />
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </GlobalState>
    </div>
  )
}
