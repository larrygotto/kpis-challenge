import styled from "styled-components"
import { mainColors } from "../../constants/colors"

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  .SectionContainer{

    width: 50%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-image: linear-gradient(-60deg, ${mainColors.green}, #43CB89);
    h1{
      margin: 8px 0;
    }
    p{
      margin: 8px 0;
    }
    @media screen and (max-width: 900px) {
      width: 100%;
      height: 40%;
  }
  }
  .GraphContainer {
    width: 50%;
    margin-top: -120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40vh;
    padding-bottom: 38px;
    text-align: center;
    p{
      margin: 12px 0;
    }
    span{
      display: none;
    }
    @media screen and (max-width: 900px){
      width: 90%;
    height: 50vh;
    span{
      margin: 32px;
      display: block;
    }
    }
    .ButtonContainer{
      margin: 16px 0;
      width: 60%;
       display: flex;
       justify-content: space-between;
       @media screen and (max-width: 900px) {
         width: 100%;
  }
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`