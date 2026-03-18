import dotenv from "dotenv/config";

import express, { urlencoded } from "express";
import connectToDB from "./db/database.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/defaultError.js";

import registerRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js";

const app = express();

await connectToDB(process.env.URL);

app.use(urlencoded({extended: false}))
app.use(express.json());

app.use("/", registerRoute);
app.use("/", loginRoute);

app.use(notFound);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server has started in PORT ${process.env.PORT}!`);
});
