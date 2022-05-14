import { startServer } from "./configs/app";
import { Answers } from "./models/answer";
import { postAnswer } from "./services/postAnswer";

async function runServer():Promise<void> {
  startServer()
  await Answers.sync().then(() => console.log('Model syncronized successfully')).catch((err) => console.error(err))
}

runServer()

// services
postAnswer()