import { Button, Modal } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Loading from "../../assets/loading/Loading"
import Graphs from "../../components/Graphs"
import { BASE_URL } from "../../services/BASE_URL"
import { PageContainer } from "./styledResults"

export default function Results() {
  const [answer1, setAnswer1] = useState()
  const [answer2, setAnswer2] = useState()
  const [showResult, setShowResult] = useState(1)

  let chartData1
  if (answer1) {
    chartData1 = Object.keys(answer1).map((item) => {
      return {
        id: item,
        label: item,
        value: answer1[item],
      }
    })
  }
  let chartData2
  if (answer2) {
    chartData2 = Object.keys(answer2).map((item) => {
      return {
        id: item,
        label: item,
        value: answer2[item],
      }
    })
  }

  // this could be better
  const getAnswer1 = () => {
    axios
      .get(`${BASE_URL}/answer/1`)
      .then((res) => {
        setAnswer1(res.data)
      })
      .catch((err) => console.log(err.response))
  }
  const getAnswer2 = () => {
    axios
      .get(`${BASE_URL}/answer/2`)
      .then((res) => {
        setAnswer2(res.data)
      })
      .catch((err) => console.log(err.response))
  }
  useEffect(() => {
    getAnswer1()
    getAnswer2()
  }, [])

  const Result1 = () => {
    return (
      <>
        <h3>Pergunta 1: Quantas pessoas tem a sua equipe?</h3>
        {chartData1 ? <Graphs data={chartData1} /> : <Loading />}
      </>
    )
  }

  const Result2 = () => {
    return (
      <>
        <h3>
          Pergunta 2: Qual seu nível de satisfação com a Natura &co? (0-10)
        </h3>
        {chartData2 ? <Graphs data={chartData2} /> : <Loading />}
      </>
    )
  }

  return (
    <PageContainer>
      <div className="SectionContainer">
        <h1>Suas respostas foram enviadas!</h1>
        <h3>Agradecemos a sua participação</h3>
        <p>
          Seu feedback é muito importante e ajuda a moldar o futuro da Natura
          &co
        </p>
      </div>
      <div className="GraphContainer">
        <h2>Resultado:</h2>
        <p>Este é o compilado de respostas até o momento</p>
        {showResult === 1 ? Result1() : <></>}
        {showResult === 2 ? Result2() : <></>}
        <div className="ButtonContainer">
          <Button
            disabled={showResult === 1}
            variant="contained"
            onClick={() => setShowResult(1)}
          >
            Pergunta 1
          </Button>
          <Button disabled={showResult === 2}
            variant="contained" onClick={() => setShowResult(2)}>Pergunta 2</Button>
        </div>
      <span>Todos os direitos reservados </span>
      </div>
    </PageContainer>
  )
}
