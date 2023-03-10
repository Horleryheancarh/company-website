import express, { Express, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";

import healthRoute from "../routes/health.route";
import mainRoute from "../routes/main.route";

import swaggerDocs from "../utils/swagger";

const xss = require("xss-clean");


export default async ({ app }: { app: Express }) => {
  app.use(helmet());
  app.use(cors());
  app.use(xss());
  app.use(express.json());

  swaggerDocs(app);
  
  // Router
  app.use("/api", healthRoute);
  app.use("/api", mainRoute);

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send("Route does not exist");
    next();
  })

  return app;
}
