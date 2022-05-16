import axios from "axios"
import { BASE_URL } from "./BASE_URL"

export function sendForm(form) {
  axios
    .post(`${BASE_URL}/resposta`, form)
    .then((res) => {})
    .catch((err) => {})
}
