import express from 'express';
import { tempData } from "../utils/temp-data";

const matchRouter = express.Router();

matchRouter.get("/api/match", (request, response) => {
    const PAGE_SIZE = 5;

    const page = request.query.page || 1;

    const paginatedData = tempData.slice(
        (Number(page) - 1) * PAGE_SIZE,
        Number(page) * PAGE_SIZE
    );

    response.send(paginatedData);
});

export default matchRouter;