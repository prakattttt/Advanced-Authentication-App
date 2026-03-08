import dotenv from "dotenv/config";

import express from "express";
import connectToDB from "./db/database.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/defaultError.js";

const app = express();

await connectToDB(process.env.URL);

app.get("/", (req, res) => {
  res.json({ message: "Demo server!" });
});

app.use(notFound);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server has started in PORT ${process.env.PORT}!`);
});
