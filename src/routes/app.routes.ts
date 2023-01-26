import { Application } from "express";
import { ping } from "../controllers/app.controller";

const appRoutes = (app: Application) => {
    app.get('/ping', ping);
}

export default appRoutes;

