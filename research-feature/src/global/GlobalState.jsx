import React, { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

const GlobalState = (props) => {
  const [email, setEmail] = useState("l")

  const states = { email }

  const setters = { setEmail }

  const requests = {}

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState
