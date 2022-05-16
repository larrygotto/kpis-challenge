import { Button, TextField } from "@mui/material"
import axios from "axios"
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../../assets/loading/Loading"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import { BASE_URL } from "../../services/BASE_URL"
import { FormContainer, HomeContainer } from "./styledHomepage"

export default function Homepage() {
  const { states, setters } = useContext(GlobalStateContext)
  const [unauthorize, setUnauthorize] = useState(false)
  const navigate = useNavigate()
  const [buttonText, setButtonText] = useState("Iniciar pesquisa")

  const handleSubmit = (e) => {
    e.preventDefault()
    setButtonText(<Loading />)
    axios
      .get(`${BASE_URL}/email?email=${states.email}`)
      .then((res) => {
        const check = res.data.check
        if (check) {
          setUnauthorize(true)
          setButtonText("Iniciar pesquisa")
        } else if (!check) {
          navigate("/form")
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <HomeContainer>
      <FormContainer type="submit" onSubmit={(e) => handleSubmit(e)}>
        <h1>Boas vindas!</h1>
        <h2>Agradecemos por querer participar</h2>

        {unauthorize ? (
          <p>Já temos uma resposta enviada por esse email</p>
        ) : (
          <></>
        )}
        <p>
          {unauthorize
            ? "Digite outro email para continuar"
            : "Digite seu email para continuar"}
        </p>

        <TextField
          error={unauthorize}
          label="email"
          type="email"
          value={states.email}
          onChange={(e) => {
            setUnauthorize(false)
            setters.setEmail(e.target.value)
          }}
        />

        <Button
          type="submit"
          onSubmit={(e) => handleSubmit()}
          disabled={states.email.length > 4 ? false : true}
          variant="contained"
        >
          {buttonText}
        </Button>
      </FormContainer>
    </HomeContainer>
  )
}
