import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import userRouter from "./src/routes/user";
import { NODE_SERVER_PORT } from "./src/config/Variables";
import AuthRouter from "./src/routes/Auth";
import AdminRouter from "./src/routes/admin";
import { validateToken } from "./src/middlewares/TokenValidation";
import cors from "cors"
//For env File
dotenv.config();

const app: Application = express();
const port: string = NODE_SERVER_PORT || "3000";
app.use(cors())
app.use(express.json());
app.use("/auth", AuthRouter);
app.use("/user", userRouter);
app.use("/admin", validateToken, AdminRouter);
app.use("/", (req: Request, res: Response) => {
  res.send("Welcome to point of sale application");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
