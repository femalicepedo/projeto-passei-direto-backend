import express from "express";
import routes from "./routes";
import cors from "cors";
import { resolve } from "path";

class App {
  constructor() {
    this.server = express();

    this.public();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  public() {
    this.server.use(express.static(resolve(__dirname, "app", "public")));
  }
}

export default new App().server;
