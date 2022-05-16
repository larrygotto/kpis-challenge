import { Button } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { teamSelection } from "../../constants/teamSelection"
import { GlobalStateContext } from "../../global/GlobalStateContext"
import Question1 from "./Question1"
import Question2 from "./Question2"
import { PageContainer, QuestionContainer } from "./styledForm"

export default function Form() {
  const { states, setters } = useContext(GlobalStateContext)
  const [stage, setStage] = useState(2)
  const [answers, setAnswers] = useState({
    answer1: "1 até 3",
    answer2: "1",
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (!states.email) navigate('/')
  }, [])

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
      questions = <Question2 onClickBack={() => setStage(1)}/>
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

  const handleSlider = (e) => {
    teamSelection.map((i) => {
      if (e.target.value === i.value)
        setAnswers({ ...answers, answer1: i.label })
    })
  }

  return <PageContainer>{questions}</PageContainer>
}
