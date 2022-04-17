import express from 'express'
import bodyParser from 'body-parser';

import matchRouter from "./contorollers/match";

const createExpressInstance = () => {
    const app = express()

    app.use(bodyParser.json())

    app.use((_, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "*");
        next();
    });

    // Routes
    app.get("/", (request, response) => {
        response.send("dev api status - up");
    });

    app.use(matchRouter);

    return app
}

export default createExpressInstance