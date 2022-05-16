import React from 'react'
import styled from 'styled-components'
import naturaLogo from '../natura-logo.png'

const LoadingContainer = styled.div`
  display: flex;
  align-self: center;
  max-width: 40px;
  img{
    width: 100%;
  }

  animation: loading 3s ease infinite;
  @keyframes loading {
    0% {transform: rotate(0deg)}
    25% {transform: rotate(-20deg)}
    50% {transform: rotate(20deg)}
    75% {transform: rotate(-20deg)}
    100% {transform: rotate(0deg)}
  }
`

export default function Loading() {
  return (
    <LoadingContainer><img src={naturaLogo} alt="carregando..."/> </LoadingContainer>
  )
}
