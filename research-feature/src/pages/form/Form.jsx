import React, { useState } from 'react'

export default function Form() {

  const [answers, setAnswers] = useState({
    answer1: "",
    answer2: "",
  })

  const [question, setQuestion] = useState(1)

  return (
    <div>Form</div>
  )
}
