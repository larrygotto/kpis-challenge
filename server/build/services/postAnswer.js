"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAnswer = void 0;
const app_1 = require("../configs/app");
const answer_1 = require("../models/answer");
const checkEmail_1 = require("./checkEmail");
function postAnswer() {
    let errorCode = 500;
    app_1.app.post("/resposta", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            if ((yield (0, checkEmail_1.checkEmail)(data.email)) === false) { // only runs if the email used isn't on the database
                const newAnswer = answer_1.Answers.build({
                    email: data.email,
                    answer1: data.answer1,
                    answer2: data.answer2,
                });
                yield newAnswer.save().then(() => res.send('Resposta cadastrada'));
            }
            else {
                errorCode = 400;
                throw new Error('Email já utilizado');
            }
        }
        catch (error) {
            res.status(errorCode).send(error.message);
        }
    }));
}
exports.postAnswer = postAnswer;
