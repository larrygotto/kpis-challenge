import { Button } from "@mui/material"
import React from "react"
import {
  ButtonContainer,
  LabelContainer,
  QuestionContainer,
  SelectionContainer,
  SelectItem,
} from "./styledForm"

export default function Question2(props) {
  let options = []

  for (let i = 1; i <= 10; i++) {
    options = [
      ...options,
      <SelectItem
        key={i}
        value={i}
        onClick={(e) => props.onClick(e)}
        color={props.selected === `${i}` ? "lightgray" : "white"}
      >
        {i}
      </SelectItem>,
    ]
  }

  return (
    <QuestionContainer>
      <h1>2 - Qual a sua satisfação com a Natura &co?</h1>
      <SelectionContainer>{options}</SelectionContainer>
      <LabelContainer>
        <p>Pouca satisfação</p>
        <p>Muita satisfação</p>
      </LabelContainer>
      <ButtonContainer>
        <Button variant="contained" onClick={props.onClickBack}>
          Voltar
        </Button>
        <h2>Sua resposta: {props.answer}</h2>
        <Button variant="contained" onClick={props.onClickSend}>
          {props.buttonText}
        </Button>
      </ButtonContainer>
    </QuestionContainer>
  )
}
