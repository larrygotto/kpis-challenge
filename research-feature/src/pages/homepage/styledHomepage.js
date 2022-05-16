import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const FormContainer = styled.form`
margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  padding: 16px;
  text-align: center;
  h1{
    font-size: 2em;
    margin: 8px 0;
  }
  h2{
    max-width: 80%;
    margin-bottom: 32px;
  }
  p{
    margin-bottom: 16px;
  }
  .error{
      color: #8D0028;
    }
  button{
    margin: 16px;
  }
`

export const ImageContainer = styled.div`
  width: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  img{
    height: 100vh;
  }
`

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 50%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`