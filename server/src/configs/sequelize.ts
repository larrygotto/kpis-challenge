import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

// export const sequelize = new Sequelize(`${process.env.DATABASE_URL}`)

export const sequelize = new Sequelize({
  database: "d8r01029jqa7u5",
  username: "zhmawrzwsxdlso",
  password: "970e07b3099abd263fcfaede8cab0a6d341df2c717f923f0eaf406784c57fbcc",
  host: "ec2-34-236-94-53.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
})

export const checkDBConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log("Database connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
}
