import { startServer } from "./configs/app";
import { Answers } from "./models/answer";
import { getUsedMail } from "./services/checkEmail";
import { getAnswer1 } from "./services/getAnswer1";
import { getAnswer2 } from "./services/getAnswer2";
import { postAnswer } from "./services/postAnswer";

async function runServer():Promise<void> {
  startServer()
  await Answers.sync().then(() => console.log('Model syncronized successfully')).catch((err) => console.error(err))
}

runServer()

// run services
getUsedMail()
postAnswer()
getAnswer1()
getAnswer2()