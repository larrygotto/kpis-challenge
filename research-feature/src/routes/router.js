import React from "react"
import { Route, Routes } from "react-router-dom"
import Form from "../pages/form/Form"
import Homepage from "../pages/homepage/Homepage"
import NotFound from "../pages/not-found/NotFound"
import Results from "../pages/results/Results"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/form" element={<Form />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
