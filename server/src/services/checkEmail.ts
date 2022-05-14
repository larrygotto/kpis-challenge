import { Request, Response } from "express";
import { app } from "../configs/app";
import { Answers } from "../models/answer";

export async function checkEmail(email: string):Promise<boolean> {
    const check = await Answers.findAll({where: {email: email}}).then((res) => {
      return res.length > 0 ? true : false
    })
    return check
}