import React from "react"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes/router"
import "./styles.css"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Router>app</Router>
      </BrowserRouter>
    </div>
  )
}
