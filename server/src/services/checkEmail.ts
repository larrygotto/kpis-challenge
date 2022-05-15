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
    try {
    if (await checkEmail(req.query.email as string) === false){
      res.send({message: "Email ainda não cadastrado", check: false})
    } else {
      res.send({message: "Email já cadastrado", check: true})}
    } catch (error: any) {
      res.send({message: error.message, check: true})
    }
  })
}