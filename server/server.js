import dotenv from "dotenv/config";

import express, { urlencoded } from "express";
import connectToDB from "./db/database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/defaultError.js";
import passport from "./config/index.js";

import registerRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js";
import mainRoute from "./routes/mainRoute.js"
import logoutRoute from "./routes/logoutRoute.js"
import authRoute from "./routes/authRoutes.js"

const app = express();

await connectToDB(process.env.URL);

app.use(urlencoded({extended: false}))
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,
}));

app.use(cookieParser());

app.use(passport.initialize());

app.use("/", registerRoute);
app.use("/", loginRoute);
app.use("/", logoutRoute);
app.use("/", mainRoute);

app.use("/api/auth/", authRoute);

app.use(notFound);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server has started in PORT ${process.env.PORT}!`);
});
