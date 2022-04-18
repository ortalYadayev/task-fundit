import express from 'express';
import { tempData } from "../utils/temp-data";

const matchRouter = express.Router();

matchRouter.get("/api/match", (request, response) => {
    const PAGE_SIZE = 5;

    const page = request.query.page || 0;

    console.log(request.query.page)

    console.log(page)

    const paginatedData = tempData.slice(
        Number(page) * PAGE_SIZE,
        (Number(page) + 1) * PAGE_SIZE
    );

    response.send({ data: paginatedData, length: tempData.length });
});

export default matchRouter;