import express, { Application, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import healthRoute from "../routes/health.route";
import mainRoute from "../routes/main.route";

const xss = require("xss-clean");


export default async ({ app }: { app: Application }) => {
  app.use(helmet());
  app.use(cors());
  app.use(xss());
  app.use(express.json());

  // Router
  app.use("/api", healthRoute);
  app.use("/api", mainRoute);

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send("Route does not exist");
    next();
  })

  return app;
}
