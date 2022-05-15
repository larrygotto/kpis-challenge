import express, { Express } from "express";
import { AddressInfo } from "net";
import { checkDBConnection} from "./sequelize";
import cors from "cors";

const port = 3000

export const app: Express = express()

export function startServer() {
  checkDBConnection()

  app.use(express.json());
  app.use(cors())
  
  const server = app.listen(port || 3000, () => {
      if (server) {
         const address = server.address() as AddressInfo;
         console.log(`Server is running in http://localhost:${address.port}`);
      } else {
         console.error(`Failure upon starting server.`);
      }
    })}