import express, { Express } from "express";
import { AddressInfo } from "net";
import { checkDBConnection} from "./sequelize";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()

export const app: Express = express()

export function startServer() {
  checkDBConnection()

  app.use(express.json());
  app.use(cors())
  
  const server = app.listen(process.env.PORT || 3000, () => {
      if (server) {
         const address = server.address() as AddressInfo;
         console.log(`Server is running in http://localhost:${address.port}`);
      } else {
         console.error(`Failure upon starting server.`);
      }
    })}