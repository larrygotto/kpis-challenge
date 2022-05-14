import express from "express";
import { checkDBConnection} from "./sequelize";

const port = 3000

export const app = express()

export function startServer() {
  checkDBConnection()

  app.listen(port, () => {
    console.log(`App running on port ${port}`)
  })
}