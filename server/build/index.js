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
const app_1 = require("./configs/app");
const answer_1 = require("./models/answer");
const checkEmail_1 = require("./services/checkEmail");
const getAnswer1_1 = require("./services/getAnswer1");
const getAnswer2_1 = require("./services/getAnswer2");
const postAnswer_1 = require("./services/postAnswer");
function runServer() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, app_1.startServer)();
        yield answer_1.Answers.sync().then(() => console.log('Model syncronized successfully')).catch((err) => console.error(err));
    });
}
runServer();
// run services
(0, checkEmail_1.getUsedMail)();
(0, postAnswer_1.postAnswer)();
(0, getAnswer1_1.getAnswer1)();
(0, getAnswer2_1.getAnswer2)();
