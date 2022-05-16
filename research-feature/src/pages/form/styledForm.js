import styled from "styled-components"

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media screen and (max-width: 900px) {
    justify-content: flex-start;
    padding: 36px;
  }
`

export const QuestionContainer = styled.div`
box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30%;
  max-width: 80vw;
  text-align: center;
  margin: 32px;
  h1{
    margin-bottom: 32px;
  }
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
  background-color: ${(props) => props.color || "white"};
  cursor: pointer;
  transition: 300ms ease;
  :hover {
    background-color: lightgray;
  }
  :active {
    background-color: gray;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 900px){
flex-direction: column-reverse;
height: 150px;
margin-top: 32px;
  }
`

export const LabelContainer = styled.div`
  margin: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    width: min-content;
    text-align: center;
  }
`
