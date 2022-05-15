import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50vh;
  border: 1px solid ${mainColors.green};
  padding: 16px;
`