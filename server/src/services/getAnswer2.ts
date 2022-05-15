import { app } from "../configs/app"
import { Answers } from "../models/answer"

export function getAnswer2() {
  app.get("/answer/2", async (req, res) => {
    try {
      const rawData = await Answers.findAll({ attributes: ["answer2"] })

      const data = rawData.map((i: any) => {
        return i.answer2
      })

      let averages: any = {}
      data.forEach((item: any) => (averages[item] = (averages[item] || 0) + 1)) // calculates the average for each answer
      res.send(averages)
    } catch (error: any) {
      res.send(error.message)
    }
  })
}
