"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const html_pdf_1 = __importDefault(require("html-pdf"));
const html = fs_1.default.readFileSync('./test.html', 'utf8');
const options = { format: "Letter" };
html_pdf_1.default.create(html, options).toFile("./test.pdf", function (err, res) {
    if (err)
        return console.log(err);
    console.log(res);
});
