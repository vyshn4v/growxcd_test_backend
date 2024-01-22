import { Request, Response, Router } from "express";
import * as userHandler from "../handlers/user";
const userRouter = Router();
userRouter.get("/products", userHandler.getProduct);
userRouter.post("/order", userHandler.orderProduct);
userRouter.get("/order", userHandler.getOrders);

export default userRouter;
