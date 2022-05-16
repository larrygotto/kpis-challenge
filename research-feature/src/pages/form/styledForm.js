import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 94%;
  align-self: center;
`

export const SelectItem = styled.button`
  width: 40px;
  height: 40px;
  font-size: large;
  margin: 4px;
  border: 1px solid black;
  background-color: ${props => props.color || "white"};
  cursor: pointer;
  transition: 300ms ease;
  :hover{
    background-color: lightgray;
  }
  :active{
    background-color: gray;
    color: white;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LabelContainer = styled.div`
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    width: min-content;
    text-align: center;
  }
`