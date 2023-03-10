import express from "express";
import "express-async-errors";

import { PORT } from "./config";
import expressLoader from "./loaders/express";

async function startServer() {
  const app = express();

  await expressLoader({ app });

  app.listen(PORT, () => {
    console.log(`Server listening at port: ${PORT}`);
  });
}

startServer();
