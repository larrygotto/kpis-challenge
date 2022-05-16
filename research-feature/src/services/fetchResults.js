import axios from "axios"
import { BASE_URL } from "./BASE_URL"

export function getAnswer1() {
  axios
    .get(`${BASE_URL}/answer/1`)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err.response))
}

export function getAnswer2() {
  axios
    .get(`${BASE_URL}/answer/2`)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err.response))
}

export function fetchResults() {
  try {
    let results = { answer1: getAnswer1(), answer2: getAnswer2() }
    return results
  } catch (error) {}
}
