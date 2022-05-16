import { Button } from "@mui/material"
import React from "react"
import SelectionSlider from "../../components/selection-slider/SelectionSlider"
import { teamSelection } from "../../constants/teamSelection"
import { ButtonContainer, QuestionContainer } from "./styledForm"

export default function Question1(props) {
  return (
    <QuestionContainer>
      <h1>Quantas pessoas tem a sua equipe?</h1>
      <SelectionSlider marks={teamSelection} onChange={props.onChange} />
      <ButtonContainer>
        <Button variant="contained" onClick={props.onClickBack}>
          Voltar
        </Button>
        <h2>Sua resposta: {props.answer}</h2>
        <Button variant="contained" onClick={props.onClickNext}>
          Próximo
        </Button>
      </ButtonContainer>
    </QuestionContainer>
  )
}