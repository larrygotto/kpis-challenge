import { Button } from "@mui/material"
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../../assets/loading/Loading"
import { teamSelection } from "../../constants/teamSelection"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import Question1 from "./Question1"
import Question2 from "./Question2"
import { PageContainer, QuestionContainer } from "./styledForm"
import { BASE_URL } from "../../services/BASE_URL"

export default function Form() {
  const { states, setters } = useContext(GlobalStateContext)
  const [stage, setStage] = useState(1)
  const [answers, setAnswers] = useState({
    answer1: "1 até 3",
    answer2: "1",
  })
  const [buttonText, setButtonText] = useState("Enviar")
  const form = { email: states.email, ...answers }

  const navigate = useNavigate()

  const handleSendForm = () => {
    setButtonText(<Loading />)
    axios
      .post(`${BASE_URL}/resposta`, form)
      .then((res) => navigate("/results"))
      .catch((err) => {
        alert(err.response.data)
        setters.setEmail("")
        navigate("/")
      })
  }

  useEffect(() => {
    if (!states.email) navigate("/")
  }, [navigate, states.email])

  const handleSlider = (e) => {
    teamSelection.map((i) => {
      if (e.target.value === i.value)
        setAnswers({ ...answers, answer1: i.label })
    })
  }

  let questions
  switch (stage) {
    case 1:
      questions = (
        <Question1
          onChange={(e) => handleSlider(e)}
          answer={answers.answer1}
          onClickNext={() => setStage(2)}
          onClickBack={() => navigate("/")}
        />
      )
      break
    case 2:
      questions = (
        <Question2
          onClick={(e) => setAnswers({ ...answers, answer2: e.target.value })}
          onClickBack={() => setStage(1)}
          onClickSend={() => handleSendForm()}
          buttonText={buttonText}
          selected={answers.answer2}
        />
      )
      break
    default:
      questions = (
        <QuestionContainer>
          <h1>Algo deu errado</h1>
          <Button variant="contained" onClick={() => navigate("/")}>
            Voltar
          </Button>
        </QuestionContainer>
      )
      break
  }

  return <PageContainer>{questions}</PageContainer>
}
