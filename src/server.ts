import { Server } from "@overnightjs/core";
import "./util/module-alias";
import express, { Application } from "express";
import { ForecastController } from "./controllers/forecast";

export class SetupServer extends Server {
  constructor(private port = 3003) {
    super();
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private setupControllers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  public getApp(): Application {
    return this.app;
  }
}
