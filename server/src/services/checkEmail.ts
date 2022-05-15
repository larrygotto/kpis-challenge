import { app } from "../configs/app";
import { Answers } from "../models/answer";

export async function checkEmail(email: string):Promise<boolean> {
    const check = await Answers.findAll({where: {email: email}}).then((res: any) => {
      return res.length > 0 ? true : false
    })
    return check
}

export function getUsedMail(): void {
  app.get('/email', async (req, res) => {
    let errorCode = 500
    try {
    if (await checkEmail(req.query.email as string) === false){
      res.send({message: "Email ainda não cadastrado", check: false})
    } else {
      errorCode = 400
      throw new Error('Email já cadastrado')}
    } catch (error: any) {
      res.status(errorCode).send({message: error.message, check: true})
    }
  })
}