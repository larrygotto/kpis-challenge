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
exports.getAnswer1 = void 0;
const app_1 = require("../configs/app");
const answer_1 = require("../models/answer");
function getAnswer1() {
    app_1.app.get("/resposta1", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const rawData = yield answer_1.Answers.findAll({ attributes: ["answer1"] });
            const data = rawData.map((i) => {
                return i.answer1;
            });
            let averages = {};
            data.forEach((x) => (averages[x] = (averages[x] || 0) + 1)); // calculates the average for each answer
            res.send(averages);
        }
        catch (error) {
            res.send(error.message);
        }
    }));
}
exports.getAnswer1 = getAnswer1;
