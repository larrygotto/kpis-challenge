import { Request, Response } from "express"
import { app } from "../configs/app"
import { Answers } from "../models/answer"
import { checkEmail } from "./checkEmail"

export function postAnswer() {
let errorCode = 500

  app.post("/resposta", async (req: Request, res: Response) => {
    try {
      const data = req.body
    if ((await checkEmail(data.email)) === false) { // only runs if the email used isn't on the database
      const newAnswer = Answers.build({
        email: data.email,
        answer1: data.answer1,
        answer2: data.answer2,
      })
      await newAnswer.save().then(() => res.send('Resposta cadastrada'))
    }
    else {
      errorCode = 400
      throw new Error('Email já utilizado')}
    } catch (error: any) {
      res.status(errorCode).send(error.message)
    }
  })
}