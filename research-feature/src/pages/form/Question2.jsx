import { Button } from "@mui/material"
import React from "react"
import SelectionSlider from "../../components/selection-slider/SelectionSlider"
import { teamSelection } from "../../constants/teamSelection"
import { ButtonContainer, LabelContainer, QuestionContainer, SelectionContainer, SelectItem } from "./styledForm"

export default function Question2(props) {
  return (
    <QuestionContainer>
      <h1>Qual a sua satisfação com a Natura &co?</h1>
      <SelectionContainer>
        <SelectItem value={1} >1</SelectItem>
        <SelectItem>2</SelectItem>
        <SelectItem>3</SelectItem>
        <SelectItem>4</SelectItem>
        <SelectItem>5</SelectItem>
        <SelectItem>6</SelectItem>
        <SelectItem>7</SelectItem>
        <SelectItem>8</SelectItem>
        <SelectItem>9</SelectItem>
        <SelectItem>10</SelectItem>
      </SelectionContainer>
<LabelContainer>
  <p>Pouca satisfação</p>
  <p>Muita satisfação</p>
</LabelContainer>
      <ButtonContainer>
      <Button variant="contained" onClick={props.onClickBack}>
        Voltar
      </Button>
      <Button variant="contained" onClick={props.onClickSend}>
        Enviar
      </Button>
      </ButtonContainer>
    </QuestionContainer>
  )
}
