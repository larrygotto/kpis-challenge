import fs from "fs"
import pdf from "html-pdf"

const html = fs.readFileSync('./test.html', 'utf8');

const options: any = { format: "Letter" }

pdf.create(html, options).toFile("./test.pdf", function (err, res) {
  if (err) return console.log(err)
  console.log(res)
})
