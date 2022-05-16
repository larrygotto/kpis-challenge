import axios from "axios"
import React, { useEffect, useState } from "react"
import Loading from "../../assets/loading/Loading"
import Graphs from "../../components/Graphs"
import { BASE_URL } from "../../services/BASE_URL"

export default function Results() {
  const [answer1, setAnswer1] = useState()
  const [answer2, setAnswer2] = useState()

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

  return (
    <div style={{ height: "100vh" }}>
      {chartData1 ? <Graphs data={chartData1} /> : <Loading />}
      {chartData2 ? <Graphs data={chartData2} /> : <Loading />}
    </div>
  )
}
