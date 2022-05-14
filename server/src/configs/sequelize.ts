import { Sequelize } from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(`${process.env.DATABASE_URL}`)

export const checkDBConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log("Database connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
}