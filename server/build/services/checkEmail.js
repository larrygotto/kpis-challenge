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
exports.getUsedMail = exports.checkEmail = void 0;
const app_1 = require("../configs/app");
const answer_1 = require("../models/answer");
function checkEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const check = yield answer_1.Answers.findAll({ where: { email: email } }).then((res) => {
            return res.length > 0 ? true : false;
        });
        return check;
    });
}
exports.checkEmail = checkEmail;
function getUsedMail() {
    app_1.app.get('/email', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            if ((yield checkEmail(req.query.email)) === false) {
                res.send({ message: "Email ainda não cadastrado", check: false });
            }
            else {
                res.send({ message: "Email já cadastrado", check: true });
            }
        }
        catch (error) {
            res.send({ message: error.message, check: true });
        }
    }));
}
exports.getUsedMail = getUsedMail;
